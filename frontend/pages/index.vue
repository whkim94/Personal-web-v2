<template>
  <v-main class="bg-grey-darken-4">
    <v-container class="py-16">
      <v-row justify="center pt-12">
        <v-col lg="4" cols="12">
          <!-- Name section -->
          <div style="position: sticky; top: 12vh">
            <v-card class="pa-4" variant="text" height="70vh">

              <v-card-item>
                <v-card-title class="text-h4 text-green">
                  JONATHAN KIM
                </v-card-title>

                <v-card-subtitle class="5">
                  Full Stack developer
                </v-card-subtitle>
              </v-card-item>

              <v-card-text class="">
                I build from Front to Back.
              </v-card-text>

              <div/>

              <div style="position: absolute; bottom: 0px">
                asdfas
              </div>
            </v-card>
          </div>

        </v-col>

        <v-col lg="4" cols="12">
          <!-- About Me section -->
          <section id="about">
            <div class="pa-2">
              <p class="line-break">
                Hey there! You can think of me as a bit of a tech enthusiast and Full Stack Developer who's really into making things work seamlessly.
                My journey in the tech world began at UC Davis, where I dived deep into the nuts and bolts of Computer Science.

                At Interfit Worldwide Inc, a cool startup, I was the go-to guy for most of the web stuff.
                It was a thrilling ride, building up the web platform pretty much from scratch.
                I got to play around with a bunch of technologies like Python, JavaScript, Django, you name it.
                It was all about turning ambitious ideas into a digital reality, and boosting our web traffic was one of the highlights!

                Switching gears at BASF, I was part of a dynamic team where we developed some cutting-edge tools for scientific research.
                Working there was like being a tech wizard for scientists, creating software that made their experiments and data analysis a breeze.
                This experience really honed my skills in teamwork and innovation in a different context.

                Whether it's creating a startup's web presence from the ground up or being part of a team that builds software for scientific breakthroughs,
                I'm all about bringing ideas to life with code. And hey, I've got some stories about Docker, AWS, and CI/CD pipelines too!
                If you're up for a chat about tech, or have a project in mind, I'm just a message away. Let's create something amazing together!
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
          </section>

          <!-- Skills section -->
          <section id="skills">
            <div class="mt-16">
              <v-row justify="space-around">
                <v-col v-for="skill, key in skills" :key="key" md="6" cols="12">
                  <v-hover v-slot="{ isHovering, props }">
                    <v-card
                      v-bind="props"
                      :elevation="isHovering ? 12 : 0"
                      variant="text"
                      link
                    >
                      <v-card-item>
                        <v-card-title>{{ key }}</v-card-title>
                      </v-card-item>

                      <v-card-text class="d-flex justify-space-around py-2">
                        <v-avatar v-for="stack in skill" :key="stack.name" rounded="0">
                          <v-img :src="stack.icon" :alt="stack.name"/>
                        </v-avatar>
                      </v-card-text>
                    </v-card>
                  </v-hover>
                </v-col>
              </v-row>
            </div>
          </section>

          <!-- Portfolio section -->
          <section id="portfolio">

            <div class="mt-16">
              <v-card
                v-for="project in projects"
                :key="project.title"
                variant="tonal"
              >
                <v-img :src="project.image"/>
                <v-card-item>
                  <v-card-title>
                    {{ project.title }}
                  </v-card-title>
                  <v-card-subtitle>
                    {{ project.description }}
                  </v-card-subtitle>
                </v-card-item>

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

  styles: [
    {
      name: 'Vuetify', level: 'Advanced', value: 75, icon: '/icons/vuetifyjs.svg'
    },
  ],

  tools: [
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

const onClick = () => {
  const goTo = useGoTo();
  goTo('portfolio');
};
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
