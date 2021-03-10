module.exports = {
  title: 'FirstRoot Participatory Budgeting API',
  tagline: "We're the easy button for proticipatory budgeting.",
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
          to: "/", // adjust the location depending on your baseURL (see configuration)
          label: "Introduction", // change the label with yours
          position: "left",
        },
        {
          to: "/pbcycle", // adjust the location depending on your baseURL (see configuration)
          label: "Core Concepts", // change the label with yours
          position: "left",
        },
        {
          to: "/explorer-guide", // adjust the location depending on your baseURL (see configuration)
          label: "Tools", // change the label with yours
          position: "left",
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
              label: 'Get Started',
              to: '/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
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
