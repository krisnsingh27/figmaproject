"use client"
import React,{useState} from 'react'
import axios from 'axios'
import {useRouter} from 'next/navigation'

export default function page() {
    const [email,setEmail]=useState('')
    const [otp,setOtp]=useState('')
    const [data,setData]=useState(null)
    const router=useRouter()
    let url='http://localhost:3200/api/verifyotp'
    //login successfully after clicking on the button
    const handlelogin=async(e)=>{
        e.preventDefault();
        //implement it through useEffect and useState
        try{
           const response=await axios.post(url,{
             email:email,
             otp:otp
           },{withCredentials:true})
           alert("login successfully")
           setData(response.data)
           
           setEmail('')
           setOtp('')
           router.push('./figma1')
        }catch(err){
           alert('otp doesnot match')
           console.log(err)
        }

    }
    
  return (
  <div className="min-h-screen flex items-center justify-center ">

  <div className="bg-white w-80 p-6 rounded-2xl shadow-xl text-center">

    <h1 className="text-2xl font-bold text-gray-800 mb-4">
      OTP Login
    </h1>

    <input
      type="email"
      placeholder="Enter email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="border border-gray-300 p-2 w-full mb-3 rounded-lg text-black"
    />

    <input
      type="number"
      placeholder="Enter OTP"
      value={otp}
      onChange={(e) => setOtp(e.target.value)}
      className="border border-gray-300 p-2 w-full mb-4 rounded-lg text-black"
    />

    <button
      onClick={handlelogin}
      className="text-white bg-blue-600 hover:bg-blue-700 cursor-pointer w-full rounded-lg "
    >
      Login
    </button>

  </div>

</div>
  )
}
