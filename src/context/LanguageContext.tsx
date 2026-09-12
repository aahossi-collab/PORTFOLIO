"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "fr" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  fr: {
    nav_home: "Accueil",
    nav_about: "À propos",
    nav_experience: "Parcours",
    nav_languages: "Langues",
    nav_work: "Projets",
    nav_contact: "Contact",
    hero_hi: "Salut, je suis",
    hero_desc: "Passionnée par le développement front-end, la cybersécurité et l'IA. Actuellement en cycle Ingénieur Informatique à HESTIM.",
    hero_cv: "Mon CV",
    hero_contact: "Me contacter",
    about_title: "À propos de moi",
    about_subtitle: "Allier technique et créativité pour des solutions sécurisées",
    about_p1: "Titulaire d'un bachelor en expertise informatique d'EPITECH Bénin, je suis actuellement en cycle d'Ingénieur d'état en Informatique et IA chez HESTIM Maroc (2025-2027).",
    about_p2: "Passionnée par le développement front-end, l'UX design et la cybersécurité, j'allie mes compétences techniques pour créer des interfaces robustes et innovantes.",
    about_stat_exp: "Années d'Expérience",
    about_stat_projects: "Projets Réalisés",
    about_stat_skills: "Compétences",
    exp_title: "Mon Parcours",
    exp_subtitle: "Expériences professionnelles et formations",
    exp_work: "Expériences",
    exp_edu: "Formations",
    lang_title: "Langues",
    lang_subtitle: "La communication au cœur de l'échange",
    lang_fr_level: "Langue Maternelle",
    lang_en_level: "Usage Professionnel",
    projects_title: "Projets",
    projects_subtitle: "Mes dernières réalisations numériques",
    projects_all: "Tous",
    contact_title: "Contactez-moi",
    contact_subtitle: "Collaborons sur votre prochain projet",
    contact_name: "Nom",
    contact_email: "Email",
    contact_message: "Message",
    contact_send: "Envoyer",
  },
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_experience: "Experience",
    nav_languages: "Languages",
    nav_work: "Projects",
    nav_contact: "Contact",
    hero_hi: "Hi, I am",
    hero_desc: "Passionate about front-end development, cybersecurity, and AI. Currently in the Engineering cycle in Computer Science & AI at HESTIM.",
    hero_cv: "My CV",
    hero_contact: "Contact me",
    about_title: "About Me",
    about_subtitle: "Combining tech and creativity for secure solutions",
    about_p1: "Holder of a bachelor's degree in IT expertise from EPITECH Benin, I am currently pursuing an Engineering degree in Computer Science and AI at HESTIM Morocco (2025-2027).",
    about_p2: "Passionate about front-end development, UX design, and cybersecurity, I combine my technical skills to create robust and innovative interfaces.",
    about_stat_exp: "Years of Experience",
    about_stat_projects: "Projects Completed",
    about_stat_skills: "Technical Skills",
    exp_title: "My Journey",
    exp_subtitle: "Professional experience and education",
    exp_work: "Experience",
    exp_edu: "Education",
    lang_title: "Languages",
    lang_subtitle: "Communication at the heart of exchange",
    lang_fr_level: "Native Language",
    lang_en_level: "Professional Use",
    projects_title: "Projects",
    projects_subtitle: "My latest digital achievements",
    projects_all: "All",
    contact_title: "Contact Me",
    contact_subtitle: "Let's collaborate on your next project",
    contact_name: "Name",
    contact_email: "Email",
    contact_message: "Message",
    contact_send: "Send Message",
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("fr");

  useEffect(() => {
    const stored = localStorage.getItem("portfolio_lang") as Language;
    if (stored === "fr" || stored === "en") {
      setLanguageState(stored);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("portfolio_lang", lang);
  };

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
