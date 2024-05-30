import React from 'react'
import LogInImg from "../assets/new.jpg"
import { RiGoogleFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";

export default function Login2  ()  {
  return (
    <div className='relative w-full h-screen bg-zinc-900/70'>
        <br></br>
        <img className='absolute w-full h-full object-cover mix-blend-overlay' src={LogInImg} /> 
    
    <div className='flex justify-center items-center h-full'>
      <form className='max-w-[500px] w-full  mx-auto bg-white p-8'>
        <h2 className='text-6xl font-bold text-center py-6'>Log In</h2>
        <div className='flex justify-between py-6'>
          <p className=' border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'><FaFacebook className='mr-2 text-2xl' />Facebook</p>
          <p className=' border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'><RiGoogleFill className='mr-2 text-2xl'/>Google</p>
        </div>
        <div className='flex flex-col py-2'>
                    <label className='text-2xl font-bold py-2'>User Name</label>
                    <input className='border p-4' type='text'/>
                </div>
                <div className='flex flex-col py-2'>
                    <label className='text-2xl font-bold py-2' >Password</label>
                    <input className='border p-4' type='password'/>
                </div>
        <button className='border w-full my-5 py-2 bg-gray-700 hover:bg-gray-500 text-white font-bold text-2xl'>Sign In</button>
        <p className='flex items-center text-1xl font-bold py-1'><input className='mr-2' type='checkbox'/> Remember Me</p>
        <p className='text-center text-1xl font-bold py-1 mt-6 '>Not a member? Sign Up now</p>
      </form>
    </div>
    <div> 
      
    </div>
    </div>


  )
}
