import getArchiveYears from '@/api/archiveApi';
import Link from 'next/link';

export default async function page() {
  let data = [];
  try {
    data = await getArchiveYears();
  } catch (error) {
    console.error('Ошибка при получении годов:', error);
  }

  

  return (
    <main className='w-full grid grid-cols-[1fr] gap-y-8'>
      <ul className='w-full bg-white rounded-[8px] shadow-[0px_2px_8px_0px_#00000014] p-6'>
        {data.years?.map((item, index) => (
          <li key={index} className='my-4'>
            <Link href={`/category/${item.title}`} className='text-[16px] font-semibold text-[#3498DB]'>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}