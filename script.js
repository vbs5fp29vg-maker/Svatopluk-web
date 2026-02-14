const copy = {
  cs: {
    eyebrow: "Osobní web",
    name: "Svatopluk Svoboda",
    subtitle: "Šachista, IT analytik, datový expert",
    photo_caption: "Osobní fotografie",
    about_title: "O mně",
    about_text:
      "Narodil jsem se 7. 1. 1984, jsem mezinárodní mistr v šachu a věnuji se IT analytice, datům, digitálním aplikacím, integracím a složitým systémům. Mám velkou rodinu.",
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
    link_fill: "doplnit odkaz",
    footer: "Svatopluk Svoboda | Šach a IT",
  },
  en: {
    eyebrow: "Personal Website",
    name: "Svatopluk Svoboda",
    subtitle: "Chess player, IT analyst, data expert",
    photo_caption: "Personal photo",
    about_title: "About Me",
    about_text:
      "I was born on January 7, 1984. I am an International Master in chess and I focus on IT analysis, data, digital applications, integrations, and complex systems. I have a big family.",
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
    link_fill: "add link",
    footer: "Svatopluk Svoboda | Chess & IT",
  },
};

const button = document.getElementById("lang-toggle");
let lang = "cs";

function renderLanguage() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (copy[lang][key]) {
      el.textContent = copy[lang][key];
    }
  });
  button.textContent = lang === "cs" ? "EN" : "CZ";
}

button.addEventListener("click", () => {
  lang = lang === "cs" ? "en" : "cs";
  renderLanguage();
});

renderLanguage();
