import { Language } from "../config";
import type { TranslatableText } from "../utils";
import { TECH_MAP, type Technology } from "./technologies";

export enum ProjectStatus {
  active = "commons.active",
  archived = "commons.archived",
  inactive = "commons.inactive",
}

export enum ProjectTag {
  all = "commons.all",
  backend = "Back-end",
  command = "CLI",
  frontend = "Front-end",
  linux = "Linux",
}

export type ProjectStatusIcon = {
  className: string;
  name: string;
};

export type Project = {
  description: TranslatableText;
  icon: string;
  name: string;
  preview?: string;
  repo?: string;
  stack: Technology[];
  status: ProjectStatus;
  tags: ProjectTag[];
};

export const PROJECT_STATUS_COLOR: Record<ProjectStatus, string> = {
  [ProjectStatus.active]: "success",
  [ProjectStatus.archived]: "warning",
  [ProjectStatus.inactive]: "red",
};

export const PROJECT_STATUS_ICON: Record<ProjectStatus, ProjectStatusIcon> = {
  [ProjectStatus.active]: {
    className: `text-${PROJECT_STATUS_COLOR[ProjectStatus.active]}`,
    name: "fa6-solid:circle",
  },
  [ProjectStatus.archived]: {
    className: `text-${PROJECT_STATUS_COLOR[ProjectStatus.archived]}`,
    name: "fa6-solid:box-archive",
  },
  [ProjectStatus.inactive]: {
    className: `text-${PROJECT_STATUS_COLOR[ProjectStatus.inactive]}`,
    name: "fa6-solid:business-time",
  },
};

export const PROJECTS: Project[] = [
  {
    description: {
      [Language.english]:
        "Latest version of my personal web page, made using Astro.js",
      [Language.portugues]:
        "Versão mais atual da minha página web pessoal, feita com Astro.js",
    },
    icon: "",
    name: "leoalvarenga.dev",
    preview: "#leoalvarenga.dev",
    repo: "https://github.com/leo-alvarenga/leoalvarenga.dev",
    stack: [TECH_MAP.astro, TECH_MAP.tailwindcss, TECH_MAP.ts, TECH_MAP.js],
    status: ProjectStatus.active,
    tags: [ProjectTag.frontend],
  },
  {
    description: {
      [Language.english]:
        "A simple CR & CRA (brazilian GPA counterpart) calculator",
      [Language.portugues]:
        "Uma Calculadora de CR (Coeficiente de Rendimento) e CRA (Coeficiente de Rendimento Acumulado)",
    },
    icon: "calculator",
    name: "Calculadora CR",
    preview: "https://calculadora-cr.web.app/",
    repo: "https://github.com/leo-alvarenga/calculadora-cr",
    stack: [TECH_MAP.react, TECH_MAP.js, TECH_MAP.css],
    status: ProjectStatus.archived,
    tags: [ProjectTag.frontend],
  },
  {
    description: {
      [Language.english]:
        "A simple MERN stack blog that aims at providing relevant info to uni students",
      [Language.portugues]:
        "Um blog simples com foco no auxílio ao estudante universitário contruído com o MERN stack",
    },
    icon: "graduation-cap",
    name: "Guia do universitário",
    preview: "",
    repo: "https://github.com/leo-alvarenga/guia-do-universitario",
    stack: [
      TECH_MAP.react,
      TECH_MAP.mui,
      TECH_MAP.js,
      TECH_MAP.nodejs,
      TECH_MAP.express,
    ],
    status: ProjectStatus.archived,
    tags: [ProjectTag.frontend, ProjectTag.backend],
  },
  {
    description: {
      [Language.english]:
        "A powerful, lightweight and reliable CLI based to-do tracker capable of serving a web front-end locally",
      [Language.portugues]:
        "Um app poderoso, leve e confiável baseado em linha de comando para controle de tarefas capaz de servir um front-end web localmente",
    },
    icon: "terminal",
    name: "To Go",
    preview: "",
    repo: "https://github.com/leo-alvarenga/to-go",
    stack: [TECH_MAP.html, TECH_MAP.css, TECH_MAP.js, TECH_MAP.golang],
    status: ProjectStatus.archived,
    tags: [ProjectTag.frontend, ProjectTag.backend],
  },
  {
    description: {
      [Language.english]:
        "Reworked version of my personal web page using SvelteKit (1.20)",
      [Language.portugues]:
        "Versão retrabalhada da minha página web pessoal utilizando SvelteKit (1.20)",
    },
    icon: "",
    name: "svelte-leoalvarenga.dev",
    preview: "",
    repo: "https://github.com/leo-alvarenga/svelte-leoalvarenga.dev",
    stack: [
      TECH_MAP.svelte,
      TECH_MAP.sveltekit,
      TECH_MAP.tailwindcss,
      TECH_MAP.ts,
    ],
    status: ProjectStatus.archived,
    tags: [ProjectTag.frontend],
  },
  {
    description: {
      [Language.english]:
        "A small and dead simple web app template based on an API Rest built using Bun and ElysiaJS that serves static pages with internalization without overhead.",
      [Language.portugues]:
        "Um pequeno e simples template para webapps baseado em uma API Rest, construído com Bun e ElysiaJS, que serve páginas estáticas com internacionalização sem complicações desnecessárias",
    },
    icon: "server",
    name: "bej",
    preview: "",
    repo: "https://github.com/leo-alvarenga/bej",
    stack: [TECH_MAP.bun, TECH_MAP.ts],
    status: ProjectStatus.archived,
    tags: [ProjectTag.backend, ProjectTag.frontend],
  },
];

// TODO: Add featured projects (maybe with a slider?)
export const FEATURED_PROJECTS = [];

export const PROJECT_TAGS = [
  ProjectTag.all,
  ProjectTag.backend,
  ProjectTag.command,
  ProjectTag.frontend,
  ProjectTag.linux,
];
