import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

const dev = process.env.NODE_ENV !== 'production';

export default defineNuxtConfig({
  app: {
    head: {
      title: 'Jonathan W Kim',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },

        { hid: 'title', name: 'title', content: 'Jonathan W Kim' },
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
      ],

    },
  },

  ssr: false,

  //   runtimeConfig: {
  //     // Private config that is only available on the server
  //     // apiSecret: '123',
  //     // Config within public will be also exposed to the client
  //     public: {
  //       baseURL: dev ? 'http://127.0.0.1:8000/api/' : 'https://interfit.co.kr/api/',
  //       authURL: dev
  //         ? 'http://0.0.0.0:8000/api/rest-auth/'
  //         : 'https://interfit.co.kr/api/rest-auth/',
  //       aiURL: 'https://ai.interfit.co.kr/api/'
  //     }
  //   },

  //   imports: {
  //     dirs: ['store'],
  //   },

  /*
   ** Global CSS
   */
  css: [
    'vuetify/lib/styles/main.sass',
  ],

  components: {
    dirs: ['~/components']
  },

  vite: {
    define: {
      'process.env.DEBUG': true
    },
    vue: {
      template: {
        transformAssetUrls,
      },
    },
    // build: true,
    // experimentWarning: true
  },

  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    // [
    //   '@pinia/nuxt',
    //   {
    //     autoImports: ['defineStore', 'acceptHMRUpdate'],
    //   },
    // ],
    '@vueuse/nuxt',
    // '@nuxt/content',
    ['@nuxtjs/device', { refreshOnResize: true }],
    'nuxt-lodash',
  ],

  lodash: {
    prefix: '_',
    prefixSkip: ['string'],
    upperAfterPrefix: false,
  },

  build: {
    transpile: ['vuetify']
  },
});
