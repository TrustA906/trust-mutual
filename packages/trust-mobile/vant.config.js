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
    title: 'trust-mobile',
    logo: 'https://img.yzcdn.cn/vant/logo.png',
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
    ],
  },
};
