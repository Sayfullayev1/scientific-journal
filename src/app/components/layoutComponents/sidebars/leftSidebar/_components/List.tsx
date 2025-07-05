import React from 'react'
import Link from 'next/link'

export default function List() {

    const data = [
        {
            title: 'Item 1',
            link: '',
        },
        {
            title: 'Item 2',
            link: '',
        },
        {
            title: 'Item 3',
            link: '',
        },
        {
            title: 'Item 4',
            link: '',
        },
        {
            title: 'Item 5',
            link: '',
        },
    ]


  return (
    <div className='w-full rounded-[8px] overflow-hidden'>
      
      {
        data?.map((item, index) => (
            <div key={index} className='px-4 py-3 bg-[#E8ECF0]'>
                <Link href ={item.link} className='text-[14px] text-[#2C5F7C] font-bold'>
                  {item.title}
                </Link>
            </div>
        ))
      }
    </div>
  )
}
