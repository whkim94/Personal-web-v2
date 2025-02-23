<template>
  <div class="pt-16 pb-8 px-2">
    <p class="text-grey" style="font-size: 14px;">
      Design inspired by this
      <v-hover v-slot="{ isHovering, props }">
        <a
          :class="['text-decoration-none', isHovering ? 'text-green-lighten-2' : 'text-white']" v-bind="props"
          href="https://brittanychiang.com/" target="_blank">
          wonderful developer
        </a>
      </v-hover>.

      Coded in
      <v-hover v-slot="{ isHovering, props }">
        <a
          :class="['text-decoration-none', isHovering ? 'text-green-lighten-2' : 'text-white']" v-bind="props"
          href="https://code.visualstudio.com/" target="_blank">
          Visual Studio Code
        </a>
      </v-hover>
      by yours truly.
      Built with
      <v-hover v-slot="{ isHovering, props }">
        <a
          :class="['text-decoration-none', isHovering ? 'text-green-lighten-2' : 'text-white']" v-bind="props"
          href="https://nuxt.com/" target="_blank">
          Nuxt.js
        </a>
      </v-hover>
      and
      <v-hover v-slot="{ isHovering, props }">
        <a
          :class="['text-decoration-none', isHovering ? 'text-green-lighten-2' : 'text-white']" v-bind="props"
          href="https://vuetifyjs.com/" target="_blank">
          Vuetify
        </a>
      </v-hover>
      , deployed with
      <v-hover v-slot="{ isHovering, props }">
        <a
          :class="['text-decoration-none', isHovering ? 'text-green-lighten-2' : 'text-white']" v-bind="props"
          href="https://vercel.com/" target="_blank">
          Vercel
        </a>
      </v-hover>.
      All text is set in the
      <v-hover v-slot="{ isHovering, props }">
        <a
          :class="['text-decoration-none', isHovering ? 'text-green-lighten-2' : 'text-white']" v-bind="props"
          href="https://rsms.me/inter/" target="_blank">
          Inter
        </a>
      </v-hover>
      typeface.
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const currentYear = ref(new Date().getFullYear());
</script>
