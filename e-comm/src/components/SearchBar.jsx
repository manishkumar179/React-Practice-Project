import { Search } from 'lucide-react'
import React from 'react'

const SearchBar = () => {
  return (
    <div className='border border-gray-500 rounded px-2 flex items-center gap-3' >
            <Search size={18} />
            <input className='outline-0 text-sm py-1 w-80 ' type="text" placeholder='search product' />
    </div>
  )
}

export default SearchBar
