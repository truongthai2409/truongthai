import React from "react";
import { useTranslation } from "react-i18next";
import { IoLanguage } from "react-icons/io5";

const Translate = () => {
  const { i18n } = useTranslation();
  const languages = [
    { code: "en", label: "English" },
    { code: "kr", label: "한국어" },
    { code: "jp", label: "日本語" },
  ];
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="fixed z-10 cursor-pointer bottom-5 left-5 group">
      <div className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300">
        <div className="absolute inset-0 z-30 -m-2 bg-transparent w-[150px] rounded-xl"></div>
        <IoLanguage size={20} />
      </div>

      <div className="absolute left-0 z-10 invisible w-32 text-center transition-opacity duration-200 bg-white border border-gray-200 rounded-md shadow-md opacity-0 bottom-12 group-hover:opacity-100 group-hover:visible">
        {languages.map((language) => (
          <div
            key={language.code}
            className="px-4 py-2 cursor-pointer hover:bg-gray-100"
            onClick={() => changeLanguage(language.code)}
          >
            {language.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Translate;
