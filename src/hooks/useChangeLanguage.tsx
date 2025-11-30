import { useTranslation } from "react-i18next";

import type { SupportedLanguages } from "../constants/supported-languages";

const useChangeLanguage = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: SupportedLanguages) => {
    i18n.changeLanguage(lng);
  };

  return { changeLanguage };
}

export default useChangeLanguage;
