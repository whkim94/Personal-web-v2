<template>
  <section id="top" class="hero">
    <div v-reveal class="hero__pill">
      <span class="hero__dot" aria-hidden="true" />
      Open to freelance projects
    </div>

    <h1 v-reveal="80" class="hero__title">
      Hi, I'm Jonathan.
      <span class="hero__line">
        I build
        <span class="hero__rotator" aria-live="polite">
          <Transition name="word" mode="out-in">
            <span :key="word" class="grad-text">{{ word }}</span>
          </Transition>
        </span>
      </span>
      <span class="hero__line hero__line--dim">from front to back.</span>
    </h1>

    <p v-reveal="160" class="hero__lead">
      Freelance full-stack developer with 5+ years turning messy legacy systems and big ideas into fast,
      maintainable products — Vue, React, Django, Laravel, and the cloud in between.
    </p>

    <div v-reveal="240" class="hero__cta">
      <a v-magnetic class="btn btn--primary" href="#Projects" @click.prevent="go('Projects')">
        View my work
        <v-icon icon="mdi-arrow-down" size="18" />
      </a>
      <a class="btn" href="mailto:whkim94@gmail.com">
        Get in touch
        <v-icon icon="mdi-email-outline" size="18" />
      </a>
      <div class="hero__socials">
        <a
          v-for="s in socials.slice(0, 3)"
          :key="s.name"
          class="icon-btn"
          :href="s.link"
          :aria-label="s.name"
          target="_blank"
          rel="noopener noreferrer"
        >
          <v-icon :icon="s.icon" size="20" />
        </a>
      </div>
    </div>

    <dl v-reveal="320" class="hero__stats">
      <div v-for="item in impact" :key="item.label" class="hero__stat">
        <dt v-countup="item.value" class="grad-text" />
        <dd>{{ item.label }}</dd>
      </div>
    </dl>
  </section>
</template>

<script setup lang="ts">
import { heroWords, impact, socials } from '~/data/portfolio';

const index = ref(0);
const word = computed(() => heroWords[index.value]);

const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

let timer: ReturnType<typeof setInterval> | undefined;

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  timer = setInterval(() => {
    index.value = (index.value + 1) % heroWords.length;
  }, 2600);
});

onBeforeUnmount(() => clearInterval(timer));
</script>

<style scoped>
.hero {
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8rem 0 4rem;
}

.hero__pill {
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.4rem 0.95rem;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--surface);
  font-size: 0.82rem;
  color: var(--muted);
}

.hero__dot {
  position: relative;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent);
}

.hero__dot::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: var(--accent);
  animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
}

@keyframes ping {
  75%, 100% { transform: scale(3); opacity: 0; }
}

.hero__title {
  margin-top: 1.75rem;
  font-family: var(--font-display);
  font-size: clamp(2.6rem, 8vw, 5.6rem);
  font-weight: 600;
  letter-spacing: -0.045em;
  line-height: 1.02;
}

.hero__line {
  display: block;
}

.hero__line--dim {
  color: var(--faint);
}

.hero__rotator {
  display: inline-block;
  min-width: 1ch;
}

.word-enter-active,
.word-leave-active {
  transition: opacity 0.35s ease, transform 0.35s ease;
}

.word-enter-from {
  opacity: 0;
  transform: translateY(0.35em);
}

.word-leave-to {
  opacity: 0;
  transform: translateY(-0.35em);
}

.hero__lead {
  margin-top: 1.75rem;
  max-width: 40rem;
  font-size: clamp(1.02rem, 1.6vw, 1.2rem);
  line-height: 1.7;
  color: var(--muted);
}

.hero__cta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.85rem;
  margin-top: 2.25rem;
}

.hero__socials {
  display: flex;
  gap: 0.6rem;
  margin-left: 0.5rem;
}

.hero__stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1px;
  margin: clamp(3rem, 8vh, 5.5rem) 0 0;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: var(--line);
  overflow: hidden;
}

.hero__stat {
  padding: 1.4rem 1.5rem;
  background: rgba(8, 11, 10, 0.78);
}

.hero__stat dt {
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  font-weight: 600;
  letter-spacing: -0.03em;
  line-height: 1;
}

.hero__stat dd {
  margin: 0.6rem 0 0;
  font-size: 0.85rem;
  line-height: 1.45;
  color: var(--muted);
}

@media (min-width: 900px) {
  .hero__stats { grid-template-columns: repeat(4, 1fr); }
}
</style>
