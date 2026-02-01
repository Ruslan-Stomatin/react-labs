import { createContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "ru" | "lt";

type LangContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

export const LangContext = createContext<LangContextValue | undefined>(undefined);

const STORAGE_KEY = "lang";

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === "ru" || saved === "lt" || saved === "en" ? saved : "en";
  });

  const setLang = (next: Lang) => setLangState(next);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}
