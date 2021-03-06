module.exports = {
  IntroductionSidebar: {
    'Overview' : [
        'introduction',
        'references',
        'graphql',
    ],
  },
  Schema: {
    ...require("./docs/api/sidebar-schema"),
  },
  CoreConceptSidebar: {
    'PB Cycle' : [
        'pbcycle',
        'pb-inv',
    ],
  },
  ToolsSidebar: {
    'Tools' : [
        'explorer-guide',
        'explorer-guide-2',
    ],
  },
};
