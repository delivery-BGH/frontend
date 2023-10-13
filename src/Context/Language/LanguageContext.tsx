import { TFunction } from "i18next";
import { createContext } from "react";

export type LanguageContextType = {
  t: TFunction<"translation", undefined>;
  currentlanguage: string;
  handleChangeLanguage: () => void;
};

export const LanguageContext = createContext<LanguageContextType>(null!);
