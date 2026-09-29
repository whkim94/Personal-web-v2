const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = () => window.matchMedia('(hover: hover) and (pointer: fine)').matches;
const cleanups = new WeakMap<HTMLElement, () => void>();
const spotlightHandlers = new WeakMap<HTMLElement, (e: PointerEvent) => void>();

export default defineNuxtPlugin((nuxtApp) => {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          target.classList.add('is-visible');
          // Drop the slow entrance transition so hover/tilt stay responsive.
          target.addEventListener('transitionend', (ev) => {
            if (ev.propertyName === 'transform') target.classList.add('reveal-done');
          }, { once: true });
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  nuxtApp.vueApp.directive('reveal', {
    mounted(el: HTMLElement, binding) {
      el.classList.add('reveal');
      if (binding.value) el.style.setProperty('--reveal-delay', `${binding.value}ms`);
      revealObserver.observe(el);
    },
    unmounted(el: HTMLElement) {
      revealObserver.unobserve(el);
    }
  });

  // Feeds cursor position to the .glass::before radial highlight.
  nuxtApp.vueApp.directive('spotlight', {
    mounted(el: HTMLElement) {
      const onMove = (e: PointerEvent) => {
        const rect = el.getBoundingClientRect();
        el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
        el.style.setProperty('--my', `${e.clientY - rect.top}px`);
      };
      el.addEventListener('pointermove', onMove);
      spotlightHandlers.set(el, onMove);
    },
    unmounted(el: HTMLElement) {
      const onMove = spotlightHandlers.get(el);
      if (onMove) el.removeEventListener('pointermove', onMove);
    }
  });

  // Counts "60%" / "5+" up from 0 when scrolled into view.
  nuxtApp.vueApp.directive('countup', {
    mounted(el: HTMLElement, binding) {
      const raw = String(binding.value);
      const target = parseFloat(raw);
      const suffix = raw.replace(/^[\d.]+/, '');
      if (Number.isNaN(target) || reduced()) {
        el.replaceChildren(raw);
        return;
      }
      el.replaceChildren(`0${suffix}`);
      const io = new IntersectionObserver(([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / 1400, 1);
          const eased = 1 - (1 - t) ** 4;
          el.replaceChildren(`${Math.round(target * eased)}${suffix}`);
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }, { threshold: 0.6 });
      io.observe(el);
      cleanups.set(el, () => io.disconnect());
    },
    unmounted(el: HTMLElement) {
      cleanups.get(el)?.();
    }
  });

  // 3D tilt following the pointer.
  nuxtApp.vueApp.directive('tilt', {
    mounted(el: HTMLElement) {
      if (reduced() || !finePointer()) return;
      const onMove = (e: PointerEvent) => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        el.style.setProperty('transform', `perspective(900px) rotateX(${(-y * 5).toFixed(2)}deg) rotateY(${(x * 6).toFixed(2)}deg) translateY(-3px)`);
      };
      const onLeave = () => { el.style.removeProperty('transform'); };
      el.addEventListener('pointermove', onMove);
      el.addEventListener('pointerleave', onLeave);
      cleanups.set(el, () => {
        el.removeEventListener('pointermove', onMove);
        el.removeEventListener('pointerleave', onLeave);
      });
    },
    unmounted(el: HTMLElement) {
      cleanups.get(el)?.();
    }
  });

  // Element drifts slightly toward the cursor.
  nuxtApp.vueApp.directive('magnetic', {
    mounted(el: HTMLElement) {
      if (reduced() || !finePointer()) return;
      const onMove = (e: PointerEvent) => {
        const r = el.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        el.style.setProperty('transform', `translate(${(dx * 0.22).toFixed(1)}px, ${(dy * 0.3).toFixed(1)}px)`);
      };
      const onLeave = () => { el.style.removeProperty('transform'); };
      el.addEventListener('pointermove', onMove);
      el.addEventListener('pointerleave', onLeave);
      cleanups.set(el, () => {
        el.removeEventListener('pointermove', onMove);
        el.removeEventListener('pointerleave', onLeave);
      });
    },
    unmounted(el: HTMLElement) {
      cleanups.get(el)?.();
    }
  });
});
