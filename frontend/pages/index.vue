<template>
  <v-main class="bg-grey-darken-4">
    <v-container class="py-16 main-font">
      <v-row justify="center" class="pt-8" no-gutters>
        <v-col lg="4" cols="12">
          <Header />
        </v-col>

        <v-col lg="4" cols="12">
          <!-- About Me section -->
          <section
            id="About"
            v-intersect="onIntersectAbout"
          >
            <div class="pa-2 mt-16 my-lg-0">
              <div
                class="mb-6 hidden-md-and-up"
                style="font-size: 20px; font-weight: bold"
              >
                About
              </div>

              <p class="line-break text-grey">
                I'm a Full Stack Developer with over 5 years of experience crafting digital solutions. My journey began at
                <v-hover v-slot="{ isHovering, props }">
                  <a
                    :class="['text-decoration-none', isHovering ? 'text-green-lighten-2' : 'text-white']"
                    v-bind="props"
                    href="https://interfit.co.kr/"
                    target="_blank"
                  >
                    Interfit Worldwide Inc.
                  </a>
                </v-hover>, where I built a full-stack platform from the ground up, integrating real-time video conferencing and chat features that drove significant user engagement.
                Later at
                <v-hover v-slot="{ isHovering, props }">
                  <a
                    :class="['text-decoration-none', isHovering ? 'text-green-lighten-2' : 'text-white']"
                    v-bind="props"
                    href="https://www.basf.com/"
                    target="_blank"
                  >
                    BASF
                  </a>
                </v-hover>, I developed scientific software solutions, implementing test-driven development practices and optimizing laboratory workflows that boosted scientist productivity by 20%.
                <br><br>
                Currently, I'm contributing to the modernization of legacy systems at Global Fashion Resource Inc., where I'm involved in architecting and implementing a comprehensive ERP solution. My expertise spans across modern frameworks like Vue.js, React, and Laravel, with a strong foundation in cloud technologies and CI/CD practices.
                <br><br>
                When I'm not coding, you can find me playing
                <v-hover v-slot="{ isHovering, props }">
                  <span
                    v-show="!isHovering"
                    class='text-white'
                    v-bind="props"
                  >
                    Tennis
                  </span>

                  <v-icon
                    v-show="isHovering"
                    v-bind="props"
                    icon="mdi-tennis-ball"
                    size="x-large"
                    class='text-green-lighten-2'
                  />
                </v-hover>
                or challenging friends to a game of
                <v-menu v-model="menu" location="bottom">
                  <template #activator="{ props }">
                    <span
                      class='text-white cursor-pointer'
                      v-bind="props"
                    >
                      Yahtzee
                    </span>
                  </template>

                  <v-img
                    width="250px"
                    src="https://i.gifer.com/B6nq.gif"
                  />
                </v-menu>.
                I'm always excited to tackle new challenges and collaborate on innovative projects!
              </p>
            </div>
          </section>

          <!-- Experiment Section -->
          <section id="Experiment" class="mt-16">
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
                    class=""
                    :elevation="isHovering ? 12 : 0"
                    variant="text"
                    link
                    @click="openExperienceDialog(exp)"
                  >
                    <v-card-item>
                      <v-card-title>
                        {{ exp.name }}
                        <v-icon
                          v-if="exp.company !== 'Freelance'"
                          icon="mdi-arrow-top-right"
                          size="sm"
                          :class="isHovering ? 'pb-2 pl-2' : ''"
                        />
                      </v-card-title>
                      <v-card-subtitle>
                        {{ exp.company }}
                      </v-card-subtitle>

                      <v-card-subtitle>
                        {{ exp.duration }}
                      </v-card-subtitle>
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
                class="mb-6 ml-2"
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
                  <v-card-item class="px-2">
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
                      {{ exp.company }}
                    </v-card-subtitle>

                    <v-card-subtitle>
                      {{ exp.duration }}
                    </v-card-subtitle>
                  </v-card-item>

                  <v-card-text class="px-2">
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
          <section id="Stacks" class="mt-16 py-16">
            <div
              v-show="$device.isMobile"
              class="mb-6 ml-2"
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
          <section id="Project">

            <div class="mt-16">
              <div
                v-show="$device.isMobile"
                class="mb-6 ml-2"
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
                  target="_blank"
                  @click="openProjectDialog(project)"
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

          <Footer />
        </v-col>
      </v-row>
    </v-container>

    <v-dialog
      v-model="projectDialog"
      width="auto"
    >
      <v-card>
        <v-card-item class="pa-3">
          <v-card-title class="mx-2 mb-4 d-flex justify-space-between">
            {{ projectObject.title }}
            <v-hover
              :key="projectObject.title"
              v-slot="{ isHovering, props }"
            >
              <v-icon
                v-bind="props"
                class="my-1"
                size="small"
                icon="mdi-github"
                :color="isHovering ? 'green' : 'black'"
                target="_blank"
                @click="navigateTo(projectObject.github, {external: true, open : {target: '_blank'}})"
              />
            </v-hover>
          </v-card-title>

          <iframe
            :width="screenWidth" height='315'
            :src="projectObject.video"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          />
        </v-card-item>

        <v-card-actions>
          <v-btn
            class="ms-auto"
            text="Close"
            @click="projectDialog = false"
          />
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog
      v-model="experienceDialog"
      width="65vw"
    >
      <v-card v-if="currentExperience">
        <v-card-title class="d-flex justify-space-between pa-4">
          {{ currentExperience.name }} at {{ currentExperience.company }}
          <v-btn
            icon="mdi-close"
            variant="text"
            @click="experienceDialog = false"
          />
        </v-card-title>

        <v-card-text>
          <v-carousel
            v-if="currentExperience.images"
            cycle
            height="400"
            hide-delimiter-background
            show-arrows="hover"
          >
            <v-carousel-item
              v-for="(image, index) in currentExperience.images"
              :key="index"
            >
              <v-img
                :src="image"
                cover
                height="400"
                class="rounded-lg cursor-pointer"
                @click="openFullImage(image)"
              />
            </v-carousel-item>
          </v-carousel>

          <v-divider class="my-4"/>

          <!-- <div class="text-body-1 mb-4">
            <div v-for="(desc, index) in currentExperience.desc" :key="index" class="mb-2">
              • {{ desc }}
            </div>
          </div> -->

          <v-chip-group>
            <v-chip
              v-for="stack in currentExperience.stacks"
              :key="stack"
              color="green"
              variant="outlined"
              class="mr-2"
            >
              {{ stack }}
            </v-chip>
          </v-chip-group>
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-dialog
      v-model="fullImageDialog"
      fullscreen
      :scrim="false"
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar
          dark
          color="black"
        >
          <v-btn
            icon
            dark
            @click="fullImageDialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Project Image</v-toolbar-title>
          <v-spacer/>
        </v-toolbar>
        <v-card-text class="pa-0 d-flex align-center justify-center" style="height: calc(100vh - 64px); background-color: black;">
          <v-img
            :src="selectedImage"
            max-height="95vh"
            contain
          />
        </v-card-text>
      </v-card>
    </v-dialog>

    <SpeedInsights/>
  </v-main>
</template>

<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/nuxt';

const screenWidth = ref(window.screen.width >= 768 ? 560 : 300);

const menu = ref(false);

const isIntersectingAbout = ref(false);
// const isIntersectingExperiment = ref(false);
// const isIntersectingStacks = ref(false);
// const isIntersectingProject = ref(false);

const projectDialog = ref(false);
const projectObject = ref({
  title: '',
  description: '',
  image: '',
  link: '',
  github: '',
  video: '',
  stacks: []
});

const experienceDialog = ref(false);
const currentExperience = ref(null);

const fullImageDialog = ref(false);
const selectedImage = ref('');

const experiences = ref([
  {
    name: 'Full-Stack Developer',
    duration: 'Aug 2024 - April 2025',
    company: 'Global Fashion Resource Inc.',
    location: 'Los Angeles / CA',
    link: '',
    images: [
      '/images/erp/erp-1.png',
      '/images/erp/erp-2.png',
      '/images/erp/erp-3.png',
      '/images/erp/erp-4.png',
      '/images/erp/erp-5.png',
      '/images/erp/erp-6.png',
      '/images/erp/erp-7.png',
      '/images/erp/erp-8.png',
      '/images/erp/erp-9.png',
      '/images/erp/erp-10.png',
      '/images/erp/erp-11.png',
    ],
    desc: [
      'Managing migration from legacy Microsoft Access-based system to modern ERP solution using Vue.js and Laravel',
      'Architecting and implementing new database schema for complex legacy data structures',
      'Developing custom data transformation scripts for data cleaning and normalization',
      'Creating intuitive interfaces for Sales/Purchase Orders, Inventory Management, and Financial Reporting',
      'Implementing robust data validation and error handling systems',
      'Establishing automated testing protocols for continuous deployment',
      'Providing training and documentation for user adoption'
    ],
    stacks: ['Vue.js', 'Laravel', 'MySQL', 'Docker']
  },
  {
    name: 'Senior Full-Stack Developer',
    duration: 'Jan 2023 - Jul 2024',
    company: 'Interfit Worldwide Inc.',
    location: 'Irvine / CA',
    link: 'https://interfit.co.kr/',
    desc: [
      'Modernized backend from monolithic Python/Django to API-driven Django Rest Framework',
      'Upgraded frontend to TypeScript/React.js/Next.js, improving page load times by 30%',
      'Implemented microservices architecture using AWS ECS, reducing deployment times by 40%',
      'Established CI/CD pipeline with GitHub Actions, reducing deployment errors by 60%',
      'Optimized Google SEO strategies, boosting daily organic traffic by 50%',
      'Containerized development and production environments using Docker Compose'
    ],
    stacks: ['Next.js', 'React.js', 'Django Rest Framework', 'Docker', 'AWS ECS']
  },
  {
    name: 'Full-Stack Developer',
    duration: 'May 2021 - Jan 2023',
    company: 'BASF',
    location: 'San Diego / CA',
    link: 'https://www.basf.com/',
    desc: [
      'Oversaw full-cycle process, from designing layouts using Figma to building projects with Vue.js/Nuxt.js/Javascript/Typescript.',
      'Enhanced Python/FastAPI backend and streamlined deployment using Docker and GitLab CI/CD.',
      'Implemented test code for Javascript/Typescript/UI components using Jest/Javascript following TDD methodology.',
      'Orchestrated new projects with staff developer guiding entry developers.',
      'Collaborated with scientists to deliver lab tools using Vue.js/Nuxt.js/Typescript/Javascript, increasing their work efficiency.',
      'Suggested team for better local development experience adopting Docker environment.',
      'Enhanced user experience by providing tailored suggestions.'
    ],
    stacks: ['Nuxt.js', 'Vue.js', 'FastAPI', 'Docker', 'GitLab']
  },
  {
    name: 'Full-Stack Developer',
    duration: 'Sep 2019 - Sep 2021',
    company: 'Interfit Worldwide Inc.',
    location: 'Irvine / CA',
    link: 'https://interfitclass.com/',
    desc: [
      'Built full-stack Python/Django web application from scratch as an early member at startup.',
      'Implemented Twilio\'s Video and Voice bi-directional conferencing features.',
      'Established application infrastructure on AWS ECS.',
      'Managed incoming traffic placing AWS Elastic Load Balancer and Nginx.',
      'Configured scheduled tasks using Python/Django Celery and AWS Cluster Scheduler.',
      'Introduced user chat functionality, leveraging Python/Django with Python/Daphne\'s ASGI and Javascript/Socket.io.',
      'Integrated Google Analytics for tracking user experience'
    ],
    stacks: ['Nuxt.js', 'Vue.js', 'Django', 'Twilio', 'Docker', 'AWS ECS']
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
    {
      name: 'PHP', level: 'Intermediate', value: 70, icon: '/icons/php.svg'
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
    {
      name: 'Laravel', level: 'Intermediate', value: 75, icon: '/icons/laravel-icon.svg'
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
    title: 'Video Conference & Live Chat',
    description: 'Video Conference using Twilio API & Live Chat using Web Socket and Daphne Server protocol',
    image: '/images/twilio_video.png',
    link: '',
    github: 'https://github.com/whkim94/Twilio-Video-Conference-Websocket-Chat',
    video: 'https://www.youtube.com/embed/V4zodvgB9Ok?si=Zjn2P9qxRK9zO0MX',
    stacks: ['Twilio', 'Django', 'Daphne', 'Web Socket', 'AWS Fargate']
  },
  {
    title: 'Online Career Coaching Platform',
    description: 'Online career coaching platform that provides job seekers a way to connect to the career consulting professionals. Built with fullstack Django. Currently under refactoring for ver.2 with Nuxt.js and Django.',
    image: '/images/inClass_img.jpeg',
    link: 'https://interfitclass.com/',
    github: '',
    video: '',
    stacks: ['Django', 'Twilio', 'AWS ECS', 'Bootstrap']
  },
  {
    title: 'Job Boards',
    description: 'Job seeking platform that provides open positions to applicants. Targeting users are Korean-American applicants living in US or whom are intending to move in US.',
    image: '/images/interfit_img.jpeg',
    link: 'https://interfit.co.kr/',
    github: '',
    video: '',
    stacks: ['Nuxt.js', 'Django Rest Framework', 'AWS ECS']
  },
]);

const onIntersectAbout = (isIntersecting, entries, observer) => {
  isIntersectingAbout.value = true;
};

const openProjectDialog = (project:object) => {
  projectObject.value = project;

  if (projectObject.value.link) window.open(projectObject.value.link, '_blank');

  else projectDialog.value = true;
};

const openExperienceDialog = (experience) => {
  currentExperience.value = experience;
  if (experience.images) {
    experienceDialog.value = true;
  } else if (experience.link) {
    window.open(experience.link, '_blank');
  }
};

const openFullImage = (image: string) => {
  selectedImage.value = image;
  fullImageDialog.value = true;
};
</script>

<style scoped>
.main-font {
  font-family: Inter, sans-serif;
  font-weight: 300;
}

.cursor-pointer {
  cursor: pointer;
}

.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
  transition: transform .3s ease-in-out;
}
</style>
