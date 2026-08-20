const Language = {
  english: "en-us",
  portugues: "pt-br",
};

function isLangValid(lang) {
  return lang && Object.values(Language).includes(String(lang));
}

function getRegularPath(path) {
  return path.startsWith("/") ? path : "/".concat(path);
}

function getLangFromUrl() {
  const [, lang, ...rest] = location?.pathname.split("/");

  const isDefault = lang !== Language.portugues;

  const path = "".concat(
    isDefault ? lang : "",
    ...rest.map((path) => "/".concat(path)),
  );

  return [isDefault ? Language.english : Language.portugues, path];
}

function getAltUrl(targetLanguage, path) {
  const [lang, currentPath] = getLangFromUrl();

  let resultPath = (path || currentPath).replaceAll(`/${lang}`, "");

  if (targetLanguage === Language.english) {
    return getRegularPath(resultPath || "/");
  }

  return `/${targetLanguage}`.concat(getRegularPath(resultPath) || "/");
}

function writeLangToLS(lang) {
  try {
    localStorage.setItem("lang", isLangValid(lang) ? lang : Language.english);
  } catch (e) {
    console.error("Could not persist the selected language...", e);
  }
}

function readPreferredLangFromLS() {
  try {
    let lang = localStorage.getItem("lang");

    if (!lang) {
      lang = getLangFromUrl()[0];
      writeLangToLS(lang);
    }

    if (!isLangValid(lang)) throw "Invalid lang";

    return lang;
  } catch {
    return Language.english;
  }
}

function isCurrentLangCorrect() {
  return getLangFromUrl()[0] === readPreferredLangFromLS();
}

function sync() {
  if (isCurrentLangCorrect()) return;

  window.location.href = getAltUrl(readPreferredLangFromLS());
}

function load() {
  if (!window.hasAlreadyLoaded) {
    document.addEventListener(
      "lang_change",
      (event) => {
        const { detail } = event;

        writeLangToLS(detail);
        sync();
      },
      false,
    );

    window.hasAlreadyLoaded = true;
  }

  sync();
}

load();
