import Link from 'next/link';


export default function HomePage() {


  const data = [
    {
      title: '2024',
      link: '/archive/2024',
    },
    {
      title: '2023',
      link: '/archive/2024',
    },
    {
      title: '2022',
      link: '/archive/2024',
    },
    {
      title: '2021',
      link: '/archive/2024',
    },
    {
      title: '2020',
      link: '/archive/2024',
    },
    {
      title: '2019',
      link: '/archive/2024',
    },
    {
      title: '2018',
      link: '/archive/2024',
    },
    {
      title: '2017',
      link: '/archive/2024',
    },
    {
      title: '2016',
      link: '/archive/2024',
    },
    {
      title: '2015',
      link: '/archive/2024',
    },
  ]


  return (
    <main className='w-full grid grid-cols-[1fr] gap-y-8'>
      
      <ul className='w-full bg-white rounded-[8px] shadow-[0px_2px_8px_0px_#00000014] p-6'>
        {
          data?.map((item, index) => (
            <li key={index} className='my-3'>
              <Link href={item.link} className='text-[16px] font-semibold text-[#3498DB]'>
                {item.title}
              </Link>
            </li>
          ))
        }
      </ul>
      

    </main>
  );
}