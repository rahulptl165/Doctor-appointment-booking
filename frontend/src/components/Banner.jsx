import React from 'react'
import { assets } from './../assets/assets';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
    
    const navigate = useNavigate();
    
  return (
    <div className='bg-primary flex rounded-lg px-6 sm:px-10 md:px-14 lg:pd-12 my-20 md:mx-10px'>
      {/* ----- left side ----- */}
      <div className='flex-1 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
        <div className='text-3xl md:4xl lg:5xl text-white font-semibold'>
            <p className='mt-2'>Book Appointment</p>
            <p className='mt-4'>with 100+ trusted doctors</p>
        </div>
        <button onClick={()=>{navigate('/login'); scrollTo(0,0)}} className='bg-white text-gray-900 mt-6 mb-4 rounded-full px-8 py-3 hover:scale-105 transition-all'>Create account</button>
      </div>
      
      {/* ----- right side ----- */}
      <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
        <img className='w-full absolute bottom-0 right-0 max-w-md' src={assets.appointment_img} alt="" />
      </div>
    </div>
  )
}

export default Banner
