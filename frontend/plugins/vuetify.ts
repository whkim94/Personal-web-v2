/* eslint-disable */
// plugins/vuetify.js
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import { createVuetify } from 'vuetify';

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'dark',
      themes: {
        dark: {
          dark: true,
          colors: {
            background: '#0d0d0d',
            surface: '#161616',
            primary: '#81c784',
            'on-background': '#f5f5f5',
            'on-surface': '#f5f5f5',
          },
        },
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});


