import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'My Docs',
      social: {
        github: 'https://github.com/withastro/starlight',
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
