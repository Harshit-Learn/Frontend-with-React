import React from "react";
import { useTranslation } from "react-i18next";

const MyUseTranslation = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lan) => {
    i18n.changeLanguage(lan);
  };
  return (
    <div>
      <h1>{t("welcome")}</h1>
      <button
        onClick={() => {
          changeLanguage("en");
        }}
      >
        English
      </button>
      <button
        onClick={() => {
          changeLanguage("hi");
        }}
      >
        हिंदी
      </button>
    </div>
  );
};

export default MyUseTranslation;
