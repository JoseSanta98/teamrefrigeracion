# Team Refrigeración

Sitio corporativo de una sola página para Team Refrigeración (Chihuahua, desde 1998):
`index.html` con su CSS y JavaScript incluidos, más las imágenes en `public/images/`.

## Estructura

- `index.html`: toda la página (menú, servicios, mantenimiento, ingeniería y VRF, empresa, contacto).
- `public/images/obra`: fotos de trabajos (carrusel de la portada y reproductor de historias).
- `public/images/servicios`: fondos de las 18 tarjetas de servicios (solo se cargan en escritorio).
- `public/images/equipo`: retratos de la dirección.
- `public/images/marca` y `public/images/marcas`: logotipo (triángulos) y logos de las marcas certificadas.
- `public/images/certificaciones`: capacitación 1999–2017, recortada del collage del sitio anterior.
- `public/favicon.png`, `public/_headers`: icono y cabeceras de seguridad.

## Desarrollo local

```bash
pnpm install
pnpm dev
```

## Publicación en Cloudflare Pages

- Framework preset: Vite
- Build command: `pnpm build`
- Build output directory: `dist`

Cada rama distinta de `main` genera una dirección de prueba (`*.pages.dev`). Unir a `main` publica en producción.

## Cambiar imágenes

Reemplaza el archivo en `public/images/` conservando nombre y proporción (las tarjetas de servicios son 4:3,
1200 px de ancho). Si cambias un nombre, actualízalo en `index.html`.

## Datos de contacto (confirmados)

- Teléfono principal: 614 313 0551
- WhatsApp: 614 142 0285
- Correo: teamrefrigeracion@yahoo.com.mx
- Dirección: San Luis Potosí 2718, Avícola II, Chihuahua
- Horario: lunes a viernes, 9:00–15:00; emergencias residenciales 24 h
- Fundada en 1998 (28 años)
