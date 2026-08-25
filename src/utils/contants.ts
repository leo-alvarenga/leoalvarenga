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

export const DEFAULT_AUTHOR_NAME = "Leonardo A. Alvarenga";
export const DEFAULT_AUTHOR_PICTURE_URL = "/pfp_sqr.jpeg";

export const LANGUAGE_LABELS = {
  [Language.english]: "English 🇺🇸",
  [Language.portugues]: "Português 🇧🇷",
};

export const LANGUAGE_HINTS = {
  [Language.english]: "Switch to english",
  [Language.portugues]: "Trocar para português",
};

// Convention: `<slug>-pt-br.md` marks a pt-BR translation; bare `<slug>.md` is English.
export function postLanguage(id: string): Language {
  return id.endsWith("-pt-br") ? Language.portugues : Language.english;
}

export function postSlug(id: string): string {
  return id.endsWith("-pt-br") ? id.slice(0, -"-pt-br".length) : id;
}

export function blogCover(
  post: { data: { cover?: string } },
  slug: string,
  size: { w: number; h: number } = { w: 1200, h: 800 },
): string {
  return (
    post.data.cover ?? `https://picsum.photos/seed/${slug}/${size.w}/${size.h}`
  );
}

export function blogAuthor(post: {
  data: { author?: string; authorPicture?: string };
}) {
  return {
    name: post.data?.author ?? DEFAULT_AUTHOR_NAME,
    picture: post.data?.authorPicture ?? DEFAULT_AUTHOR_PICTURE_URL,
  };
}

export const COMPANY_LOGOS = {
  vetta,
  nupessc,
  fitec,
};

export const STATUS_IMAGES = {
  ERROR: [errorTaken],
  NOT_FOUND: [notFoundGalaxy, notFoundVoid],
  IN_PROGRESS: [inProgressAstronaut, inProgressMoon, inProgressRelaunch],
};

export const NAVBAR_LINKS = [
  {
    baseHref: "/",
    label: "home.title",
  },
  {
    baseHref: "/blog",
    label: "blog.title",
  },
];

export const HERO_HIGHLIGHTED_WORDS = [
  { word: "hero.word.complex" },
  { word: "hero.word.data-heavy" },
  { word: "hero.word.terminal" },
  { word: "hero.word.cloud" },
];

export const FOOTER_LINKS = [
  {
    color: "#7db643",
    href: "https://neovim.io/",
    icon: "devicon-neovim-plain colored",
    word: "NeoVim",
  },
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
