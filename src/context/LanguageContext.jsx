import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

const LanguageContext = createContext();

const translations = {
  sv: {
    code: "sv",
    label: "Svenska",
    nav: {
      home: "Hem",
      featured: "Utvalda projekt",
      all: "Alla projekt",
      about: "Om mig",
      skills: "Kompetens",
      contact: "Kontakt",
      menu: "Meny",
      skip: "Hoppa till innehåll",
      language: "Språk",
      github: "GitHub",
    },
    hero: {
      greeting: "Hej,\nJag heter\nJonathan.",
      tagline:
        "Jag bygger digitala upplevelser som är intuitiva, eleganta och snabba. Från idé till lansering – fokus på detaljer, prestanda och användaren.",
      cards: {
        frontend: {
          title: "Modern Frontend",
          desc: "React, TypeScript, Tailwind och tillgänglighet i fokus.",
        },
        design: {
          title: "Design & UX",
          desc: "Ren typografi, tydlig hierarki och mikrointeraktioner.",
        },
        performance: {
          title: "Prestanda",
          desc: "Optimerad laddning, tillgänglighet och Core Web Vitals.",
        },
      },
      ctaProjects: "Se projekt",
      ctaContact: "Kontakta mig",
      ariaSkills: "Kompetensöversikt",
    },
    work: {
      featuredTitle: "Utvalda projekt",
      allTitle: "Alla projekt",
      featuredSubtitle:
        "En handplockad lista av projekt. Vill du se fler? Klicka på min GitHub nedan.",
      showAll: "Se alla projekt",
      detailsBadge: "Visa detaljer",
      viewMore: "Visa mer",
      bottomCTAQuestion: "Intresserad av att samarbeta?",
      bottomCTAButton: "Hör av dig",
      modalTech: "Tekniker",
      openProjectAria: "Öppna projekt",
      github: "GitHub",
      githubMore: "Fler projekt på GitHub",
    },
    about: {
      title: "Om mig",
      paragraphs: [
        "Jag är en nyfiken skapare och problemlösare – driven av nya idéer, smarta verktyg och frågan 'tänk om?'.",
        "Jag tror att bra design och smart teknik ska kännas självklara – inte för att de är enkla, utan för att de är genomtänkta. Varje dag hjälper jag djärva idéer att ta form. Ett prototypsteg, en interaktion och ett tyst 'det här känns rätt' i taget.",
        "Det jag bygger ska vara tydligt, vackert och intuitivt. Design som skapar koppling. Teknik som bara fungerar.",
      ],
      techTitle: "Teknik & Verktyg",
      quote:
        "\u201cBra design är inte bara hur det ser ut och känns. Bra design är hur det fungerar.\u201d",
      quoteAuthor: "— Steve Jobs",
    },
    githubSection: {
      title: "Fler projekt på GitHub",
      subtitle:
        "Utforska fler repos – open source experiment, prototyper och pågående projekt.",
      button: "Öppna GitHub",
    },
  },
  en: {
    code: "en",
    label: "English",
    nav: {
      home: "Home",
      featured: "Featured Projects",
      all: "All Projects",
      about: "About",
      skills: "Skills",
      contact: "Contact",
      menu: "Menu",
      skip: "Skip to content",
      language: "Language",
      github: "GitHub",
    },
    hero: {
      greeting: "Hi,\nI'm\nJonathan.",
      tagline:
        "I build digital experiences that are intuitive, elegant and fast. From idea to launch – focused on detail, performance and the user.",
      cards: {
        frontend: {
          title: "Modern Frontend",
          desc: "React, TypeScript, Tailwind with accessibility focus.",
        },
        design: {
          title: "Design & UX",
          desc: "Clean typography, clear hierarchy & micro‑interactions.",
        },
        performance: {
          title: "Performance",
          desc: "Optimised loading, accessibility & Core Web Vitals.",
        },
      },
      ctaProjects: "View Projects",
      ctaContact: "Contact Me",
      ariaSkills: "Skills overview",
    },
    work: {
      featuredTitle: "Featured Projects",
      allTitle: "All Projects",
      featuredSubtitle:
        "A curated selection of work. Want to see more? Scroll or click below.",
      showAll: "View all projects",
      detailsBadge: "View details",
      viewMore: "View more",
      bottomCTAQuestion: "Interested in collaborating?",
      bottomCTAButton: "Get in touch",
      modalTech: "Technologies",
      openProjectAria: "Open project",
      github: "GitHub",
      githubMore: "More projects on GitHub",
    },
    about: {
      title: "About Me",
      paragraphs: [
        "I'm a curious maker and thoughtful problem-solver — driven by a love for new ideas, clever tools, and the question 'what if?'",
        "I believe great design and smart technology should feel effortless — not because they're simple, but because they're deeply considered. Every day, I help bold ideas take shape. One prototype, one interaction, one quiet 'this feels right' at a time.",
        "What I create is meant to be clear, beautiful, and intuitive. Design that connects. Tech that just works.",
      ],
      techTitle: "Technologies & Tools",
      quote:
        "\u201cGreat design is not just what it looks like and feels like. Great design is how it works.\u201d",
      quoteAuthor: "— Steve Jobs",
    },
    githubSection: {
      title: "More projects on GitHub",
      subtitle:
        "Explore more repos – open source experiments, prototypes and work in progress.",
      button: "Open GitHub",
    },
  },
};

export const LanguageProvider = ({ children }) => {
  const stored =
    typeof window !== "undefined" ? localStorage.getItem("lang") : null;
  const [lang, setLang] = useState(stored || "sv");
  const t = translations[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem("lang", lang);
  }, [lang]);

  const switchLanguage = useCallback((code) => setLang(code), []);

  return (
    <LanguageContext.Provider value={{ lang, t, switchLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
// Note: Non-component exports are intentional for context utilities.
