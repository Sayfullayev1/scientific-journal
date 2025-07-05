import React from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslations } from 'next-intl';

const Header = () => {
  const t = useTranslations('layoutComponents');

  return (
    <header className="container">
      <div className="px-0 py-[12px] border-b-solid border-b-[1px] border-b-[#E8ECF0] flex justify-between items-center">
        <div className="flex flex-row gap-2">
          <h1 className="text-[14px] font-bold text-[#5A6C7D]">ISSN 2313-6197 (Online)</h1>
          <h1 className="text-[14px] font-bold text-[#5A6C7D]">ISSN 2308-152X (Print)</h1>
        </div>
        <div className="flex gap-3">
          <LanguageSwitcher />
          <button className="p-[9px_17px] bg-[#E8B547] rounded-[4px] cursor-pointer">{t('header.button')}</button>
        </div>
      </div>
    </header>
  );
};

export default Header;