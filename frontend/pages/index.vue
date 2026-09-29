<template>
  <v-main class="bg-transparent">
    <NavBar />

    <div class="site">
      <Hero />

      <TechMarquee />

      <!-- About -->
      <section id="About" class="section">
        <header v-reveal class="section-head">
          <span class="eyebrow">01 · About</span>
          <h2 class="section-title">
            Clarity, performance, and systems that last.
          </h2>
        </header>

        <div class="about">
          <div v-reveal class="about__text">
            <p>
              I'm a Full Stack Developer with over 5 years of experience crafting digital solutions. My journey began at
              <a class="link-inline" href="https://interfit.co.kr/" target="_blank" rel="noopener">Interfit Worldwide Inc.</a>,
              where I built a full-stack platform from the ground up, integrating real-time video conferencing and chat
              features that drove significant user engagement. Later at
              <a class="link-inline" href="https://www.basf.com/" target="_blank" rel="noopener">BASF</a>,
              I developed scientific software solutions, implementing test-driven development practices and optimizing
              laboratory workflows that boosted scientist productivity by 20%.
            </p>
            <p>
              Currently, I'm contributing to the modernization of legacy systems at Global Fashion Resource Inc., where
              I'm involved in architecting and implementing a comprehensive ERP solution. My expertise spans modern
              frameworks like Vue.js, React, and Laravel, with a strong foundation in cloud technologies and CI/CD
              practices.
            </p>
            <p>I'm always excited to tackle new challenges and collaborate on innovative projects!</p>
          </div>

          <div class="about__side">
            <div v-reveal="100" v-spotlight class="glass about__card">
              <span class="about__card-label">Focus</span>
              <p class="about__card-value">
                Legacy modernization, ERP, real-time apps, developer experience
              </p>
            </div>

            <div v-reveal="180" v-spotlight class="glass about__card">
              <span class="about__card-label">Off the keyboard</span>
              <p class="about__card-value">
                Playing
                <span class="about__tennis">
                  Tennis
                  <v-icon icon="mdi-tennis-ball" size="18" class="about__ball" />
                </span>
                or challenging friends to
                <v-menu v-model="yahtzeeMenu" location="bottom">
                  <template #activator="{ props }">
                    <button v-bind="props" type="button" class="link-inline about__yahtzee">
                      Yahtzee
                    </button>
                  </template>
                  <v-img width="250px" src="https://i.gifer.com/B6nq.gif" />
                </v-menu>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Experience -->
      <section id="Experience" class="section">
        <header v-reveal class="section-head">
          <span class="eyebrow">02 · Experience</span>
          <h2 class="section-title">
            Where I've shipped.
          </h2>
          <p class="section-sub">
            Roles where I delivered end-to-end features, led refactors, and improved how teams ship.
          </p>
        </header>

        <ol class="timeline">
          <li v-for="(exp, i) in experiences" :key="exp.duration" v-reveal="i * 60" class="timeline__item">
            <span class="timeline__dot" aria-hidden="true" />
            <button
              v-spotlight
              type="button"
              class="glass glass-lift exp"
              @click="openExperienceDialog(exp)"
            >
              <div class="exp__top">
                <div>
                  <h3 class="exp__role">
                    {{ exp.name }}
                  </h3>
                  <p class="exp__company">
                    {{ exp.company }}
                  </p>
                </div>
                <div class="exp__meta">
                  <span class="exp__date">{{ exp.duration }}</span>
                  <span v-if="exp.location" class="exp__loc">
                    <v-icon icon="mdi-map-marker-outline" size="14" />
                    {{ exp.location }}
                  </span>
                </div>
              </div>

              <ul class="exp__bullets">
                <li v-for="(line, key) in exp.desc.slice(0, 3)" :key="key">
                  {{ line }}
                </li>
              </ul>

              <div class="exp__footer">
                <div class="chip-row">
                  <span v-for="stack in exp.stacks" :key="stack" class="chip">{{ stack }}</span>
                </div>
                <span class="exp__cta">
                  {{ exp.images ? 'View gallery' : exp.desc.length > 3 ? `+${exp.desc.length - 3} more` : 'Details' }}
                  <v-icon icon="mdi-arrow-top-right" size="16" />
                </span>
              </div>
            </button>
          </li>
        </ol>

        <div v-reveal class="mt-10">
          <a class="btn" href="/Resume.pdf" target="_blank" rel="noopener">
            <v-icon icon="mdi-file-document-outline" size="18" />
            View full résumé (PDF)
          </a>
        </div>
      </section>

      <!-- Stack -->
      <section id="Stacks" class="section">
        <header v-reveal class="section-head">
          <span class="eyebrow">03 · Stack</span>
          <h2 class="section-title">
            Tools I reach for.
          </h2>
          <p class="section-sub">
            Depth varies by project, but these are home base.
          </p>
        </header>

        <div class="stack-grid">
          <article
            v-for="(group, i) in skillGroups"
            :key="group.label"
            v-reveal="(i % 3) * 80"
            v-spotlight
            class="glass stack"
          >
            <h3 class="stack__title">
              <v-icon :icon="group.icon" size="18" />
              {{ group.label }}
            </h3>
            <ul class="stack__list">
              <li v-for="item in group.items" :key="item.name" class="stack__item">
                <span class="stack__icon">
                  <img :src="item.icon" :alt="item.name" width="24" height="24" loading="lazy">
                </span>
                <span class="stack__name">{{ item.name }}</span>
                <span class="stack__level" :data-level="item.level">{{ item.level }}</span>
              </li>
            </ul>
          </article>
        </div>
      </section>

      <!-- Projects -->
      <section id="Projects" class="section">
        <header v-reveal class="section-head">
          <span class="eyebrow">04 · Projects</span>
          <h2 class="section-title">
            Selected work.
          </h2>
          <p class="section-sub">
            Production systems, integrations, and platforms I have owned or co-built.
          </p>
        </header>

        <div class="project-grid">
          <article
            v-for="(project, i) in projects"
            :key="project.title"
            v-reveal="i * 80"
            v-spotlight
            v-tilt
            :class="['glass glass-lift project', { 'project--featured': i === 0 }]"
            role="button"
            tabindex="0"
            @click="openProjectDialog(project)"
            @keydown.enter="openProjectDialog(project)"
          >
            <div class="project__media">
              <v-img :src="project.image" :alt="project.title" cover class="project__img" />
              <div class="project__scrim" />
              <span class="project__badge">
                <v-icon :icon="project.link ? 'mdi-open-in-new' : 'mdi-play-circle-outline'" size="16" />
                {{ project.link ? 'Live site' : project.video ? 'Demo video' : 'Details' }}
              </span>
            </div>
            <div class="project__body">
              <h3 class="project__title">
                {{ project.title }}
                <v-icon icon="mdi-arrow-top-right" size="20" class="project__arrow" />
              </h3>
              <p class="project__desc">
                {{ project.description }}
              </p>
              <div class="chip-row">
                <span v-for="s in project.stacks" :key="s" class="chip">{{ s }}</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      <!-- Contact -->
      <section id="Contact" class="section">
        <div v-reveal v-spotlight class="glass contact">
          <span class="eyebrow">05 · Contact</span>
          <h2 class="contact__title">
            Have something to build?<br>
            <span class="grad-text">Let's talk.</span>
          </h2>
          <p class="section-sub contact__sub">
            Available for freelance and contract work — new products, legacy migrations, or a second pair of hands on
            your team.
          </p>
          <div class="contact__cta">
            <a v-magnetic class="btn btn--primary" href="mailto:whkim94@gmail.com">
              <v-icon icon="mdi-email-outline" size="18" />
              whkim94@gmail.com
            </a>
            <a
              v-for="s in socials.slice(0, 3)"
              :key="s.name"
              class="icon-btn"
              :href="s.link"
              :aria-label="s.name"
              target="_blank"
              rel="noopener noreferrer"
            >
              <v-icon :icon="s.icon" size="20" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>

    <v-dialog v-model="projectDialog" max-width="920" scrim-class="dialog-scrim">
      <v-card class="dialog-surface" rounded="xl">
        <v-card-item class="pa-6 pb-2">
          <div class="d-flex align-start justify-space-between flex-wrap">
            <h2 class="dialog-title pr-4">
              {{ projectObject.title }}
            </h2>
            <div class="d-flex ga-1">
              <v-btn
                v-if="projectObject.github"
                icon="mdi-github"
                variant="text"
                :href="projectObject.github"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub repository"
              />
              <v-btn icon="mdi-close" variant="text" aria-label="Close" @click="projectDialog = false" />
            </div>
          </div>
        </v-card-item>

        <v-card-text class="px-6 pb-6">
          <div v-if="projectObject.video" class="video-shell">
            <iframe
              :src="projectObject.video"
              title="Project demo video"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            />
          </div>
          <p v-else class="text-medium-emphasis mb-0">
            No demo video for this project — use the GitHub link above if available.
          </p>
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-dialog v-model="experienceDialog" max-width="880" scrim-class="dialog-scrim">
      <v-card v-if="currentExperience" class="dialog-surface" rounded="xl">
        <v-card-item class="pa-6 pb-4">
          <div class="d-flex align-start justify-space-between">
            <div>
              <h2 class="dialog-title">
                {{ currentExperience.name }}
              </h2>
              <p class="dialog-company">
                {{ currentExperience.company }}
              </p>
              <p class="text-caption text-medium-emphasis mb-0">
                {{ currentExperience.duration }}
                <template v-if="currentExperience.location">
                  · {{ currentExperience.location }}
                </template>
              </p>
            </div>
            <v-btn icon="mdi-close" variant="text" aria-label="Close" @click="experienceDialog = false" />
          </div>
        </v-card-item>

        <v-card-text class="px-6 pb-6">
          <v-carousel
            v-if="currentExperience.images?.length"
            cycle
            height="380"
            hide-delimiter-background
            show-arrows="hover"
            class="rounded-xl mb-6 dialog-carousel"
          >
            <v-carousel-item v-for="(image, index) in currentExperience.images" :key="index">
              <v-img :src="image" cover height="380" class="cursor-pointer" @click="openFullImage(image)" />
            </v-carousel-item>
          </v-carousel>

          <ul class="dialog-bullets mb-6">
            <li v-for="(desc, index) in currentExperience.desc" :key="index">
              {{ desc }}
            </li>
          </ul>

          <div class="chip-row">
            <span v-for="stack in currentExperience.stacks" :key="stack" class="chip">{{ stack }}</span>
          </div>

          <div v-if="currentExperience.link" class="mt-6">
            <a class="btn" :href="currentExperience.link" target="_blank" rel="noopener noreferrer">
              Visit related site
              <v-icon icon="mdi-open-in-new" size="16" />
            </a>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-dialog v-model="fullImageDialog" fullscreen :scrim="false" transition="dialog-bottom-transition">
      <v-card class="bg-black">
        <v-toolbar color="black" density="comfortable">
          <v-btn icon variant="text" aria-label="Close gallery" @click="fullImageDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Gallery</v-toolbar-title>
        </v-toolbar>
        <v-card-text class="pa-0 d-flex align-center justify-center gallery-stage">
          <v-img :src="selectedImage" max-height="95vh" contain />
        </v-card-text>
      </v-card>
    </v-dialog>

    <SpeedInsights />
  </v-main>
</template>

<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/nuxt';
import {
  experiences, projects, skillGroups, socials
} from '~/data/portfolio';
import type { Experience, Project } from '~/data/portfolio';

const yahtzeeMenu = ref(false);

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

const openProjectDialog = (project: Project) => {
  projectObject.value = project;

  if (project.link) {
    window.open(project.link, '_blank', 'noopener');
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
.cursor-pointer { cursor: pointer; }

/* About */
.about {
  display: grid;
  gap: 2rem;
}

.about__text p {
  margin: 0 0 1.25rem;
  font-size: 1.05rem;
  line-height: 1.8;
  color: #c3cec8;
}

.about__side {
  display: grid;
  gap: 1rem;
  align-content: start;
}

.about__card {
  padding: 1.4rem 1.5rem;
}

.about__card-label {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent);
}

.about__card-value {
  margin: 0.6rem 0 0;
  line-height: 1.6;
  color: var(--text);
}

.about__tennis {
  color: var(--text);
}

.about__ball {
  color: var(--accent);
  vertical-align: text-bottom;
  transition: transform 0.6s ease;
}

.about__tennis:hover .about__ball {
  transform: rotate(360deg) translateY(-3px);
}

.about__yahtzee {
  font: inherit;
  padding: 0;
  border: 0;
  cursor: pointer;
}

@media (min-width: 900px) {
  .about { grid-template-columns: 1.6fr 1fr; gap: 3.5rem; }
}

/* Timeline */
.timeline {
  position: relative;
  list-style: none;
  margin: 0;
  padding: 0 0 0 1.75rem;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 1.25rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 5px;
  top: 8px;
  bottom: 8px;
  width: 1px;
  background: linear-gradient(180deg, var(--accent), var(--line) 85%, transparent);
}

.timeline__item {
  position: relative;
}

.timeline__dot {
  position: absolute;
  left: calc(-1.75rem + 0px);
  top: 1.7rem;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: var(--bg);
  border: 2px solid var(--accent);
  box-shadow: 0 0 0 4px rgba(52, 211, 153, 0.12);
}

.exp {
  display: block;
  width: 100%;
  text-align: left;
  padding: 1.5rem 1.6rem;
  color: inherit;
  font: inherit;
  cursor: pointer;
}

.exp__top {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.exp__role {
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: -0.02em;
}

.exp__company {
  margin: 0.2rem 0 0;
  color: var(--accent);
  font-size: 0.95rem;
}

.exp__meta {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 0.82rem;
  color: var(--muted);
}

.exp__date {
  font-family: var(--font-mono);
  font-size: 0.78rem;
}

.exp__bullets {
  margin: 1.1rem 0 0;
  padding-left: 1.1rem;
  color: var(--muted);
  font-size: 0.92rem;
  line-height: 1.6;
}

.exp__bullets li {
  margin-bottom: 0.35rem;
}

.exp__bullets li::marker {
  color: var(--accent);
}

.exp__footer {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.85rem;
  margin-top: 1.2rem;
  padding-top: 1rem;
  border-top: 1px solid var(--line);
}

.exp__cta {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--accent);
}

@media (min-width: 700px) {
  .exp__top { flex-direction: row; justify-content: space-between; }
  .exp__meta { align-items: flex-end; text-align: right; }
}

/* Stack */
.stack-grid {
  display: grid;
  gap: 1rem;
}

.stack {
  padding: 1.4rem 1.4rem 0.9rem;
}

.stack__title {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  margin-bottom: 0.9rem;
  font-family: var(--font-mono);
  font-size: 0.74rem;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent);
}

.stack__list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.stack__item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.6rem 0;
  border-top: 1px solid var(--line);
}

.stack__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 38px;
  height: 38px;
  border-radius: 10px;
  border: 1px solid var(--line);
  background: rgba(0, 0, 0, 0.35);
}

.stack__icon img {
  width: 24px;
  height: 24px;
  object-fit: contain;
}

.stack__name {
  flex: 1;
  font-size: 0.95rem;
}

.stack__level {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  color: var(--faint);
}

.stack__level[data-level='Expert'],
.stack__level[data-level='Advanced'] {
  color: var(--accent);
}

@media (min-width: 640px) {
  .stack-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 980px) {
  .stack-grid { grid-template-columns: repeat(3, 1fr); }
}

/* Projects */
.project-grid {
  display: grid;
  gap: 1.25rem;
}

.project {
  cursor: pointer;
  display: flex;
  flex-direction: column;
}

.project__media {
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
}

.project__img {
  height: 100%;
}

.project__img :deep(.v-img__img) {
  transition: transform 0.5s ease;
}

.project:hover .project__img :deep(.v-img__img),
.project:focus-visible .project__img :deep(.v-img__img) {
  transform: scale(1.05);
}

.project__scrim {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 45%, rgba(6, 8, 10, 0.85) 100%);
  pointer-events: none;
}

.project__badge {
  position: absolute;
  top: 0.9rem;
  left: 0.9rem;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.3rem 0.75rem;
  border: 1px solid var(--line-strong);
  border-radius: 999px;
  background: rgba(6, 8, 10, 0.65);
  backdrop-filter: blur(10px);
  font-size: 0.75rem;
}

.project__body {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1.4rem 1.5rem 1.6rem;
}

.project__title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: -0.02em;
}

.project__arrow {
  color: var(--accent);
  transition: transform 0.25s ease;
}

.project:hover .project__arrow,
.project:focus-visible .project__arrow {
  transform: translate(3px, -3px);
}

.project__desc {
  flex: 1;
  margin: 0.7rem 0 1.2rem;
  color: var(--muted);
  font-size: 0.93rem;
  line-height: 1.65;
}

@media (min-width: 800px) {
  .project-grid { grid-template-columns: repeat(2, 1fr); }
  .project--featured { grid-column: 1 / -1; flex-direction: row; }
  .project--featured .project__media { flex: 1.25; aspect-ratio: auto; min-height: 320px; }
  .project--featured .project__body { flex: 1; justify-content: center; padding: 2rem; }
  .project--featured .project__scrim {
    background: linear-gradient(90deg, transparent 55%, rgba(6, 8, 10, 0.7) 100%);
  }
}

/* Contact */
.contact {
  padding: clamp(2rem, 6vw, 4rem);
  text-align: center;
  background:
    radial-gradient(600px circle at 50% 0%, rgba(52, 211, 153, 0.12), transparent 70%),
    var(--surface);
}

.contact .eyebrow::before { display: none; }

.contact__title {
  margin-top: 1rem;
  font-family: var(--font-display);
  font-size: clamp(2rem, 5.5vw, 3.6rem);
  font-weight: 600;
  letter-spacing: -0.04em;
  line-height: 1.08;
}

.contact__sub {
  margin-left: auto;
  margin-right: auto;
}

.contact__cta {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  margin-top: 2rem;
}

/* Dialogs */
.dialog-title {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: -0.02em;
}

.dialog-company {
  margin: 0.25rem 0;
  color: var(--accent);
}

.dialog-carousel {
  border: 1px solid var(--line);
}

.dialog-bullets {
  list-style: none;
  padding: 0;
}

.dialog-bullets li {
  position: relative;
  padding-left: 1.1rem;
  margin-bottom: 0.6rem;
  color: var(--muted);
  font-size: 0.93rem;
  line-height: 1.6;
}

.dialog-bullets li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.6rem;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--accent);
}

.video-shell {
  aspect-ratio: 16 / 9;
  border-radius: 14px;
  overflow: hidden;
  background: #000;
}

.video-shell iframe {
  width: 100%;
  height: 100%;
  display: block;
}

.gallery-stage {
  min-height: calc(100vh - 56px);
  background: #000;
}
</style>
