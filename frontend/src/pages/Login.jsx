import React, { useState } from 'react'

const Login = () => {
  
  const [state, setState] = useState('Sign Up');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    
  }
  
  return (
    <form className='min-h-[30vw] flex items-center justify-center'>
      <div className='flex flex-col gap-3 border rounded-lg border-gray-300 px-20 py-12 mt-28 min-w-[340px] sm:min-w-[96px] shadow-lg'>
        <p className='text-2xl text-gray-900 font-medium mt-4'>{state === 'Sign Up' ? 'Create Account' : 'Login'}</p>
        <p className='text-gray-700 mb-2'>Please { state=== 'Sign Up' ? 'sign up' : 'log in'} to book appointment.</p>
        
        {
          state === 'Sign Up' && <div className='w-full'>
          <p className='text-gray-800 font-medium'>Full Name</p>
          <input className='border border-gray-200 w-full py-1 rounded-md' onChange={(event)=>setName(event.target.value)} value={name} type='text' required />
        </div>
        }
        
        
        
        <div className='w-full'>
          <p className='text-gray-800 font-medium'>Email</p>
          <input className='border border-gray-200 w-full py-1 rounded-md' onChange={(event)=>setEmail(event.target.value)} value={email} type='email' required />
        </div>
        
        <div className='w-full'>
          <p className='text-gray-800 font-medium'>Password</p>
          <input className='border border-gray-200 w-full py-1 rounded-md' onChange={(event)=>setPassword(event.target.value)} value={password} type='password' required />
        </div>
        <button className='bg-primary text-white rounded-lg px-2 py-2 mb-2 hover:scale-105 transition-all duration-300'>{ state === 'Sign Up' ? 'Create Account' : 'Login'}</button>
        <p>{ state === 'Sign Up' ? 'Already have account?' : 'Do not have account'} <span onClick={()=>{ state === 'Sign Up' ? setState('Login') : setState('Sign Up')}} className='text-primary underline cursor-pointer'>{ state === 'Sign Up' ? 'Login hear' : 'Sing Up'}</span></p>
      </div>
    </form>
  )
}

export default Login
