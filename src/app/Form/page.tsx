"use client"
import React,{useState,ChangeEvent} from 'react'

export default function Page() {
    const [data,setData]=useState<string>('')
    const handlechange=(e:ChangeEvent<HTMLInputElement>)=>{
        setData(e.target.value)
        console.log(data)
    }
    
  return (
    <div>
      <input type="text" value={data}  placeholder='enter text' onChange={handlechange}/>
    </div>
  )
}
