// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://anibal1409.github.io',
  base: '/estructuras-de-datos',
  integrations: [
    starlight({
      title: 'Estructura de Datos',
      description: 'Sitio educativo por unidades con teoria, descargas y demos interactivas.',
      defaultLocale: 'es',
      locales: {
        root: {
          label: 'Espanol',
          lang: 'es'
        }
      },
      social: [],
      sidebar: [
        { label: 'Inicio', items: [{ label: 'Presentacion', slug: 'index' }] },
        {
          label: 'Unidades',
          items: [
            { label: 'Unidad I. Representacion de los datos en memoria', slug: 'unidades/unidad-i' },
            { label: 'Unidad II. Gestion del almacenamiento persistente', slug: 'unidades/unidad-ii' },
            {
              label: 'Unidad III. Estructuras fundamentales y enlazadas + Hashing',
              slug: 'unidades/unidad-iii'
            },
            { label: 'Unidad IV. Grafos', slug: 'unidades/unidad-iv' },
            { label: 'Unidad V. Arboles', slug: 'unidades/unidad-v' }
          ]
        }
      ]
    })
  ]
});
