<template>
  <div ref="glow" class="cursor-glow" aria-hidden="true" />
</template>

<script setup lang="ts">
const glow = ref<HTMLElement | null>(null);

let raf = 0;
let x = 0;
let y = 0;
let cx = 0;
let cy = 0;

const loop = () => {
  cx += (x - cx) * 0.12;
  cy += (y - cy) * 0.12;
  if (glow.value) glow.value.style.transform = `translate3d(${cx - 250}px, ${cy - 250}px, 0)`;
  raf = requestAnimationFrame(loop);
};

const onMove = (e: PointerEvent) => {
  x = e.clientX;
  y = e.clientY;
  if (glow.value) glow.value.style.opacity = '1';
};

onMounted(() => {
  const ok = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!ok) return;
  window.addEventListener('pointermove', onMove, { passive: true });
  raf = requestAnimationFrame(loop);
});

onBeforeUnmount(() => {
  window.removeEventListener('pointermove', onMove);
  cancelAnimationFrame(raf);
});
</script>

<style scoped>
.cursor-glow {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(52, 211, 153, 0.14) 0%, transparent 65%);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.4s ease;
  will-change: transform;
}
</style>
