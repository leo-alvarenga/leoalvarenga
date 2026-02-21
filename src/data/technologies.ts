export type Technology = {
  color: string;
  label: string;
};

export const TECH_MAP: Record<string, Technology> = {
  bun: {
    color: "#faefde",
    label: "Bun",
  },
  css: {
    color: "#3e90c7",
    label: "CSS",
  },
  html: {
    color: "#e64d27",
    label: "HTML",
  },
  js: {
    color: "#f0da4f",
    label: "JavaScript",
  },
  svelte: {
    color: "#ff4000",
    label: "Svelte",
  },
  sveltekit: {
    color: "#ff2520",
    label: "SvelteKit",
  },
  tailwindcss: {
    color: "#39bef7",
    label: "TailwindCSS",
  },
  ts: {
    color: "#2e74bf",
    label: "TypeScript",
  },
  react: {
    color: "#58c3db",
    label: "React.js",
  },
  styledComponents: {
    color: "#8b56ba",
    label: "styled-components",
  },
  postgresql: {
    color: "#336791",
    label: "PostgreSQL",
  },
  bash: {
    color: "var(--color-success)",
    label: "Bash",
  },
  docker: {
    color: "#029cc7",
    label: "Docker",
  },
  k8s: {
    color: "rgb(50, 107, 230)",
    label: "Kubernetes",
  },
  helm: {
    color: "rgb(15, 22, 137)",
    label: "Helm",
  },
  azureDevOps: {
    color: "#0078d4",
    label: "Azure DevOps",
  },
  firebase: {
    color: "#ffa200",
    label: "Firebase",
  },
  nodejs: {
    color: "#5cad47",
    label: "Node.js",
  },
  express: {
    color: "#000000",
    label: "Express",
  },
  antd: {
    color: "#0078d4",
    label: "Antd",
  },
  mui: {
    color: "#1ea4c9",
    label: "MUI",
  },
  golang: {
    color: "#00abd6",
    label: "Go",
  },
  storybook: {
    color: "#ff4785",
    label: "Storybook.js",
  },
  astro: {
    color: "#ff5e00",
    label: "Astro.js",
  },
  next: {
    color: "#000000",
    label: "Next.js",
  },
  nest: {
    color: "#de234f",
    label: "Nest.js",
  },
  python: {
    color: "#306998",
    label: "Python",
  },
  fastapi: {
    color: "#049689",
    label: "FastAPI",
  },
};

export const TECHNOLOGIES = Object.values(TECH_MAP);
