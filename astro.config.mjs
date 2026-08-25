// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

export default defineConfig({
  image: {
    domains: ["https://cdn.jsdelivr.net"],
  },

  vite: {
    plugins: [tailwindcss()],
  },

  i18n: {
    locales: ["en", "pt-br"],
    defaultLocale: "en",
  },

  integrations: [icon()],

  markdown: {
    shikiConfig: {
      theme: "css-variables",
      transformers: [
        {
          name: "code-title",
          pre(node) {
            const title = /(?:^|\s)title="([^"]*)"/.exec(this.options.meta?.__raw ?? "");
            if (title) node.properties.dataTitle = title[1];
          },
        },
      ],
    },
  },
});