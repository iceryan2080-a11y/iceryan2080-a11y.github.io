# Diseño: pestaña de reportes en nefila.app

## Contexto
El sitio es una app React (CRA con CRACO) desplegada en GitHub Pages. La navegación actual está en el componente `Header` y la landing es de una sola página. Se requiere una nueva pestaña de “Reportes” que muestre un listado y permita abrir reportes HTML existentes, manteniendo la estética actual.

## Objetivos
- Añadir una ruta `/reportes` con un listado de reportes.
- Mantener la estética y navegación consistente con el resto del sitio.
- Abrir cada reporte en la misma pestaña del navegador.
- Publicar el primer reporte en `https://nefila.app/reportes/ForenseQR_BDO_CTF.html`.

## No objetivos
- Crear backend, autenticación o CMS.
- Convertir los reportes a React/Markdown (se mantienen como HTML estático).

## Requisitos funcionales
- Nuevo enlace “Reportes” en el `Header`.
- Ruta `/reportes` con tarjetas que muestren **título, fecha y resumen**.
- Orden descendente por fecha (más recientes primero).
- Cada tarjeta enlaza al HTML estático correspondiente en `/reportes/<archivo>.html`.

## Arquitectura y componentes
- **Header**: agregar botón/enlace que navega a `/reportes`.
- **Reportes**: nuevo componente de página que renderiza el listado.
- **Router**: agregar `Route` para `/reportes` sin romper la landing actual.

## Modelo de datos (frontend)
Arreglo local en `Reportes`:
```
[
  {
    id: "FOR-2026-BDO-QR-001",
    titulo: "Recuperación de Código QR Dañado",
    fecha: "2026-05-14",
    resumen: "CTF BDO Panamá: reconstrucción forense de un QR dañado y recuperación del payload",
    archivo: "ForenseQR_BDO_CTF.html"
  }
]
```

## Ubicación de archivos
- Copiar el reporte a: `/frontend/public/reportes/ForenseQR_BDO_CTF.html`.
- URL pública: `https://nefila.app/reportes/ForenseQR_BDO_CTF.html`.

## Estilo y UX
- Usar tipografías y colores actuales (variables en `App.css`).
- Tarjetas con bordes sutiles y hover consistente con el tema oscuro.
- Títulos con jerarquía clara (`h1` para la página, `h2` para cada reporte).

## Manejo de errores
- Si no hay reportes, mostrar estado vacío con un mensaje breve.
- Si un HTML falta, el servidor devolverá 404 (comportamiento estándar de GitHub Pages).

## Validación
- Verificar que `/reportes` carga sin romper la landing.
- Verificar enlace a `/reportes/ForenseQR_BDO_CTF.html`.
- Confirmar orden por fecha y contenido visible (título/fecha/resumen).
