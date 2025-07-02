"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { log } from "node:console";

const LANGS = [
  { code: "uz", label: "UZ", style: 'bg-[#e04d4d]' },
  { code: "ru", label: "RU", style: 'bg-[#5a7df5]' },
  { code: "en", label: "EN", style: 'bg-[#4fd271]' },
];

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleLangChange = (lang: string) => {
    let newPath;
    if (/^\/(ru|en|uz)/.test(pathname)) {
      newPath = pathname.replace(/^\/(uz|ru|en)/, `/${lang}`);
    } else {
      newPath = `/${lang}${pathname === '/' ? '' : pathname}`;
    }
    router.push(newPath);
  };

  return (
    <div className="flex gap-2 items-center">
      {LANGS.map(({ code, label, style }) => (
        <button
          key={code}
          onClick={() => handleLangChange(code)}
          className={`text-white p-[0px_19px] rounded-[4px] cursor-pointer ${style}`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;