import React, { useContext } from 'react'
import { AppContext } from './../context/AppContext';
import { doctors } from './../assets/assets';

const MyAppointment = () => {
  
  const { doctors } = useContext(AppContext);
  
  return (
    <div className='w-full'>
      <p className='mt-20 mb-2 font-medium text-xl'>My Appointments</p>
      {
        doctors.slice(0,3).map((item, index)=>(
          <div className='w-full grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 border border-gray-100 mb-2' key={index}>
           <div className=''>
            <img className='border rounded-lg w-40 bg-blue-50' src={item.image} alt='' />
           </div> 
            <div className='flex-1'>
              <p className='text-xl mt-1'>{item.name}</p>
              <p className='text-sm text-gray-700 mb-4'>{item.speciality}</p>
              <p className='mb-1'>Address:</p>
              <p className='text-sm text-gray-800'>{item.address.line1}</p>
              <p className='text-sm text-gray-800'>{item.address.line2}</p>
              <p className='mt-2 text-gray-800'><span className='text-gray-900'>Date & Time: </span>08 Feb 2025 | 10:30</p>
            </div>
            <div className=''></div>
            <div className=' flex flex-col justify-end gap-2 my-2'>
              <button className='border border-gray-200 px-10 py-4  hover:bg-primary transition-all duration-30 hover:text-white'>Pay Online</button>
              <button className='border border-gray-200 px-10 py-4 hover:text-white hover:bg-red-500'>Cancel Appointment</button>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default MyAppointment
