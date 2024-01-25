<template>
  <v-main class="bg-grey">
    <v-container class="py-16">
      <v-row justify="center" no-gutters>
        <v-col lg="4" cols="12">
          <!-- Name section -->
          <v-sheet class="pa-8">

            <div>
              <div class="text-h3 text-green">
                JONATHAN KIM
              </div>

              <div class="text-h5">
                Full Stack developer
              </div>

              <div class="py-6">
                I build from Front to Back.
              </div>
            </div>

            <div class="py-4">
              <v-btn
                variant="outlined"
                color="green"
                href="#portfolio"
              >
                Let's Talk!
              </v-btn>
            </div>
          </v-sheet>
        </v-col>

        <v-col lg="4" cols="12">
          <!-- About Me section -->
          <section id="about">
            <div class="pa-8">
              <p class="text-h6">
                I am a Full-Stack Developer - with a passion for creating
                user-friendly and efficient web applications. With a strong
                background in both frontend and backend technologies, I have
                developed a wide range of projects, from e-commerce sites to
                custom web applications.
              </p>
            </div>

            <v-timeline side="end" class="mt-16">
              <v-timeline-item
                v-for="exp in experiences"
                :key="exp.duration"
                dot-color="green"
                size="small"
                hide-opposite
              >
                <v-card class="elevation-0">
                  <v-card-title class="text-h5">
                    {{ exp.name }}
                  </v-card-title>
                  <v-card-subtitle>
                    {{ exp.company }} . {{ exp.level }}
                  </v-card-subtitle>
                  <v-card-subtitle>
                    {{ exp.duration }}
                  </v-card-subtitle>
                  <v-card-subtitle>
                    {{ exp.location }}
                  </v-card-subtitle>

                  <v-card-text>
                    <div v-for="line, key in exp.desc" :key="key">
                      - {{ line }}
                    </div>
                  </v-card-text>
                </v-card>
              </v-timeline-item>
            </v-timeline>
          </section>

          <!-- Skills section -->
          <section id="skills">
            <v-card>
              <v-card-title>Tech Stacks</v-card-title>

              <v-card-item>
                <v-row justify="space-around">
                  <v-col v-for="skill, key in skills" :key="key" md="4" cols="12">
                    <v-card>
                      <v-card-title>{{ key }}</v-card-title>

                      <v-card-item class="d-flex justify-space-around bg-surface-variant">
                        <v-avatar v-for="stack in skill" :key="stack.name">
                          <v-img :src="stack.icon" :alt="stack.name"/>
                        </v-avatar>
                      </v-card-item>
                    </v-card>
                  </v-col>
                </v-row>
              </v-card-item>
            </v-card>
          </section>

          <!-- Portfolio section -->
          <section id="portfolio">
            <v-row>
              <v-col cols="12">
                <h2>Portfolio</h2>
              </v-col>
              <v-col
                v-for="project in projects"
                :key="project.title"
                cols="12" sm="6" md="4"
              >
                <v-card>
                  <v-img :src="project.image"/>
                  <v-card-title>
                    {{ project.title }}
                  </v-card-title>
                  <v-card-subtitle>
                    {{ project.description }}
                  </v-card-subtitle>
                  <v-card-actions>
                    <v-btn
                      text
                      color="primary"
                      :href="project.link"
                    >
                      View Project
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </section>
        </v-col>
      </v-row>

    </v-container>
  </v-main>
</template>

<script setup lang="ts">
const menuItems = ref([
  { text: 'About', href: '#about' },
  { text: 'Skills', href: '#skills' },
  { text: 'Portfolio', href: '#portfolio' },
  // Add more items as needed
]);

const experiences = ref([
  {
    name: 'Full-Stack Developer | DevOps',
    duration: 'Jul 2023 - Present',
    company: '',
    level: 'Freelance',
    location: 'remote',
    desc: ''
  },
  {
    name: 'Full-Stack Developer | DevOps',
    duration: 'Jan 2023 - Jul 2023',
    company: 'Interfit Worldwide Inc',
    level: 'Freelance',
    location: 'Irvine / CA',
    desc: [
      'Oversaw development milestones from inception to final delivery.',
      'Boosted daily traffic by 50%.',
      'Implemented enhancements to both backend and frontend, improving performance and introducing new features.',
      'Established release and development environments using Docker.',
      'Deployed microservices using AWS Fargate.',
      'Created admin page leveraging Google Analytics API for monitoring daily website status.',
      'Configured GitHub Actions for automated CI/CD.'
    ]
  },
  {
    name: 'Full-Stack Developer',
    duration: 'May 2021 - Jan 2023',
    company: 'BASF',
    level: 'Freelance',
    location: 'San Diego / CA',
    desc: [
      'Oversaw full-cycle process, from designing layouts using Figma to building projects with Nuxt.js.',
      'Enhanced FastAPI backend and streamlined deployment using Docker and GitLab CI/CD.',
      'Created sophisticated tool for migrating from legacy software.',
      'Collaborated with scientists to develop research tools, increasing their work efficiency.',
      'Enhanced user experience by providing tailored suggestions.'
    ]
  },
  {
    name: 'Full-Stack Developer',
    duration: 'Jan 2023 - Jul 2023',
    company: 'Interfit',
    level: 'Freelance',
    location: 'Irvine / CA',
    desc: [
      'Developed web application from scratch as early team member at startup.',
      'Implemented Twilio\'s Video and Voice bi-directional conferencing features.',
      'Deployed Docker-based microservices, including Nginx, frontend, server, workers, and more, on AWS ECS.',
      'Configured scheduled tasks using Django Celery and AWS Cluster Scheduler.',
      'Introduced user chat functionality, leveraging Django with Daphne\'s ASGI and Socket.io.',
      'Utilized Nuxt.js for SEO optimization and Vuetify for enhanced UI/UX design.'
    ]
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

  styles: [
    {
      name: 'Vuetify', level: 'Advanced', value: 75, icon: '/icons/vuetifyjs.svg'
    },
  ],

  devOps: [
    {
      name: 'AWS', level: 'Intermediate', value: 75, icon: '/icons/aws.svg'
    },
  ]
});

const projects = ref([
  {
    title: 'Project 1',
    description: 'A brief description of Project 1',
    image: '/images/project1.jpg',
    link: 'https://project1.example.com',
  },
  {
    title: 'Project 2',
    description: 'A brief description of Project 2',
    image: '/images/project2.jpg',
    link: 'https://project2.example.com',
  },
  {
    title: 'Project 3',
    description: 'A brief description of Project 3',
    image: '/images/project3.jpg',
    link: 'https://project3.example.com',
  },
  {
    title: 'Project 4',
    description: 'A brief description of Project 4',
    image: '/images/project4.jpg',
    link: 'https://project4.example.com',
  },
]);
</script>

<style scoped>
.left-side {
  background-color: #f5f5f5;
}

.shape-behind {
  position: absolute;
  width: 500px;
  height: 500px;
  background-color: #41b883;
  z-index: 1;
  /* Modify this to create the desired shape */
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
}

.profile-picture {
  position: relative;
  width: 400px;
  height: 400px;
  object-fit: cover;
  z-index: 2;
  border-radius: 50%;
}
</style>
