import { en } from "../../i18n/lang/en";
import { tr } from "../../i18n/lang/tr";

export const fetchTranslations = (lang) => {
  return new Promise((resolve, reject) => {
    const langMock = lang === "en" ? en : lang === "tr" ? tr : tr;
    if (!langMock) {
      reject("not found");
    }
    resolve(langMock);
  });
};
