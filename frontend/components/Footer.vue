<template>
  <footer class="footer">
    <p class="footer__copy">
      © {{ year }} Jonathan W Kim
    </p>
    <p class="footer__built">
      Built with
      <a class="link-inline" href="https://nuxt.com/" target="_blank" rel="noopener">Nuxt</a>
      &amp;
      <a class="link-inline" href="https://vuetifyjs.com/" target="_blank" rel="noopener">Vuetify</a>,
      set in
      <a class="link-inline" href="https://rsms.me/inter/" target="_blank" rel="noopener">Inter</a>
      &amp; Space Grotesk, deployed on
      <a class="link-inline" href="https://vercel.com/" target="_blank" rel="noopener">Vercel</a>.
    </p>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear();
</script>

<style scoped>
.footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.75rem 2rem;
  margin-top: clamp(4rem, 8vw, 6rem);
  padding: 1.75rem 0 2.5rem;
  border-top: 1px solid var(--line);
  font-size: 0.85rem;
  color: var(--faint);
}

.footer p {
  margin: 0;
}
</style>
