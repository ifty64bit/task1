import React from 'react'
import Switch from './utility/Switch'
import { BiSearch } from 'react-icons/bi'
import { AiFillMessage } from 'react-icons/ai'
import { IoNotifications } from 'react-icons/io5'
import { GoPrimitiveDot } from 'react-icons/go'

function Header() {
  return (
    <div className='bg-green h-20 px-8 w-full flex justify-between items-center'>
      <div>
        <Switch data={["Explore","Activity"]} />
      </div>
      <div id="search">
        <div className='flex items-center'><BiSearch className='bg-white w-8 h-10 text-2xl pl-2 rounded-l-full' /> <input type="text" className=' w-80 h-10 py-1 px-2 rounded-r-full outline-none' placeholder='Search' /></div>
      </div>
      <div className='flex gap-3 items-center text-white'>
        <div className='relative p-2 rounded-full text-2xl bg-green-dark'>
          <GoPrimitiveDot className='absolute text-red-500 -top-2 -right-2' />
          <AiFillMessage/>
        </div>
        <div className='relative p-2 rounded-full text-2xl bg-green-dark'>
          <GoPrimitiveDot className='absolute text-red-500 -top-2 -right-2' />
          <IoNotifications/>
        </div>
        <div className='relative p-2 rounded-full text-xl bg-green-dark'>
          <div>DP</div>
        </div>
      </div>
    </div>
  )
}

export default Header