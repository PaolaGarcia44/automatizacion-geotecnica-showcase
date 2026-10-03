# Revision de seguridad y privacidad

## Regla principal

Este repositorio es una demostracion publica. No debe contener informacion necesaria para ejecutar o reconstruir el sistema privado.

## Elementos excluidos

- Secretos, tokens y API keys.
- Archivos `.env` y configuraciones privadas.
- Credenciales de Firebase.
- Plantillas documentales.
- Datos reales de clientes, proyectos o ubicaciones.
- Salidas generadas.
- Codigo Electron y scripts con rutas locales.
- Historial Git del repositorio original.

## Datos usados en la demo

Los ejemplos usan nombres, ubicaciones, identificadores, profundidades y nombres de archivos ficticios. No se incluyen capturas porque no existe una captura previamente revisada y anonimizada para publicacion.

## Verificacion antes de publicar

Antes de crear un remoto se debe revisar:

1. `git status` y `git log` para confirmar que el proyecto no tiene historial heredado.
2. Busqueda de patrones como `API_KEY`, `SECRET`, `TOKEN`, `PASSWORD`, `.env`, rutas absolutas y nombres de clientes.
3. Ausencia de extensiones documentales propietarias.
4. Ausencia de datos reales en README, snippets, capturas y metadatos.
5. Revision manual final de todos los archivos.
