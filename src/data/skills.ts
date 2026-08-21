export type SkillCategory = "languages" | "frontend" | "backend" | "devops";

export type Skill = {
  id: string;
  label: string;
  icon: string;
  isSrc?: boolean;
  category: SkillCategory;
  primary?: boolean;
};

export const SKILL_GROUPS: SkillCategory[] = [
  "languages",
  "frontend",
  "backend",
  "devops",
];

export const SKILLS: Skill[] = [
  // Languages
  {
    id: "ts",
    label: "TypeScript",
    icon: "devicon-typescript-plain colored",
    category: "languages",
    primary: true,
  },
  {
    id: "js",
    label: "JavaScript",
    icon: "devicon-javascript-plain colored",
    category: "languages",
  },
  {
    id: "lua",
    label: "Lua",
    icon: "devicon-lua-plain colored",
    category: "languages",
  },
  {
    id: "bash",
    label: "Bash",
    icon: "devicon-bash-plain",
    category: "languages",
  },

  // Frontend
  {
    id: "react",
    label: "React.js",
    icon: "devicon-react-original colored",
    category: "frontend",
    primary: true,
  },
  {
    id: "next",
    label: "Next.js",
    icon: "devicon-nextjs-original-wordmark colored",
    category: "frontend",
  },
  {
    id: "svelte",
    label: "Svelte",
    icon: "devicon-svelte-plain colored",
    category: "frontend",
  },
  {
    id: "sveltekit",
    label: "SvelteKit",
    icon: "devicon-svelte-plain colored",
    category: "frontend",
  },
  {
    id: "astro",
    label: "Astro.js",
    icon: "devicon-astro-plain colored",
    category: "frontend",
  },
  {
    id: "redux",
    label: "Redux",
    icon: "devicon-redux-original colored",
    category: "frontend",
  },
  {
    id: "tailwind",
    label: "TailwindCSS",
    icon: "devicon-tailwindcss-original colored",
    category: "frontend",
  },
  {
    id: "styled-components",
    label: "styled-components",
    icon: "/style-components.svg",
    isSrc: true,
    category: "frontend",
  },
  {
    id: "vite",
    label: "Vite.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
    isSrc: true,
    category: "frontend",
  },

  // Backend
  {
    id: "nodejs",
    label: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    isSrc: true,
    category: "backend",
    primary: true,
  },
  {
    id: "postgresql",
    label: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    isSrc: true,
    category: "backend",
    primary: true,
  },
  {
    id: "express",
    label: "Express",
    icon: "devicon-express-original",
    category: "backend",
  },
  {
    id: "nestjs",
    label: "Nest.js",
    icon: "devicon-nestjs-original colored",
    category: "backend",
  },
  {
    id: "fastapi",
    label: "FastAPI",
    icon: "devicon-fastapi-plain colored",
    category: "backend",
  },
  {
    id: "bun",
    label: "Bun",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bun/bun-original.svg",
    isSrc: true,
    category: "backend",
  },
  {
    id: "firebase",
    label: "Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
    isSrc: true,
    category: "backend",
  },

  // DevOps & Cloud
  {
    id: "docker",
    label: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    isSrc: true,
    category: "devops",
    primary: true,
  },
  {
    id: "k8s",
    label: "Kubernetes",
    icon: "devicon-kubernetes-plain colored",
    category: "devops",
  },
  {
    id: "helm",
    label: "Helm",
    icon: "devicon-helm-original colored",
    category: "devops",
  },
  {
    id: "azureDevOps",
    label: "Azure DevOps",
    icon: "devicon-azuredevops-plain colored",
    category: "devops",
  },
  {
    id: "git",
    label: "git",
    icon: "devicon-git-plain colored",
    category: "devops",
  },
];
