import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';

const Collection = () => {

  const {products} = useContext(ShopContext);

  const [showFilter, setShowFilter] = useState(false);

  const onFilterClick = () =>{

    setShowFilter((previous)=> !previous);
  }
  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* filter otions */}
        <div className='min-w-60'>
          <p onClick={onFilterClick} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
            <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90': ''}`} src={assets.dropdown_icon} alt=''/>

          </p>
           {/* catogory filter */}
          <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'}  sm:block`}> 
              <p className='mb-3 text-sm font-medium'> CATEGORIES</p>
              <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                  <p className='flex gap-2'>
                    <input className='w-3' type="checkbox" value={'Men'}/> Men
                  </p>
                  <p className='flex gap-2'>
                    <input className='w-3' type="checkbox" value={'Women'}/> Women
                  </p>
                  <p className='flex gap-2'>
                    <input className='w-3' type="checkbox" value={'Unisex'}/> Unisex
                  </p>
                  
              </div>
          </div> 
          
          {/* subcatagory filters */}
          <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'}  sm:block`}> 
              <p className='mb-3 text-sm font-medium'> WEATHER TYPE</p>
              <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                  <p className='flex gap-2'>
                    <input className='w-3' type="checkbox" value={'Warm'}/> Warm
                  </p>
                  <p className='flex gap-2'>
                    <input className='w-3' type="checkbox" value={'Cool'}/> Cool
                  </p>
                  <p className='flex gap-2'>
                    <input className='w-3' type="checkbox" value={'Rainy'}/> Rainy
                  </p>
                  
              </div>
          </div> 
       
           {/* end subfilter */}
            

        </div>

      
    </div>
  )
}

export default Collection
