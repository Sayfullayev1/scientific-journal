import { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';


import Header from '../components/layoutComponents/header/Header';
import Navbar from '../components/layoutComponents/navbar/Navbar';
import Footer from '../components/layoutComponents/footer/Footer';


export function generateStaticParams() {
  return ['uz', 'ru', 'en'].map(locale => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  if (!['uz', 'ru', 'en'].includes(locale)) notFound();

  const messages = await getMessages({ locale });;

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header/>
          <Navbar/>
          {children}
          <Footer/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
