"use client"
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import axios from 'axios'


export default function Page() {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [data,setData]=useState(null)
  let url='http://localhost:3200/api/login'

  const handleclick = async (e) => {
    e.preventDefault(); 

    try {
      const response = await axios.post(url,{
         email:email,
         password:password,
         

      }, { withCredentials: true })
      setData(response.data)
      setEmail('')
      setPassword('')
      console.log(data)

      
      
      

    } catch (error) {
      console.error(error);
    }
    
  };
  

  return (
    <div className="min-h-screen fixed flex bg-[#061A2D] text-white mb-1">
      
      
      <div className="hidden md:flex w-1/2 relative ml-6 mt-5 p-8 ">
        <Image
          src="/Rectangle 240647890.png"
          alt="Rectangle"
          fill
          priority
          className="rounded-md"
        />
    
        
        <div className="relative top-93 ml-13">
          <h1 className="text-4xl font-bold ">
            Qatar’s <br /> National Insights Platform
          </h1>

          <p className="text-sm text-gray-300 leading-relaxed mt-3">
            QInsights is Qatar’s official national-level dissemination and
            decision-support platform. We transform complex datasets into
            actionable narratives for a more prosperous future.
          </p>
        </div>

       
        
      </div>

      
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-6">
        
        <div className="w-full max-w-sm">
          
       
          <div className="text-center mb-8">
            <h2 className="text-sm text-gray-400 mb-2">QInsights</h2>
            <h1 className="text-2xl font-semibold text-[#C8A96A]">
              Welcome to QInsights
            </h1>
            <p className="text-sm text-gray-400 mt-2">
              Login to Continue
            </p>
          </div>

         
          <form className="flex flex-col gap-4">
           
            <div>
              <label className="text-sm text-gray-300 mb-1 block">
                Enter Your Email
              </label>
              <input
                type="email"
                value={email}
                placeholder="krish@gmail.com"
                onChange={e=>setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-full bg-transparent border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#C8A96A]"
              />
            </div>

            
            <div>
              <label className="text-sm text-gray-300 mb-1 block">
                Enter Your Password
              </label>
              <input
                type="password"
                value={password}
                placeholder="*************"
                onChange={e=>setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-full bg-transparent border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#C8A96A]"
              />
            </div>

            
            <div className="text-right">
              <a href="#" className="text-xs text-[#C8A96A] hover:underline">
                Forgot Password?
              </a>
            </div>

           
            <button
              type="submit"
              className="w-full py-3 rounded-full bg-[#C8A96A] text-black font-semibold hover:opacity-90 transition cursor-pointer"
              onClick={handleclick}
            >
              Get Started
            </button>
          </form>

        
          <p className="text-xs text-center text-gray-400 mt-6">
            Don’t have an account?{" "}
            <span className="text-[#C8A96A] cursor-pointer hover:underline">
              Sign up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}