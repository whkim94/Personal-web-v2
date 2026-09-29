export type Experience = {
  name: string;
  duration: string;
  company: string;
  location?: string;
  link?: string;
  images?: string[];
  desc: string[];
  stacks: string[];
};

export type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
  github: string;
  video: string;
  stacks: string[];
};

export type SkillItem = {
  name: string;
  level: string;
  icon: string;
};

export type SkillGroup = {
  label: string;
  icon: string;
  items: SkillItem[];
};

export const navItems = [
  { id: 'About', label: 'About' },
  { id: 'Experience', label: 'Experience' },
  { id: 'Stacks', label: 'Stack' },
  { id: 'Projects', label: 'Projects' },
  { id: 'Contact', label: 'Contact' }
];

export const socials = [
  { name: 'LinkedIn', icon: 'mdi-linkedin', link: 'https://www.linkedin.com/in/jonathan-w-kim-0410/' },
  { name: 'GitHub', icon: 'mdi-github', link: 'https://github.com/whkim94' },
  { name: 'Instagram', icon: 'mdi-instagram', link: 'https://www.instagram.com/just_kimding/' },
  { name: 'Email', icon: 'mdi-email-outline', link: 'mailto:whkim94@gmail.com' }
];

export const heroWords = ['web apps', 'APIs', 'ERP systems', 'real-time platforms'];

export const impact = [
  { value: '5+', label: 'Years shipping full-stack products' },
  { value: '60%', label: 'Fewer deployment errors via CI/CD' },
  { value: '50%', label: 'More daily organic traffic from SEO' },
  { value: '30%', label: 'Faster page loads after Next.js upgrade' }
];

export const experiences: Experience[] = [
  {
    name: 'Chief Technology Officer',
    duration: 'May 2025 - Present',
    company: 'RankAuthority',
    link: 'https://rankauthority.com',
    desc: [
      'Architected the orchestration layer between frontier LLMs and live websites: a pipeline that audits a site, plans, generates, and ships changes to the customer\'s CMS, then measures the outcome.',
      'Built a provider-agnostic AI layer over OpenAI, Anthropic, Gemini, and Perplexity, used both to generate content and to track how brands surface in AI search answers.',
      'Engineered an outcome-driven autopilot with guardrails, pacing, and reversible actions, so AI can act on production sites safely.',
      'Unified WordPress, Shopify, Wix, and Cloudflare edge behind one capability-based publishing engine, running on an event-driven AWS backbone (ECS, SQS, Lambda).',
      'Own the full stack, from architecture, infrastructure, and billing to engineering workflow, with AI agents embedded in the delivery process.'
    ],
    stacks: ['LLM Orchestration', 'FastAPI', 'React.js', 'AWS', 'Celery / SQS', 'Terraform']
  },
  {
    name: 'Full-Stack Developer',
    duration: 'Aug 2024 - April 2025',
    company: 'Global Fashion Resource Inc.',
    location: 'Los Angeles / CA',
    link: '',
    images: Array.from({ length: 11 }, (_, i) => `/images/erp/erp-${i + 1}.png`),
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
  }
];

export const skillGroups: SkillGroup[] = [
  {
    label: 'Languages',
    icon: 'mdi-code-braces',
    items: [
      { name: 'Python', level: 'Expert', icon: '/icons/python.svg' },
      { name: 'Javascript', level: 'Intermediate', icon: '/icons/javascript.svg' },
      { name: 'Typescript', level: 'Intermediate', icon: '/icons/typescript-icon.svg' },
      { name: 'PHP', level: 'Intermediate', icon: '/icons/php.svg' }
    ]
  },
  {
    label: 'Frontend',
    icon: 'mdi-monitor-dashboard',
    items: [
      { name: 'Vue.js', level: 'Advanced', icon: '/icons/vue.svg' },
      { name: 'Nuxt.js', level: 'Intermediate', icon: '/icons/nuxt-icon.svg' },
      { name: 'React.js', level: 'Intermediate', icon: '/icons/react.svg' }
    ]
  },
  {
    label: 'Backend',
    icon: 'mdi-server-network',
    items: [
      { name: 'Django', level: 'Advanced', icon: '/icons/django-icon.svg' },
      { name: 'FastAPI', level: 'Intermediate', icon: '/icons/fastapi-icon.svg' },
      { name: 'Node.js', level: 'Intermediate', icon: '/icons/nodejs-icon.svg' },
      { name: 'Laravel', level: 'Intermediate', icon: '/icons/laravel-icon.svg' }
    ]
  },
  {
    label: 'Databases',
    icon: 'mdi-database-outline',
    items: [
      { name: 'PostgreSQL', level: 'Advanced', icon: '/icons/postgresql.svg' },
      { name: 'MySQL', level: 'Intermediate', icon: '/icons/mysql.svg' },
      { name: 'MongoDB', level: 'Intermediate', icon: '/icons/mongodb-icon.svg' }
    ]
  },
  {
    label: 'Styling',
    icon: 'mdi-palette-outline',
    items: [
      { name: 'Vuetify', level: 'Advanced', icon: '/icons/vuetifyjs.svg' },
      { name: 'TailwindCSS', level: 'Advanced', icon: '/icons/tailwindcss-icon.svg' },
      { name: 'Bootstrap', level: 'Advanced', icon: '/icons/bootstrap.svg' }
    ]
  },
  {
    label: 'Cloud & Tools',
    icon: 'mdi-cloud-outline',
    items: [
      { name: 'AWS', level: 'Intermediate', icon: '/icons/aws.svg' },
      { name: 'Vercel', level: 'Intermediate', icon: '/icons/vercel-icon.svg' },
      { name: 'Docker', level: 'Advanced', icon: '/icons/docker-icon.svg' },
      { name: 'Twilio', level: 'Advanced', icon: '/icons/twilio-icon.svg' },
      { name: 'GitHub', level: 'Advanced', icon: '/icons/github-icon.svg' },
      { name: 'GitLab', level: 'Advanced', icon: '/icons/gitlab.svg' }
    ]
  }
];

export const projects: Project[] = [
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
  }
];
