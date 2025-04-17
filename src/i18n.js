import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { navigation } from './translations/navigation';
import { hero } from './translations/hero';
import { about } from './translations/about';
import { skills } from './translations/skills';
import { experience } from './translations/experience';
import { projects } from './translations/projects';
import { certifications } from './translations/certifications';
import { languages } from './translations/languages';
import { education } from './translations/education';
import { contact } from './translations/contact';
import { footer } from './translations/footer';

const resources = {
  en: {
    translation: {
      ...navigation.en,
      hero: hero.en,
      about: about.en,
      skills: skills.en,
      experience: experience.en,
      projects: projects.en,
      certifications: certifications.en,
      languages: languages.en,
      education: education.en,
      contact: contact.en,
      footer: footer.en
    }
  },
  pt: {
    translation: {
      ...navigation.pt,
      hero: hero.pt,
      about: about.pt,
      skills: skills.pt,
      experience: experience.pt,
      projects: projects.pt,
      certifications: certifications.pt,
      languages: languages.pt,
      education: education.pt,
      contact: contact.pt,
      footer: footer.pt
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;