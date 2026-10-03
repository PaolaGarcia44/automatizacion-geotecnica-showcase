# AutoGeo Showcase

## Resumen del proyecto

AutoGeo es una plataforma de automatizacion documental geotecnica que organiza datos de proyectos, valida solicitudes y coordina un flujo de procesamiento entre una interfaz web y servicios backend.

Este showcase presenta el valor tecnico y profesional del proyecto mediante una demo independiente, documentacion de arquitectura y ejemplos ficticios. No es una copia ejecutable del sistema privado.

> El repositorio original permanece separado y privado. Esta demostracion no incluye plantillas, datos reales, credenciales, historial Git ni la implementacion completa del sistema.

## Problema

La preparacion de documentos geotecnicos suele requerir repetir datos entre formularios, hojas de calculo y archivos de soporte. Ese proceso puede producir trabajo manual innecesario, inconsistencias y poca trazabilidad sobre los documentos generados.

## Objetivo

Diseñar un flujo digital que permita:

- Recibir informacion estructurada de un proyecto.
- Validar los datos antes de procesarlos.
- Organizar la informacion tecnica y los archivos complementarios.
- Coordinar la generacion de documentos mediante una API.
- Entregar resultados descargables y faciles de rastrear.

## Funcionalidades principales

- Formulario para datos generales y tecnicos.
- Validacion de campos y archivos antes del envio.
- Gestion de perforaciones y capas de suelo.
- Carga controlada de imagenes y soportes.
- Endpoint de generacion documental.
- Historial de proyectos y estados de procesamiento.
- Interfaz preparada para futuras integraciones de autenticacion y asistencia con IA.

Estas funcionalidades muestran el alcance tecnico de la solucion: captura estructurada, validacion, coordinacion entre capas y seguimiento del resultado.

## Principales desafios tecnicos

- Convertir un flujo documental repetitivo en una experiencia estructurada y verificable.
- Mantener consistencia entre los datos introducidos en el frontend y el contrato recibido por la API.
- Gestionar formularios con campos tecnicos, perforaciones, capas de suelo y archivos complementarios.
- Separar la coordinacion de solicitudes, la validacion y el procesamiento documental.
- Trabajar con copias de salida para conservar los documentos base del sistema privado.
- Preparar una arquitectura extensible sin mezclar integraciones futuras con el flujo principal.

## Solucion propuesta

AutoGeo propone una experiencia web que captura la informacion del proyecto, valida los datos antes de enviarlos y coordina una solicitud con servicios backend especializados. El flujo se divide en responsabilidades claras: interfaz, contrato de datos, validacion, procesamiento, registro del resultado e historial.

La demo incluida en este showcase representa ese flujo con datos ficticios y una respuesta simulada. No se conecta al backend privado ni reproduce sus reglas de generacion.

## Mi aporte

De acuerdo con el analisis del proyecto original, mi aporte se refleja en las siguientes areas verificables:

- Diseño y construcción de la experiencia frontend para generar automatizaciones, consultar historial y presentar una interfaz de asistencia.
- Diseño de formularios con validación, autocompletado de ubicaciones, gestión de perforaciones, capas de suelo y archivos complementarios.
- Preparación de la comunicación entre el frontend y una API FastAPI mediante un servicio de documentos.
- Organización del backend en endpoints, modelos de validación, servicios de documentos y configuración centralizada.
- Desarrollo del flujo backend documentado para recibir solicitudes, validar categorías, coordinar el procesamiento y devolver referencias de resultados.
- Diseño de un flujo que conserva las plantillas base y trabaja sobre copias de salida.
- Preparación de puntos de integración para autenticación, almacenamiento y asistencia con IA.

Estas responsabilidades describen superficies técnicas respaldadas por la estructura y documentación analizadas. No se atribuyen resultados de negocio ni se publica la implementación privada.

## Arquitectura

La aplicación separa la experiencia de usuario, la validación de solicitudes y el procesamiento documental:

1. El usuario completa un formulario.
2. El frontend valida los datos y prepara una solicitud.
3. La API recibe y valida el contrato.
4. Un servicio de procesamiento coordina la generacion.
5. El sistema registra el resultado y entrega una referencia de descarga.

Consulta [docs/architecture.md](docs/architecture.md) para el diagrama general y los límites de esta demostración.

## Flujo

El flujo completo está documentado en [docs/workflow.md](docs/workflow.md) con datos ficticios. Ningún ejemplo utiliza nombres de clientes, ubicaciones reales, proyectos reales o archivos propietarios.

1. Captura de información del proyecto.
2. Validación de campos, perforaciones y archivos.
3. Preparación del contrato de solicitud.
4. Validación del contrato en la API.
5. Coordinación del procesamiento documental.
6. Registro de estado y referencia de resultado.

## Tecnologías

- Next.js y React para la interfaz web.
- TypeScript para tipos y contratos del frontend.
- Tailwind CSS y componentes reutilizables para la interfaz.
- FastAPI y Uvicorn para la API.
- Pydantic para validación de datos.
- Python para servicios de procesamiento.
- openpyxl y python-docx como tecnologías utilizadas en el sistema privado de documentos.
- Firebase como integración preparada en el proyecto original, no incluida en este showcase.

## Demo visual

La demo independiente está disponible en [Ver demo](demo/index.html). Puede abrirse directamente en el navegador y no requiere instalación, backend ni conexión con el proyecto privado.

Incluye:

- Panel de resumen con datos ficticios.
- Vista de solicitud de generación.
- Estado simulado de validación y procesamiento.
- Historial reducido de demostración.
- Datos visibles: `Proyecto Demo 01`, `Cliente Ficticio`, `Zona de Prueba` y `SONDEO-DEMO-01`.

La demo utiliza únicamente HTML, CSS y JavaScript redactados para este showcase. No reutiliza componentes, estilos, contratos internos ni lógica del repositorio privado.

## Fragmentos técnicos

Los fragmentos incluidos son pequenos ejemplos redactados para demostrar criterios de validacion y contratos de datos:

- [snippets/request-example.json](snippets/request-example.json)
- [snippets/validation-example.py](snippets/validation-example.py)

No son copias de la implementacion privada ni permiten reconstruir el generador documental.

## Valor profesional

AutoGeo demuestra capacidades aplicadas en:

- Diseño de flujos de negocio con frontend y backend separados.
- Modelado y validacion de datos tecnicos.
- Integracion de servicios mediante contratos HTTP.
- Organizacion de codigo por responsabilidades.
- Automatizacion de procesos repetitivos con preservacion de documentos base.
- Preparacion de una arquitectura extensible para nuevas integraciones.

## Privacidad y propiedad intelectual

El repositorio original permanece privado. Este showcase excluye deliberadamente:

- Codigo fuente completo del frontend y backend.
- Plantillas Excel, Word y PDF.
- Datos de clientes, proyectos y ubicaciones.
- Municipios o ejemplos que puedan revelar informacion interna.
- Variables de entorno, credenciales, API keys y tokens.
- Configuracion privada de Firebase.
- Codigo Electron de produccion.
- Scripts con rutas locales.
- Algoritmos completos de generacion documental.
- Historial Git del proyecto original.

Consulta [SECURITY.md](SECURITY.md) para los criterios de revisión antes de cualquier publicación.

## Estado

Este repositorio es una pieza documental de portafolio. No pretende ser una distribucion funcional del sistema privado ni un reemplazo para su entorno de produccion.

