import React from 'react'

import { SearchIcon } from 'lucide-react';

export default function Search() {
  return (
    <div className='w-full rounded-[8px] bg-white p-4 '>
      
      <div className='rounded-[2px] overflow-hidden relative'>

        <input
          className='w-full border-[2px] border-solid border-[#D5DBE1] focus:outline-none py-[12px] pl-[16px] pr-[44px] text-[14px] font-normal'
          type="text"
          placeholder="Поиск по журналу..."
        />
        
        <div className='absolute right-4 top-1/2 -translate-y-1/2'>
          <SearchIcon size={20}/>
        </div>

      </div>


    </div>
  )
}
