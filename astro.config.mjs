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
        '@fontsource/changa/400.css',
      ],
      social: {
        github: 'https://github.com/stringtale',
      },
      sidebar: [
        {
          label: 'Introduction',
          items: [
            { label: 'Introduction', link: '/' },
          ],
        },
        {
          label: 'Getting started',
          items: [
            { label: 'Quickstart', link: '/guides/quickstart/' },
            { label: 'Installation', link: '/guides/getting-started/' },
            { label: 'Workflow', link: '/guides/workflow/' },
          ],
        },
        {
          label: 'Back-end frameworks',
          autogenerate: { directory: 'back-end' },
        },
        {
          label: 'Front-end frameworks',
          autogenerate: { directory: 'front-end' },
        },
        {
          label: 'Usage',
          items: [
            { label: 'Obtaining an API key', link: '/usage/obtaining-api-key/' },
            { label: 'Browser extension', link: '/usage/browser-extension/' },
            { label: 'VS Code extension', link: '/usage/vs-code-extension/' },
            { label: 'ESLint plugin', link: '/usage/eslint-plugin/' },
            { label: 'GitHub Action', link: '/usage/github-action/' },
            { label: 'Slack webhook', link: '/usage/slack-webhook/' },
          ],
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
        { label: 'FAQ', link: '/faq' },
      ],
    })
  ],
});
