import fitec from "../assets/NuPESSC_logo.png";
import nupessc from "../assets/NuPESSC_logo.png";
import vetta from "../assets/Vetta_logo.png";

import errorTaken from "../assets/error_taken.svg";

import inProgressAstronaut from "../assets/in_progress_astronaut.svg";
import inProgressMoon from "../assets/in_progress_moon.svg";
import inProgressRelaunch from "../assets/in_progress_relaunch.svg";

import notFoundGalaxy from "../assets/not_found_galaxy.svg";
import notFoundVoid from "../assets/not_found_void.svg";
import { Language } from "../config";
import type { OpenGraphOptionsImage } from "./types";

export const PAGE_TITLE_PREFFIX = "Leonardo Alvarenga";
export const DEFAULT_PAGE_TITLE = `${PAGE_TITLE_PREFFIX} - Software Engineer`;

export const DEFAULT_DATE_FORMAT = "MMM, YYYY";

export const HOST_NAME = "https://leoalvarenga.dev";
export const EMAIL_FOR_CONTACT = "leonardo.a.alvarenga@gmail.com";

export const LANGUAGE_LABELS = {
  [Language.english]: "English 🇺🇸",
  [Language.portugues]: "Português 🇧🇷",
};

export const LANGUAGE_HINTS = {
  [Language.english]: "Switch to english",
  [Language.portugues]: "Trocar para português",
};

export const COMPANY_LOGOS = {
  vetta,
  nupessc,
  fitec,
};

export const STATUS_IMAGES = {
  ERROR: [errorTaken],
  IN_PROGRESS: [inProgressAstronaut, inProgressMoon, inProgressRelaunch],
  NOT_FOUND: [notFoundGalaxy, notFoundVoid],
};

export const NAVBAR_LINKS = [
  {
    label: "home.title",
    baseHref: "/",
  },
  {
    label: "blog.title",
    // baseHref: "https://shelldreams.dev/",
    baseHref: "/blog",
  },
];

export const HERO_HIGHLIGHTED_WORDS = [
  {
    style: "text-accent1 font-light font-petit-formal",
    word: "hero.word.concept",
  },
  {
    style: "text-accent3 font-audiowide",
    word: "hero.word.cloud",
  },
  {
    style: "text-accent2 font-anonymous",
    word: "hero.word.scalable",
  },
  {
    style: "text-accent4",
    word: "hero.word.scalable",
  },
];

export const FOOTER_LINKS = [
  {
    color: "#ff5e00",
    href: "https://astro.build/",
    icon: "devicon-astro-plain",
    word: "Astro.js",
  },
  {
    color: "#39bef7",
    href: "https://tailwindcss.com/",
    icon: "devicon-tailwindcss-original",
    word: "TailwindCSS",
  },
];

export const OPEN_GRAPH_IMGS: Record<string, OpenGraphOptionsImage> = {
  "pt-br": {
    alt: "Default og image",
    src: "/OpenGraphBase_pt-br.png",
  },
  "en-us": {
    alt: "Default og image",
    src: "/OpenGraphBase_en-us.png",
  },
};

export const DEFAULT_OPEN_GRAPH_SQR_IMAGE: OpenGraphOptionsImage = {
  alt: "Default og image",
  src: "/OpenGraphBaseSquare.png",
};

export function getDefaultOpenGraph(language: string) {
  return {
    author: "Leonardo A. Alvarenga",
    title: "",
    image: {
      default: OPEN_GRAPH_IMGS[language] ?? OPEN_GRAPH_IMGS["en-us"],
      square: DEFAULT_OPEN_GRAPH_SQR_IMAGE,
    },
  };
}
