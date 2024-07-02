import LocalizedStrings from "react-native-localization";

const translations = new LocalizedStrings({
  "ru-RU": {
    hello: "Привет",
    welcomeBack: "С возвращением",

    eventDetails: "Детали события",
    backToHome: "Обратно на главную",
    date: "Дата:",
    description: "Подробное описание:",
  },
  en: {
    hello: "Hello",
    welcomeBack: "Welcome Back",

    eventDetails: "Event Details",
    backToHome: "Go back to Home",
    date: "Date:",
    description: "Description:",
  },
});

translations.setLanguage("ru");

export default translations;
