<template>
  <v-main>
    <v-container fluid>asdf
      <v-app-bar elevation="0" class="px-16">
        <v-app-bar-title>
          <Logo />
        </v-app-bar-title>
        <v-spacer/>
        <v-toolbar-items>
          <v-btn
            v-for="item in menuItems"
            :key="item.text"
            :href="item.href"
          >
            {{ item.text }}
          </v-btn>
        </v-toolbar-items>
      </v-app-bar>

      <!-- Landing/Introduction section -->
      <section id="introduction">
        <v-sheet class="pa-16">
          <v-row align="center" justify="center" no-gutters>
            <v-col cols="12" md="5" class="py-12">
              <div>
                <div class="text-h4">
                  Hai! I AM
                </div>
                <div class="text-h3 text-green">
                  JONATHAN KIM
                </div>
              </div>

              <div class="py-4">
                <p class="text-subtitle-2">
                  - I am a Full-Stack Developer - with a passion for creating
                  user-friendly and efficient web applications. With a strong
                  background in both frontend and backend technologies, I have
                  developed a wide range of projects, from e-commerce sites to
                  custom web applications.
                </p>
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
            </v-col>

            <v-col cols="12" md="7">
              <v-sheet class="d-flex justify-center">
                <div>
                  <div class="shape-behind"/>
                  <v-img class="profile-picture" src="/My-image.png" alt="Your Name"/>
                </div>
              </v-sheet>
            </v-col>
          </v-row>
        </v-sheet>
      </section>

      <!-- About Me section -->
      <section id="about">
        <v-row>
          <v-col cols="12" md="4">
            <h2>About Me</h2>
          </v-col>
          <v-col cols="12" md="8">
            <p/>
          </v-col>
        </v-row>
      </section>

      <!-- Skills section -->
      <section id="skills">
        <v-row>
          <v-col cols="12">
            <h2>Skills</h2>
          </v-col>
          <v-col
            v-for="skill in skills"
            :key="skill.name"
            cols="6" sm="4" md="3"
          >
            <v-card>
              <v-card-title>
                {{ skill.name }}
              </v-card-title>
              <v-card-subtitle>
                {{ skill.level }}
              </v-card-subtitle>
              <v-card-text>
                <v-progress-linear
                  v-model="skill.value"
                  color="green"
                />
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
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

const skills = ref([
  { name: 'HTML/CSS', level: 'Expert', value: 90 },
  { name: 'JavaScript', level: 'Advanced', value: 80 },
  { name: 'Vue.js', level: 'Advanced', value: 75 },
  { name: 'Nuxt.js', level: 'Intermediate', value: 70 },
  { name: 'Vuetify', level: 'Advanced', value: 75 },
  { name: 'Node.js', level: 'Intermediate', value: 65 },
  { name: 'Python', level: 'Intermediate', value: 60 },
  { name: 'UI/UX Design', level: 'Intermediate', value: 65 },
]);

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
