import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Basic translation resources (extend as needed)
const resources = {
  en: {
    translation: {
      nav: {
        top: {
          home: "Home",
          about: "About",
          education: "Education",
          community: "Community",
          media: "Media",
          donate: "Donate",
        },
      },
      hero: {
        empowering: "Empowering",
        words: ["Excellence", "Community", "Innovation", "Leadership", "Growth"],
      },
    },
  },
  ar: {
    translation: {
      nav: {
        top: {
          home: "الرئيسية",
          about: "من نحن",
          education: "التعليم",
          community: "المجتمع",
          media: "الإعلام",
          donate: "تبرع",
        },
      },
      hero: {
        empowering: "تمكين",
        words: ["التميز", "المجتمع", "الابتكار", "القيادة", "النمو"],
      },
    },
  },
  zu: {
    translation: {
      nav: {
        top: {
          home: "Ikhaya",
          about: "Mayelana",
          education: "Imfundo",
          community: "Umphakathi",
          media: "Izindaba",
          donate: "Nikeza",
        },
      },
      hero: {
        empowering: "Ukuqinisekisa",
        words: ["Ubuhle", "Umphakathi", "Ukuqamba", "Ubuholi", "Ukukhula"],
      },
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem("lng") || "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
  });

// Keep document dir/lang in sync
const applyDirLang = (lng: string) => {
  const html = document.documentElement;
  html.lang = lng;
  html.dir = lng === "ar" ? "rtl" : "ltr";
};

applyDirLang(i18n.language);

i18n.on("languageChanged", (lng) => {
  localStorage.setItem("lng", lng);
  applyDirLang(lng);
});

export default i18n;
