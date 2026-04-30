# Guia de Unidades (Astro + Starlight)

Sitio educativo en espanol, publico y gestionado por archivos, desplegado en GitHub Pages en `anibal1409.github.io/estructuras-de-datos`.

## Requisitos

- Node.js 22+ (probado con Node 22.22.0)
- npm 10+

## Instalacion

```bash
npm install
```

## Ejecutar en local

```bash
npm run dev
```

## Build de produccion

```bash
npm run check
npm run build
npm run preview
```

## Deploy automatico (GitHub Pages)

1. Crea el repositorio `estructuras-de-datos` en GitHub.
2. Sube este proyecto a la rama `main`.
3. En GitHub, activa **Settings > Pages > Build and deployment > Source: GitHub Actions**.
4. El workflow `deploy.yml` publicara automaticamente cada push a `main`.

## Base path para Pages de repositorio

El proyecto ya esta configurado con:

- `site: https://anibal1409.github.io`
- `base: /estructuras-de-datos`

Archivo: `astro.config.mjs`

## Estructura de contenido por unidades

- `src/content/docs/unidades/unidad-1/index.mdx`
- `src/content/docs/unidades/unidad-2/index.mdx`

Puedes crear tantas unidades como necesites sin plantilla rigida; solo agrega un nuevo `index.mdx` en la carpeta de la unidad y actualiza el sidebar en `astro.config.mjs`.

## Como agregar nuevas unidades

1. Crear carpeta: `src/content/docs/unidades/unidad-N/`
2. Crear pagina: `src/content/docs/unidades/unidad-N/index.mdx`
3. Agregar item en `sidebar` dentro de `astro.config.mjs`
4. (Opcional) subir descargas en `public/descargas/unidad-N/`
5. (Opcional) crear ZIP: `public/descargas/unidad-N.zip`

## Como subir archivos descargables

- Individuales: coloca archivos en `public/descargas/unidad-N/`
- ZIP por unidad: genera `public/descargas/unidad-N.zip`
- Enlaza desde tu MDX con rutas absolutas incluyendo base: `/estructuras-de-datos/descargas/unidad-N/archivo.ext`

## Multimedia y demos

- Imagenes/SVG: `public/media/...`
- PDFs: `public/descargas/...`
- Videos embebidos: iframe de YouTube/Vimeo en las paginas `.mdx`
- Demo interactiva: `public/demos/tree-game.html` embebida por iframe en la Unidad 1

## Busqueda global

Starlight incluye buscador global integrado por defecto (Pagefind) al construir el sitio.
