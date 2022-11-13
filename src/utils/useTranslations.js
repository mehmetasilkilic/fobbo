import { useSelector, useDispatch } from "react-redux";

import { setLangAsync } from "../store/i18n/i18n.slice";

export const useTranslations = () => {
  const dispatch = useDispatch();

  const t = useSelector((state) => state.i18n.translations);

  const setLang = (lang) => dispatch(setLangAsync(lang));

  const lang = useSelector((state) => state.i18n.lang);

  const supportedLangs = useSelector((state) => state.i18n.supportedLangs);

  const status = useSelector((state) => state.i18n.status);

  return {
    t,
    lang,
    setLang,
    init: setLang,
    supportedLangs,
    status,
  };
};
