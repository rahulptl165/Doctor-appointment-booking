import React from 'react'
import { assets } from './../assets/assets';

const Contact = () => {
  return (
    <div className='w-full text-center mt-10'>
      <p className='text-2xl font-medium text-gray-600 mb-8'>CONTACT <span className='font-medium text-gray-900'>US</span></p>
      <div className='flex gap-6 w-full mt-6 flex-wrap md:flex-nowrap'>
        <img className='sm:w-1/2 max-h-90 rounded-md sm:rounded-none' src={assets.contact_image} alt='' />
        <div className='flex flex-col gap-6 sm:gap-0 items-start justify-evenly'>
        <p className='text-xl text-gray-800'>OUR OFFICE</p>
          <div className='flex flex-col items-start text-gray-700'>
            <p>54709 Willms Station</p>
            <p>Suite 350, Washington, USA</p>
          </div>
          <div className='flex flex-col items-start text-gray-700'>
            <p>Tel: +91 90xxxxxxxx</p>
            <p>Email: rahulptl2022@gmail.com</p>
          </div>
          <div className='flex flex-col items-start text-gray-700 gap-2'>
            <p className='text-gray-900 font-medium'>CAREERS AT PRESCRIPTO</p>
            <p>Learn more about our team and job openings.</p>
          </div>
          <button className='border border-gray-800 p-4 hover:bg-black hover:text-white'>Explore Jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
