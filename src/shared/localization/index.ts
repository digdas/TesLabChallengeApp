import LocalizedStrings from "react-native-localization";

const translations = new LocalizedStrings({
  "ru-RU": {
    hello: "Привет",
    welcomeBack: "С возвращением",

    eventDetails: "Детали события",
    backToHome: "Обратно на главную",
  },
  en: {
    hello: "Hello",
    welcomeBack: "Welcome Back",

    eventDetails: "Event Details",
    backToHome: "Go back to Home",
  },
});

translations.setLanguage("ru");

export default translations;
