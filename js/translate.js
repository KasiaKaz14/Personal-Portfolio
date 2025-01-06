document.addEventListener("DOMContentLoaded", () => {
  const langSelector = document.getElementById("language");
  const translations = {};

  const savedLanguage = localStorage.getItem("selectedLanguage") || "pl";
  langSelector.value = savedLanguage;

  fetch("./translations.json")
    .then((response) => response.json())
    .then((data) => {
      Object.assign(translations, data);
      applyTranslations(savedLanguage);
    });

  langSelector.addEventListener("change", (e) => {
    const selectedLang = e.target.value;
    localStorage.setItem("selectedLanguage", selectedLang);
    applyTranslations(selectedLang);
  });

  function applyTranslations(language) {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (translations[language] && translations[language][key]) {
        el.innerHTML = translations[language][key];
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
