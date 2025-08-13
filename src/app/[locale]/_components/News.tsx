import React from 'react'

export default function News() {

  const data = [
    {
      title: 'Новый выпуск журнала',
      tupe: 'Публикация',
      date: '15.12.2024',
      description: 'Вышел новый выпуск нашего журнала, посвященный современным исследованиям в области медицины. ааууuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu умуууц умуауу умуу'
    },
    {
      title: 'Конференция по медицинским исследованиям',
      tupe: 'Событие',
      date: '20.01.2025',
      description: 'Приглашаем вас на конференцию, где будут обсуждаться последние достижения в области медицины.'
    },
    {
      title: 'Награждение лучших авторов',
      tupe: 'Новости',
      date: '05.02.2025',
      description: 'Мы наградим авторов, чьи статьи получили наибольшее признание в прошлом году.'
    }
  ]


  return (
    <div className='w-full bg-white rounded-[8px] shadow-[0px_2px_8px_0px_#00000014] p-6'>
      
      <div className='w-full flex items-center gap-4'>
        <h1
          className="font-bold text-[20px] leading-[28px] uppercase text-[#2C3E50] py-2 rounded-[4px] whitespace-nowrap"
        >
          Новости и события
        </h1>
        <div className='flex-1 h-0.5 bg-[#2C5F7C]'></div>
      </div>

      <div className="mt-6 flex flex-col gap-8">
        {data?.map((item, idx) => (
          <div key={idx} className="flex gap-4 items-start border-b border-[#E8ECF0] pb-6 last:border-b-0 last:pb-0">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-[#2C5F7C] rounded-[4px] flex flex-col items-center justify-center text-white font-bold text-[24px] leading-none mb-2">
                <span>
                  {item.date.split('.')[0]}
                </span>
              </div>
            </div>
            <div className="min-w-0 flex flex-col">
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-[#E8F4FD] px-2 py-1 rounded-[4px]   text-[#2C5F7C] text-[12px] font-bold ">{item.tupe}</span>
                <span className="text-[#7B8FA3] text-[14px]">{item.date}</span>
              </div>

              <h2
                className="font-bold text-[#34495E] text-[18px] leading-tight line-clamp-1 max-w-[80%] mt-2 mb-2.5"
              >
                {item.title}
              </h2>
              
              <p
                className="text-[#5A6C7D] text-[14px] font-normal mb-3 line-clamp-2 leading-[22.75px]"
              >
                {item.description}
              </p>

              <a href="#" className="text-[#3498DB] font-bold text-[16px] flex items-center gap-1 hover:underline transition">
                Читать далее <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}
