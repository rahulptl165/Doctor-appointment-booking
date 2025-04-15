import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from './../context/AppContext';
import { doctors } from './../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

const MyAppointment = () => {
  
  const { backendUrl, token, getDoctorsData } = useContext(AppContext);
  
  const [appointments, setAppointments] = useState([]);
  
  const months = ['','jan', 'feb', 'march', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec'];
  
  const slotFormatDate = (slotDate) =>{
    const dateArray = slotDate.split('_');
    return dateArray[0] + " " + months[Number(dateArray[1])] + " " + dateArray[2];
  }
  
  const getUserAppointments = async () => {
    try {
      
      const {data} = await axios.get(backendUrl + '/api/user/appointments', {headers:{token}});
      if(data.success){
        setAppointments(data.appointments.reverse());
        console.log(data.appointments);
        
      }
      
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }
  
  const cancelAppointment = async (appointmentId) => {
    try {
      
      const {data} = await axios.post(backendUrl + '/api/user/cancel-appointment', {appointmentId}, {headers:{token}});
      if(data.success){
        toast.success(data.message);
        getUserAppointments();
        getDoctorsData();
      }else{
        toast.error(data.message);
      }
      
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }
  
  useEffect(()=>{
    if(token){
      getUserAppointments();
    }
  },[token])
  
  return (
    <div className='w-full'>
      <p className='mt-20 mb-2 font-medium text-xl'>My Appointments</p>
      {
        appointments.map((item, index)=>(
         <div className='w-full grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 border border-gray-100 mb-2' key={index}>
           <div className=''>
            <img className='border rounded-lg w-40 bg-blue-50' src={item.docData.image} alt='' />
           </div> 
            <div className='flex-1'>
              <p className='text-xl mt-1'>{item.name}</p>
              <p className='text-sm text-gray-700 mb-4'>{item.docData.speciality}</p>
              <p className='mb-1'>Address:</p>
              <p className='text-sm text-gray-800'>{item.docData.address.line1}</p>
              <p className='text-sm text-gray-800'>{item.docData.address.line2}</p>
              <p className='mt-2 text-gray-800'><span className='text-gray-900'>Date & Time: </span>{slotFormatDate(item.slotDate)} | {item.slotTime}</p>
            </div>
            <div className=''></div>
            <div className=' flex flex-col justify-end gap-2 my-2'>
              {!item.cancelled && <button className='border border-gray-200 px-10 py-4  hover:bg-primary transition-all duration-30 hover:text-white'>Pay Online</button>}
              {!item.cancelled && <button onClick={()=>cancelAppointment(item._id)} className='border border-gray-200 px-10 py-4 hover:text-white hover:bg-red-500'>Cancel Appointment</button>}
              {item.cancelled && <button className='border border-red-500 rounded px-10 py-4 text-red-500 cursor-default'>Appointment Cancelled</button>}
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default MyAppointment
