import "./LanguageSelector.css";
import React, { useState, useRef, useEffect } from "react";
import i18n from "i18next";

const languages = [
  {
    code: "en",
    name: "English",
    flag: "https://flagcdn.com/w20/gb.png",
  },
  {
    code: "it",
    name: "Italiano",
    flag: "https://flagcdn.com/w20/it.png",
  },
];

const LanguageSelector = () => {
  const savedLang =
    window.sessionStorage.getItem("LanguageAbbreviation") || "it";

  console.log(savedLang);
  i18n.changeLanguage(savedLang);

  const defaultLang = languages.find((l) => l.code === savedLang);

  const [selected, setSelected] = useState(defaultLang);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Click fuori per chiudere
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (lang) => {
    setSelected(lang);
    window.sessionStorage.setItem("LanguageAbbreviation", lang.code);
    setOpen(false);

    // Qui puoi collegare i18n.changeLanguage(lang.code)
    i18n.changeLanguage(lang.code);
  };

  return (
    <div className="language-selector" ref={dropdownRef}>
      <div className="selected-language" onClick={() => setOpen(!open)}>
        <img src={selected.flag} alt={selected.name} />
        <span>{selected.name}</span>
        <span className={`arrow ${open ? "rotate" : ""}`}>▼</span>
      </div>

      {open && (
        <div className="language-options">
          {languages.map((lang) => (
            <div
              key={lang.code}
              className="language-option"
              onClick={() => handleSelect(lang)}
            >
              <img src={lang.flag} alt={lang.name} />
              <span>{lang.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
