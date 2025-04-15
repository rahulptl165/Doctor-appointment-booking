import React, { useContext, useState } from 'react'
import { assets } from './../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';


const Navbar = () => {
  
  const {token,setToken, userData} = useContext(AppContext)
  
  const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);
    //const [token, setToken] = useState(true);
    
    const logOut = () => {
      setToken(false);
      localStorage.removeItem('token');
      navigate('/');
    }
    
  return (
    <div className='flex items-center justify-between text-sm py-4 mx-5 border-b border-b-gray-400'>
      <img onClick={()=>{navigate('/'); scrollTo(0,0)}} className='w-44 cursor-pointer' src={assets.logo} alt=""/>
      <ul className='hidden md:flex items-start gap-5 font-mdium'>
        <NavLink to='/'>
            <li className='py-1'>Home</li>
            <hr className='border-none outline-none h-0.5 w-3/5 m-auto bg-primary hidden'/>
        </NavLink>
        <NavLink to='/doctors'>
            <li className='py-1'>All Doctors</li>
            <hr className='border-none outline-none h-0.5 w-3/5 m-auto bg-primary hidden'/>
        </NavLink>
        <NavLink to='/about'>
            <li className='py-1'>About</li>
            <hr className='border-none outline-none h-0.5 w-3/5 m-auto bg-primary hidden'/>
        </NavLink>
        <NavLink to='/Contact'>
            <li className='py-1'>Contact</li>
            <hr className='border-none outline-none h-0.5 w-3/5 m-auto bg-primary hidden'/>
        </NavLink>
      </ul>
      <div className='flex items-center gap-4'>
      {
        token && userData ? <div className='flex items-center gap-2 cursor-pointer group relative'>
            <img className='w-10 rounded-full ' src={userData.image} alt="" />
            <img className='w-2.5' src={assets.dropdown_icon} alt="" />
            <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                    <p onClick={()=>navigate('/my-appointment')} className='hover:text-black cursor-pointer'>My Appointments</p>
                    <p onClick={()=>navigate('/my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                    <p onClick={logOut} className='hover:text-black cursor-pointer'>Logout</p>
                </div>
            </div>
        </div>
        :<button onClick={()=>navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>Create account</button>
      }
      <img onClick={()=>(setShowMenu(true))} className='md:hidden w-6' src={assets.menu_icon} alt='' />
      {/* ------- mobile menu -------- */}
      <div className={`${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 bg-white overflow-hidden transition-all`}>
        <div className='flex mt-3 mx-1 items-center justify-between px-5 py-6'>
          <img className='w-36 mb-2' src={assets.logo} alt='' />
          <img onClick={()=>(setShowMenu(false))} className='w-7 mb-2' src={assets.cross_icon} alt='' />
          </div>
          <ul className='flex flex-col gap-1'>
            <NavLink onClick={()=>{setShowMenu(false)}}  to='/'><p className='px-2 py-3 text-xl text-gray-800 border border-gray-200'>Home</p></NavLink>
            <NavLink onClick={()=>{setShowMenu(false)}}  to='/doctors'><p className='px-2 py-3 text-xl text-gray-800 border border-gray-200'>All Doctors</p></NavLink>
            <NavLink onClick={()=>{setShowMenu(false)}}  to='/about'><p className='px-2 py-3 text-xl text-gray-800 border border-gray-200'>About Us</p></NavLink>
            <NavLink onClick={()=>{setShowMenu(false)}}  to='/contact'><p className='px-2 py-3 text-xl text-gray-800 border border-gray-200'>Contact Us</p></NavLink>
          </ul>
      </div>
      </div>
    </div>
  )
}

export default Navbar
