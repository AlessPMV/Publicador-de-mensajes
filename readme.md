# DESARROLLO DE UN PUBLICADOR DE MENSAJES CON JAVASCRIPT ASÍNCRONO, FETCH Y DOM
 
**INGENIERÍA WEB · TRABAJO PRÁCTICO**
 
Construcción de una miniaplicación web que valida datos, consume una API REST mediante HTTP POST y presenta dinámicamente los resultados.
 
| | |
|---|---|
| **Duración total** | 44 minutos |
| **Modalidad** | Trabajo colaborativo por equipos |
| **Puntaje máximo** | 60 puntos (escala de 0 a 20) |
| **Producto** | Miniaplicación web funcional y demostración técnica |
 
---
 
## 1. Presentación de la actividad
 
En este trabajo práctico, tu equipo desarrollará una miniaplicación web denominada **Publicador de mensajes**. La aplicación permitirá ingresar el título y el contenido de una publicación, validar los datos, enviarlos a una API REST mediante una petición HTTP POST, procesar la respuesta asíncrona y actualizar la interfaz utilizando JavaScript y el DOM.
 
El propósito no es solamente obtener una aplicación funcional, sino demostrar que comprendes el código implementado, el flujo de una petición HTTP y el tratamiento de los resultados y errores.
 
 **Propósito de aprendizaje**

 Desarrollar una miniaplicación web que consuma una API mediante Fetch, utilice programación asíncrona, valide los datos de entrada y actualice dinámicamente el DOM, incorporando mecanismos básicos de gestión de errores y pruebas funcionales.
 
---
 
## 2. Recursos y API de trabajo
 
Utiliza los siguientes recursos para implementar y probar tu miniaplicación.
 
| Recurso | Descripción |
|---|---|
| **HTML5** | Estructura del formulario, campos y contenedores de mensajes. |
| **CSS3** | Presentación visual y legibilidad de la interfaz. |
| **JavaScript** | Eventos, validaciones, operaciones asíncronas y actualización del DOM. |
| **API REST** | <https://jsonplaceholder.typicode.com/posts> |
| **Herramientas del navegador** | Consola y pestaña Network para revisar solicitudes, respuestas y errores. |
 
 ⚠️ **Importante sobre la API**

 JSONPlaceholder es una API de prueba. Devuelve una respuesta simulada al crear una publicación, pero no garantiza que los datos se almacenen permanentemente. No confundas recibir una respuesta satisfactoria con disponer de almacenamiento persistente.
 
---
 
## 3. Descripción del reto
 
### Publicador de mensajes
 
Construye una interfaz web que permita a un usuario redactar una publicación y enviarla al servidor de prueba. La aplicación debe proporcionar información clara durante el procesamiento, mostrar la respuesta recibida y gestionar los errores que puedan presentarse.
 
**La aplicación deberá implementar cinco funcionalidades principales:**
 
1. Capturar el título y el contenido de la publicación mediante un formulario HTML.
2. Validar los datos antes de realizar la petición HTTP.
3. Enviar los datos a la API mediante Fetch con el método POST y formato JSON.
4. Procesar la respuesta asíncrona y mostrar el resultado en el DOM.
5. Gestionar estados de carga, errores y prevención de envíos repetidos.
---
 
## 4. Instrucciones de desarrollo
 
### Paso 1. Construir el formulario
 
Crea una interfaz que contenga un campo de texto para el título, un área de texto para el contenido, un botón para publicar y un espacio donde presentar mensajes de validación y resultados.
 
**Verificación:** los campos permiten ingresar información y el botón se identifica claramente.
 
### Paso 2. Implementar las validaciones
 
Comprueba que el título y el contenido no estén vacíos ni contengan únicamente espacios. Si los datos son inválidos, muestra un mensaje en la interfaz y evita realizar la petición.
 
**Verificación:** el formulario no envía una solicitud cuando los campos son inválidos.
 
### Paso 3. Preparar la petición HTTP
 
Construye un objeto con los datos de la publicación y configura la solicitud a la API. Utiliza el método POST, el encabezado Content-Type con el valor application/json y un cuerpo serializado mediante JSON.stringify().
 
text
URL: https://jsonplaceholder.typicode.com/posts
Método: POST
Content-Type: application/json
Cuerpo: objeto JavaScript convertido a JSON
 
**Verificación:** la solicitud utiliza el método y el formato de datos especificados.
 
### Paso 4. Procesar la respuesta asíncrona
 
Utiliza async/await o promesas para procesar la respuesta. Comprueba response.ok antes de considerar satisfactoria la operación y utiliza response.json() para interpretar la respuesta.
 
**Verificación:** la interfaz muestra los datos relevantes devueltos por la API.
 
### Paso 5. Actualizar el DOM y gestionar errores
 
Muestra un indicador de carga mientras se procesa la solicitud. Deshabilita temporalmente el botón de publicación, presenta mensajes de éxito o error y restablece los controles al finalizar la operación, incluso si ocurre un error.
 
Utiliza textContent para presentar texto externo de forma segura.
 
**Verificación:** la interfaz refleja correctamente los estados de la operación y permite realizar nuevos intentos.
 
---
 
## 5. Requisitos técnicos obligatorios
 
La miniaplicación debe cumplir los siguientes requisitos:
 
1. Separar HTML, CSS y JavaScript en archivos independientes.
2. Utilizar addEventListener() para gestionar el envío del formulario.
3. Evitar la recarga de la página durante el envío mediante event.preventDefault().
4. Utilizar Fetch con el método POST y el encabezado Content-Type: application/json.
5. Serializar el objeto de publicación mediante JSON.stringify().
6. Procesar la respuesta con promesas o async/await.
7. Comprobar response.ok antes de tratar la respuesta HTTP como satisfactoria.
8. Utilizar response.json() para interpretar el cuerpo JSON cuando corresponda.
9. Validar los campos antes de enviar la petición.
10. Mostrar los mensajes y resultados mediante el DOM.
11. Controlar los errores de conexión, HTTP y procesamiento de la respuesta.
12. Deshabilitar el botón durante el envío y restablecer su estado al finalizar.
13. Utilizar mecanismos seguros para presentar los datos externos.
 **Consideración técnica**

 Fetch no rechaza automáticamente la promesa ante todos los errores HTTP. Una respuesta 404 o 500 debe identificarse mediante la comprobación del estado HTTP. Los errores de conexión y los errores al interpretar JSON requieren un tratamiento apropiado.
 
---
 
## 6. Organización del trabajo: 44 minutos
 
| Fase | Tiempo | Actividades | Resultado esperado |
|---|:---:|---|---|
| **1. Análisis** | 5 min | Analizar requisitos, entradas, API y eventos; distribuir responsabilidades. | Plan de trabajo definido. |
| **2. Interfaz** | 7 min | Construir el formulario, los controles y los contenedores de mensajes. | Interfaz operativa. |
| **3. Implementación** | 16 min | Programar eventos, validaciones, Fetch, procesamiento JSON y actualización del DOM. | Funcionalidad principal implementada. |
| **4. Pruebas** | 9 min | Probar campos vacíos, envío válido, respuesta y errores; revisar Network y consola. | Evidencia de pruebas. |
| **5. Demostración** | 7 min | Ejecutar el caso de uso y responder preguntas técnicas. | Funcionamiento y aprendizaje demostrados. |
| **TOTAL** | **44 min** | Desarrollo, pruebas y demostración de la miniaplicación. | |
 
---
 
## 7. Entregables
 
Al finalizar la actividad, cada equipo debe presentar:
 
1. **Código fuente:** archivos HTML, CSS y JavaScript organizados.
2. **Miniaplicación funcional:** ejecutable en un navegador web.
3. **Pruebas:** demostración de validación, publicación y presentación de la respuesta.
4. **Verificación técnica:** revisión de la petición y la respuesta en las herramientas de desarrollo del navegador.
5. **Explicación:** identificación de los fragmentos de código que implementan el evento, la petición HTTP, el procesamiento asíncrono y la actualización del DOM.
6. **URL del repositorio:** comparta el URL del repositorio mediante el formulario proporcionado por el docente.
 **Responsabilidad individual**

 Todos los integrantes deben conocer la solución completa y estar preparados para explicar el código. El docente podrá seleccionar a cualquier integrante para responder las preguntas de demostración.
 
---
 
## 8. Banco de 30 preguntas para la demostración
 
El banco de preguntas permite comprobar la comprensión conceptual, el dominio del código, la capacidad de análisis y la capacidad de proponer mejoras. El docente seleccionará preguntas para la demostración oral.
 
### A. HTML y manipulación del DOM
 
1. **¿Qué función cumple el formulario HTML en la miniaplicación y qué ventajas ofrece frente a utilizar únicamente botones y campos independientes?**
2. **¿Qué diferencia existe entre querySelector() y getElementById()?** ¿Cuál utilizaste y por qué?
3. **¿Cómo se obtiene el contenido ingresado por el usuario en los campos del título y del mensaje?**
4. **¿Qué función cumple addEventListener()?** ¿Qué evento utilizaste para detectar el envío del formulario?
5. **¿Por qué se recomienda utilizar textContent en lugar de insertar directamente los datos mediante innerHTML?**
6. **¿Cómo actualiza JavaScript el DOM para mostrar un mensaje de éxito o error sin recargar toda la página?**
### B. JavaScript asíncrono y promesas
 
7. **¿Qué significa que una operación sea asíncrona?** Identifica una operación asíncrona en tu aplicación.
8. **¿Qué es una promesa en JavaScript y qué relación tiene con la función fetch()?**
9. **¿Qué diferencia existe entre utilizar async/await y utilizar .then() y .catch()?**
10. **¿Qué función cumple la palabra clave async y qué tipo de valor devuelve esa función?**
11. **¿Qué función cumple await cuando se utiliza para esperar la respuesta de fetch()?**
12. **¿Qué ocurriría si se eliminara await delante de response.json()?**
### C. Fetch API y peticiones HTTP
 
13. **¿Qué es la Fetch API y para qué se utiliza en la miniaplicación?**
14. **¿Qué diferencia existe entre una petición HTTP GET y una petición POST?** ¿Por qué se utiliza POST en este ejercicio?
15. **¿Qué función cumple el encabezado Content-Type: application/json?**
16. **¿Por qué se utiliza JSON.stringify() en el cuerpo de la petición?** ¿Qué recibe y qué devuelve?
17. **¿Qué información contiene el objeto de configuración que se entrega como segundo argumento a fetch()?**
18. **¿Qué función cumple response.json()?** ¿En qué se diferencia de JSON.stringify()?
### D. Manejo de respuestas y errores
 
19. **¿Qué representa la propiedad response.ok y por qué debe comprobarse antes de considerar exitosa una petición?**
20. **¿Qué diferencia existe entre un error HTTP, como un estado 404, y un error de conexión?**
21. **¿Qué sucede si el servidor devuelve una respuesta HTTP no satisfactoria y el código no comprueba response.ok?**
22. **¿Para qué se utiliza try/catch cuando se trabaja con async/await?** ¿Qué errores puede ayudar a gestionar?
23. **¿Qué ocurriría si la respuesta del servidor no contuviera JSON válido y se ejecutara response.json()?**
24. **¿Cómo modificarías la aplicación para que muestre un mensaje comprensible cuando falle la conexión con el servidor?**
### E. Validación, interfaz y comportamiento
 
25. **¿Por qué es necesario validar el título y el contenido antes de enviar la petición?** ¿Cómo impedirías enviar campos vacíos o que solo contengan espacios?
26. **¿Por qué conviene deshabilitar temporalmente el botón mientras se procesa la petición?** ¿Cuándo debería habilitarse nuevamente?
27. **¿Cómo implementarías un indicador de carga y qué debería ocurrir si falla la operación?**
28. **¿Cómo evitarías que el navegador recargue la página al enviar el formulario?** Explica el propósito de event.preventDefault().
### F. Análisis, pruebas y mejoras
 
29. **¿Cómo comprobarías, mediante las herramientas de desarrollo del navegador, que la petición POST se ejecutó correctamente?** Indica qué revisarías en Network.
30. **Si el servidor devuelve una respuesta satisfactoria con un identificador, pero no encuentras el mensaje al volver a consultar la API, ¿cómo explicarías ese comportamiento en JSONPlaceholder?** ¿Qué cambiarías para implementar almacenamiento persistente real?
 **Orientación para la demostración oral**

 El docente seleccionará preguntas de diferentes bloques y podrá pedir al estudiante que identifique en el código las instrucciones relacionadas con su respuesta. Se valorará la precisión técnica, la explicación con palabras propias y la capacidad de analizar el comportamiento de la aplicación.
 
---
 
## 9. Rúbrica de evaluación detallada
 
La evaluación comprende 20 criterios. Cada criterio se valora en una escala de 0 a 3 puntos, de acuerdo con la evidencia presentada. El puntaje máximo es de 60 puntos.
 
 **Niveles de desempeño**

 **3 — Sobresaliente:** cumple todos los requisitos del criterio con excelencia y aporta mejoras pertinentes.

 **2 — Suficiente:** cumple los requisitos mínimos sin errores críticos.

 **1 — En desarrollo:** presenta fallos, omisiones o implementación incompleta.

 **0 — Insatisfactorio:** no cumple el criterio, no aporta evidencia o presenta errores graves.
 
| Criterio / Indicador | Sobresaliente (3) | Suficiente (2) | En desarrollo (1) | Insatisfactorio (0) |
|---|---|---|---|---|
| **1. Estructura HTML del formulario:** campos para título y contenido, botón de publicación y áreas de mensajes y resultados. | Implementa todos los elementos, con etiquetas semánticas, asociación correcta de etiquetas y campos, y mejoras de accesibilidad y usabilidad. | Implementa todos los elementos requeridos y permite ingresar y enviar datos sin errores críticos. | Presenta campos incompletos, etiquetas inadecuadas o dificultades parciales de interacción. | No implementa el formulario funcional o la estructura impide utilizarlo. |
| **2. Separación de responsabilidades:** organiza HTML, CSS y JavaScript en archivos independientes y mantenibles. | Mantiene los tres archivos separados, con responsabilidades claras, nombres descriptivos y código organizado. | Mantiene HTML, CSS y JavaScript separados y la aplicación funciona correctamente. | La separación es parcial o existe lógica mezclada con la presentación. | No separa las responsabilidades o la organización impide identificar la lógica requerida. |
| **3. Selección y acceso al DOM:** identifica campos, formulario, botón y áreas de mensajes mediante selectores apropiados. | Selecciona correctamente todos los elementos, reutiliza referencias y evita consultas innecesarias o errores de selección. | Obtiene correctamente los elementos necesarios para ejecutar las funcionalidades. | Presenta selectores incorrectos o referencias inconsistentes que afectan algunas funcionalidades. | No consigue acceder a los elementos necesarios para implementar la aplicación. |
| **4. Gestión de eventos:** utiliza addEventListener() para capturar el envío y preventDefault() para evitar la recarga. | Gestiona correctamente el evento, evita recargas y controla eventos duplicados o interacciones no deseadas. | Gestiona el envío correctamente y evita la recarga de la página. | El evento funciona parcialmente, provoca recargas ocasionales o presenta comportamientos inconsistentes. | No gestiona correctamente el evento o la recarga impide completar la operación. |
| **5. Validación de datos:** comprueba que título y contenido no estén vacíos ni contengan únicamente espacios. | Valida ambos campos con trim() o técnica equivalente, comunica errores claramente y evita todas las solicitudes inválidas probadas. | Impide el envío de campos vacíos y muestra mensajes comprensibles. | Valida solo algunos casos o permite enviar datos que contienen únicamente espacios. | No implementa validaciones o permite enviar formularios vacíos sin advertencia. |
| **6. Construcción de la petición HTTP:** utiliza URL, método POST, encabezado Content-Type y cuerpo JSON correctos. | Construye correctamente la petición, incluye los datos esperados y mantiene una configuración coherente, sin parámetros innecesarios. | Configura correctamente URL, método, encabezado y cuerpo de la petición. | La petición presenta errores de configuración o transmite datos incompletos. | No implementa la petición POST o su configuración impide enviar los datos. |
| **7. Serialización de datos:** utiliza JSON.stringify() para convertir el objeto de publicación al formato JSON. | Serializa todos los campos correctamente, construye un objeto claro y evita propiedades innecesarias. | Convierte los datos a JSON y los envía en el cuerpo de la petición. | La serialización es incompleta o presenta errores que afectan el contenido enviado. | No serializa los datos o envía un cuerpo incompatible con el formato requerido. |
| **8. Programación asíncrona:** utiliza promesas o async/await para procesar la respuesta en el orden adecuado. | Implementa el flujo asíncrono correctamente, controla resultados y mantiene un tratamiento coherente de errores. | Utiliza correctamente promesas o async/await y procesa la respuesta en el orden correspondiente. | Presenta errores en el encadenamiento de promesas, uso de await o secuencia de procesamiento. | No gestiona correctamente la asincronía o no consigue procesar la respuesta. |
| **9. Verificación de la respuesta HTTP:** comprueba response.ok y distingue respuestas satisfactorias y no satisfactorias. | Verifica el estado HTTP, trata respuestas no satisfactorias y presenta mensajes diferenciados según el resultado. | Comprueba response.ok antes de considerar satisfactoria la operación y gestiona los errores HTTP. | Comprueba el estado parcialmente o presenta respuestas no satisfactorias como exitosas en algunos casos. | No verifica el estado HTTP y considera exitosa cualquier respuesta recibida. |
| **10. Procesamiento de respuesta JSON:** utiliza response.json() y extrae los datos devueltos por la API. | Procesa correctamente la respuesta, utiliza los campos pertinentes y contempla errores de interpretación del JSON. | Procesa la respuesta JSON y obtiene los datos necesarios para mostrar el resultado. | Procesa parcialmente la respuesta o presenta errores al acceder a sus propiedades. | No procesa la respuesta o no consigue obtener los datos devueltos por la API. |
| **11. Actualización dinámica del DOM:** presenta el resultado y los mensajes de estado sin recargar la página. | Actualiza correctamente la interfaz, presenta los datos relevantes y mantiene los mensajes coherentes con cada estado. | Muestra el resultado y los mensajes principales en el DOM sin recargar la página. | Actualiza parcialmente la interfaz o presenta mensajes incompletos o inconsistentes. | No muestra el resultado o depende de una recarga para presentar los datos. |
| **12. Seguridad al presentar datos:** utiliza textContent u otro mecanismo seguro para mostrar texto externo. | Presenta los datos mediante mecanismos seguros en todos los puntos pertinentes y evita la inserción insegura de contenido externo. | Utiliza textContent o una técnica equivalente para presentar de forma segura los datos recibidos. | Mantiene algún punto de inserción de datos externos potencialmente inseguro. | Inserta datos externos directamente como HTML sin protección, generando un riesgo significativo de inyección. |
| **13. Indicador de carga y control de envíos:** informa del procesamiento, deshabilita temporalmente el botón y restablece su estado. | Implementa el indicador, evita envíos repetidos y restablece correctamente la interfaz tras el éxito o el error. | Muestra el estado de carga, deshabilita el botón durante la petición y lo habilita nuevamente al finalizar. | Implementa solo algunos mecanismos o restablece incorrectamente el estado del botón. | No implementa indicadores ni controles adecuados o estos impiden utilizar la aplicación. |
| **14. Gestión de errores:** contempla errores de conexión, respuestas HTTP no satisfactorias y fallos de procesamiento JSON. | Maneja errores pertinentes con try/catch o mecanismos equivalentes, diferencia causas cuando es posible y permite reintentar. | Gestiona los errores principales de conexión y HTTP y muestra mensajes comprensibles. | Gestiona algunos errores, pero deja escenarios relevantes sin tratar o presenta mensajes poco claros. | No gestiona errores y la aplicación falla sin informar o presenta resultados incorrectos. |
| **15. Pruebas funcionales y verificación técnica:** ejecuta pruebas de campos vacíos, publicación válida y revisión de Network y consola. | Demuestra todos los escenarios y verifica método, URL, encabezados, cuerpo y respuesta; corrige los errores detectados. | Ejecuta los escenarios principales y verifica que la petición y la respuesta funcionan correctamente. | Ejecuta pruebas parciales o no verifica adecuadamente la petición y la respuesta. | No demuestra las pruebas requeridas o la funcionalidad no puede verificarse. |
| **16. Demostración funcional:** ejecuta el caso de uso completo dentro de los 7 minutos previstos. | Demuestra validación, envío, respuesta y gestión de errores en una secuencia clara, dentro del tiempo y sin fallos críticos. | Demuestra la publicación válida y las funcionalidades principales dentro del tiempo previsto. | La demostración es incompleta, supera el tiempo o presenta fallos que limitan la verificación. | No consigue demostrar el caso de uso o la funcionalidad principal no se ejecuta. |
| **17. Dominio individual del código:** responde preguntas, identifica instrucciones relevantes y explica decisiones de implementación. | Responde con precisión, identifica instrucciones pertinentes y analiza las consecuencias de posibles modificaciones. | Explica correctamente el flujo principal y responde satisfactoriamente las preguntas fundamentales. | Responde parcialmente, confunde conceptos o necesita ayuda para relacionar la explicación con el código. | No logra explicar el código ni identificar las instrucciones principales. |
| **18. Organización y colaboración:** distribuye tareas, integra componentes y evidencia la participación de los integrantes. | Existe coordinación verificable, integración coherente y participación activa de todos; los integrantes conocen la solución completa. | El equipo presenta una solución integrada y evidencia la participación de sus integrantes. | La integración presenta inconsistencias o la participación de algunos integrantes es limitada. | No existe integración funcional o no se evidencia colaboración efectiva. |
| **19. Calidad y mantenibilidad:** utiliza nombres descriptivos, indentación consistente, funciones claras y evita duplicaciones innecesarias. | El código es legible, modular y consistente; las funciones tienen responsabilidades claras y se evitan duplicaciones relevantes. | El código es legible, está organizado y permite identificar las operaciones principales. | Presenta problemas de legibilidad, duplicación o funciones con demasiadas responsabilidades. | El código es desorganizado o difícil de interpretar y mantener. |
| **20. Comprensión de la persistencia:** explica el comportamiento de JSONPlaceholder y distingue una respuesta simulada del almacenamiento persistente. | Explica la creación simulada, reconoce sus límites y propone una arquitectura adecuada para almacenar publicaciones permanentemente. | Reconoce que JSONPlaceholder no garantiza almacenamiento permanente y explica esa limitación. | Identifica parcialmente la limitación, pero confunde la respuesta recibida con el almacenamiento permanente. | Afirma que los datos se almacenan permanentemente sin evidencia o no comprende el comportamiento de la API. |
 
**PUNTAJE MÁXIMO: 20 CRITERIOS × 3 PUNTOS = 60 PUNTOS**
 
### Cálculo de la calificación
 
La rúbrica se registra inicialmente sobre 60 puntos. Para convertir el resultado a la escala vigesimal, aplica la siguiente fórmula:
 
text
Nota sobre 20 = Puntaje obtenido / 3 
**Ejemplo:** si un equipo obtiene 48 puntos de 60, su nota es 48 / 3 = 16 sobre 20.
 
---
 
## 10. Orientaciones para la evaluación
 
La evaluación considera tanto el producto desarrollado por el equipo como la comprensión individual de sus integrantes.
 
### Evidencias de aprendizaje
 
| Aspecto | Evidencia esperada |
|---|---|
| **Comprensión conceptual** | Explica los conceptos con sus propias palabras y los relaciona con el código desarrollado. |
| **Dominio del código** | Identifica las instrucciones que implementan la petición, la validación y la actualización del DOM. |
| **Capacidad de análisis** | Anticipa las consecuencias de modificar o eliminar una instrucción. |
| **Capacidad de mejora** | Propone cambios técnicamente coherentes para mejorar la validación, el tratamiento de errores o la experiencia del usuario. |
 
 **Aplicación de la evaluación**

 El docente seleccionará tres preguntas para cada equipo: una conceptual sobre JavaScript asíncrono, una de aplicación sobre Fetch, HTTP o DOM y una de análisis sobre errores, validación o pruebas. Se recomienda alternar los integrantes que responden para verificar el aprendizaje individual.
 
---
 
## 11. Recomendaciones finales
 
1. Prioriza la funcionalidad esencial antes de mejorar los estilos visuales.
2. No escribas manualmente una respuesta que debe obtenerse de la API.
3. Revisa la consola y la pestaña Network cuando la petición no funcione.
4. Comprueba el estado HTTP y diferencia los errores de conexión de las respuestas HTTP no satisfactorias.
5. Asegúrate de que el botón se restablezca incluso si ocurre un error durante la petición.
6. No dependas exclusivamente de herramientas de inteligencia artificial para generar código que no puedas explicar.
7. Distribuye las tareas, pero garantiza que todos los integrantes conozcan el flujo completo de la aplicación.
8. Respeta los 44 minutos de trabajo y reserva los últimos 7 minutos para la demostración.
---
 
## 12. Criterio de éxito
 
El equipo habrá alcanzado el propósito del trabajo práctico cuando presente una miniaplicación funcional que valide los datos, ejecute correctamente una petición HTTP POST, procese la respuesta asíncrona, actualice el DOM y gestione los errores de forma comprensible.
 
Además, cada integrante deberá explicar las decisiones de implementación y demostrar que comprende el funcionamiento del código.
 
**¡Éxitos en el desarrollo y la demostración de la miniaplicación!**
 
---
 