import React from 'react'
import Image from 'next/image'

import magazineCoverImage from '../../../../public/pagesImages/HomePageImage/IMAGE (6).svg'

export default function Info() {

    const data = [
        {
            title: 'История',
        },
        {
            title: 'Философия',
        },
        {
            title: 'Социология',
        },
        {
            title: 'Политология',
        },
        {
            title: 'Экономика',
        },
        {
            title: 'Психология',
        },
    ]

  return (
    <div className='w-full bg-white rounded-[8px] shadow-[0px_2px_8px_0px_#00000014] p-8 grid grid-cols-[1.4fr_1fr] gap-5'>

        <div className=''>

            <div>
                <h1 className='text-[24px] font-bold text-[#2C3E50]'>О журнале</h1>
                <p
                  className='font-normal text-[14px] leading-[22.75px] text-[#34495E] mt-3'
                >
                    Научный журнал академических исследований — ведущее международное издание, публикующее оригинальные исследования в области гуманитарных наук. Журнал ставит перед собой цель активизировать научные исследования на высоком международном уровне.
                    <br />
                    <br />
                    Задачи журнала: координация и популяризация научных исследований на международном уровне, введение в оборот новых источников, рецензирование научных монографий, организация площадки для научных дискуссий и развития данной отрасли знаний.
                </p>
            </div>

            <div className='px-5 py-4 mt-4 border-l-[4px] border-solid border-l-[#2C5F7C] rounded-[4px] bg-[#EBF3FD] '>
                <h1
                  className="font-bold text-[14px] leading-[20px] text-[#2C3E50] mb-2"
                >
                  Тематические направления:
                </h1>
                <ul className='list-disc pl-5 grid grid-cols-1 gap-1'>
                    {
                        data?.map((item, index) => (
                            <li
                              key={index}
                              className='text-[14px] font-normal leading-[20px] text-[#5D6D7E]'
                              style={{ fontFamily: 'Inter, sans-serif' }}
                            >
                                {item.title}
                            </li>
                        ))
                    }
                </ul>
            </div>

        </div>

        <div className="w-full">
          <Image
            src={magazineCoverImage}
            alt="Обложка журнала"
            // width={1700}
            className="w-full"
            // height={500}
          />
        </div>

    </div>
  )
}
