<template>
  <div :class="$device.isMobileOrTablet ? 'name-mobile' : 'name-pc'">
    <v-card variant="text" class="header-card">
      <v-card-item class="px-2">
        <v-card-title class="header-name text-green-lighten-1">
          JONATHAN KIM
        </v-card-title>

        <v-card-title class="mt-4 header-tagline text-medium-emphasis font-weight-regular">
          Freelance Full-Stack Developer
        </v-card-title>
      </v-card-item>

      <v-card-text class="mt-3 px-2 text-body-1 text-medium-emphasis">
        I code from Front to Back with a passion <br>
        for building and innovating..
      </v-card-text>
    </v-card>
  </div>

  <div class="px-2 hidden-md-and-down" style="position: sticky; top: 30vh">
    <div v-for="menu in menuList" :key="menu" class="mb-4">
      <v-hover v-slot="{ isHovering, props }">
        <v-icon class="text-green-lighten-1 mr-4" icon="mdi-tennis-ball" size="small" />
        <a
          v-bind="props"
          :class="[
            'text-decoration-none',
            'cursor-pointer',
            'nav-link',
            isHovering ? 'text-green-lighten-2' : 'text-high-emphasis',
          ]"
          variant="plain"
          @click="onClick(`#${menu}`)"
        >
          {{ menu }}
        </a>
      </v-hover>
    </div>
  </div>

  <div :class="$device.isMobileOrTablet ? 'sns-mobile' : 'sns-pc'">
    <v-hover v-for="s in sns" :key="s.name" v-slot="{ isHovering, props }">
      <v-icon
        v-bind="props"
        class="mr-4"
        size="large"
        :icon="s.icon"
        :color="isHovering ? 'green-lighten-1' : 'grey-lighten-1'"
        @click="handleClick(s)"
      />
    </v-hover>
  </div>
</template>

<script setup lang="ts">
import { useGoTo } from 'vuetify';

const goTo = useGoTo();

const menuList = ref(['About', 'Experience', 'Stacks', 'Projects']);

const sns = ref([
  {
    name: 'LinkedIn', icon: 'mdi-linkedin', link: 'https://www.linkedin.com/in/jonathan-w-kim-0410/', type: 'link'
  },
  {
    name: 'GitHub', icon: 'mdi-github', link: 'https://github.com/whkim94', type: 'link'
  },
  {
    name: 'Instagram', icon: 'mdi-instagram', link: 'https://www.instagram.com/just_kimding/', type: 'link'
  },
  {
    name: 'Email', icon: 'mdi-email', link: 'mailto:whkim94@gmail.com', type: 'email'
  }
]);

const handleClick = (s: any) => {
  if (s.type === 'link') {
    navigateTo(s.link, { external: true, open: { target: '_blank' } });
  } else if (s.type === 'email') {
    window.location.href = s.link;
  }
};

const onClick = (section: string) => {
  goTo(section);
};
</script>

<style scoped>
.header-card {
  overflow: visible;
  max-width: 100%;
}

.header-card :deep(.v-card-item),
.header-card :deep(.v-card-text) {
  overflow: visible;
}

.header-card :deep(.v-card-title) {
  white-space: normal !important;
  overflow: visible;
  word-break: break-word;
  hyphens: auto;
  line-height: 1.2;
  padding-inline: 0;
  max-width: 100%;
}

.header-name {
  font-size: clamp(1.65rem, 3.2vw, 2.35rem);
  font-weight: 600;
  letter-spacing: clamp(0.02em, 0.35vw, 0.06em);
  line-height: 1.15;
}

.header-tagline {
  font-size: clamp(1rem, 2.2vw, 1.25rem);
  line-height: 1.4;
}

.name-pc {
  position: sticky;
  top: 10vh;
  max-width: 100%;
  min-width: 0;
}

.name-mobile {
}

.sns-pc {
  position: sticky;
  top: 88vh;
  margin-left: 15px;
}

.sns-mobile {
  margin-top: 25px;
  margin-left: 5px;
}
</style>
