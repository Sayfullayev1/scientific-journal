import Link from 'next/link';
import React from 'react'
import Image from 'next/image';


export default function EditorInChiefCArd() {
  return (
    <div className='w-full bg-white shadow-[0px_2px_8px_0px_#00000014] py-6 rounded-[8px]'>
        
      <div>
        <Image
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="Главный редактор"
          width={120}
          height={120}
          className="rounded-full mx-auto my-4"
        />
      </div>

      <h1
        className="font-bold text-[14px] leading-[20px] text-center text-[#2C3E50] mt-4 mb-2.5"
      >
        Главный редактор:
      </h1>

      <Link
        href=""
        className="block font-normal text-[14px] text-[#3498DB] leading-[20px] text-center rounded-[4px] py-2"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        Академик И.М. Петров
      </Link>

    </div>
  )
}
