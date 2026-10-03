# Flujo de demostracion

Todos los valores de este documento son ficticios.

## Caso de ejemplo

- Proyecto: `Proyecto Demo 01`
- Cliente: `Cliente Ficticio`
- Ubicacion: `Zona de Prueba`
- Categoria: `Categoria Demo`
- Perforaciones: `3 registros sinteticos`
- Archivos: `imagen-demo-01.png`

## Secuencia

1. El usuario abre el formulario de generacion.
2. Ingresa los datos ficticios del proyecto.
3. El frontend valida campos obligatorios y tipos de archivo.
4. La solicitud se convierte en un contrato JSON.
5. La API valida nuevamente el contrato.
6. El servicio de procesamiento recibe la solicitud.
7. Se registra un identificador de demostracion.
8. La interfaz muestra el estado y una referencia de descarga simulada.

## Contrato de ejemplo

El archivo [../snippets/request-example.json](../snippets/request-example.json) muestra un contrato reducido. No representa el contrato privado completo.

## Que no se muestra

- Contenido de plantillas.
- Reglas de mapeo de celdas.
- Datos de laboratorio.
- Archivos de clientes.
- Algoritmos internos de generacion.
