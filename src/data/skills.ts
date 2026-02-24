export type SkillCardFrontFace = {
  bg: string;
  content: string;
  isSrc?: boolean;
  style?: string;
};

export type SkillCardBackFace = SkillCardFrontFace & {
  text: string;
};

export type Skill = {
  back: SkillCardBackFace;
  front: SkillCardFrontFace;
  id: string;
};

export const SKILLS: Skill[] = [
  {
    front: {
      bg: "var(--color-text)",
      content: "devicon-html5-plain colored",
    },
    back: {
      bg: "#e64d27",
      content: "HTML",
      text: "var(--color-text)",
    },
    id: "html",
  },
  {
    front: {
      bg: "var(--color-text)",
      content: "devicon-css3-plain colored",
    },
    back: {
      bg: "#3e90c7",
      content: "CSS",
      text: "var(--color-text)",
    },
    id: "css",
  },
  {
    front: {
      bg: "var(--color-bg3)",
      content: "devicon-javascript-plain colored",
    },
    back: {
      bg: "#f0da4f",
      content: "JavaScript",
      text: "var(--color-bg3)",
    },
    id: "js",
  },
  {
    front: {
      bg: "var(--color-text)",
      content: "devicon-typescript-plain colored",
    },
    back: {
      bg: "#2e74bf",
      content: "TypeScript",
      text: "var(--color-text)",
    },
    id: "ts",
  },
  {
    front: {
      bg: "var(--color-bg3)",
      content:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
      isSrc: true,
    },
    back: {
      bg: "#59b4ff",
      content: "Vite.js",
      style:
        "background-image: linear-gradient(-45deg, #bd34fe 0%, #47caff 100%);",
      text: "var(--color-bg3)",
    },
    id: "vite",
  },
  {
    front: {
      bg: "var(--color-bg3)",
      content:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitest/vitest-original.svg",
      isSrc: true,
    },
    back: {
      bg: "var(--color-bg3)",
      content: "Vitest",
      text: "rgb(252, 199, 43)",
    },
    id: "vitetest",
  },
  {
    front: {
      bg: "var(--color-bg3)",
      content: "devicon-react-original colored",
    },
    back: {
      bg: "#22262e",
      content: "React.js",
      text: "#58c3db",
    },
    id: "react",
  },
  {
    front: {
      bg: "var(--color-bg3)",
      content: "devicon-redux-original colored",
    },
    back: {
      bg: "var(--color-bg3)",
      content: "Redux",
      text: "#764abd",
    },
    id: "redux",
  },
  {
    front: {
      bg: "var(--color-text)",
      content: "devicon-nextjs-original-wordmark colored",
    },
    back: {
      bg: "#000000",
      content: "Next.js",
      text: "var(--color-text)",
    },
    id: "next",
  },
  {
    front: {
      bg: "var(--color-text)",
      content: "devicon-svelte-plain colored",
    },
    back: {
      bg: "#ff4000",
      content: "Svelte",
      text: "var(--color-text)",
    },
    id: "svelte",
  },
  {
    front: {
      bg: "var(--color-bg3)",
      content: "devicon-astro-plain colored",
    },
    back: {
      bg: "var(--color-bg3)",
      content: "Astro.js",
      text: "#ff5e00",
    },
    id: "astro",
  },
  {
    front: {
      bg: "var(--color-bg3)",
      content: "devicon-svelte-plain colored",
    },
    back: {
      bg: "#ff4000",
      content: "SvelteKit",
      text: "var(--color-text)",
    },
    id: "svelte",
  },
  {
    front: {
      bg: "var(--color-text)",
      content: "devicon-materialui-plain colored",
    },
    back: {
      bg: "#1ea4c9",
      content: "MUI",
      text: "var(--color-text)",
    },
    id: "mui",
  },
  {
    front: {
      bg: "var(--color-bg3)",
      content: "/style-components.svg",
      isSrc: true,
    },
    back: {
      bg: "#8b56ba",
      content: "styled-components",
      text: "var(--color-bg3)",
    },
    id: "styled-components",
  },
  {
    front: {
      bg: "var(--color-bg3)",
      content: "devicon-tailwindcss-original colored",
    },
    back: {
      bg: "var(--color-bg3)",
      content: "TailwindCSS",
      text: "#39bef7",
    },
    id: "tailwind",
  },
  {
    front: {
      bg: "var(--color-text)",
      content: "devicon-jest-plain colored",
    },
    back: {
      bg: "var(--color-text)",
      content: "Jest",
      text: "#99425a",
    },
    id: "jest",
  },
  {
    front: {
      bg: "var(--color-text)",
      content: "devicon-lua-plain colored",
    },
    back: {
      bg: "#000080",
      content: "Lua",
      text: "var(--color-text)",
    },
    id: "lua",
  },
  {
    front: {
      bg: "var(--color-text)",
      content: "devicon-go-original-wordmark colored",
    },
    back: {
      bg: "#00abd6",
      content: "Go",
      text: "var(--color-text)",
    },
    id: "golang",
  },
  {
    front: {
      bg: "var(--color-text)",
      content:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bun/bun-original.svg",
      isSrc: true,
    },
    back: {
      bg: "#faefde",
      content: "Bun",
      text: "var(--color-bg3)",
    },
    id: "bun",
  },
  {
    front: {
      bg: "var(--color-text)",
      content:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      isSrc: true,
    },
    back: {
      bg: "#5cad47",
      content: "Node.js",
      text: "var(--color-text)",
    },
    id: "nodejs",
  },
  {
    front: {
      bg: "var(--color-bg3)",
      content: "devicon-express-original",
    },
    back: {
      bg: "var(--color-text)",
      content: "Express",
      text: "#000000",
    },
    id: "express",
  },
  {
    front: {
      bg: "var(--color-bg3)",
      content: "devicon-nestjs-original colored",
    },
    back: {
      bg: "#de234f",
      content: "Nest.js",
      text: "var(--color-bg3)",
    },
    id: "nestjs",
  },
  {
    front: {
      bg: "var(--color-text)",
      content:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
      isSrc: true,
    },
    back: {
      bg: "#336791",
      content: "PostgreSQL",
      text: "var(--color-text)",
    },
    id: "postgresql",
  },
  {
    front: {
      bg: "var(--color-text)",
      content:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
      isSrc: true,
    },
    back: {
      bg: "#029cc7",
      content: "Docker",
      text: "var(--color-text)",
    },
    id: "docker",
  },
  {
    front: {
      bg: "var(--color-bg3)",
      content: "devicon-bash-plain",
    },
    back: {
      bg: "var(--color-bg3)",
      content: "Bash",
      text: "var(--color-success)",
    },
    id: "bash",
  },
  {
    front: {
      bg: "var(--color-text)",
      content: "devicon-kubernetes-plain colored",
    },
    back: {
      bg: "rgb(50, 107, 230)",
      content: "Kubernetes",
      text: "var(--color-text)",
    },
    id: "k8s",
  },
  {
    front: {
      bg: "var(--color-text)",
      content: "devicon-helm-original colored",
    },
    back: {
      bg: "#0F1689",
      content: "Helm",
      text: "var(--color-text)",
    },
    id: "helm",
  },
  {
    front: {
      bg: "var(--color-text)",
      content: "devicon-azuredevops-plain colored",
    },
    back: {
      bg: "#0078d4",
      content: "Azure DevOps",
      text: "var(--color-text)",
    },
    id: "azureDevOps",
  },
  {
    front: {
      bg: "var(--color-bg3)",
      content:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
      isSrc: true,
    },
    back: {
      bg: "var(--color-bg3)",
      content: "Firebase",
      text: "#ffa200",
    },
    id: "firebase",
  },
  {
    front: {
      bg: "var(--color-bg3)",
      content: "devicon-git-plain colored",
    },
    back: {
      bg: "#f24e29",
      content: "git",
      text: "var(--color-bg3)",
    },
    id: "git",
  },
  {
    front: {
      bg: "var(--color-bg3)",
      content:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      isSrc: true,
    },
    back: {
      bg: "#306998",
      content: "Python",
      text: "var(--color-text)",
    },
    id: "python",
  },
  {
    front: {
      bg: "var(--color-bg3)",
      content: "devicon-fastapi-plain colored",
    },
    back: {
      bg: "var(--color-bg3)",
      content: "FastAPI",
      text: "#049689",
    },
    id: "fastapi",
  },
];
