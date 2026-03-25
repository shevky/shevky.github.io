/* ================================================================
   S.H.E.V.K.Y. - Client-side runtime
   Theme, language, scroll animations, mobile menu, sidebar active
   ================================================================ */

const THEME_KEY = "theme";
const LANG_KEY = "lang";
const html = document.documentElement;
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

/* ============ Theme ============ */

function resolveTheme() {
  const stored = localStorage.getItem(THEME_KEY);
  if (stored === "light" || stored === "dark") return stored;
  return prefersDark.matches ? "dark" : "light";
}

function applyTheme(theme) {
  html.classList.toggle("dark", theme === "dark");
}

function setTheme(theme) {
  localStorage.setItem(THEME_KEY, theme);
  applyTheme(theme);
}

function toggleTheme() {
  setTheme(html.classList.contains("dark") ? "light" : "dark");
}

/* ============ Language ============ */

function getSupportedLangs() {
  return (html.dataset.langs || "").split(",").map((s) => s.trim()).filter(Boolean);
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

function cycleLang() {
  const current = html.getAttribute("lang") || html.dataset.langDefault || "en";
  const supported = getSupportedLangs();
  if (supported.length < 2) return;
  const currentIndex = supported.indexOf(current);
  const nextIndex = (currentIndex + 1) % supported.length;
  setLang(supported[nextIndex], { redirect: true });
}

/* ============ Mobile menu ============ */

function initMobileMenu() {
  const toggleBtn = document.querySelector("[data-menu-toggle]");
  const mobileNav = document.getElementById("mobile-nav");
  if (!toggleBtn || !mobileNav) return;

  toggleBtn.addEventListener("click", () => {
    const isOpen = mobileNav.dataset.open === "true";
    const nextState = !isOpen;
    mobileNav.dataset.open = nextState ? "true" : "false";
    toggleBtn.setAttribute("aria-expanded", String(nextState));

    if (nextState) {
      const firstLink = mobileNav.querySelector("a");
      if (firstLink) firstLink.focus();
    }
  });

  // Close on click outside
  document.addEventListener("click", (e) => {
    if (mobileNav.dataset.open !== "true") return;
    if (!mobileNav.contains(e.target) && !toggleBtn.contains(e.target)) {
      mobileNav.dataset.open = "false";
      toggleBtn.setAttribute("aria-expanded", "false");
    }
  });

  // Close on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileNav.dataset.open === "true") {
      mobileNav.dataset.open = "false";
      toggleBtn.setAttribute("aria-expanded", "false");
      toggleBtn.focus();
    }
  });
}

/* ============ Doc sidebar active state ============ */

function initDocSidebarActive() {
  const links = document.querySelectorAll(".doc-sidebar a");
  if (!links.length) return;

  const currentPath = window.location.pathname.replace(/\/+$/, "") || "/";
  links.forEach((link) => {
    const linkPath = new URL(link.href, window.location.origin).pathname.replace(/\/+$/, "") || "/";
    if (linkPath === currentPath) {
      link.classList.add("is-active");
      link.setAttribute("aria-current", "page");
    }
  });
}

/* ============ Accordions ============ */

function initAccordions() {
  const accordions = document.querySelectorAll("[data-accordion='single']");
  accordions.forEach((accordion) => {
    const items = Array.from(accordion.querySelectorAll("details"));
    if (!items.length) return;
    items.forEach((item) => {
      item.addEventListener("toggle", () => {
        if (!item.open) return;
        items.forEach((other) => {
          if (other !== item) other.open = false;
        });
      });
    });
  });
}

/* ============ Responsive table wrappers ============ */

function initResponsiveTables() {
  const tables = document.querySelectorAll(".prose table");
  tables.forEach((table) => {
    if (table.parentElement && table.parentElement.classList.contains("table-scroll")) return;
    const wrapper = document.createElement("div");
    wrapper.className = "table-scroll";
    table.parentNode.insertBefore(wrapper, table);
    wrapper.appendChild(table);
  });
}

/* ============ Scroll-triggered entrance animations ============ */

function initScrollAnimations() {
  const targets = document.querySelectorAll(".fade-in-up");
  if (!targets.length) return;

  // Respect prefers-reduced-motion
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    targets.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  targets.forEach((el) => observer.observe(el));
}

/* ============ Global click delegation ============ */

function initGlobalClicks() {
  window.addEventListener("click", (event) => {
    if (event.target.closest("[data-theme-toggle]")) {
      toggleTheme();
      return;
    }
    if (event.target.closest("[data-lang-toggle]")) {
      cycleLang();
    }
  });
}

/* ============ Init ============ */

function init() {
  applyTheme(resolveTheme());
  initMobileMenu();
  initAccordions();
  initDocSidebarActive();
  initResponsiveTables();
  initScrollAnimations();
  initGlobalClicks();
}

init();
