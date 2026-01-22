import type { Lang } from "@/config/LangContext";

export const translations = {
  en: {
    navHome: "Home",
    navMenu: "Menu",
    navCompany: "Company",
    navLogin: "Login",

    heroTitle1: "Beautiful food & takeaway,",
    heroTitle2: "delivered",
    heroTitle3: "to your door.",
    heroText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.",
    heroCta: "Place an Order",
    trustpilot: "Trustpilot",
    ratingValue: "4.8 out of 5",
    ratingSuffix: "based on 2000+ reviews",

    footerDescLine1: "Takeaway & Delivery template",
    footerDescLine2: "for small – medium businesses.",

    footerCompany: "Company",
    footerTemplate: "Template",
    footerFlowbase: "Flowbase",

    footerHome: "Home",
    footerOrder: "Order",
    footerFaq: "FAQ",
    footerContact: "Contact",

    footerStyleGuide: "Style Guide",
    footerChangelog: "Changelog",
    footerLicence: "Licence",
    footerWebflowUniversity: "Webflow University",

    footerMoreCloneables: "More Cloneables",

},
  ru: {
    navHome: "Главная",
    navMenu: "Меню",
    navCompany: "О компании",
    navLogin: "Вход",

    heroTitle1: "Вкусная еда и доставка,",
    heroTitle2: "быстро",
    heroTitle3: "прямо к двери.",
    heroText: "Lorem Ipsum — это текст-«рыба» для печати и вёрстки. Он используется в качестве заполнителя уже много лет.",
    heroCta: "Сделать заказ",
    trustpilot: "Trustpilot",
    ratingValue: "4.8 из 5",
    ratingSuffix: "на основе 2000+ отзывов",

    footerDescLine1: "Шаблон Takeaway & Delivery",
    footerDescLine2: "для малого и среднего бизнеса.",

    footerCompany: "Компания",
    footerTemplate: "Шаблон",
    footerFlowbase: "Flowbase",

    footerHome: "Главная",
    footerOrder: "Заказ",
    footerFaq: "FAQ",
    footerContact: "Контакты",

    footerStyleGuide: "Стиль",
    footerChangelog: "Изменения",
    footerLicence: "Лицензия",
    footerWebflowUniversity: "Webflow University",

footerMoreCloneables: "Больше шаблонов",

},
  lt: {
    navHome: "Pradžia",
    navMenu: "Meniu",
    navCompany: "Apie",
    navLogin: "Prisijungti",

    heroTitle1: "Skanaus maisto išsinešimui,",
    heroTitle2: "pristatome",
    heroTitle3: "iki jūsų durų.",
    heroText: "Lorem Ipsum yra maketavimo ir spausdinimo srities pavyzdinis tekstas, naudojamas kaip užpildas.",
    heroCta: "Užsakyti",
    trustpilot: "Trustpilot",
    ratingValue: "4.8 iš 5,",
    ratingSuffix: "remiantis 2000+ atsiliepimų",

    footerDescLine1: "Takeaway & Delivery šablonas",
    footerDescLine2: "mažoms ir vidutinėms įmonėms.",

    footerCompany: "Įmonė",
    footerTemplate: "Šablonas",
    footerFlowbase: "Flowbase",

    footerHome: "Pradžia",
    footerOrder: "Užsakymas",
    footerFaq: "DUK",
    footerContact: "Kontaktai",

    footerStyleGuide: "Stiliaus gidas",
    footerChangelog: "Pakeitimai",
    footerLicence: "Licencija",
    footerWebflowUniversity: "Webflow University",

    footerMoreCloneables: "Daugiau šablonų",

},
} as const;

export type TranslationKey = keyof typeof translations.en;

export function t(lang: Lang, key: TranslationKey) {
  return translations[lang][key];
}
 