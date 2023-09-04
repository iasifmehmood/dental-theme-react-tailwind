import React from 'react'

import clock from '../../assets/clock.svg';
import phone from '../../assets/phone.svg';

const NavHead = () => {
  return (
    <div className='flex justify-start items-center md:gap-4 gap-1 max-w-[1200px] mx-auto px-5 mb-0'>
        <div className='flex felx-row items-center gap-2 sm:text-base text-[14px]'>
            <img src={clock} alt='phone' height={32} width={32} />
            <div className='leading-0'>
              <h4 className=''>415-205-5550</h4>
              <span className='text-xs'>24/7 Emergency phone</span>
            </div>
        </div>
        <div className='flex felx-row items-center gap-2 sm:text-base text-[14px]'>
            <img src={phone} alt='phone' height={32} width={32} />
            <div>
              <h4>Monday-Friday</h4>
              <span className='text-xs'>9AM-9PM</span>
            </div>
        </div>
    </div>
  )
}

export default NavHead;