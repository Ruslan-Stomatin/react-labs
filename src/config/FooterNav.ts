export type FooterLink = {
  label: string;
  to: string;
};

export type FooterColumn = {
  title: string;
  links: FooterLink[];
};

export const footerCols: FooterColumn[] = [
  {
    title: "Company",
    links: [
      { label: "Home", to: "/" },
      { label: "Order", to: "/order" },
      { label: "FAQ", to: "/faq" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Template",
    links: [
      { label: "Style Guide", to: "/style-guide" },
      { label: "Changelog", to: "/changelog" },
      { label: "Licence", to: "/licence" },
      { label: "Webflow University", to: "/webflow-university" },
    ],
  },
  {
    title: "Flowbase",
    links: [{ label: "More Cloneables", to: "/cloneables" }],
  },
];
