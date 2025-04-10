import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { specialityData } from "../../../../frontend/src/assets/assets";
import { AdminContext } from './../../context/AdminContext';
import { toast } from 'react-toastify';
import axios from 'axios';

const AddDoctor = () => {
    
    const [docImg, setDocImg] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [experience, setExperience] = useState('1 Year');
    const [fees, setFees] = useState('');
    const [speciality, setSpeciality] = useState('General Physician');
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [about, setAbout] = useState('');
    const [degree, setDegree] = useState('');
    
    const {backendUrl, aToken} = useContext(AdminContext)
    
    const onSubmitHandler = async (event) => {
        event.preventDefault();
        try {
            
            if (!docImg) {
                toast.error('Image Not Selected');
            }
            
            const formData = new FormData();
            
            formData.append('image', docImg);
            formData.append('name', name);
            formData.append('email', email);
            formData.append('password', password);
            formData.append('experience', experience);
            formData.append('fees', Number(fees));
            formData.append('about', about);
            formData.append('speciality', speciality);
            formData.append('degree', degree);
            formData.append('address', JSON.stringify({line1:address1, line2:address2}));
            
            formData.forEach((value, key)=>{
                console.log(`${key} : ${value}`);
            })
            
            const { data } = await axios.post( backendUrl + '/api/admin/add-doctor', formData, { headers: { aToken } });
            
            if( data.success ){
                toast.success(data.message);
                setDocImg(false);
                setAbout('');
                setAddress1('');
                setAddress2('');
                setDegree('');
                setEmail('');
                setFees('');
                setName('');
                setPassword('');
            }else{
                toast.error(data.message)
            }
            
        } catch (error) {
            toast.error(error.message);
            console.log(error);
        }
    }
    
    
  return (
    <form onSubmit={onSubmitHandler} className="m-5 w-full">
      <p className="mb-3 text-lg font-medium">Add Doctor</p>

      <div className=" bg-white border-white px-8 py-8 rounded w-full max-h-[80vh] max-w-4xl overflow-y-scroll">
        <div className="flex items-center gap-4 mb-8 text-gray-500">
          <label htmlFor="doc-img">
            <img className="w-16 rounded-full bg-gray-100 cursor-pointer" src={docImg ? URL.createObjectURL(docImg) : assets.upload_area} alt="" />
          </label>
          <input onChange={(e)=>{setDocImg(e.target.files[0])}} type="file" id="doc-img" hidden />
          <p className="mt-5">
            Upload doctor <br /> Picture
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-10 text-gray-600">
          <div className="w-full lg:flex-1 flex flex-col gap-4">
            <div className="flex flex-1 flex-col gap-1">
              <p>Doctor Name</p>
              <input
                onChange={(e)=>setName(e.target.value)}
                type="text"
                className="border border-gray-200 rounded px-3 py-1"
                placeholder="Name"
                required
              />
            </div>

            <div className="flex flex-1 flex-col gap-1">
              <p>Doctor Email</p>
              <input
                onChange={(e)=>setEmail(e.target.value)}
                type="email"
                className="border border-gray-200 rounded px-3 py-1"
                placeholder="Email"
                required
              />
            </div>

            <div className="flex flex-1 flex-col gap-1">
              <p>Doctor Password</p>
              <input
                onChange={(e)=>setPassword(e.target.value)}
                type="password"
                className="border border-gray-200 rounded px-3 py-1"
                placeholder="Password"
                required
              />
            </div>

            <div className="flex flex-1 flex-col gap-1">
              <p>Experience</p>
              <select onChange={(e)=>setExperience(e.target.value)} className="border border-gray-200 rounded px-3 py-1" name="" id="">
                <option value="1 Year">1 Year</option>
                <option value="2 Year">2 Year</option>
                <option value="3 Year">3 Year</option>
                <option value="4 Year">4 Year</option>
                <option value="5 Year">5 Year</option>
                <option value="6 Year">6 Year</option>
                <option value="7 Year">7 Year</option>
                <option value="8 Year">8 Year</option>
                <option value="9 Year">9 Year</option>
                <option value="10 Year+">10 Year+</option>
              </select>
            </div>

            <div className="flex flex-1 flex-col gap-1">
              <p>Fees</p>
              <input
                onChange={(e)=>setFees(e.target.value)}
                type="number"
                className="border border-gray-200 rounded px-3 py-1"
                placeholder="Fees"
                required
              />
            </div>
          </div>
          <div className="w-full lg:flex-1 flex flex-col gap-4">
            <div className="flex flex-1 flex-col gap-1">
              <p>Speciality</p>
              <select onChange={(e)=>setSpeciality(e.target.value)} className="border border-gray-200 rounded px-3 py-1" name="" id="">
                {specialityData.map((item) => (
                  <option value={item.speciality}>{item.speciality}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-1 flex-col gap-1">
              <p>Education</p>
              <input
                onChange={(e)=>setDegree(e.target.value)}
                type="text"
                className="border border-gray-200 rounded px-3 py-1"
                placeholder="Education"
                required
              />
            </div>

            <div className="flex flex-1 flex-col gap-1">
              <p>Address</p>
              <input
                onChange={(e)=>setAddress1(e.target.value)}
                type="text"
                className="border border-gray-200 rounded px-3 py-1"
                placeholder="Address 1"
                required
              />
              <br />
              <input
                onChange={(e)=>setAddress2(e.target.value)}
                type="text"
                className="border border-gray-200 rounded px-3 py-1"
                placeholder="Address 2"
                required
              />
            </div>
          </div>
        </div>

        <div className="mt-4 mb-2 text-gray-600">
          <p>About Me</p>
          <textarea
            onChange={(e)=>setAbout(e.target.value)}
            className="w-full px-3 pt-2 border border-gray-200 rounded"
            placeholder="write about yourself"
            rows={5}
            required
          />
        </div>

        <div className="mt-4 mb-2">
          <button type="submit" className="border rounded-full bg-primary text-white px-10 py-3 hover:bg-blue-500">Add Doctor</button>
        </div>
      </div>
    </form>
  );
};

export default AddDoctor;
