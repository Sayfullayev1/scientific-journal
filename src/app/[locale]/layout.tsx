import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';


import Header from '../components/layoutComponents/header/Header';
import Navbar from '../components/layoutComponents/navbar/Navbar';
import Footer from '../components/layoutComponents/footer/Footer';
import LeftSidebar from '../components/layoutComponents/sidebars/leftSidebar/LeftSidebar';
import RightSidebar from '../components/layoutComponents/sidebars/rightSidebar/RightSidebar';
 

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
 
  return (
    <div>
        <NextIntlClientProvider>

          <Header/>
          <Navbar/>
            <div  className='bg-[#F5F7FA]'>
              <div className="container">
                <div className='grid grid-cols-[1fr_3fr_1fr] gap-8 py-8'>
                  <LeftSidebar />
                    {children}
                  <RightSidebar />
                </div>
              </div>
            </div>
            
            
          <Footer/>

        </NextIntlClientProvider>
    </div>
  );
}