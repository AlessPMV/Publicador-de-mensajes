/**
 * Publicador de mensajes
 * Miniaplicación que valida datos, envía una publicación a una API REST
 * mediante Fetch (POST) y actualiza el DOM con la respuesta asíncrona.
 */

// ---------------------------------------------------------------
// 1. Selección y acceso al DOM (referencias reutilizadas)
// ---------------------------------------------------------------
const formulario = document.querySelector('#formulario');
const campoTitulo = document.querySelector('#titulo');
const campoContenido = document.querySelector('#contenido');
const botonPublicar = document.querySelector('#publicar');
const areaMensaje = document.querySelector('#mensaje');
const areaResultado = document.querySelector('#resultado');

// Endpoint de la API de prueba
const URL_API = 'https://jsonplaceholder.typicode.com/posts';

// Bandera que previene envíos repetidos mientras hay una petición en curso
let envioEnCurso = false;

// ---------------------------------------------------------------
// 2. Utilidades de interfaz (siempre con textContent: seguro frente a inyección)
// ---------------------------------------------------------------
function mostrarMensaje(texto, tipo) {
  areaMensaje.textContent = texto;
  // Se reemplazan todas las clases de estado para evitar mezclas
  areaMensaje.classList.remove('cargando', 'exito', 'error');
  if (tipo) {
    areaMensaje.classList.add(tipo);
  }
}

function limpiarMensaje() {
  areaMensaje.textContent = '';
  areaMensaje.classList.remove('cargando', 'exito', 'error');
}

function mostrarResultado(publicacion) {
  // Se construye el contenido con nodos de texto: nunca innerHTML con datos externos
  areaResultado.textContent = '';

  const titulo = document.createElement('h2');
  titulo.textContent = publicacion.title;

  const contenido = document.createElement('p');
  contenido.textContent = publicacion.body;

  const id = document.createElement('p');
  id.className = 'id';
  id.textContent = `ID devuelto por la API: ${publicacion.id}`;

  const encabezado = document.createElement('p');
  encabezado.className = 'id';
  encabezado.textContent = 'Respuesta de la API (201 Created):';

  areaResultado.append(encabezado, titulo, contenido, id);
  areaResultado.hidden = false;
}

function ocultarResultado() {
  areaResultado.textContent = '';
  areaResultado.hidden = true;
}

function establecerCargando(activo) {
  botonPublicar.disabled = activo;
  botonPublicar.textContent = activo ? 'Publicando…' : 'Publicar';
  botonPublicar.setAttribute('aria-busy', String(activo));
}

// ---------------------------------------------------------------
// 3. Validación de los datos de entrada
// ---------------------------------------------------------------
function validarCampos(titulo, contenido) {
  if (titulo === '') {
    return 'El título no puede estar vacío.';
  }
  if (contenido === '') {
    return 'El contenido no puede estar vacío.';
  }
  return null; // datos válidos
}

// ---------------------------------------------------------------
// 4. Función asíncrona: construye la petición, la envía y procesa la respuesta
// ---------------------------------------------------------------
async function publicarMensaje(titulo, contenido) {
  // Objeto de la publicación: se serializa con JSON.stringify() para el cuerpo
  const publicacion = {
    title: titulo,
    body: contenido,
    userId: 1,
  };

  // Configuración de la petición: método POST + Content-Type application/json
  const configuracion = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(publicacion),
  };

  const respuesta = await fetch(URL_API, configuracion);

  // Fetch NO rechaza la promesa ante errores HTTP (404, 500...):
  // hay que comprobar response.ok manualmente.
  if (!respuesta.ok) {
    throw new Error(`Error HTTP ${respuesta.status}: ${respuesta.statusText}`);
  }

  // response.json() devuelve una promesa con el cuerpo interpretado.
  // Si la respuesta no fuera JSON válido, lanzaría un error de procesamiento.
  return respuesta.json();
}

// ---------------------------------------------------------------
// 5. Manejo del evento de envío del formulario
// ---------------------------------------------------------------
formulario.addEventListener('submit', async (event) => {
  // Evita la recarga de la página al enviar el formulario
  event.preventDefault();

  // Protección contra envíos repetidos (el botón también queda deshabilitado)
  if (envioEnCurso) {
    return;
  }

  // Se leen los valores y se normalizan espacios con trim()
  const titulo = campoTitulo.value.trim();
  const contenido = campoContenido.value.trim();

  const errorValidacion = validarCampos(titulo, contenido);
  if (errorValidacion) {
    mostrarMensaje(errorValidacion, 'error');
    ocultarResultado();
    // No se realiza ninguna petición HTTP ante datos inválidos
    (titulo === '' ? campoTitulo : campoContenido).focus();
    return;
  }

  // Estado de carga: se informa al usuario y se deshabilita el botón
  envioEnCurso = true;
  establecerCargando(true);
  mostrarMensaje('Publicando el mensaje…', 'cargando');
  ocultarResultado();

  try {
    const datos = await publicarMensaje(titulo, contenido);

    mostrarMensaje('Publicación enviada correctamente.', 'exito');
    mostrarResultado(datos);

    // Los campos se limpian para permitir una nueva publicación
    formulario.reset();
  } catch (error) {
    // Se diferencian los tipos de fallo para dar un mensaje comprensible
    if (error instanceof TypeError) {
      // Fallo de conexión: la API no respondió o no hay red
      mostrarMensaje('No se pudo conectar con el servidor. Revisa tu conexión e inténtalo de nuevo.', 'error');
    } else if (error instanceof SyntaxError) {
      // La respuesta no contenía JSON válido
      mostrarMensaje('El servidor respondió, pero la respuesta no es JSON válido.', 'error');
    } else {
      // Error HTTP (response.ok === false) u otro fallo imprevisto
      mostrarMensaje(`No se pudo publicar: ${error.message}`, 'error');
    }
  } finally {
    // Siempre se restablece la interfaz, incluso si ocurrió un error
    envioEnCurso = false;
    establecerCargando(false);
  }
});
