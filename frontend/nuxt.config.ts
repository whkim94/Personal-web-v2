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
          content: 'Jonathan W Kim - Personal Web Profile / Resume'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Jonathan W Kim'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Jonathan W Kim - Personal Web Profile / Resume'
        },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: 'Jonathan W Kim'
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content: 'Jonathan W Kim - Personal Web Profile / Resume'
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
      ]
    },
  },

  ssr: false,

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
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt',
    // '@nuxt/content',
    ['@nuxtjs/device', { refreshOnResize: true }],
    'nuxt-lodash',
    'nuxt-gtag'
  ],

  googleFonts: {
    families: {
      // a simple name
      Inter: '200..700',
    }
  },

  lodash: {
    prefix: '_',
    prefixSkip: ['string'],
    upperAfterPrefix: false,
  },

  gtag: {
    id: process.env.NUXT_PUBLIC_GTAG_ID
  },

  nitro: {
    preset: 'vercel-edge',
  },

  build: {
    transpile: ['vuetify']
  },
});
