import LocalizedStrings from "react-native-localization";

const translations = new LocalizedStrings({
  "ru-RU": {
    hello: "Привет",
    welcomeBack: "С возвращением",
  },
  en: {
    hello: "Hello",
    welcomeBack: "Welcome Back",
  },
});

translations.setLanguage("ru");

export default translations;
