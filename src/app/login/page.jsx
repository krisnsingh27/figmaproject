"use client"
import React,{useState} from 'react'
import axios from 'axios'
import {useRouter} from 'next/navigation'

export default function page() {
    const [email,setEmail]=useState('')
    const [data,setData]=useState(null)
    const router=useRouter()
    let url='http://localhost:3200/api/sendotp'
    const handleotp=async(e)=>{
        e.preventDefault();
        try{
        const response=await axios.post(url,{
           email:email
        },{withCredentials:true}) 
        setData(response.data);
        setEmail('')
        router.push('./verify-otp')
    }catch(err){
      console.log(err)
    }
}
  return (
   <div className="min-h-screen flex items-center justify-center bg-gray-100">
     <div className="w-full max-w-sm bg-white p-6 rounded-2xl shadow-md text-center border border-gray-200">

     <h1 className="text-2xl font-bold mb-4 text-black ">Verify Your Email</h1>

     <input
      type="email"
      placeholder="Enter email..."
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="w-full px-4 py-3 text-black border  border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

     <button
      onClick={handleotp}
      className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg cursor-pointer "
    >
      Send OTP
    </button>

  </div>
</div>
  )
}
