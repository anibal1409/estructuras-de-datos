// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://anibal1409.github.io',
  base: '/estructuras-de-datos',
  integrations: [
    starlight({
      title: 'Guia de Unidades',
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
            { label: 'Unidad 1: Arboles en juego', slug: 'unidades/unidad-1' },
            { label: 'Unidad 2 (placeholder)', slug: 'unidades/unidad-2' }
          ]
        }
      ]
    })
  ]
});
