/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Lido Docs',
  tagline: 'Dinosaurs are cool',
  url: 'https://psirex.github.io',
  baseUrl: '/docusaurus-docs-src/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon-32x32.png',
  organizationName: 'psirex', // Usually your GitHub org/user name.
  projectName: 'docusaurus-docs-src', // Usually your repo name.
  themeConfig: {
    algolia: {
      apiKey: '530bfcb7fe1db4436aa21b476854b366',
      indexName: 'lido-docs',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: see doc section below
      appId: 'ZTKWJO288I',

      // Optional: Algolia search parameters
      searchParameters: {},

      //... other Algolia params
    },
    navbar: {
      title: 'Lido Docs',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/Psirex/docusaurus-docs-src/blob/master/',
        },
      },
    ],
  ],
}
