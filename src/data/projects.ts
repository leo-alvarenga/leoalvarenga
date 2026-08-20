import { Language } from "../config";
import type { TranslatableText } from "../utils";
import { TECH_MAP, type Technology } from "./technologies";

export enum ProjectStatus {
  active = "commons.active",
  archived = "commons.archived",
  inactive = "commons.inactive",
}

export enum ProjectTag {
  backend = "Back-end",
  ai = "AI",
  linux = "Linux",
  command = "CLI",
  all = "commons.all",
  frontend = "Front-end",
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
        "Monorepo for my Pi (AI) Coding Agent packages; Includes Agent-mode switching, permission guards, Hash anchored operations, Agent task list tracking and more",
      [Language.portugues]:
        "Monorepo para meus pacotes do Pi (AI) Coding Agent; Inclui troca de modos do Agente, guardas de permissão, operações ancoradas em Hash, rastreamento da lista de tarefas do Agente e mais",
    },
    icon: "robot",
    name: "pi-mono",
    preview: "",
    repo: "https://github.com/leo-alvarenga/pi-mono",
    stack: [TECH_MAP.ts, TECH_MAP.nodejs],
    status: ProjectStatus.active,
    tags: [ProjectTag.ai],
  },
  {
    description: {
      [Language.english]:
        "My config files for a keyboard-focused, terminal-based dev workflow",
      [Language.portugues]:
        "Meus arquivos de configuração para um Workflow personalizado baseado no terminal e com foco na navegação via teclado",
    },
    icon: "gear",
    name: "dotfiles",
    preview: "",
    repo: "https://github.com/leo-alvarenga/dotfiles",
    stack: [TECH_MAP.lua, TECH_MAP.nix, TECH_MAP.bash],
    status: ProjectStatus.active,
    tags: [ProjectTag.linux, ProjectTag.ai, ProjectTag.command],
  },
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
