import React from 'react'
import {assets} from '../assets/assets'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
        <img src={assets.bannerlg} className='w-36' alt="logo" />
        <ul className='hidden sm:flex gap-5 text-sm text-grey-700'></ul>
      
    </div>
  )
}

export default Navbar
