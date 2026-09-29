<template>
  <NuxtLayout>
    <v-app>
      <NuxtLoadingIndicator color="#34d399" />
      <div class="bg-fx" aria-hidden="true">
        <div class="bg-fx__blob bg-fx__blob--a" />
        <div class="bg-fx__blob bg-fx__blob--b" />
        <div class="bg-fx__blob bg-fx__blob--c" />
        <div class="bg-fx__grid" />
      </div>
      <CursorGlow />
      <NuxtPage />
    </v-app>
  </NuxtLayout>
</template>
