import React from "react";
import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  function changeLanguage(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <select
      onChange={(e) => changeLanguage(e.target.value)}
      value={i18n.language}
      className="bg-transparent text-white"
    >
      <option value="fr">FR</option>
      <option value="en">EN</option>
      <option value="es">ES</option>
    </select>
  );
}

export default LanguageSwitcher;
