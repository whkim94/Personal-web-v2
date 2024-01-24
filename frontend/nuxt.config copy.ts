const dev = process.env.NODE_ENV !== 'production';

export default defineNuxtConfig({
  app: {
    head: {
      title: 'Interfit',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },

        { hid: 'title', name: 'title', content: 'Interfit' },
        {
          hid: 'description',
          name: 'description',
          content: '미국 및 외국 취업에 관한 정보, 컨설팅, 인터뷰 연결 및 훈련 까지'
        },

        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Interfit'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: '미국 및 외국 취업에 관한 정보, 컨설팅, 인터뷰 연결 및 훈련 까지'
        },

        {
          name: 'naver-site-verification',
          content: '1689917f7c3dd2c2fc8dd14bba0b0fd547f90f57'
        }
      ],

      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href: '//cdn.jsdelivr.net/npm/xeicon@2.3.3/xeicon.min.css'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Roboto'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Nanum+Gothic+Coding&display=swap'
        }
      ]
      // script: [{ src: 'js/chat/chat.js' }],
    },
  },

  ssr: true,

  runtimeConfig: {
    // Private config that is only available on the server
    // apiSecret: '123',
    // Config within public will be also exposed to the client
    public: {
      baseURL: dev ? 'http://127.0.0.1:8000/api/' : 'https://interfit.co.kr/api/',
      authURL: dev
        ? 'http://0.0.0.0:8000/api/rest-auth/'
        : 'https://interfit.co.kr/api/rest-auth/',
      aiURL: 'https://ai.interfit.co.kr/api/'
    }
  },

  imports: {
    dirs: ['store'],
  },

  /*
   ** Global CSS
   */
  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
    '@/assets/css/interfit_design.css'
  ],

  routeRules: {
    // Static page generated on-demand, revalidates in background
    // '/blog/**': { swr: true },
    // Static page generated on-demand once
    // '/articles/**': { static: true },
    // Set custom headers matching paths
    // '/_nuxt/**': { headers: { 'cache-control': 's-maxage=0' } },
    // Render these routes with SPA
    '/admin/**': { ssr: false },
    // Add cors headers
    '/api/**': { cors: true },
    // Add redirect headers
    // '/old-page': { redirect: '/new-page' },
    // '/old-page2': { redirect: { to: '/new-page', statusCode: 302 } }
  },

  components: {
    dirs: ['~/components']
  },

  vite: {
    define: {
      'process.env.DEBUG': true
    }
    // build: true,
    // experimentWarning: true
  },

  // buildModules: [
  //   // '@nuxtjs/eslint-module',
  //   // '@nuxtjs/vuetify',
  //   // '@nuxtjs/html-validator',
  //   // '@nuxtjs/moment',
  // ],

  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate'],
      },
    ],
    '@vueuse/nuxt',
    '@nuxt/content',
    ['@nuxtjs/device', { refreshOnResize: true }],
    [
      '@nuxtjs/robots',
      [
        {
          UserAgent: 'Googlebot',
          Allow: '/'
        },
        {
          UserAgent: 'Yeti',
          Allow: '/'
        }
      ]
    ],
    'nuxt-lodash',
    '@formkit/nuxt',
    // '@nuxtjs/moment',
    // '@nuxtjs/algolia',
    // '@nuxtjs/html-validator',
    // '@sidebase/nuxt-auth',
    // '@nuxtjs/i18n',
    // '@nuxtjs/axios',
    // '@nuxtjs/auth-next',
    // '@nuxtjs/moment',
  ],

  // googleAnalytics: {
  //   id: 'UA-177271188-1'
  // },

  lodash: {
    prefix: '_',
    prefixSkip: ['string'],
    upperAfterPrefix: false,
  },

  formkit: {
    configFile: './formkit.config.ts',
  },

  ignore: [
    '/pages/profile/company/*',
    '/pages/profile/resume/*',
    '/components/ResumeUpload.vue'
  ],

  build: {
    transpile: ['vuetify']
  },

  experimental: {
    emitRouteChunkError: 'reload'
  },

  // hooks: {
  //   'vite:extendConfig': function (config, { isServer }) {
  //     if (isServer) {
  //       // Workaround for netlify issue
  //       // https://github.com/nuxt/nuxt.js/issues/14445
  //       config.build.rollupOptions.output.inlineDynamicImports = true;
  //     }
  //   }
  // },
});
