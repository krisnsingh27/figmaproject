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
    <div>
      
      <input type="email" placeholder='enter email...' value={email} onChange={e=>setEmail(e.target.value)}/>
      <button onClick={handleotp}>SendOtp</button>
    </div>
  )
}
