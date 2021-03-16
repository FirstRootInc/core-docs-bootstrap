/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'FirstRoot Participatory Budgeting API',
  tagline: "We're the easy button for proticipatory budgeting.",
  url: 'https://firstrootinc.github.io',
  baseUrl: '/core-docs-bootstrap/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon-firstroot.png',
  organizationName: 'FirstRootInc', // Usually your GitHub org/user name.
  projectName: 'core-docs-bootstrap', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: null ,
      logo: {
        alt: 'FirstRoot Logo',
        src: 'img/FirstRoot-Logo.png',
      },
      items: [
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
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Firstroot',
          items: [
            {
              label: 'API',
              to: '/docs',
            },
            {
              label: 'Help',
              to: '/',
            },
            {
              label: 'Curiculum',
              to: '/',
            },
          ],
        },
        {
          title: 'About Firstroot',
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
              href: 'https://firstroot.co/',
            },
          ],
        },
      ],
      copyright: `Copyright © Firstroot ${new Date().getFullYear()}. All rights reserved. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
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
        baseURL: "api",
      },
    ],
  ]
};
