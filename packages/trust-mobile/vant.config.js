module.exports = {
  name: 'trust-mobile',
  build: {
    css: {
      preprocessor: 'less',
    },
    site: {
      publicPath: '/trust-mutual/',
    },
  },
  site: {
    title: '信美前端组',
    logo: 'http://127.0.0.1:8001/static/trust_logo.png',
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
            path: 'xm-button',
            title: 'XmButton',
          },
          {
            path: 'xm-input',
            title: 'XmInput',
          },
        ],
      },
      {
        title: '工具库',
        items: [
          {
            path: 'util-isEmail',
            title: 'isEmail',
          },
          {
            path: 'util-isAddress',
            title: 'isAddress',
          },
        ],
      },
    ],
  },
};
