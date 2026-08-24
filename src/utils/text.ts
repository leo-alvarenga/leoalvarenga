import { DEFAULT_LANG, Language } from "../config";

export type TranslatableText = string | Record<Language | string, string>;

export function translatableTextToString(
  text: TranslatableText,
  lang = DEFAULT_LANG,
) {
  try {
    return typeof text === "string" ? text : text[lang] || "";
  } catch {
    return "";
  }
}

export function capitalize(str: string) {
  return String(str).charAt(0).toUpperCase() + String(str).slice(1);
}

export function readingTime(body: string) {
  const words = body.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}
