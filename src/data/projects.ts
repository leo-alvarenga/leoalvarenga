import { Language } from "../config";
import type { TranslatableText } from "../utils";
import { TECH_MAP, type Technology } from "./technologies";

export enum ProjectStatus {
  active = "commons.active",
  archived = "commons.archived",
  inactive = "commons.inactive",
}

export enum ProjectTag {
  ai = "AI",
  linux = "Linux",
  command = "CLI",
  music = "Music",
  all = "commons.all",
  backend = "Back-end",
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
        "Monorepo for my Pi (AI) Coding Agent packages; Includes parallel subagents, Agent-mode switching, permission guards, Hash anchored operations, Agent task list tracking and more",
      [Language.portugues]:
        "Monorepo para meus pacotes do Pi (AI) Coding Agent; Inclui sub-agentes paralelos, troca de modos do Agente, guardas de permissão, operações ancoradas em Hash, rastreamento da lista de tarefas do Agente e mais",
    },
    icon: "robot",
    name: "pi-mono",
    preview: "",
    repo: "https://github.com/leo-alvarenga/pi-mono",
    stack: [TECH_MAP.ts, TECH_MAP.nodejs],
    status: ProjectStatus.active,
    tags: [ProjectTag.ai, ProjectTag.command, ProjectTag.linux],
  },
  {
    description: {
      [Language.english]:
        "CLI that transcodes FLAC files to AAC (.m4a) for DAPs; mirrors folder structure via ffmpeg, with dry-run and optional MusicBrainz auto-tagging",
      [Language.portugues]:
        "CLI que converte arquivos FLAC para AAC (.m4a) para DAPs; espelha a estrutura de pastas via ffmpeg, com dry-run e auto-tag opcional via MusicBrainz",
    },
    icon: "music",
    name: "audex",
    preview: "",
    repo: "https://github.com/leo-alvarenga/audex",
    stack: [TECH_MAP.ts, TECH_MAP.nodejs],
    status: ProjectStatus.active,
    tags: [ProjectTag.music, ProjectTag.command, ProjectTag.linux],
  },
];
