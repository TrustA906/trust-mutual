module.exports = {
  name: 'trust-mobile',
  build: {
    css: {
      preprocessor: 'less',
    },
    site: {
      publicPath: '/trust-mobile/',
    },
  },
  site: {
    title: '信美前端组',
    logo: 'https://sit-rums.trustlife.com/cms2/static/trust_logo.png',
    hideSimulator: false,
    nav: [
      {
        title: '开发指南',
        items: [
          {
            path: 'home',
            title: '介绍',
          },
          {
            path: 'quickstart',
            title: '快速上手',
          },
        ],
      },
      {
        title: '基础组件',
        items: [
          {
            path: 't-button',
            title: 'TButton',
          },
          {
            path: 't-input',
            title: 'TInput',
          },
        ],
      },
    ],
  },
};
