<template>
  <div class="marquee" aria-hidden="true">
    <div class="marquee__track">
      <div v-for="n in 2" :key="n" class="marquee__set">
        <span v-for="t in techs" :key="`${n}-${t.name}`" class="marquee__item">
          <img :src="t.icon" alt="" width="22" height="22" loading="lazy">
          {{ t.name }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { skillGroups } from '~/data/portfolio';

const techs = skillGroups.flatMap((g) => g.items);
</script>

<style scoped>
.marquee {
  overflow: hidden;
  padding: 1.1rem 0;
  border-block: 1px solid var(--line);
  mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
}

.marquee__track {
  display: flex;
  width: max-content;
  animation: scroll 42s linear infinite;
}

.marquee:hover .marquee__track {
  animation-play-state: paused;
}

.marquee__set {
  display: flex;
  gap: 2.75rem;
  padding-right: 2.75rem;
}

.marquee__item {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-family: var(--font-mono);
  font-size: 0.85rem;
  white-space: nowrap;
  color: var(--muted);
}

.marquee__item img {
  width: 22px;
  height: 22px;
  object-fit: contain;
}

@keyframes scroll {
  to { transform: translateX(-50%); }
}

@media (prefers-reduced-motion: reduce) {
  .marquee__track { animation: none; }
}
</style>
