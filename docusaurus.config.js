module.exports = {
  title: 'FirstRoot Participatory Budgeting API',
  tagline: "Explore our guides and examples to intergrate FirstRoot",
  url: 'https://firstrootinc.github.io',
  baseUrl: '/core-docs-bootstrap/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
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
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Follow us',
          items: [
            {
              label: 'Facebook',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'LinkedIn',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Blog',
              href: 'https://firstroot.co/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/FirstRootInc',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} FirstRoot, Inc. Built with Love.`,
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
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: ["@edno/docusaurus2-graphql-doc-generator"],
};
