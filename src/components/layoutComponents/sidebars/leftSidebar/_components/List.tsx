import React from 'react'
import Link from 'next/link'
import { useMessages } from 'next-intl';

interface SubItem {
  title: string;
  link: string;
}

interface MenuItem {
  title: string;
  link: string;
  items: SubItem[];
}

export default function List() {
  const messages = useMessages();
  const data: MenuItem[] = messages?.layoutComponents?.sidebars?.leftSidebar?.list ?? [];

  // const dataLinks = [
    
  // ]

  return (
    <div className='w-full rounded-[8px] overflow-hidden'>
      <ul>
        {
          data.map((item, index) => (
            <li key={index} className='bg-[#E8ECF0] group cursor-pointer'>
              <Link href={item.link} className='px-4 py-3 text-[14px] text-[#2C5F7C] font-bold block'>
                {item.title}
              </Link>
              {
                item.items.length > 0 && (
                  <ul className='max-h-0 overflow-hidden transition-all duration-1000 ease-in-out group-hover:max-h-96 mt-2'>
                    {
                      item.items.map((subItem, subIndex) => (
                        <li key={subIndex} className='text-[14px] text-[#5A6C7D] font-normal leading-[20px] bg-white border-b last:border-b-0 border-[#E8ECF0]'>
                          <Link
                            href={subItem.link}
                            className="block pl-8 pr-4 py-3 hover:bg-[#F5F8FA] transition hover:underline hover:underline-offset-4"
                          >
                            {subItem.title}
                          </Link>
                        </li>
                      ))
                    }
                  </ul>
                )
              }
            </li>
          ))
        }
      </ul>
    </div>
  )
}
