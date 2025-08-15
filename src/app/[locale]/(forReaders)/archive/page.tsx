import getArchiveYears from '@/api/archiveApi';
import Breadcrumbs from '@/components/breadcrumbs/Breadcrumbs';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export default async function page() {
  const t = await getTranslations("pages");


  
  

  let data = [];
  try {
    data = await getArchiveYears();
  } catch (error) {
    console.error('Ошибка при получении годов:', error);
  }


  const breadcrumbsProps = [
    { label: "Главная", href: "/" },
    { label: "Архив номеров" }
  ]

  return (
    <main className='w-full grid grid-cols-[1fr] gap-y-8'>


      <Breadcrumbs items={breadcrumbsProps} />


      <div className='w-full bg-white rounded-[8px] shadow-[0px_2px_8px_0px_#00000014] p-6'>

        <h1 className='text-[24px] text-[#2C3E50] font-semibold mb-4 uppercase'>{t('archivePage.title')}</h1>

        <ul className='px-3'>
          {
            data?.years?.map((item, index) => {
              return(
                <li key={index} className='my-[10px]'>
                  <Link href={`/category/${item.title}`} className='text-[16px] font-semibold text-[#3498DB]'>
                    {item.title}
                    {" "}
                    {t('archivePage.year')}
                  </Link>
                </li>
              )
            })
          }
        </ul>

      </div>

    </main>
  );
}