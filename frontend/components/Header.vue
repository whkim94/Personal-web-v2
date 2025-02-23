<template>
  <div :class="$device.isMobileOrTablet ? 'name-mobile' : 'name-pc'">
    <v-card variant="text">
      <v-card-item class="px-2">
        <v-card-title class="text-green" style="font-size: 40px;">
          JONATHAN KIM
        </v-card-title>

        <v-card-title class="mt-4 text-grey-lighten-1" style="font-size: 20px;">
          Freelance Full-Stack Developer
        </v-card-title>
      </v-card-item>

      <v-card-text class="mt-3 px-2 text-grey" style="font-size: 15px;">
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
          v-bind="props" :class="['text-decoration-none', 'cursor-pointer', isHovering ? 'text-green-lighten-2' : 'text-white']"
          variant="plain" @click="onClick(`#${menu}`)">
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
        :color="isHovering ? 'green' : 'grey'"
        @click="handleClick(s)"
      />
    </v-hover>
  </div>
</template>

<script setup lang="ts">
import { useGoTo } from 'vuetify';

const goTo = useGoTo();

const menuList = ref(['About', 'Experiment', 'Stacks', 'Project']);

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
.name-pc {
  position: sticky;
  top: 10vh;
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
