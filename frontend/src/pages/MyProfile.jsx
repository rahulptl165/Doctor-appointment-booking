import React, { useContext, useState } from 'react'
import { assets } from './../assets/assets';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Myprofile = () => {
  
  const {userData, setUserData, backendUrl, loadUserProfileData, token} = useContext(AppContext);
  
  const [isEdit, setIsEdit] = useState(false);
  const [image, setImage] = useState(false);
  
  const updateUserProfileData = async () => {
    try {
      
      const formData = new FormData();
      formData.append('name', userData.name);
      formData.append('phone', userData.phone);
      formData.append('address', JSON.stringify(userData.address));
      formData.append('gender', userData.gender);
      formData.append('dob', userData.dob);
      
      image && formData.append('image',image);
      
      const {data} = await axios.post(backendUrl + '/api/user/update-profile',formData,{headers:{token}});
      
      if(data.success) {
        toast.success(data.message);
        await loadUserProfileData();
        setIsEdit(false);
        setImage(false);
      } else {
        toast.error(data.message);
      }
      
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }
  
  return userData && (
    <div className='max-w-lg flex flex-col gap-2'>
      {

        isEdit ? 
        <label htmlFor='image' >
          <div className='inline-block relative cursor-pointer mt-2'>
            <img className='w-36 cursor-pointer opacity-50' src={image ? URL.createObjectURL(image):userData.image} alt='' />
            <img className='w-10 absolute bottom-12 right-12' src={image ? '' :assets.upload_icon} alt='' />
          </div>
          <input onChange={(e)=>setImage(e.target.files[0])} type='file' id='image' hidden/>
        </label>
        : <img className='rounded-lg mt-4 mb-4 w-36' src={userData.image} alt='' />

      }
      
      {
        isEdit ? <input className='text-xl mt-2 mb-2 py-1 rounded-md border border-gray-300 px-1' type='text' value={userData.name} onChange={(event) => setUserData(prev => ({...prev, name:event.target.value}))}/>
        : <p className='mt-2 mb-2 text-2xl font-medium'>{userData.name}</p>
      }
      
      <hr className='mb-2' />
      
      <div className='flex flex-col gap-2'>
        <p className='font-light underline mb-2'>CONTACT INFORMATION</p>
        <div>
          <div className='flex gap-10 mb-5'>
          <p>Email id:</p>
          {
             isEdit ? <input className='py-1 rounded-md border border-gray-300 px-1' type='email' value={userData.email} onChange={(event) => setUserData(prev => ({...prev, email:event.target.value}))}/>
             : <p className='text-primary'>{userData.email}</p>
          }
          </div>
          
          <div className='flex gap-10 mb-5'>
          <p>Phone:</p>
          {
          isEdit ?
          <input className='py-1 rounded-md border border-gray-300 px-1' type='text' value={userData.phone} onChange={(event) => setUserData(prev => ({...prev, phone:event.target.value}))}/>
          : <p className='text-primary'>{userData.phone}</p>
          }
          </div>
          
          <div className='flex gap-10 mb-5'>
          <p>Address:</p>
          {
             isEdit ? <div className='flex flex-col gap-1'>
             <input className='py-1 rounded-md border border-gray-300 px-1' type='text' value={userData.address.line1} onChange={(event) => setUserData(prev => ({...prev, address:event.target.value}))}/>
             <input className='py-1 rounded-md border border-gray-300 px-1' type='text' value={userData.address.line2} onChange={(event) => setUserData(prev => ({...prev, address:event.target.value}))}/>
             </div>
             : <p>{userData.address.line1} <br/>{userData.address.line2}</p>
          }
          </div>
          
        </div>
        
        <p className='font-light underline mb-2'>BASIC INFORMATION</p>
        
        <div>
          
           <div className='flex gap-10 mb-5'>
             <p>Gender:</p>
             {
               isEdit ? <select className='py-1 rounded-md border border-gray-300 px-1' type='text' value={userData.gender} onChange={(event) => setUserData(prev => ({...prev, gender:event.target.value}))}>
               <option value={'Male'}>Male</option>
               <option value={'Female'}>Female</option>
               </select>
               : <p>{userData.gender}</p>
              }
           </div>
             
           <div className='flex gap-10 mb-5'>
             <p>Birthday:</p>
             {
               isEdit ? <input className='py-1 rounded-md border border-gray-300 px-1' type='date' value={userData.dob} onChange={(event) => setUserData(prev => ({...prev, dob:event.target.value}))}/>
               : <p>{userData.dob}</p>
              }
           </div>
          
        </div>
        <div className='flex gap-5 mt-4'>
          {!isEdit && <button onClick={()=>setIsEdit(true)} className='px-7 py-2  border-gray-400 border-2 text-gray-800 rounded-full hover:bg-primary hover:text-white'>Edit</button>}
          {isEdit && <button onClick={updateUserProfileData} className='px-7 py-2  border-gray-400 border-2 text-gray-800 rounded-full hover:bg-primary hover:text-white'>Save information</button>}
          
        </div>
      </div>
    </div>
  )
}

export default Myprofile
