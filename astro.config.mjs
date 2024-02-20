import { defineConfig } from 'astro/config';
import starlightLinksValidator from 'starlight-links-validator'
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Stringtale',
      plugins: [starlightLinksValidator()],
      // favicon: './src/assets/favicon.ico',
      // logo: {
      //   light: './src/assets/logo-light.svg',
      //   dark: './src/assets/logo-dark.png',
      //   replacesTitle: false,
      // },
      customCss: [
        './src/styles/custom.css',
        '@fontsource/changa-one/400.css',
        
      ],
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
          autogenerate: { directory: 'guides' },
        },
        {
          label: 'Frameworks',
          // items: [
          //   { label: 'React', link: '/frameworks/react/' },
          //   { label: 'Next.js', link: '/frameworks/next-js/' },
          //   { label: 'Express.js', link: '/frameworks/express-js/' },
          // ],
          autogenerate: { directory: 'frameworks' },
        },
        {
          label: 'Usage',
          items: [
            { label: 'Github Action', link: '/usage/github-action/' },
            { label: 'VS Code Extension', link: '/usage/vs-code-extension/' },
            { label: 'InteliJ / Webstorm Plugin', link: '/usage/intelij-webstorm-plugin/' },
            { label: 'Vim plugin', link: '/usage/vim-plugin/' },
            { label: 'Browser extension', link: '/usage/browser-extension/' },
          ],
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
        { label: 'FAQ', link: '/faq' },
      ],
    }),
  ],
});
