<template>
  <div class="progress" :style="{ transform: `scaleX(${progress})` }" aria-hidden="true" />

  <header :class="['nav', { 'nav--scrolled': scrolled }]">
    <nav class="nav__inner" aria-label="Primary">
      <a class="nav__brand" href="#top" aria-label="Back to top" @click.prevent="scrollTo('top')">
        <Logo />
        <span class="nav__name">Jonathan Kim</span>
      </a>

      <ul class="nav__links">
        <li v-for="item in navItems" :key="item.id">
          <a
            :href="`#${item.id}`"
            :class="['nav-link', { 'nav-link--active': active === item.id }]"
            @click.prevent="scrollTo(item.id)"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>

      <div class="nav__actions">
        <a class="btn btn--primary nav__resume" href="/Resume.pdf" target="_blank" rel="noopener">
          Résumé
          <v-icon icon="mdi-arrow-top-right" size="16" />
        </a>

        <v-menu location="bottom end">
          <template #activator="{ props }">
            <button v-bind="props" class="icon-btn nav__burger" type="button" aria-label="Open menu">
              <v-icon icon="mdi-menu" />
            </button>
          </template>
          <v-list class="nav__menu" density="comfortable">
            <v-list-item
              v-for="item in navItems"
              :key="item.id"
              :title="item.label"
              @click="scrollTo(item.id)"
            />
            <v-list-item title="Résumé" href="/Resume.pdf" target="_blank" />
          </v-list>
        </v-menu>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { navItems } from '~/data/portfolio';

const scrolled = ref(false);
const progress = ref(0);
const active = ref('');

const scrollTo = (id: string) => {
  const el = id === 'top' ? document.body : document.getElementById(id);
  if (id === 'top') window.scrollTo({ top: 0, behavior: 'smooth' });
  else el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const onScroll = () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  scrolled.value = window.scrollY > 24;
  progress.value = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
};

let spy: IntersectionObserver | null = null;

onMounted(() => {
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Active section = the one crossing the band just below the nav.
  spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) active.value = e.target.id;
      });
    },
    { rootMargin: '-35% 0px -60% 0px' }
  );
  navItems.forEach(({ id }) => {
    const el = document.getElementById(id);
    if (el) spy?.observe(el);
  });
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll);
  spy?.disconnect();
});
</script>

<style scoped>
.progress {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  z-index: 1200;
  background: var(--accent-grad);
  transform-origin: 0 50%;
}

.nav {
  position: fixed;
  top: 14px;
  left: 0;
  right: 0;
  z-index: 1100;
  display: flex;
  justify-content: center;
  padding: 0 clamp(0.75rem, 3vw, 1.5rem);
  pointer-events: none;
}

.nav__inner {
  pointer-events: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  max-width: 1040px;
  padding: 0.5rem 0.6rem 0.5rem 0.55rem;
  border: 1px solid transparent;
  border-radius: 999px;
  transition: background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease, box-shadow 0.3s ease;
}

.nav--scrolled .nav__inner {
  background: rgba(8, 11, 10, 0.72);
  border-color: var(--line);
  backdrop-filter: blur(18px) saturate(140%);
  -webkit-backdrop-filter: blur(18px) saturate(140%);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.35);
}

.nav__brand {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  text-decoration: none;
  color: var(--text);
}

.nav__name {
  font-family: var(--font-display);
  font-weight: 600;
  letter-spacing: -0.01em;
}

.nav__links {
  display: none;
  list-style: none;
  margin: 0;
  padding: 0.25rem;
  gap: 0.15rem;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.03);
}

.nav-link {
  display: block;
  padding: 0.45rem 0.95rem;
  border-radius: 999px;
  font-size: 0.88rem;
  color: var(--muted);
  text-decoration: none;
  transition: color 0.2s ease, background 0.2s ease;
}

.nav-link:hover {
  color: var(--text);
}

.nav-link--active {
  color: var(--text);
  background: rgba(255, 255, 255, 0.09);
}

.nav__actions {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.nav__resume {
  display: none;
  padding: 0.55rem 1.1rem;
  font-size: 0.86rem;
}

.nav__menu {
  background: rgba(12, 16, 14, 0.96) !important;
  border: 1px solid var(--line);
  border-radius: 16px !important;
}

@media (min-width: 900px) {
  .nav__links { display: flex; }
  .nav__resume { display: inline-flex; }
  .nav__burger { display: none; }
}

@media (max-width: 420px) {
  .nav__name { display: none; }
}
</style>
