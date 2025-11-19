import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// i18n.js (resurslarga qo'shamiz)
const resources = {
  en: {
    translation: {
      // HeaderTop
      storeLocation: "Store Location: Lincoln- 344, Illinois, Chicago, USA",
      signText: "Sign In / Sign Up",
      currency: "USD",
      // Navbar
      home: "Home",
      shop: "Shop",
      pages: "Pages",
      blog: "Blog",
      aboutUs: "About Us",
      contactUs: "Contact Us",
      phoneNumber: "(219) 555-0114",
    },
  },
  uz: {
    translation: {
      // HeaderTop
      storeLocation: "Dokon manzili: Lincoln-344, Illinois, Chikago, AQSH",
      signText: "Kirish / Ro‘yxatdan o‘tish",
      currency: "USD",
      // Navbar
      home: "Bosh sahifa",
      shop: "Do‘kon",
      pages: "Sahifalar",
      blog: "Blog",
      aboutUs: "Biz haqimizda",
      contactUs: "Bog‘lanish",
      phoneNumber: "(219) 555-0114",
    },
  },
};


i18n.use(initReactI18next).init({
    resources,
    lng: "en",

    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
