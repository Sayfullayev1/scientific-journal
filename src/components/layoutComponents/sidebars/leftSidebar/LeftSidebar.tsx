import React from 'react'

import List from './_components/List'
import Search from './_components/Search'

export default function LeftSidebar() {
  return (
    <div className='grid grid-cols-[1fr] gap-y-6'>

        <List />
        
        <Search />

        

    </div>
  )
}
