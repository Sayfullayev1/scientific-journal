// import { useTranslations } from 'next-intl';

import Info from './_components/Info';
import News from './_components/News';

export default function HomePage() {
  // const t = useTranslations();

  return (
    <main className='w-full grid grid-cols-[1fr] gap-y-8'>
      
      <Info/>

      <News/>

    </main>
  );
}
