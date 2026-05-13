<template>
  <v-main class="portfolio-bg">
    <v-container class="py-16 main-font portfolio-container">
      <v-row justify="center" class="pt-4 pt-lg-8" no-gutters>
        <v-col cols="12" lg="4" xl="4" class="sidebar-col">
          <Header />
        </v-col>

        <v-col cols="12" lg="8" xl="8">
          <!-- About -->
          <section
            id="About"
            v-intersect="onIntersectAbout"
            class="content-column"
          >
            <div class="pa-2 mt-12 mt-lg-0">
              <header class="section-head section-head--inline mb-8">
                <span class="section-kicker">01</span>
                <div>
                  <h2 class="section-title">About</h2>
                  <p class="section-sub mt-1">
                    Full-stack product engineer focused on clarity, performance, and maintainable systems.
                  </p>
                </div>
              </header>

              <p class="line-break about-body">
                I'm a Full Stack Developer with over 5 years of experience crafting digital solutions. My journey began at
                <v-hover v-slot="{ isHovering, props }">
                  <a
                    :class="['text-decoration-none', isHovering ? 'text-green-lighten-2' : 'text-high-emphasis']"
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
                    :class="['text-decoration-none', isHovering ? 'text-green-lighten-2' : 'text-high-emphasis']"
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
                    class="text-high-emphasis"
                    v-bind="props"
                  >
                    Tennis
                  </span>

                  <v-icon
                    v-show="isHovering"
                    v-bind="props"
                    icon="mdi-tennis-ball"
                    size="x-large"
                    class="text-green-lighten-2"
                  />
                </v-hover>
                or challenging friends to a game of
                <v-menu v-model="menu" location="bottom">
                  <template #activator="{ props }">
                    <span
                      class="text-high-emphasis cursor-pointer"
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

          <!-- Experience -->
          <section id="Experience" class="content-column mt-20">
            <header class="section-head mb-10">
              <span class="section-kicker">02</span>
              <div>
                <h2 class="section-title">Experience</h2>
                <p class="section-sub mt-1">
                  Roles where I shipped end-to-end features, led refactors, and improved how teams deliver.
                </p>
              </div>
            </header>

            <div class="experience-stack">
              <button
                v-for="exp in experiences"
                :key="exp.duration"
                type="button"
                class="experience-card"
                @click="openExperienceDialog(exp)"
              >
                <div class="experience-card__accent" aria-hidden="true" />

                <div class="experience-card__top">
                  <div class="experience-card__titles">
                    <h3 class="experience-card__role text-high-emphasis">
                      {{ exp.name }}
                    </h3>
                    <p class="experience-card__company text-medium-emphasis mb-0">
                      {{ exp.company }}
                    </p>
                  </div>
                  <div class="experience-card__meta">
                    <v-chip
                      size="small"
                      variant="outlined"
                      class="experience-chip text-green-lighten-1"
                    >
                      {{ exp.duration }}
                    </v-chip>
                    <span
                      v-if="exp.location"
                      class="experience-location text-caption text-medium-emphasis"
                    >
                      <v-icon icon="mdi-map-marker-outline" size="14" class="mr-1 text-medium-emphasis" />
                      {{ exp.location }}
                    </span>
                  </div>
                </div>

                <ul class="experience-card__bullets">
                  <li
                    v-for="(line, key) in exp.desc.slice(0, 3)"
                    :key="key"
                    class="text-body-2 text-medium-emphasis"
                  >
                    {{ line }}
                  </li>
                </ul>
                <p
                  v-if="exp.desc.length > 3"
                  class="text-caption text-disabled mb-0 experience-more"
                >
                  +{{ exp.desc.length - 3 }} more highlights — click for details
                </p>

                <div class="experience-card__footer">
                  <div class="chip-row">
                    <v-chip
                      v-for="stack in exp.stacks"
                      :key="stack"
                      size="small"
                      variant="tonal"
                      class="stack-chip"
                    >
                      {{ stack }}
                    </v-chip>
                  </div>
                  <span class="experience-card__cta text-green-lighten-1">
                    <span v-if="exp.images">View gallery</span>
                    <span v-else-if="exp.link">Open company</span>
                    <span v-else>Details</span>
                    <v-icon icon="mdi-arrow-top-right" size="18" class="ml-1" />
                  </span>
                </div>
              </button>
            </div>

            <div class="mt-12">
              <v-btn
                class="resume-btn"
                variant="outlined"
                color="green-lighten-1"
                href="/Resume.pdf"
                target="_blank"
                rounded="lg"
                size="large"
              >
                View full résumé (PDF)
                <v-icon icon="mdi-file-document-outline" end />
              </v-btn>
            </div>
          </section>

          <!-- Skills -->
          <section id="Stacks" class="content-column mt-20 py-12">
            <header class="section-head mb-10">
              <span class="section-kicker">03</span>
              <div>
                <h2 class="section-title">Tech stacks</h2>
                <p class="section-sub mt-1">
                  Tools I reach for regularly — depth varies by project, but these are home base.
                </p>
              </div>
            </header>

            <v-row class="skill-grid" dense>
              <v-col
                v-for="(skillList, key) in skills"
                :key="key"
                cols="12"
                md="6"
              >
                <v-card class="skill-panel" rounded="xl" variant="flat">
                  <v-card-item class="pb-2">
                    <v-card-title class="skill-panel__title text-uppercase text-caption">
                      {{ key }}
                    </v-card-title>
                  </v-card-item>
                  <v-card-text class="pt-0">
                    <div
                      v-for="stack in skillList"
                      :key="stack.name"
                      class="skill-row"
                    >
                      <div class="skill-row__icon">
                        <v-tooltip :text="stack.name" location="top">
                          <template #activator="{ props: tip }">
                            <div
                              v-bind="tip"
                              class="skill-icon-shell"
                              role="presentation"
                            >
                              <div class="skill-icon-frame">
                                <v-img
                                  :src="stack.icon"
                                  :alt="stack.name"
                                  width="28"
                                  height="28"
                                  contain
                                />
                              </div>
                            </div>
                          </template>
                        </v-tooltip>
                      </div>
                      <div class="skill-row__body">
                        <div class="d-flex align-center justify-space-between mb-1">
                          <span class="text-body-2 text-high-emphasis">{{ stack.name }}</span>
                          <span class="text-caption text-medium-emphasis">{{ stack.level }}</span>
                        </div>
                        <v-progress-linear
                          :model-value="stack.value"
                          height="6"
                          rounded
                          color="green-lighten-1"
                          bg-color="rgba(255,255,255,0.08)"
                        />
                      </div>
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </section>

          <!-- Projects -->
          <section id="Projects" class="content-column mt-8">
            <header class="section-head mb-10">
              <span class="section-kicker">04</span>
              <div>
                <h2 class="section-title">Projects</h2>
                <p class="section-sub mt-1">
                  Selected work — production systems, integrations, and platforms I have owned or co-built.
                </p>
              </div>
            </header>

            <div class="project-grid">
              <article
                v-for="project in projects"
                :key="project.title"
                class="project-card"
                role="button"
                tabindex="0"
                @click="openProjectDialog(project)"
                @keydown.enter="openProjectDialog(project)"
              >
                <div class="project-card__media">
                  <v-img
                    :src="project.image"
                    :alt="project.title"
                    cover
                    class="project-card__img"
                  />
                  <div class="project-card__scrim" />
                  <div class="project-card__media-title">
                    <h3 class="text-h6 text-high-emphasis font-weight-medium mb-0">
                      {{ project.title }}
                    </h3>
                    <v-icon icon="mdi-arrow-top-right" size="22" class="text-green-lighten-1 project-card__arrow" />
                  </div>
                </div>
                <div class="project-card__body">
                  <p class="text-body-2 text-medium-emphasis mb-4">
                    {{ project.description }}
                  </p>
                  <div class="chip-row">
                    <v-chip
                      v-for="s in project.stacks"
                      :key="s"
                      size="small"
                      variant="tonal"
                      class="stack-chip"
                    >
                      {{ s }}
                    </v-chip>
                  </div>
                </div>
              </article>
            </div>
          </section>

          <!-- Blog -->
          <section id="Blog" class="content-column mt-20">
            <header class="section-head mb-10">
              <span class="section-kicker">05</span>
              <div>
                <h2 class="section-title">Blog</h2>
                <p class="section-sub mt-1">
                  Notes, write-ups, and things I'm learning — latest posts.
                </p>
              </div>
            </header>

            <div id="soro-blog" class="soro-blog-shell" />
          </section>

          <Footer />
        </v-col>
      </v-row>
    </v-container>

    <v-dialog
      v-model="projectDialog"
      max-width="920"
      scrim-class="dialog-scrim"
    >
      <v-card class="dialog-surface" rounded="xl">
        <v-card-item class="pa-6 pb-2">
          <div class="d-flex align-start justify-space-between gap-4 flex-wrap">
            <h2 class="text-h5 text-high-emphasis font-weight-medium pr-4">
              {{ projectObject.title }}
            </h2>
            <v-btn
              v-if="projectObject.github"
              icon="mdi-github"
              variant="text"
              color="green-lighten-1"
              :href="projectObject.github"
              target="_blank"
              rel="noopener noreferrer"
            />
          </div>
        </v-card-item>

        <v-card-text class="px-6 pb-6">
          <div
            v-if="projectObject.video"
            class="video-shell rounded-lg overflow-hidden"
          >
            <iframe
              :width="screenWidth"
              height="315"
              :src="projectObject.video"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            />
          </div>
          <p
            v-else
            class="text-medium-emphasis mb-0"
          >
            No demo video for this project — use the GitHub link above if available.
          </p>
        </v-card-text>

        <v-card-actions class="px-6 pb-6">
          <v-btn
            variant="text"
            color="grey-lighten-1"
            @click="projectDialog = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog
      v-model="experienceDialog"
      max-width="880"
      scrim-class="dialog-scrim"
    >
      <v-card v-if="currentExperience" class="dialog-surface" rounded="xl">
        <v-card-item class="pa-6 pb-4">
          <div class="d-flex align-start justify-space-between gap-4">
            <div>
              <h2 class="text-h5 text-high-emphasis font-weight-medium">
                {{ currentExperience.name }}
              </h2>
              <p class="text-body-1 text-green-lighten-1 mb-1">
                {{ currentExperience.company }}
              </p>
              <p class="text-caption text-medium-emphasis mb-0">
                {{ currentExperience.duration }}
                <template v-if="currentExperience.location">
                  · {{ currentExperience.location }}
                </template>
              </p>
            </div>
            <v-btn
              icon="mdi-close"
              variant="text"
              color="grey-lighten-1"
              @click="experienceDialog = false"
            />
          </div>
        </v-card-item>

        <v-card-text class="px-6 pb-6">
          <v-carousel
            v-if="currentExperience.images?.length"
            cycle
            height="380"
            hide-delimiter-background
            show-arrows="hover"
            class="experience-carousel rounded-xl"
          >
            <v-carousel-item
              v-for="(image, index) in currentExperience.images"
              :key="index"
            >
              <v-img
                :src="image"
                cover
                height="380"
                class="cursor-pointer"
                @click="openFullImage(image)"
              />
            </v-carousel-item>
          </v-carousel>

          <v-divider
            v-if="currentExperience.images?.length"
            class="my-6 opacity-25"
          />

          <ul class="experience-dialog-bullets mb-6">
            <li
              v-for="(desc, index) in currentExperience.desc"
              :key="index"
              class="text-body-2 text-medium-emphasis mb-2"
            >
              {{ desc }}
            </li>
          </ul>

          <div class="chip-row">
            <v-chip
              v-for="stack in currentExperience.stacks"
              :key="stack"
              variant="outlined"
              color="green-lighten-1"
              size="small"
              class="mr-2 mb-2"
            >
              {{ stack }}
            </v-chip>
          </div>

          <div v-if="currentExperience.link" class="mt-6">
            <v-btn
              color="green-lighten-1"
              variant="tonal"
              :href="currentExperience.link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit related site
              <v-icon end icon="mdi-open-in-new" />
            </v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-dialog
      v-model="fullImageDialog"
      fullscreen
      :scrim="false"
      transition="dialog-bottom-transition"
    >
      <v-card class="bg-black">
        <v-toolbar color="black" density="comfortable" class="gallery-toolbar">
          <v-btn icon variant="text" color="grey-lighten-1" @click="fullImageDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title class="text-high-emphasis">Gallery</v-toolbar-title>
          <v-spacer />
        </v-toolbar>
        <v-card-text class="pa-0 d-flex align-center justify-center gallery-stage">
          <v-img
            :src="selectedImage"
            max-height="95vh"
            contain
          />
        </v-card-text>
      </v-card>
    </v-dialog>

    <SpeedInsights />
  </v-main>
</template>

<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/nuxt';

type Experience = {
  name: string;
  duration: string;
  company: string;
  location?: string;
  link?: string;
  images?: string[];
  desc: string[];
  stacks: string[];
};

type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
  github: string;
  video: string;
  stacks: string[];
};

type SkillItem = {
  name: string;
  level: string;
  value: number;
  icon: string;
};

const screenWidth = ref(typeof window !== 'undefined' && window.innerWidth >= 768 ? 560 : 300);

const menu = ref(false);

const isIntersectingAbout = ref(false);

const projectDialog = ref(false);
const projectObject = ref<Project>({
  title: '',
  description: '',
  image: '',
  link: '',
  github: '',
  video: '',
  stacks: []
});

const experienceDialog = ref(false);
const currentExperience = ref<Experience | null>(null);

const fullImageDialog = ref(false);
const selectedImage = ref('');

const experiences = ref<Experience[]>([
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

const skills = ref<Record<string, SkillItem[]>>({
  languages: [
    { name: 'Python', level: 'Expert', value: 90, icon: '/icons/python.svg' },
    { name: 'Javascript', level: 'Intermediate', value: 80, icon: '/icons/javascript.svg' },
    { name: 'Typescript', level: 'Intermediate', value: 80, icon: '/icons/typescript-icon.svg' },
    { name: 'PHP', level: 'Intermediate', value: 70, icon: '/icons/php.svg' },
  ],
  frontends: [
    { name: 'Vue.js', level: 'Advanced', value: 75, icon: '/icons/vue.svg' },
    { name: 'Nuxt.js', level: 'Intermediate', value: 70, icon: '/icons/nuxt-icon.svg' },
    { name: 'React.js', level: 'Intermediate', value: 75, icon: '/icons/react.svg' },
  ],
  backends: [
    { name: 'Django', level: 'Advanced', value: 75, icon: '/icons/django-icon.svg' },
    { name: 'FastAPI', level: 'Intermediate', value: 70, icon: '/icons/fastapi-icon.svg' },
    { name: 'Node.js', level: 'Intermediate', value: 75, icon: '/icons/nodejs-icon.svg' },
    { name: 'Laravel', level: 'Intermediate', value: 75, icon: '/icons/laravel-icon.svg' },
  ],
  dbms: [
    { name: 'PostgreSQL', level: 'Advanced', value: 75, icon: '/icons/postgresql.svg' },
    { name: 'MySQL', level: 'Intermediate', value: 70, icon: '/icons/mysql.svg' },
    { name: 'MongoDB', level: 'Intermediate', value: 75, icon: '/icons/mongodb-icon.svg' },
  ],
  styles: [
    { name: 'Vuetify', level: 'Advanced', value: 75, icon: '/icons/vuetifyjs.svg' },
    { name: 'TailwindCSS', level: 'Advanced', value: 75, icon: '/icons/tailwindcss-icon.svg' },
    { name: 'Bootstrap', level: 'Advanced', value: 75, icon: '/icons/bootstrap.svg' },
  ],
  tools: [
    { name: 'AWS', level: 'Intermediate', value: 75, icon: '/icons/aws.svg' },
    { name: 'Vercel', level: 'Intermediate', value: 75, icon: '/icons/vercel-icon.svg' },
    { name: 'Docker', level: 'Advanced', value: 75, icon: '/icons/docker-icon.svg' },
    { name: 'Twilio', level: 'Advanced', value: 75, icon: '/icons/twilio-icon.svg' },
  ],
  versions: [
    { name: 'GitHub', level: 'Advanced', value: 75, icon: '/icons/github-icon.svg' },
    { name: 'GitLab', level: 'Advanced', value: 75, icon: '/icons/gitlab.svg' },
  ]
});

const projects = ref<Project[]>([
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

const onIntersectAbout = () => {
  isIntersectingAbout.value = true;
};

const openProjectDialog = (project: Project) => {
  projectObject.value = project;

  if (projectObject.value.link) {
    window.open(projectObject.value.link, '_blank');
  } else {
    projectDialog.value = true;
  }
};

const openExperienceDialog = (experience: Experience) => {
  currentExperience.value = experience;
  experienceDialog.value = true;
};

const openFullImage = (image: string) => {
  selectedImage.value = image;
  fullImageDialog.value = true;
};
</script>

<style scoped>
.portfolio-bg {
  background: linear-gradient(165deg, #0d0d0d 0%, #141a14 42%, #0d0d0d 100%);
  min-height: 100vh;
}

.portfolio-container {
  max-width: 1200px;
}

.sidebar-col {
  min-width: 0;
}

.main-font {
  font-family: Inter, sans-serif;
  font-weight: 300;
}

.content-column {
  max-width: 52rem;
}

@media (min-width: 1280px) {
  .content-column {
    max-width: 56rem;
  }
}

.mt-20 {
  margin-top: 5rem;
}

.cursor-pointer {
  cursor: pointer;
}

.section-head {
  display: flex;
  gap: 1.25rem;
  align-items: flex-start;
}

.section-head--inline {
  flex-direction: row;
}

.section-kicker {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  color: rgba(129, 199, 132, 0.85);
  padding-top: 0.35rem;
  flex-shrink: 0;
}

.section-title {
  font-size: clamp(1.5rem, 2.5vw, 1.85rem);
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.2;
  color: rgba(255, 255, 255, 0.96);
}

/* Fallback if theme utilities are overridden by custom surfaces */
.section-sub {
  font-size: 0.95rem;
  line-height: 1.55;
  max-width: 36rem;
  color: rgba(255, 255, 255, 0.68);
}

.about-body {
  font-size: 1rem;
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.78);
}

.experience-stack {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.experience-card {
  position: relative;
  width: 100%;
  text-align: left;
  padding: 1.35rem 1.35rem 1.15rem 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(8px);
  transition: border-color 0.2s ease, background 0.2s ease, transform 0.2s ease;
  cursor: pointer;
  overflow: hidden;
}

.experience-card:hover,
.experience-card:focus-visible {
  border-color: rgba(129, 199, 132, 0.45);
  background: rgba(129, 199, 132, 0.06);
  transform: translateY(-2px);
  outline: none;
}

.experience-card:focus-visible {
  box-shadow: 0 0 0 2px rgba(129, 199, 132, 0.5);
}

.experience-card__accent {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(180deg, #81c784 0%, #43a047 100%);
  border-radius: 16px 0 0 16px;
}

.experience-card__top {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding-left: 0.5rem;
}

@media (min-width: 600px) {
  .experience-card__top {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;
  }
}

.experience-card__role {
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: -0.01em;
}

.experience-card__company {
  font-size: 0.95rem;
}

.experience-card__meta {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.35rem;
  flex-shrink: 0;
}

.experience-location {
  display: inline-flex;
  align-items: center;
}

.experience-chip {
  border-color: rgba(129, 199, 132, 0.4) !important;
}

.experience-card__bullets {
  margin: 1rem 0 0 0;
  padding-left: 1.25rem;
  padding-left: calc(0.5rem + 1.25rem);
  list-style: disc;
}

.experience-card__bullets li {
  margin-bottom: 0.35rem;
}

.experience-more {
  padding-left: calc(0.5rem + 1.25rem);
}

.experience-card__footer {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  margin-top: 1.1rem;
  padding-left: 0.5rem;
  padding-top: 0.85rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.experience-card__cta {
  display: inline-flex;
  align-items: center;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.chip-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.stack-chip {
  background: rgba(255, 255, 255, 0.06) !important;
}

.stack-chip :deep(.v-chip__content) {
  color: rgba(255, 255, 255, 0.9);
}

.experience-chip :deep(.v-chip__content) {
  color: rgb(165, 214, 167) !important;
}

.resume-btn {
  letter-spacing: 0.02em;
  text-transform: none;
  font-weight: 500;
}

.skill-panel {
  background: rgba(255, 255, 255, 0.04) !important;
  border: 1px solid rgba(255, 255, 255, 0.08);
  height: 100%;
}

.skill-panel__title {
  letter-spacing: 0.14em;
  color: rgba(255, 255, 255, 0.58);
}

.skill-row {
  display: flex;
  gap: 0.85rem;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.skill-row:last-child {
  border-bottom: none;
}

.skill-row__icon {
  flex-shrink: 0;
  align-self: center;
}

.skill-icon-shell {
  width: 42px;
  height: 42px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(0, 0, 0, 0.35);
  cursor: default;
}

.skill-icon-frame {
  width: 28px;
  height: 28px;
  flex-shrink: 0;
  line-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.skill-icon-frame :deep(.v-img),
.skill-icon-frame :deep(.v-responsive) {
  max-width: 28px;
  max-height: 28px;
}

.skill-icon-frame :deep(.v-img__img) {
  object-fit: contain;
}

.skill-row__body {
  flex: 1;
  min-width: 0;
}

.project-grid {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

.project-card {
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.03);
  overflow: hidden;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
  cursor: pointer;
}

.project-card:hover,
.project-card:focus-visible {
  border-color: rgba(129, 199, 132, 0.4);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35);
  transform: translateY(-3px);
  outline: none;
}

.project-card:focus-visible {
  box-shadow: 0 0 0 2px rgba(129, 199, 132, 0.45);
}

.project-card__media {
  position: relative;
  aspect-ratio: 16 / 9;
  max-height: 320px;
}

.project-card__img :deep(.v-img__img) {
  transition: transform 0.35s ease;
}

.project-card:hover .project-card__img :deep(.v-img__img),
.project-card:focus-visible .project-card__img :deep(.v-img__img) {
  transform: scale(1.04);
}

.project-card__scrim {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 35%, rgba(0, 0, 0, 0.88) 100%);
  pointer-events: none;
}

.project-card__media-title {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 1.25rem 1.5rem;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1rem;
}

.project-card__arrow {
  flex-shrink: 0;
  opacity: 0.9;
  transition: transform 0.2s ease;
}

.project-card:hover .project-card__arrow,
.project-card:focus-visible .project-card__arrow {
  transform: translate(3px, -3px);
}

.project-card__body {
  padding: 1.35rem 1.5rem 1.5rem;
}

.dialog-scrim {
  backdrop-filter: blur(6px);
}

.dialog-surface {
  background: linear-gradient(145deg, #1a1f1a 0%, #121212 100%) !important;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.video-shell {
  background: #000;
  line-height: 0;
}

.video-shell iframe {
  width: 100%;
  max-width: 100%;
  display: block;
}

.experience-carousel {
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.experience-dialog-bullets {
  list-style: none;
  padding-left: 0;
}

.experience-dialog-bullets li {
  position: relative;
  padding-left: 1.1rem;
}

.experience-dialog-bullets li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.55rem;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: rgba(129, 199, 132, 0.9);
}

.gallery-toolbar :deep(.v-toolbar-title) {
  color: rgba(255, 255, 255, 0.92);
}

.gallery-stage {
  min-height: calc(100vh - 56px);
  background: #000;
}

.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
  transition: transform 0.3s ease-in-out;
}

.soro-blog-shell {
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.03);
  padding: 1.25rem 1.5rem;
  min-height: 140px;
}
</style>
