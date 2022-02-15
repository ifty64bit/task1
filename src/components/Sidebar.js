import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { BsSearch, BsFillCartFill, BsQuestionDiamond } from 'react-icons/bs'
import { MdWork } from 'react-icons/md'
import { GiLargeDress } from 'react-icons/gi'
import { IoMdSettings } from 'react-icons/io'
import { BiLogOut } from 'react-icons/bi'
import { UserContext } from './UserContext'
import { useNavigate} from 'react-router-dom'

function Sidebar() {
  const nav=useNavigate()
  const userContext = React.useContext(UserContext)
  const logout = () => {
    userContext.updateUser(null);
    nav("/login");
  }
  
  return (
    <div className='w-20 py-2 px-2 h-screen flex flex-col items-center'>
      <div className='mb-4'><img src="https://www.dhakai.com/static/icons/icon-192x192.png" alt="logo" className='mx-auto py-2' width="70%" /></div>
      <div className='flex flex-col grow justify-between items-center'>
        <div className='space-y-4'>
          <AiFillHome className='text-3xl hover:text-green transition duration-300' />
          <BsSearch className='text-3xl hover:text-green transition duration-300' />
          <MdWork className='text-3xl hover:text-green transition duration-300' />
          <GiLargeDress className='text-3xl hover:text-green transition duration-300' />
          <BsFillCartFill className='text-3xl hover:text-green transition duration-300' />
        </div>
        <div className='text-center space-y-4'>
          <IoMdSettings className='text-3xl hover:text-green transition duration-300' />
          <BiLogOut className='text-3xl hover:text-green transition duration-300' onClick={logout} />
          <BsQuestionDiamond className='text-3xl hover:text-green transition duration-300' />
        </div>
      </div>
    </div>
  )
}

export default Sidebar