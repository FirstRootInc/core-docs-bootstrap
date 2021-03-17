/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Documentation',
  tagline: "Take a tour and learn about our guidelines & examples of how to integrate and use the FirstRoot API toolkit. Have fun coding!",
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
    footer: {
      style: 'light',
      links: [
        {
          title: 'Firstroot',
          items: [
            {
              label: 'API',
              to: '/docs',
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
              href: 'https://firstroot.co/contact/',
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
        linkRoot: "/docs/",
        baseURL: "api",
      },
    ],
  ]
};
