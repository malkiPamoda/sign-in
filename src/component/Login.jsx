import React from 'react'
import LogInImage from "../assets/new.jpg"

export default function Login() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block'>
            <img className='w-full h-full object-cover' src={LogInImage}></img>
        </div>
        <div className='bg-gray-100 flex flex-col justify-center '>
            <form className='max-w-[500px] w-full  mx-auto bg-white p-4'>
                <h2 className='text-6xl font-bold text-center py-6'>Log In</h2>
                <div className='flex flex-col py-4'>
                    <label className='text-2xl font-bold py-3'>User Name</label>
                    <input className='border p-4' type='text'/>
                </div>
                <div className='flex flex-col py-4'>
                    <label className='text-2xl font-bold py-3' >Password</label>
                    <input className='border p-4' type='password'/>
                </div>
                <button className='border w-full my-5 py-2 bg-gray-700 hover:bg-gray-500 text-white font-bold text-2xl'>Sign In</button>
                <div className='flex justify-between'>
                    <p className='flex items-center text-1xl font-bold py-3'><input className='mr-2' type='checkbox'/>Remember Me</p>
                    <p  className='flex items-center text-1xl font-bold py-3 '>Create an account </p>
                </div>
            </form>
        </div>
    <br></br>
    </div>
  )
}
