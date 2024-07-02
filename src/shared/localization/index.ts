import LocalizedStrings from "react-native-localization";

const translations = new LocalizedStrings({
  "ru-RU": {
    hello: "Привет",
    welcomeBack: "С возвращением",

    eventDetails: "Детали события",
    backToHome: "Обратно на главную",
    date: "Дата:",
    description: "Подробное описание:",

    aboutU: "О вас",
    name: "Имя:",
    email: "Email:",

    loadingError: "У нас проблемы. Попробуйте позже.",
  },
  en: {
    hello: "Hello",
    welcomeBack: "Welcome Back",

    eventDetails: "Event Details",
    backToHome: "Go back to Home",
    date: "Date:",
    description: "Description:",

    aboutU: "About U",
    name: "Name:",
    email: "Email:",

    loadingError: "Error. Please try later",
  },
});

translations.setLanguage("ru");

export default translations;
