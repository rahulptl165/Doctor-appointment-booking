import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    
    const navigate = useNavigate();
    
  return (
    <div className=' md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        
        {/* ----- left side ----- */}
        <div>
            <img className='mb-5 w-40' src={assets.logo} alt='' />
            <p className='w-full md:w-2/3 text-gray-600 leading-6'>lorem ipsum generator to generate placeholder text in your code. Quickly insert placeholder text using a simple command. lorem ipsum generator to generate placeholder text in your code. Quickly insert placeholder text using a simple command.</p>
        </div>
        
        {/* ----- center section ----- */}
        <div>
            <p className='text-xl font-medium text-gray-900 mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-2 cursor-pointer'>
                <li onClick={()=>{navigate('/'); scrollTo(0,0)}}>Home</li>
                <li onClick={()=>{navigate('/about'); scrollTo(0,0)}}>About us</li>
                <li onClick={()=>{navigate('/contact'); scrollTo(0,0)}}>Contact us</li>
                <li onClick={()=>{navigate('/privacy-policy'); scrollTo(0,0)}}>Privacy Policy</li>
            </ul>
        </div>
        
        {/* ----- right side ----- */}
        <div>
            <p className='text-xl font-medium text-gray-900 mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2'>
                <li>+91 9060072413</li>
                <li>rahulptl2022@gmail.com</li>
            </ul>
        </div>
      </div>
      
      <div>
      <hr className='bg-gray-900'/>
      <p className='py-5 text-sm text-center'>Copyright @2025. All right Reserved.</p>
      </div>
      
    </div>
  )
}

export default Footer
