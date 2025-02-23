<template>
  <v-main class="bg-grey-darken-4">
    <v-container class="py-16 main-font">
      <v-row justify="center" class="pt-8 px-md-16" no-gutters>
        <v-col lg="4" cols="12" >
          <!-- Name section -->
          <div
            :class="$device.isMobileOrTablet ? 'name-mobile' : 'name-pc'"
          >
            <v-card variant="text">
              <v-card-item class="px-2">
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
                class="mt-3 px-2 text-grey"
                style="font-size: 15px;"
              >
                I code from Front to Back with a passion  <br>
                for building and innovating..
              </v-card-text>
            </v-card>
          </div>

          <div
            class="px-2 hidden-md-and-down"
            style="position: sticky; top: 30vh"
          >
            <div
              v-for="menu in menuList"
              :key="menu"
              class="mb-4"
            >
              <v-hover
                v-slot="{ isHovering, props }"
              >
                <v-icon
                  class="text-green-lighten-1 mr-4"
                  icon="mdi-tennis-ball"
                  size="small"
                />
                <a
                  v-bind="props"
                  :class="['text-decoration-none', 'cursor-pointer', isHovering ? 'text-green-lighten-2' : 'text-white']"
                  variant="plain"
                  @click="onClick(`#${menu}`)"
                >
                  {{ menu }}
                </a>
              </v-hover>
            </div>
          </div>

          <div
            :class="$device.isMobileOrTablet ? 'sns-mobile' : 'sns-pc'"
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
                My tech journey kicked off at
                <v-hover
                  v-slot="{ isHovering, props }"
                >
                  <a
                    :class="['text-decoration-none', isHovering ? 'text-green-lighten-2' : 'text-white']"
                    v-bind="props"
                    href="https://interfit.co.kr/"
                    target="_blank"
                  >
                    Interfit Worldwide Inc.
                  </a>
                </v-hover>, a startup.
                I was the architect behind our web platform, transforming big ideas into digital solutions and driving significant traffic growth.
                Then at
                <v-hover
                  v-slot="{ isHovering, props }"
                >
                  <a
                    :class="['text-decoration-none', isHovering ? 'text-green-lighten-2' : 'text-white']"
                    v-bind="props"
                    href="https://www.basf.com/"
                    target="_blank"
                  >
                    BASF
                  </a>
                </v-hover>
                , as part of a team, I shifted gears to develop software for scientific research, making complex experiments more accessible and efficient.
                Working there was like being a tech wizard for scientists, creating software that made their experiments and data analysis a breeze.
                <br><br>
                My experiences range from crafting a startup's web presence to collaborating on scientific software, all fueled by my love for coding and teamwork.
                If you've got a project or just want to talk tech, let's connect and create something great!
                <br><br>
                To talk about something other than my career or coding stuff, I enjoy playing
                <v-hover
                  v-slot="{ isHovering, props }"
                >
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

                and

                <v-menu
                  v-model="menu"
                  location="bottom"
                >
                  <template #activator="{ props }">
                    <span
                      class='text-white cursor-pointer'
                      v-bind="props"
                    >
                      Yahtzee Dice
                    </span>
                  </template>

                  <v-img
                    width="250px"
                    src="https://i.gifer.com/B6nq.gif"
                  />

                </v-menu>
                with my friends.
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

          <div class="pt-16 pb-8 px-2">
            <p
              class="text-grey"
              style="font-size: 14px;"
            >
              Design inspired by this
              <v-hover
                v-slot="{ isHovering, props }"
              >
                <a
                  :class="['text-decoration-none', isHovering ? 'text-green-lighten-2' : 'text-white']"
                  v-bind="props"
                  href="https://brittanychiang.com/"
                  target="_blank"
                >
                  wonderful developer
                </a>
              </v-hover>.

              Coded in
              <v-hover
                v-slot="{ isHovering, props }"
              >
                <a
                  :class="['text-decoration-none', isHovering ? 'text-green-lighten-2' : 'text-white']"
                  v-bind="props"
                  href="https://code.visualstudio.com/"
                  target="_blank"
                >
                  Visual Studio Code
                </a>
              </v-hover>
              by yours truly.
              Built with
              <v-hover
                v-slot="{ isHovering, props }"
              >
                <a
                  :class="['text-decoration-none', isHovering ? 'text-green-lighten-2' : 'text-white']"
                  v-bind="props"
                  href="https://nuxt.com/"
                  target="_blank"
                >
                  Nuxt.js
                </a>
              </v-hover>
              and
              <v-hover
                v-slot="{ isHovering, props }"
              >
                <a
                  :class="['text-decoration-none', isHovering ? 'text-green-lighten-2' : 'text-white']"
                  v-bind="props"
                  href="https://vuetifyjs.com/"
                  target="_blank"
                >
                  Vuetify
                </a>
              </v-hover>
              , deployed with
              <v-hover
                v-slot="{ isHovering, props }"
              >
                <a
                  :class="['text-decoration-none', isHovering ? 'text-green-lighten-2' : 'text-white']"
                  v-bind="props"
                  href="https://vercel.com/"
                  target="_blank"
                >
                  Vercel
                </a>
              </v-hover>.
              All text is set in the
              <v-hover
                v-slot="{ isHovering, props }"
              >
                <a
                  :class="['text-decoration-none', isHovering ? 'text-green-lighten-2' : 'text-white']"
                  v-bind="props"
                  href="https://rsms.me/inter/"
                  target="_blank"
                >
                  Inter
                </a>
              </v-hover>
              typeface.
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <v-dialog
      v-model="projectDialog"
      width="auto"
    >
      <v-card

      >
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

    <SpeedInsights/>
  </v-main>
</template>

<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/nuxt';
import { useGoTo } from 'vuetify';

const screenWidth = ref(window.screen.width >= 768 ? 560 : 300);

const goTo = useGoTo();

const menu = ref(false);

const isIntersectingAbout = ref(false);
const isIntersectingExperiment = ref(false);
const isIntersectingStacks = ref(false);
const isIntersectingProject = ref(false);

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

const menuList = ref(['About', 'Experiment', 'Stacks', 'Project']);

const sns = ref([
  { name: 'LinkedIn', icon: 'mdi-linkedin', link: 'https://www.linkedin.com/in/jonathan-w-kim-0410/' },
  { name: 'GitHub', icon: 'mdi-github', link: 'https://github.com/whkim94' },
  { name: 'Instagram', icon: 'mdi-instagram', link: 'https://www.instagram.com/just_kimding/' }
]);

const experiences = ref([
  {
    name: 'Full-Stack Developer | DevOps',
    duration: 'Jul 2023 - Present',
    company: 'Freelance',
    location: 'remote',
    link: '',
    desc: '',
    stacks: []
  },
  {
    name: 'Full-Stack Developer | DevOps',
    duration: 'Jan 2023 - Jul 2023',
    company: 'Interfit Worldwide Inc. Freelance',
    location: 'Irvine / CA',
    link: 'https://interfit.co.kr/',
    desc: [
      'Updated Python/Django full-stack to Python/Django Rest Framework to provide API.',
      'Improved performance updating frontend to React.js/Next.js/Typescript/Javascript.',
      'Managed daily tasks within an Agile environment.',
      'Established release and development environments using Docker Compose.',
      'Configured GitHub Actions for automated CI/CD.',
      'Deployed microservices using AWS ECS.',
      'Boosted daily traffic by 50% optimizing Google SEO.'
    ],
    stacks: ['Next.js', 'React.js', 'Django', 'Docker', 'AWS ECS']
  },
  {
    name: 'Full-Stack Developer',
    duration: 'May 2021 - Jun 2023',
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

const onClick = (section:string) => {
  goTo(section);
};

const openProjectDialog = (project:object) => {
  projectObject.value = project;

  if (projectObject.value.link) window.open(projectObject.value.link, '_blank');

  else projectDialog.value = true;
};
</script>

<style scoped>
.main-font {
  font-family: Inter, sans-serif;
  font-weight: 300;
}

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
