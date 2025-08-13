import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const Navbar = () => {
  const t = useTranslations('layoutComponents');

  return (
    <nav className='pt-[24px] pb-[12px] shadow-[0px_2px_8px_0px_#0000001A]'>
      <div className='container   flex items-center gap-4'>
        <div className=''>  
          <Link href="/">
            <div className='w-[120px] h-[80px] flex items-center justify-center bg-[#2C5F7C] rounded-[2px]'>
              <h1 className='text-[28px] font-bold text-white'>LOGO</h1>
            </div>
          </Link>
        </div>
        <div>
          <div>
            <Link href="/" className='text-[#2C5F7C] text-[30px] font-bold leading-tight whitespace-pre-line'>
              {t("navbar.title")}
            </Link>
          </div>
          <div className='flex items-center gap-2.5 w-full mt-2'>
            <h1 className='text-[14px] font-normal text-[#0f4479] whitespace-nowrap'>{t("navbar.text")}</h1>
            <div className='flex-1 h-[1px] bg-[#7B8FA3]' />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;