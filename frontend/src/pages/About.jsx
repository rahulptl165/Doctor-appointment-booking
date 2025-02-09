import React from 'react'
import { assets } from './../assets/assets';

const About = () => {
  return (
    <div className='flex flex-col gap-2'>
      <div className='text-center text-gray-700 mt-5'>
        <p>ABOUT <span className='text-gray-900 font-medium'>US</span></p>
      </div>
      
      <div className='flex gap-4 flex-wrap sm:flex sm:flex-nowrap  w-full mt-6'>
        <img className='sm:w-3/3 rounded-lg' src={assets.about_image} alt='' />
        
        <div className='flex flex-col flex-wrap gap-3 border rounded-lg border-gray-500'>
          <p className='p-3 text-gray-600 font-light'>Our doctor appointment booking system makes scheduling your healthcare visits quick and easy. With just a few clicks, you can find available doctors in your area, choose a suitable time, and secure your appointment. We offer a simple, user-friendly interface designed to streamline the booking process, saving you time and effort.</p>
          <p className='p-3 text-gray-600 font-light'>Our platform ensures a seamless experience by offering real-time availability, reminders, and appointment management features. Whether you need a routine check-up or a specialist consultation, our system helps you connect with trusted healthcare professionals conveniently and efficiently. Your health is our priority, and we're here to make the process as smooth as possible.</p>
          <b className='p-3 pb-0 text-gray-900 font-medium'>Our vision</b>
          <p className='p-3 text-gray-600 font-light'>Our vision is to revolutionize healthcare access by providing a seamless, efficient, and user-friendly platform for patients to connect with healthcare professionals. We aim to empower individuals to take control of their health by simplifying the appointment scheduling process and ensuring timely care. Through innovation and dedication, we strive to create a healthcare experience that is accessible, convenient, and focused on the well-being of every patient.</p>
        </div>
      </div>
      
      <p className='text-xl text-gray-600 font-semibold mt-8'>WHY <span className='text-gray-900'>CHOOSE US</span></p>
      
      <div className='flex items-stretch justify-between flex-wrap mt-4 w-full mb-10 text-gray-700'>
        <div className='flex-1 border border-gray-500 px-10 py-7 hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer'>
          <p className='font-medium mb-3'>Efficiency</p>
          <p>Our platform is designed for maximum efficiency, allowing you to quickly search, select, and book appointments with healthcare providers. With real-time availability and instant booking confirmations, you can save valuable time and avoid unnecessary delays.</p>
        </div>
        <div className='flex-1 border border-gray-500 px-10 py-7 hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer'>
          <p className='font-medium mb-3'>Convenience</p>
          <p>Booking an appointment has never been easier. Access our system from anywhere, at any time, and choose from a wide range of doctors and specialists. We make managing your healthcare appointments simple, giving you the flexibility to schedule when it’s most convenient for you.</p>
        </div>
        <div className='flex-1 border border-gray-500 px-10 py-7 hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer'>
          <p className='font-medium mb-3'>Personalization</p>
          <p>We understand that each patient has unique needs. Our system tailors suggestions based on your preferences and medical requirements, ensuring you connect with the right doctor for your specific health concerns. Your healthcare experience is personalized to make every visit feel more comfortable and relevant to you.</p>
        </div>
      </div>
    </div>
  )
}

export default About
