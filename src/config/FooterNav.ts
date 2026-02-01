import type { TranslationKey } from "@/config/translations";

export type FooterLink = {
  labelKey: TranslationKey;
  to: string;
};

export type FooterColumn = {
  titleKey: TranslationKey;
  links: FooterLink[];
};

export const footerCols: FooterColumn[] = [
  {
    titleKey: "footerCompany",
    links: [
      { labelKey: "footerHome", to: "/" },
      { labelKey: "footerOrder", to: "/order" },
      { labelKey: "footerFaq", to: "/faq" },
      { labelKey: "footerContact", to: "/contact" },
    ],
  },
  {
    titleKey: "footerTemplate",
    links: [
      { labelKey: "footerStyleGuide", to: "/style-guide" },
      { labelKey: "footerChangelog", to: "/changelog" },
      { labelKey: "footerLicence", to: "/licence" },
      { labelKey: "footerWebflowUniversity", to: "/webflow-university" },
    ],
  },
  {
    titleKey: "footerFlowbase",
    links: [{ labelKey: "footerMoreCloneables", to: "/cloneables" }],
  },
];
