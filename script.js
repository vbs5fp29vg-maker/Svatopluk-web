const copy = {
  cs: {
    eyebrow: "Osobní web",
    name: "Svatopluk Svoboda",
    subtitle: "IT analytik, datové integrace, šachista",
    value_prop:
      "Pomáhám týmům navrhovat a doručovat digitální produkty, které jsou stabilní, měřitelné a použitelné.",
    badge_it: "IT analýza a architektura",
    badge_data: "Datové integrace",
    badge_im: "Mezinárodní mistr v šachu",
    badge_champion: "Mistr ČR 2018",
    photo_caption: "Osobní fotografie",
    about_title: "O mně",
    about_text:
      "Narodil jsem se 7. 1. 1984. Profesně se věnuji IT analýze s přesahem do architektury a vývoje, návrhu datových integrací a práci s komplexními systémy. Jsem mezinárodní mistr v šachu a mám velkou rodinu.",
    stat_born: "Rok narození",
    stat_title: "Šachový titul",
    stat_champion: "Mistr ČR",
    projects_title: "Co umím dodat",
    proj_1_title: "Analýza a návrh řešení",
    proj_1_text:
      "Převod business požadavků do jasné specifikace, backlogu a implementačního plánu.",
    proj_2_title: "Datové toky a integrace",
    proj_2_text:
      "Návrh robustních integračních toků mezi systémy s důrazem na kvalitu dat a provozní stabilitu.",
    proj_3_title: "Řízení komplexity",
    proj_3_text: "Strukturované rozhodování v komplexním prostředí a důraz na měřitelný výsledek.",
    it_title: "Profesní dráha",
    it_1: "IT analytik se zaměřením na digitální aplikace",
    it_2: "Datový expert pro návrh a řízení datových toků",
    it_3: "Integrace systémů a práce s komplexními prostředími",
    it_4: "Silný důraz na praktické výsledky a kvalitu řešení",
    chess_title: "Šachová dráha",
    chess_1: "Mezinárodní mistr v šachu",
    chess_2: "Mistr České republiky v šachu (2018)",
    chess_3: "Dlouhodobý fokus na strategii, disciplínu a výkon",
    contact_title: "Kontakt",
    contact_cta_mail: "Napsat e-mail",
    contact_cta_linkedin: "Spojit se na LinkedIn",
    link_linkedin: "LinkedIn: linkedin.com/in/svatopluk-svoboda-5ba34b83",
    link_github: "GitHub: github.com/vbs5fp29vg-maker",
    link_instagram: "Instagram: instagram.com/svatosvoboda",
    footer: "Svatopluk Svoboda | Šach a IT",
    page_title: "Svatopluk Svoboda | IT analytik, integrace, šach",
    page_description:
      "Svatopluk Svoboda - IT analytik s přesahem do architektury a vývoje, specializace na datové integrace a International Master v šachu.",
  },
  en: {
    eyebrow: "Personal Website",
    name: "Svatopluk Svoboda",
    subtitle: "IT analyst, data integrations, chess player",
    value_prop:
      "I help teams design and deliver digital products that are stable, measurable, and practical.",
    badge_it: "IT analysis and architecture",
    badge_data: "Data integrations",
    badge_im: "International Master in chess",
    badge_champion: "Czech Champion 2018",
    photo_caption: "Personal photo",
    about_title: "About Me",
    about_text:
      "I was born on January 7, 1984. Professionally, I focus on IT analysis with overlap into architecture and development, data integrations, and complex systems. I am an International Master in chess and I have a big family.",
    stat_born: "Year of Birth",
    stat_title: "Chess Title",
    stat_champion: "Czech Champion",
    projects_title: "What I deliver",
    proj_1_title: "Analysis and solution design",
    proj_1_text: "Turning business needs into clear specifications, backlog, and implementation plan.",
    proj_2_title: "Data flows and integrations",
    proj_2_text:
      "Designing robust integration flows between systems with focus on data quality and operational stability.",
    proj_3_title: "Complexity management",
    proj_3_text: "Structured decision-making in complex environments with focus on measurable outcomes.",
    it_title: "Professional Career",
    it_1: "IT analyst focused on digital applications",
    it_2: "Data expert for data-flow design and governance",
    it_3: "System integration and work in complex environments",
    it_4: "Strong focus on practical outcomes and solution quality",
    chess_title: "Chess Career",
    chess_1: "International Master in chess",
    chess_2: "Czech Chess Champion (2018)",
    chess_3: "Long-term focus on strategy, discipline, and performance",
    contact_title: "Contact",
    contact_cta_mail: "Send email",
    contact_cta_linkedin: "Connect on LinkedIn",
    link_linkedin: "LinkedIn: linkedin.com/in/svatopluk-svoboda-5ba34b83",
    link_github: "GitHub: github.com/vbs5fp29vg-maker",
    link_instagram: "Instagram: instagram.com/svatosvoboda",
    footer: "Svatopluk Svoboda | Chess & IT",
    page_title: "Svatopluk Svoboda | IT analyst, integrations, chess",
    page_description:
      "Svatopluk Svoboda - IT analyst with overlap into architecture and development, focused on data integrations and International Master in chess.",
  },
};

const button = document.getElementById("lang-toggle");
const descriptionMeta = document.querySelector('meta[name="description"]');
const ogTitleMeta = document.querySelector('meta[property="og:title"]');
const ogDescriptionMeta = document.querySelector('meta[property="og:description"]');
const twitterTitleMeta = document.querySelector('meta[name="twitter:title"]');
const twitterDescriptionMeta = document.querySelector('meta[name="twitter:description"]');

let lang = localStorage.getItem("site-lang") || "cs";
if (!copy[lang]) {
  lang = "cs";
}

function renderLanguage() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (copy[lang][key]) {
      el.textContent = copy[lang][key];
    }
  });

  document.title = copy[lang].page_title;
  descriptionMeta?.setAttribute("content", copy[lang].page_description);
  ogTitleMeta?.setAttribute("content", copy[lang].page_title);
  ogDescriptionMeta?.setAttribute("content", copy[lang].page_description);
  twitterTitleMeta?.setAttribute("content", copy[lang].page_title);
  twitterDescriptionMeta?.setAttribute("content", copy[lang].page_description);

  button.textContent = lang === "cs" ? "EN" : "CZ";
  button.setAttribute("aria-label", lang === "cs" ? "Switch language to English" : "Prepnout jazyk na cestinu");
}

function initReveal() {
  const elements = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
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
    { threshold: 0.15 }
  );

  elements.forEach((element) => observer.observe(element));
}

button.addEventListener("click", () => {
  lang = lang === "cs" ? "en" : "cs";
  localStorage.setItem("site-lang", lang);
  renderLanguage();
});

renderLanguage();
initReveal();
