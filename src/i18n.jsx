import i18n from "i18next";
import { initReactI18next } from "react-i18next"; 
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector) 
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: {
        "welcomeMessage": "Welcome to Plant Searcher!",
        "language": "Language",
        "En":"English",
        "Es":"Spanish",
        "Ca":"Catalan",
        "getStarted": "Let's get started",
        "dropFiles": "Drag 'n' drop some files here, or click to select files",
        "max5files": "You can add up to 5 images of the same plant",
        "identifiyng": "Identifiyng...",
        "identifyPlants": "Identify plant",
        "reloadSearch": "Reload search",
        "plantName": "Is your plant a",
        "similarPlants": "Other similar plants",
        "viewWikipedia": "View on Wikipedia"
      } },
      es: { translation: {
        "welcomeMessage": "Bienvenidos a Plant Searcher!",
        "language": "Idioma",
        "En": "Inglés",
        "Es":"Español",
        "Ca":"Catalán",
        "getStarted": "Empezemos",
        "dropFiles": "Arrastra y suelta archivos aquí, o pulsa para seleccionar archivos",
        "max5files": "Puedes añadir hasta 5 imagenes de la misma planta",
        "identifiyng": "Identificando...",
        "identifyPlants": "Identificar planta",
        "reloadSearch": "Recargar búsqueda",
        "plantName": "¿Es tu planta una",
        "similarPlants": "Otras plantas similares",
        "viewWikipedia": "Ver en Wikipedia"
      } },
      ca: { translation: {
        "welcomeMessage": "Benvinguts a Plant Searcher!",
        "language": "Idioma",
        "En": "Anglès",
        "Es":"Espanyol",
        "Ca":"Català",
        "getStarted":"Començem",
        "dropFiles" : "Arrosega i deixa anar arxius aquí, o fes clic per seleccionar arxius",
        "max5files": "Pots afegir fins a 5 imatges de la mateixa planta",
        "identifiyng": "Identificant...",
        "identifyPlants": "Identificar planta",
        "reloadSearch": "Recarregar cerca",
        "plantName": "És la teva planta una",
        "similarPlants": "Altres plantes similars",
        "viewWikipedia": "Veure a Viquipèdia"
      } },
    },
    fallbackLng: "en",
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"], 
    },
    interpolation: { escapeValue: false },
  });

export default i18n;
