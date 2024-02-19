import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Stringtale',
      // favicon: './src/assets/favicon.ico',
      // logo: {
      //   light: './src/assets/logo-light.svg',
      //   dark: './src/assets/logo-dark.png',
      //   replacesTitle: false,
      // },
      social: {
        github: 'https://github.com/stringtale',
      },
      sidebar: [
        {
          label: 'Introduction',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'What is stringtale?', link: '/' },
          ],
        },
        {
          label: 'Getting started',
          items: [
            { label: 'Installation', link: '/guides/getting-started/' },
            { label: 'Workflow', link: '/guides/workflow/' },
          ],
        },
        {
          label: 'Frameworks',
          items: [
            { label: 'React', link: '/frameworks/react/' },
            { label: 'Next.js', link: '/frameworks/next-js/' },
            { label: 'Express.js', link: '/frameworks/express-js/' },
          ],
        },
        {
          label: 'Usage',
          items: [
            { label: 'CLI', link: '/usage/CLI/' },
            { label: 'Github Action', link: '/usage/github-action/' },
            { label: 'VS Code Plugin', link: '/usage/vs-code-plugin/' },
            { label: 'Browser extension', link: '/usage/browser-extension/' },
          ],
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
      ],
    }),
  ],
});
