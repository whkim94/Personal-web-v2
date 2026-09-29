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
            background: '#06080a',
            surface: '#0f1412',
            primary: '#34d399',
            secondary: '#22d3ee',
            'on-background': '#eef3f0',
            'on-surface': '#eef3f0',
          },
        },
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});


