import { ThingsIDo } from "@/types";
import { baseUrlTech } from "./techData";

export const profile = {
  summary: ` I'm a self-taught Full-Stack Developer dedicated to building scalable, efficient applications. My core expertise is the MERN Stack (MongoDB, Express.js, React, Node.js), which I leverage for both dynamic front-ends and robust APIs.
  I enhance my projects with the versatility of Python and ensure global accessibility and performance by architecting solutions on Cloud platforms. Driven by a lifelong fascination with technology, I am committed to continuous skill improvement, writing clean code, and delivering impactful digital solutions.`,
  
  gitHub: "https://github.com/rounakkhapre2001",
  name: "Rounak Khapre",
  title: "Full Stack Developer",
  gitHubUserName: "rounakkhapre2001",
  xUserName: "rounakkhapre2001",
  linkedin: 'https://www.linkedin.com/in/rounak-khapre2001/',
  x: 'https://x.com/rounakkhapre2001',
  instagram: "https://www.instagram.com/rounak.khapre/"
};
export const hostedUrl = "https://muhammedsinan.space";
export const canonicalUrl = "https://muhammedsinan.space";

export const TYPEWRITER_WORDS = [
  { text: "I" },
  { text: "Build" },
  { text: "Innovative" },
  { text: "Digital" },
  { text: "Solutions" },
  { text: "With" },
  { text: "Precision" },
  { text: "And" },
  { text: "Passion" },
  { text: "!" }
];


export const socialMediaLinks = [
  {
    title: 'LinkedIn',
    icon: '/assets/social/linkedin.svg',
    href: 'https://www.linkedin.com/in/rounak-khapre2001/',
    smLabel: 'LN',
  },
  {
    title: 'GitHub',
    icon: '/assets/social/github.svg',
    href: 'https://github.com/rounakkhapre2001',
    smLabel: 'GH',
  },
  {
    title: 'Stack Overflow',
    icon: '/assets/social/stackoverflow.png',
    href: 'https://stackoverflow.com/users/31745575/rounak-khapre',
    smLabel: 'SO',
  },
  {
    title: 'LeetCode',
    icon: '/assets/social/leetcode.jpg',
    href: 'https://leetcode.com/u/rounak_240245/',
    smLabel: 'LC',
  },
  {
    title: 'Email',
    icon: '/assets/social/email.svg',
    href: 'https://mail.google.com/rounakkhapre853@gmail.com',
    smLabel: 'EM',
  },
  {
    title: 'Twitter',
    icon: '/assets/social/x.png',
    href: 'https://x.com/rounakkhapre2001',
    smLabel: 'TW',
  }
];


export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/open-source", label: "Open Source" },
  { href: "/experience", label: "Experience" },
  { href: "/stack", label: "Stack" },
  { href: "/contact", label: "Contact Me" },
];

export const openSourceOrganizations = [
  { name: "Strapi", url: "https://strapi.io", logo: "/assets/org/strapi.png" },
  { name: "Impler", url: "https://impler.io", logo: "/assets/org/impler.png" },
  { name: "Origin Ui", url: "https://originui.com", logo: "/assets/org/origin.ico" },
  { name: "OpenCut", url: "https://opencut.app", logo: "/assets/org/opencut.png" },
  { name: "Gemini CLI", url: "https://github.com/google-gemini/gemini-cli", logo: "/assets/org/gemini.png" }
];


export const thingsIDo: ThingsIDo[] = [
  {
    name: "Full Stack Development",
    image: "/assets/images/fullstack.svg",
    tech: [
      { name: "Node JS", url: `${baseUrlTech}/nodejs.svg` },
      { name: "Express JS", url: `${baseUrlTech}/express.svg` },
      { name: "React JS", url: `${baseUrlTech}/react.svg` },
      { name: "Next JS", url: `${baseUrlTech}/nextjs.svg` },
      { name: "Nest JS", url: `${baseUrlTech}/nestjs.svg` },
      { name: "python", url: `${baseUrlTech}/python.svg` },
      { name: "TypeScript", url: `${baseUrlTech}/typescript.svg` },
      { name: "Tailwind", url: `${baseUrlTech}/tailwind.svg` },
      { name: "WebRTC", url: `${baseUrlTech}/webrtc.svg` },
    ],
    capabilities: [
      { text: 'Developing modern web applications with React, Next.js, and TypeScript', icon: '💻' },
      { text: 'Building robust backend services with Node.js, NestJS and Python', icon: '⚙️' },
      { text: 'Creating cross-platform mobile applications using Expo and React Native', icon: '📱' }
    ]
  },
  {
    name: "Cloud Architecture & Database Management",
    image: "/assets/images/statics.svg",
    tech: [
      { name: "AWS", url: `${baseUrlTech}/aws.svg` },
      { name: "Firebase", url: `${baseUrlTech}/firebase.svg` },
      { name: "MongoDB", url: `${baseUrlTech}/mongodb.svg` },
      { name: "Postgres", url: `${baseUrlTech}/postgresql.svg` },
      { name: "Redis", url: `${baseUrlTech}/redis.png` },
      { name: "Vercel", url: `${baseUrlTech}/vercel.svg` },
      { name: "Cloudinary", url: `${baseUrlTech}/cloudinary.png` },
      { name: "Nginx", url: `${baseUrlTech}/nginx.svg` },
    ],
    capabilities: [
      { text: 'Designing scalable cloud infrastructure and database architectures', icon: '☁️' },
      { text: 'Implementing caching strategies with Redis and performance optimization', icon: '⚡' },
      { text: 'Managing data storage solutions across SQL and NoSQL databases', icon: '💾' },
    ]
  },
  {
    name: "DevOps & Quality Assurance",
    image: "/assets/images/devops.svg",
    tech: [
      { name: "Docker", url: `${baseUrlTech}/docker.svg` },
      { name: "GitHub Actions", url: `${baseUrlTech}/github-action.svg` },
      { name: "Jest", url: `${baseUrlTech}/jest.png` },
      { name: "ESLint", url: `${baseUrlTech}/eslint.svg` },
      { name: "Prettier", url: `${baseUrlTech}/prettier.svg` },
      { name: "PM2", url: `${baseUrlTech}/pm2.png` },
      { name: "Postman", url: `${baseUrlTech}/postman.svg` },
    ],
    capabilities: [
      { text: 'Implementing CI/CD pipelines with Docker and GitHub Actions', icon: '🔄' },
      { text: 'Writing comprehensive test suites using Jest and maintaining code quality', icon: '✅' },
      { text: 'Managing application logging, monitoring, and deployment processes', icon: '📊' },
    ]
  }
];
// Audio file path
export const AUDIO_SRC = "/assets/keyboardpress.mp3";

// Timing constants
export const KEY_PRESS_DURATION = 150;

