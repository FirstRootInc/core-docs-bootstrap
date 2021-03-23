/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Documentation',
  tagline: "Take a tour and learn about our guidelines & examples of how to integrate and use the FirstRoot API toolkit. Have fun coding!",
  url: 'https://firstrootinc.github.io',
  baseUrl: '/build/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/img/Firstroot-favicon.png',
  organizationName: 'FirstRootInc', // Usually your GitHub org/user name.
  projectName: 'core-docs-bootstrap', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: null ,
      logo: {
        alt: 'FirstRoot Logo',
        src: '/img/logo.svg',
      },
      items: [
        {
          to: "/docs/api/schema", // adjust the location depending on your baseURL (see configuration)
          label: "API References", // change the label with yours
          position: "left",
        },
        {
          to: "docs/pbcycle", // adjust the location depending on your baseURL (see configuration)
          label: "Concepts", // change the label with yours
          position: "left",
        },
        {
          to: "docs/explorer-guide",
          label: "Tools", // change the label with yours
          position: "left",
        },
      ],
    },
    algolia: {
      apiKey: '482ef5bb512503beb2189148c9cd4a34',
      indexName: 'frdocs',
      appId: '2VI4VLAFU8',
    },
    footer: {
      logo: {
        alt: 'Firstroot',
        src: 'img/logo.svg',
        href: 'https://firstroot.co/',
      },
      links: [
        {
          title: 'Firstroot',
          items: [
            {
              label: 'About',
              href: 'https://firstroot.co/about/',
            },
            {
              label: 'Blog',
              href: 'https://firstroot.co/blog/',
            },
            {
              label: 'UX artifacts',
              href: 'https://firstroot.co/ux-artifacts/',
            },
            {
              label: 'Support',
              href: 'https://firstroot.co/contact/',
            },
          ],
        },
        {
          title: 'Developers',
          items: [
            {
              label: 'Documentation',
              to: '/docs',
            },
            {
              label: 'API References',
              to: '/docs/api/schema',
            },
          ],
        },
      ],
      copyright: `Copyright © Firstroot ${new Date().getFullYear()}. All rights reserved.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      "@edno/docusaurus2-graphql-doc-generator",
      {
        schema: "https://api-dev.firstroot.co/app/graphql",
        rootPath: "./docs",
        linkRoot: "/docs/",
        baseURL: "api",
      },
    ],
  ]
};
