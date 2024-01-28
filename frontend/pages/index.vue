<template>
  <v-main class="bg-grey-darken-4">
    <v-container class="py-16 main-font">
      <v-row justify="center" class="pt-8 px-md-16" no-gutters>
        <v-col lg="4" cols="12" >
          <!-- Name section -->
          <div style="position: sticky; top: 10vh">
            <v-card class="" variant="text">

              <v-card-item>
                <v-card-title
                  class="text-green"
                  style="font-size: 40px;"
                >
                  JONATHAN KIM
                </v-card-title>

                <v-card-title
                  class="mt-4 text-grey-lighten-1"
                  style="font-size: 20px;"
                >
                  Freelance Full-Stack Developer
                </v-card-title>
              </v-card-item>

              <v-card-text
                class="mt-3 text-grey"
                style="font-size: 15px;"
              >
                I build from Front to Back with a passion  <br>
                for building and innovating.
              </v-card-text>
            </v-card>

            <div/>
          </div>

          <div
            v-show="!$device.isMobileOrTablet"
            style="position: sticky; top: 88vh"
          >
            <v-hover
              v-for="s in sns"
              :key="s.name"
              v-slot="{ isHovering, props }"
            >
              <v-icon
                v-bind="props"
                class="mr-4"
                size="large"
                :icon="s.icon"
                :color="isHovering ? 'green' : 'grey'"
                target="_blank"
                @click="navigateTo(s.link, {external: true, open : {target: '_blank'}})"
              />
            </v-hover>
          </div>

        </v-col>

        <v-col lg="4" cols="12">
          <!-- About Me section -->
          <section id="about">
            <div class="pa-2 mt-16 my-lg-0">
              <p class="line-break">
                My tech journey kicked off at Interfit Worldwide Inc, a startup.
                I was the architect behind our web platform, transforming big ideas into digital solutions and driving significant traffic growth.
                Then at BASF, as part of a team, I shifted gears to develop software for scientific research, making complex experiments more accessible and efficient.
                Working there was like being a tech wizard for scientists, creating software that made their experiments and data analysis a breeze.
                <br><br>
                My experiences range from crafting a startup's web presence to collaborating on scientific software, all fueled by my love for coding and teamwork.
                If you've got a project or just want to talk tech, let's connect and create something great!
                <br><br>
                I enjoy playing tennis and League of Legends with my friends.
              </p>
            </div>
          </section>

          <!-- Experiment Section -->
          <section id="experiment" class="mt-16">
            <!-- PC and Pad -->
            <v-timeline
              v-show="!$device.isMobile"
              side="end"
            >
              <v-timeline-item
                v-for="exp in experiences"
                :key="exp.duration"
                dot-color="green"
                size="small"
                hide-opposite
              >
                <v-hover v-slot="{ isHovering, props }">
                  <v-card
                    v-bind="props"
                    class="pa-2"
                    :elevation="isHovering ? 12 : 0"
                    variant="text"
                    :href="exp.link"
                    target="_blank"
                    link
                  >
                    <v-card-item>
                      <v-card-title>
                        {{ exp.name }}
                        <v-icon
                          v-if="exp.company"
                          icon="mdi-arrow-top-right"
                          size="sm"
                          :class="isHovering ? 'pb-2 pl-2' : ''"
                        />
                      </v-card-title>
                      <v-card-subtitle>
                        {{ exp.company }} . {{ exp.level }}
                      </v-card-subtitle>

                      <v-card-subtitle>
                        {{ exp.duration }}
                      </v-card-subtitle>
                    <!-- <v-card-subtitle>
                      {{ exp.location }}
                    </v-card-subtitle> -->
                    </v-card-item>

                    <v-card-text>
                      <div v-for="line, key in exp.desc" :key="key">
                        - {{ line }}
                      </div>

                      <v-chip-group
                        class="mt-2"
                        selected-class="text-primary"
                      >
                        <v-chip
                          v-for="stack in exp.stacks"
                          :key="stack"
                          variant="tonal"
                          size="small"
                        >
                          {{ stack }}
                        </v-chip>
                      </v-chip-group>
                    </v-card-text>
                  </v-card>
                </v-hover>
              </v-timeline-item>
            </v-timeline>

            <!-- Mobile -->
            <div
              v-show="$device.isMobile"
            >
              <div
                class="mb-6 ml-4"
                style="font-size: 20px; font-weight: bold"
              >
                Experience
              </div>

              <v-hover
                v-for="exp in experiences"
                v-slot="{ isHovering, props }"
                :key="exp.duration"
              >
                <v-card
                  v-bind="props"
                  class=""
                  :elevation="isHovering ? 12 : 0"
                  variant="text"
                  :href="exp.link"
                  target="_blank"
                  link
                >
                  <v-card-item>
                    <v-card-title>
                      {{ exp.name }}
                      <v-icon
                        v-if="exp.company"
                        icon="mdi-arrow-top-right"
                        size="sm"
                        :class="isHovering ? 'pb-2 pl-2' : ''"
                      />
                    </v-card-title>
                    <v-card-subtitle>
                      <span v-if="exp.company">
                        {{ exp.company }} .
                      </span>
                      {{ exp.level }}
                    </v-card-subtitle>

                    <v-card-subtitle>
                      {{ exp.duration }}
                    </v-card-subtitle>
                  <!-- <v-card-subtitle>
                      {{ exp.location }}
                    </v-card-subtitle> -->
                  </v-card-item>

                  <v-card-text>
                    <div v-for="line, key in exp.desc" :key="key">
                      - {{ line }}
                    </div>

                    <v-chip-group
                      class="mt-2"
                      selected-class="text-primary"
                    >
                      <v-chip
                        v-for="stack in exp.stacks"
                        :key="stack"
                        variant="tonal"
                        size="small"
                      >
                        {{ stack }}
                      </v-chip>
                    </v-chip-group>
                  </v-card-text>
                </v-card>
              </v-hover>
            </div>

            <div class="mt-16 ml-4">
              <v-hover
                v-slot="{ isHovering, props }"
              >
                <v-btn
                  variant="plain"
                  v-bind="props"
                  size="default"
                  color="green"
                  href="/Resume.pdf"
                  target="_blank"
                >
                  View Full Résumé
                  <v-icon
                    icon="mdi-arrow-top-right"
                    size="sm"
                    :class="isHovering ? 'pb-2 pl-2' : ''"
                  />
                </v-btn>
              </v-hover>
            </div>
          </section>

          <!-- Skills section -->
          <section id="skills" class="mt-16 py-16">
            <div
              v-show="$device.isMobile"
              class="mb-6 ml-4"
              style="font-size: 20px; font-weight: bold"
            >
              Tech Stacks
            </div>
            <v-row justify="space-around">
              <v-col v-for="skill, key in skills" :key="key" lg="6" md="4" cols="12">
                <v-hover v-slot="{ isHovering, props }">
                  <v-card
                    v-bind="props"
                    :elevation="isHovering ? 12 : 0"
                    class="mb-8 mb-md-0"
                    variant="text"
                    link
                  >
                    <v-card-item>
                      <v-card-title class="text-center text-uppercase">
                        {{ key }}
                      </v-card-title>
                    </v-card-item>

                    <v-card-text class="d-flex justify-space-around py-2">
                      <v-tooltip
                        v-for="stack in skill"
                        :key="stack.name"
                        :text="stack.name"
                        location="bottom"
                      >
                        <template #activator="{ props }">
                          <v-avatar v-bind="props" rounded="0">
                            <v-img :src="stack.icon" :alt="stack.name"/>
                          </v-avatar>
                        </template>
                      </v-tooltip>
                    </v-card-text>
                  </v-card>
                </v-hover>
              </v-col>
            </v-row>
          </section>

          <!-- Portfolio section -->
          <section id="portfolio">

            <div class="mt-16">
              <div
                v-show="$device.isMobile"
                class="mb-6 ml-4"
                style="font-size: 20px; font-weight: bold"
              >
                Projects
              </div>
              <v-hover
                v-for="project in projects"
                v-slot="{ isHovering, props }"
                :key="project.title"
              >
                <v-card
                  v-bind="props"
                  :elevation="isHovering ? 12 : 0"
                  variant="text"
                  class="mb-6"
                  :href="project.link"
                  target="_blank"
                >
                  <v-img :src="project.image"/>

                  <v-card-item>
                    <v-card-title>
                      {{ project.title }}

                      <v-icon
                        icon="mdi-arrow-top-right"
                        size="sm"
                        :class="isHovering ? 'pb-2 pl-2' : ''"
                      />
                    </v-card-title>
                  </v-card-item>

                  <v-card-text>
                    {{ project.description }}

                    <v-chip-group
                      class="mt-2"
                      selected-class="text-primary"
                    >
                      <v-chip
                        v-for="stack in project.stacks"
                        :key="stack"
                        variant="tonal"
                        size="small"
                      >
                        {{ stack }}
                      </v-chip>
                    </v-chip-group>
                  </v-card-text>
                </v-card>
              </v-hover>
            </div>
          </section>
        </v-col>
      </v-row>

    </v-container>
  </v-main>
</template>

<script setup lang="ts">
import { useGoTo } from 'vuetify';

const menuItems = ref([
  { text: 'About', href: '#about' },
  { text: 'Skills', href: '#skills' },
  { text: 'Portfolio', href: '#portfolio' },
  // Add more items as needed
]);

const sns = ref([
  { name: 'LinkedIn', icon: 'mdi-linkedin', link: 'https://www.linkedin.com/in/jonathan-w-kim-0410/' },
  { name: 'GitHub', icon: 'mdi-github', link: 'https://github.com/whkim94' },
  { name: 'Instagram', icon: 'mdi-instagram', link: 'https://www.instagram.com/just_kimding/' }
]);

const experiences = ref([
  {
    name: 'Full-Stack Developer | DevOps',
    duration: 'Jul 2023 - Present',
    company: '',
    level: 'Freelance',
    location: 'remote',
    link: '',
    desc: '',
    stacks: []
  },
  {
    name: 'Full-Stack Developer | DevOps',
    duration: 'Jan 2023 - Jul 2023',
    company: 'Interfit Worldwide Inc',
    level: 'Freelance',
    location: 'Irvine / CA',
    link: 'https://interfit.co.kr/',
    desc: [
      'Oversaw development milestones from inception to final delivery.',
      'Boosted daily traffic by 50%.',
      'Implemented enhancements to both backend and frontend, improving performance and introducing new features.',
      'Established release and development environments using Docker.',
      'Deployed microservices using AWS Fargate.',
      'Created admin page leveraging Google Analytics API for monitoring daily website status.',
      'Configured GitHub Actions for automated CI/CD.'
    ],
    stacks: ['Nuxt.js', 'Django', 'Docker', 'AWS ECS']
  },
  {
    name: 'Full-Stack Developer',
    duration: 'May 2021 - Jan 2023',
    company: 'BASF',
    level: 'Freelance',
    location: 'San Diego / CA',
    link: 'https://www.basf.com/',
    desc: [
      'Oversaw full-cycle process, from designing layouts using Figma to building projects with Nuxt.js.',
      'Enhanced FastAPI backend and streamlined deployment using Docker and GitLab CI/CD.',
      'Created sophisticated tool for migrating from legacy software.',
      'Collaborated with scientists to develop research tools, increasing their work efficiency.',
      'Enhanced user experience by providing tailored suggestions.'
    ],
    stacks: ['Nuxt.js', 'FastAPI', 'Docker', 'GitLab']
  },
  {
    name: 'Full-Stack Developer',
    duration: 'Jan 2023 - Jul 2023',
    company: 'Interfit',
    level: 'Freelance',
    location: 'Irvine / CA',
    link: 'https://interfitclass.com/',
    desc: [
      'Developed web application from scratch as early team member at startup.',
      'Implemented Twilio\'s Video and Voice bi-directional conferencing features.',
      'Deployed Docker-based microservices, including Nginx, frontend, server, workers, and more, on AWS ECS.',
      'Configured scheduled tasks using Django Celery and AWS Cluster Scheduler.',
      'Introduced user chat functionality, leveraging Django with Daphne\'s ASGI and Socket.io.',
      'Utilized Nuxt.js for SEO optimization and Vuetify for enhanced UI/UX design.'
    ],
    stacks: ['Nuxt.js', 'Django', 'Twilio', 'Docker', 'AWS ECS']
  },
]);

const skills = ref({
  languages: [
    {
      name: 'Python', level: 'Expert', value: 90, icon: '/icons/python.svg'
    },
    {
      name: 'Javascript', level: 'Intermediate', value: 80, icon: '/icons/javascript.svg'
    },
    {
      name: 'Typescript', level: 'Intermediate', value: 80, icon: '/icons/typescript-icon.svg'
    },
  ],

  frontends: [
    {
      name: 'Vue.js', level: 'Advanced', value: 75, icon: '/icons/vue.svg'
    },
    {
      name: 'Nuxt.js', level: 'Intermediate', value: 70, icon: '/icons/nuxt-icon.svg'
    },
    {
      name: 'React.js', level: 'Intermediate', value: 75, icon: '/icons/react.svg'
    },
  ],

  backends: [
    {
      name: 'Django', level: 'Advanced', value: 75, icon: '/icons/django-icon.svg'
    },
    {
      name: 'FastAPI', level: 'Intermediate', value: 70, icon: '/icons/fastapi-icon.svg'
    },
    {
      name: 'Node.js', level: 'Intermediate', value: 75, icon: '/icons/nodejs-icon.svg'
    },
  ],

  dbms: [
    {
      name: 'PostgreSQL', level: 'Advanced', value: 75, icon: '/icons/postgresql.svg'
    },
    {
      name: 'MySQL', level: 'Intermediate', value: 70, icon: '/icons/mysql.svg'
    },
    {
      name: 'MongoDB', level: 'Intermediate', value: 75, icon: '/icons/mongodb-icon.svg'
    },
  ],

  styles: [
    {
      name: 'Vuetify', level: 'Advanced', value: 75, icon: '/icons/vuetifyjs.svg'
    },
    {
      name: 'TailwindCSS', level: 'Advanced', value: 75, icon: '/icons/tailwindcss-icon.svg'
    },
    {
      name: 'Bootstrap', level: 'Advanced', value: 75, icon: '/icons/bootstrap.svg'
    },
  ],

  tools: [
    {
      name: 'AWS', level: 'Intermediate', value: 75, icon: '/icons/aws.svg'
    },
    {
      name: 'Vercel', level: 'Intermediate', value: 75, icon: '/icons/vercel-icon.svg'
    },
    {
      name: 'Docker', level: 'Advanced', value: 75, icon: '/icons/docker-icon.svg'
    },
    {
      name: 'Twilio', level: 'Advanced', value: 75, icon: '/icons/twilio-icon.svg'
    },
  ],

  versions: [
    {
      name: 'GitHub', level: 'Advanced', value: 75, icon: '/icons/github-icon.svg'
    },
    {
      name: 'GitLab', level: 'Advanced', value: 75, icon: '/icons/gitlab.svg'
    },
  ]
});

const projects = ref([
  {
    title: 'Online Career Coaching Platform',
    description: 'Online career coaching platform that provides job seekers a way to connect to the career consulting professionals. Built with fullstack Django. Currently under refactoring for ver.2 with Nuxt.js and Django.',
    image: '/images/inClass_img.jpeg',
    link: 'https://interfitclass.com/',
    stacks: ['Django', 'Twilio', 'AWS ECS', 'Bootstrap']
  },
  {
    title: 'Job Boards',
    description: 'Job seeking platform that provides open positions to applicants. Targeting users are Korean-American applicants living in US or whom are intending to move in US.',
    image: '/images/interfit_img.jpeg',
    link: 'https://interfit.co.kr/',
    stacks: ['Nuxt.js', 'Django Rest Framework', 'AWS ECS']
  },
]);

const onClick = () => {
  const goTo = useGoTo();
  goTo('portfolio');
};
</script>

<style scoped>
.main-font {
  font-family: Inter, sans-serif;
  font-weight: 300;
}
</style>
