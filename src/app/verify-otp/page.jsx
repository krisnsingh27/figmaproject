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
    const handlelogin=async(e)=>{
        e.preventDefault();
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
    <div>
       <input type="email" placeholder='enter email...' value={email} onChange={e=>setEmail(e.target.value)} /> <br />
       <input type="number" placeholder='enter otp...' value={otp} onChange={e=>setOtp(e.target.value)}/>
       <button  onClick={handlelogin}>Login</button>
    </div>
  )
}
