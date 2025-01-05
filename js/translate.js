document.addEventListener("DOMContentLoaded", () => {
  const langSelector = document.getElementById("language");
  const translations = {};

  fetch("./translations.json")
    .then((response) => response.json())
    .then((data) => {
      Object.assign(translations, data);
      applyTranslations(langSelector.value); // Domyślny język
    });

  // Nasłuchiwanie zmiany języka
  langSelector.addEventListener("change", (e) => {
    const selectedLang = e.target.value;
    applyTranslations(selectedLang);
  });

  function applyTranslations(language) {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (translations[language] && translations[language][key]) {
        el.textContent = translations[language][key];
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (translations[language] && translations[language][key]) {
        el.placeholder = translations[language][key];
      }
    });
  }
});
