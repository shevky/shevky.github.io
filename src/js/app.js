const THEME_KEY = "theme";
const LANG_KEY = "lang";

const html = document.documentElement;
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

const menuToggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-site-nav]");

function getSupportedLangs() {
  const raw = html.dataset.langs || "";
  return raw.split(",").map((item) => item.trim()).filter(Boolean);
}

function applyTheme(theme) {
  const isDark = theme === "dark";
  html.classList.toggle("dark", isDark);
}

function resolveTheme() {
  const stored = localStorage.getItem(THEME_KEY);
  if (stored === "light" || stored === "dark") {
    return stored;
  }
  return prefersDark.matches ? "dark" : "light";
}

function setTheme(theme) {
  localStorage.setItem(THEME_KEY, theme);
  applyTheme(theme);
}

function getLangDatasetKey(lang) {
  if (!lang) return "";
  return `lang${lang.charAt(0).toUpperCase()}${lang.slice(1)}`;
}

function normalizeLangUrl(url) {
  if (!url) return "";
  const trimmed = url.trim();
  if (!trimmed) return "";

  const siteBase = (html.dataset.siteBase || "").replace(/\/+$/, "");
  if (siteBase && trimmed.startsWith(siteBase)) {
    const relative = trimmed.slice(siteBase.length) || "/";
    return relative.startsWith("/") ? relative : `/${relative}`;
  }

  return trimmed;
}

function redirectToLangPage(lang) {
  const datasetKey = getLangDatasetKey(lang);
  if (!datasetKey) return;
  const rawTarget = html.dataset[datasetKey];
  const normalizedTarget = normalizeLangUrl(rawTarget);
  if (!normalizedTarget) return;

  const finalUrl = new URL(normalizedTarget, window.location.origin).href;
  if (finalUrl !== window.location.href) {
    window.location.assign(finalUrl);
  }
}

function setLang(lang, options = {}) {
  const supported = getSupportedLangs();
  const safeLang = supported.includes(lang) ? lang : (html.dataset.langDefault || supported[0]);
  localStorage.setItem(LANG_KEY, safeLang);
  html.setAttribute("lang", safeLang);
  if (options.redirect) {
    redirectToLangPage(safeLang);
  }
}

function initMenuToggle() {
  if (!menuToggle || !nav) return;
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.dataset.open === "true";
    nav.dataset.open = isOpen ? "false" : "true";
  });
}

function initDocSidebarActive() {
  const links = document.querySelectorAll(".doc-sidebar a");
  if (!links.length) return;

  const currentPath = window.location.pathname.replace(/\/+$/, "") || "/";
  links.forEach((link) => {
    const linkPath = new URL(link.href, window.location.origin).pathname.replace(/\/+$/, "") || "/";
    if (linkPath === currentPath) {
      link.classList.add("is-active");
    }
  });
}

function initAccordions() {
  const accordions = document.querySelectorAll("[data-accordion='single']");
  accordions.forEach((accordion) => {
    const items = Array.from(accordion.querySelectorAll("details"));
    if (!items.length) return;
    items.forEach((item) => {
      item.addEventListener("toggle", () => {
        if (!item.open) return;
        items.forEach((other) => {
          if (other !== item) {
            other.open = false;
          }
        });
      });
    });
  });
}

function init() {
  applyTheme(resolveTheme());
  initMenuToggle();
  initAccordions();
  initDocSidebarActive();
}

window.addEventListener("click", (event) => {
  const themeToggle = event.target.closest("[data-theme-toggle]");
  if (themeToggle) {
    const nextTheme = html.classList.contains("dark") ? "light" : "dark";
    setTheme(nextTheme);
    return;
  }

  const langToggle = event.target.closest("[data-lang-toggle]");
  if (langToggle) {
    const current = html.getAttribute("lang") || html.dataset.langDefault || "tr";
    const supported = getSupportedLangs();
    const next = supported.length === 2 && supported.includes("tr") && supported.includes("en")
      ? current === "tr" ? "en" : "tr"
      : supported[(supported.indexOf(current) + 1) % supported.length];
    setLang(next, { redirect: true });
  }
});

init();
