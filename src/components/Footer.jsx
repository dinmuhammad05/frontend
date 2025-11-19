import React from 'react'
import facebookIcon from '../assets/icon/facebook-icon.svg'
import twitterIcon from '../assets/icon/twitter-icon.svg'
import pinterestIcon from '../assets/icon/pinterest-icon.svg'
import instagramIcon from '../assets/icon/instagram-icon.svg'

const Footer = () => {
  return (
    <div className=' h-[162px]  bg-gray-300'>

      <div className='container h-[162px] items-centet pt-10'>
        <ul className=' flex justify-between items-center gap'>

          <li className='w-md'>
            <h2 className='font-medium text-2xl'>Subcribe our Newsletter</h2>
            <p className='text-[#999999]'>Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.</p>
          </li>

          <li className='border border-gray-300 rounded-[20px] relative h-13 w-[532px] flex justify-between '>
            <input
              type="text"
              className="flex-1 outline-none pl-6"
              placeholder="Your email address"
            />

            <button className='absolute right-0  bg-[#00B207] w-[162px] h-full rounded-[20px]'>Subscribe</button>
          </li>

          <div className='flex justify-between items-center gap-2'>
            <li className="bg-[#00B207] w-13 h-13 flex items-center justify-center rounded-full">
              <img src={facebookIcon} alt="facebook icon" className="w-7 h-7" />
            </li>

            <li className=''>
              <img src={twitterIcon} alt="" className='w-7 h-7' />
            </li>
            <li>
              <img src={pinterestIcon} alt="" className='w-7 h-7' />
            </li>
            <li>
              <img src={instagramIcon} alt="" className='w-7 h-7' />
            </li>
          </div>



        </ul>
      </div>

      <div className='bg-[#191919]'>

      </div>

    </div>
  )
}

export default Footer