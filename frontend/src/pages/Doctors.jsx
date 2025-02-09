import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Doctors = () => {
  
   const { speciality } = useParams();
   const { doctors } = useContext(AppContext);
   const [filterDoc, setFilterDoc] = useState([]);
   const [filterMenu, setFilterMenu] = useState(true);
   const navigate = useNavigate();
   
   const applyFilter = () => {
    if(speciality){
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality));
    }else{
      setFilterDoc(doctors);
    }
   }
   
   useEffect(()=>{
    applyFilter();
   }, [doctors, speciality]);

  return (
    <div>
      <p className='text-gray-600 '>Browse through the doctors specialist.</p>
      <button onClick={()=>{setFilterMenu(prev => !prev)}} className={`px-3 py-1 mt-2 border rounded-sm border-gray-200 md:hidden ${filterMenu ? 'text-white bg-primary hover:scale-105' : 'text-zinc-700 hover:text-white hover:bg-primary'} `}>Filters</button>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
         {   filterMenu &&
            <div className='flex flex-col gap-4 text-sm text-gray-600'>
             <p onClick={()=>speciality === 'General physician' ? navigate('/doctors') : navigate('/doctors/General physician')} className={`w-[90vw] sm:w-[19vw] sm:auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "General physician" ? "bg-indigo-50" : ""}`}>General physician</p>
             <p onClick={()=>speciality === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')} className={`w-[90vw] sm:w-[19vw] sm:auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Gynecologist" ? "bg-indigo-50" : ""}`}>Gynecologist</p>
             <p onClick={()=>speciality === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')} className={`w-[90vw] sm:w-[19vw] sm:auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Dermatologist" ? "bg-indigo-50" : ""}`}>Dermatologist</p>
             <p onClick={()=>speciality === 'Pediatricians' ? navigate('/doctors') : navigate('/doctors/Pediatricians')} className={`w-[90vw] sm:w-[19vw] sm:auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Pediatricians" ? "bg-indigo-50" : ""}`}>Pediatricians</p>
             <p onClick={()=>speciality === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')} className={`w-[90vw] sm:w-[19vw] sm:auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Neurologist" ? "bg-indigo-50" : ""}`}>Neurologist</p>
             <p onClick={()=>speciality === 'Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')} className={`w-[90w] sm:w-[19vw] sm:auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Gastroenterologist" ? "bg-indigo-50" : ""}`}>Gastroenterologist</p>
            </div>
          }
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {
            filterDoc.map((item, index)=>(
          <div onClick={()=>navigate(`/appointment/${item._id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-x-[-10px] duration-300'>
              <img className='bg-blue-50 hover:bg-primary' src={item.image} alt=" " />
              <div className='p-4'>
                  <div className='flex items-center gap-2 text-center text-sm text-green-500'>
                     <p className='w-2 h-2 bg-green-500 rounded-full'></p> <p>Available</p>
                  </div>
                  <p className='text-gray-900 text-lg font-medium' >{item.name}</p>
                  <p className='text-gray-900 text-sm'>{item.speciality}</p>
              </div>
          </div>
          ))
           }
        </div>
      </div>
    </div>
  )
}

export default Doctors

