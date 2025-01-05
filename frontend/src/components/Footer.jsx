import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div> 
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src={assets.logo2} alt='' className='mb-5 w-32' />
                <p className='w-full md:w-2/3 text-gray-600'>
                Lorem ispum is simply dummy text of the printing and typsetting industry, Lorem ispum is simply dummy text of the printing and typsetting industry,Lorem ispum is simply dummy text of the printing and typsetting industry
                </p>
                
            </div> 
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY </p> 
                <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>


                </ul>             
            </div>
            <div>
                <p className='text-xl font-medium mb-5'> GET IN TOUCH  </p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li> +2519390878</li>
                    <li> contact@skperume.com</li>
                </ul>
            </div>

        </div>  
        <div >
            <hr/>
            <p className='py-5 text-sm text-center'>Copyright 2024@ skperfume.com - All right Reserved.</p>
            
        </div>    
    </div>
  )
}

export default Footer
