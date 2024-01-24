<template>
  <div class="logo">
    <span class="initials">JK</span>
  </div>
</template>

<script>
export default {
  name: 'Logo',
};
</script>

  <style scoped>
  .logo {
    display: flex;
    align-items: center;
    font-family: 'Roboto', sans-serif;
  }

  .initials {
    font-size: 2rem;
    font-weight: bold;
    color: var(--v-primary-base);
  }

  .profession {
    font-size: 0.8rem;
    color: var(--v-text-color);
    margin-left: 0.5rem;
  }
  </style>
