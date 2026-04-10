"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import {useRouter} from 'next/navigation'

export default function page() {
    const [data, setData] = useState(null)
    const [data1, setData1] = useState(null)
    const [data2, setData2] = useState(null)
    const router=useRouter()

    const handleclick=()=>{
        router.push('./signin')
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch("http://localhost:3200/api/dashboard");
                const content = await res.json();
                setData(content);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, [])

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch("http://localhost:3200/api/dashboard1");
                const content = await res.json();
                setData1(content);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, [])

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch("http://localhost:3200/api/dashboard3");
                const content = await res.json();
                setData2(content);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, [])


    return (
        <div className='bg-black text-white relative'>

            <Image src='/Rectangle 240647890.png' alt='Rectangle' width={10000} height={500} />
            <nav className='  m-auto pl-30 absolute top-3 flex  gap-30'>
                <h1 className='pl-10 left-70 text-xl'>Qinsights</h1>
                <ul className='left-70 flex gap-15 cursor-pointer'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Census</li>
                    <li>Help and support</li>
                    <button className='bg-[#A29374B2] px-2 py-0.5 ml-60 text-white rounded-full cursor-pointer' onClick={handleclick}>Sign In</button>
                </ul>
            </nav>

            <h1 className='text-4xl absolute top-50 pl-44'>Qatar's <br /> National Insight Platform</h1>
            <p className='absolute top-75 pl-44'>Qinsights is Qatars official national-level dissemation and decision- <br /> support platform.We transform complex datasets into a actionable <br /> narratives for a men prosperous future</p>
            <br />
            <button className='left-44 pl-1 pr-1 bg-[#A29374] text-white rounded-full absolute top-100 cursor-pointer  '>About Us</button>

            {data1 ?
                (<div className='ml-22'>
                    <h1 className='text-2xl text-[#A29374B2]'>{data1.title}</h1>
                    <p className='whitespace-pre-line'>
                        {data1.description}
                    </p>
                    <button className='bg-[#A29374B2] text-white rounded-full mt-10 p-1 cursor-pointer'>Visit Census</button>
                </div>
                ) : (
                    <p className='ml-4 text-white'>Loading...</p>
                )}

            {/* <div className='grid grid-cols-1 md:grid-cols-2  gap-6 ml-150 mr-2 absolute top-200'>
                <div className=' space-y-3 rounded-xl bg-blue-700/3 p-6 shadow-2xl border border-gray-700 '>
                    <p>Total population</p>
                    <p className='text-[#A29374B2]'>2,846,118</p>
                    <p>65% since 2010</p>
                </div>

                <div className=' space-y-3 rounded-xl bg-blue-700/3 p-6 shadow-2xl border border-gray-700'>
                    <p>Completed buildings</p>
                    <p className='text-[#A29374B2]'>222,700</p>
                    <p>49.7% growth</p>
                </div>

                <div className=' space-y-3 rounded-xl bg-blue-700/3 p-6 shadow-2xl border border-gray-700'>
                    <p>uni graduate Rate</p>
                    <p className='text-[#A29374B2]'>33.9%</p>
                    <p>Among Qstaris(10+)</p>

                </div>

                <div className=' space-y-3 rounded-xl bg-blue-700/3 p-6 shadow-2xl border border-gray-700'>
                    <p>Economic participation</p>
                    <p className='text-[#A29374B2]'>78.9%</p>
                    <p>jobs in private sector</p>
                </div>
            </div> */}


            {data ? (
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 ml-150 mr-2 absolute top-200'>
                    <div className='space-y-3 rounded-xl bg-blue-700/3 p-6 shadow-2xl border border-gray-700'>
                        <p>Total population</p>
                        
                        <p className='text-[#A29374B2]'>{data.totalPopulation.value}</p>
                        <p>{data.totalPopulation.growth}</p>
                    </div>

                    <div className='space-y-3 rounded-xl bg-blue-700/3 p-6 shadow-2xl border border-gray-700'>
                        <p>Completed buildings</p>
                        <p className='text-[#A29374B2]'>{data.completedBuildings.value}</p>
                        <p>{data.completedBuildings.growth}</p>
                    </div>

                    <div className='space-y-3 rounded-xl bg-blue-700/3 p-6 shadow-2xl border border-gray-700'>
                        <p>Uni graduate Rate</p>
                        <p className='text-[#A29374B2]'>{data.graduateRate.value}</p>
                        <p>{data.graduateRate.description}</p>
                    </div>

                    <div className='space-y-3 rounded-xl bg-blue-700/3 p-6 shadow-2xl border border-gray-700'>
                        <p>Economic participation</p>
                        <p className='text-[#A29374B2]'>{data.economicParticipation.value}</p>
                        <p>{data.economicParticipation.description}</p>
                    </div>
                </div>
            ) : (
                <p className='text-center mt-10 text-white'>Loading...</p>
            )}


            {data2 ? (
                <div>
                    <button className='ml-120 mt-50 bg-[#A29374B2] p-2 rounded-full text-sm cursor-pointer'>
                        Unified Data Ecosystem
                    </button>

                    <h1 className='text-4xl mt-3 ml-100 text-[#A29374B2] whitespace-pre-line'>{data2.title}</h1>
                    <p className='text-md mt-3 ml-90 text-white whitespace-pre-line'>{data2.description}</p>
                </div>
            ) : (
                <p className='text-center mt-10 text-white'>Loading...</p>
            )}

            <div className='flex mt-4 gap-5 ml-30'>
                <div className='rounded-xl bg-white text-black p-6 shadow-2xl border border-gray-700'>
                    <h1 className='text-xl text-[#A29374B2]'>NDS Framework</h1>
                    <p className='text-sm pt-3'>Tracking the 3rd National Development Strategy <br /> (NDS3) KPIs monitor progress towards Qatar's <br /> 2030 vision through real-time performance <br /> trajectories</p>
                </div>

                <div className='rounded-xl bg-[#A29374B2] text-white p-6 shadow-2xl border border-gray-700'>
                    <h1 className='text-xl text-white'>SCEAI Oversight</h1>
                    <p className='text-sm pt-3'>Decision support for the supreme council for <br /> economic affairs and Investment High-level <br /> economic engine and fiscal health monitoring.</p>
                </div>
                <div className='rounded-xl bg-white text-black p-6 shadow-2xl border border-gray-700'>
                    <h1 className='text-xl text-[#A29374B2]'>National Census</h1>
                    <p className='text-sm pt-3'>The public digital face of Qatar's census data <br /> explore demographics workforce participation <br /> and infrastructure growth through interactive <br /> views</p>
                </div>
            </div>

            <div className='mt-20 relative'>
                <Image src='/Rectangle 240647890.png' alt='Rectangle' width={10000} height={500} />

                <h1 className='absolute top-45 text-4xl ml-100'>Explore Qatar's Performance</h1>
                <p className='absolute top-55 text-sm ml-100'>Access the official national performance data marketplace and join the <br /> transformation of Qatar's data landscape </p>
                <button className='absolute top-70 text-sm rounded-full ml-130 bg-[#C8A96A] p-1 cursor-pointer'>Visit Census</button>
                <button className='absolute top-70 text-sm rounded-full border border-white ml-155  px-3 py-0.5 cursor-pointer'>Sign In</button>

                <div className='absolute top-100 pt-10  gap-35  bg-black rounded-xl flex right-3 left-3  bottom-30 '>
                    <div className='pl-10'>
                        <h1 className='text-xl pt-5 pl-5 '>QInsights</h1>
                        <p className='text-sm pt-5 pl-5'>Welcome to QInsights,access vital indicators <br /> monitor trends, and adjust methodlogies with ease <br /> explore our data marketplace to find valuable insights <br />
                            and create custom dashboards tailored to your needs <br /> empower your decision-making with QInsights!
                        </p>
                    </div>

                    <div className='mt-3'>
                        <h1 className='text-[#A29374B2]'>About Us</h1>
                        <ul>
                            <li className='pt-1'>Home</li>
                            <li className='pt-1'>About Us</li>
                            <li className='pt-1'>Programs</li>
                            <li className='pt-1'>Indicators</li>
                            <li className='pt-1'>Latest Updates</li>
                        </ul>

                    </div>
                    <div className='mt-3'>
                        <h1 className='text-[#A29374B2]'>Help&Support</h1>
                        <ul>
                            <li className='pt-1'>FAQs</li>
                            <li className='pt-1'>Contact Us</li>
                            <li className='pt-1'>Terms&Conditions</li>
                            <li className='pt-1'>Privacy Policy</li>
                        </ul>
                    </div>
                    <div className='mt-3 '>
                        <h1 className='text-[#A29374B2]'>Contact Us</h1>
                        <ul>
                            <li className='pt-1.5'>97444958888</li>
                            <li className='pt-1.5'>QInsights@info.com</li>
                            <li className='pt-1.5'>P.O.Box NO:1855,Doha Tower</li>
                        </ul>
                    </div>

                    <div className="absolute bottom-0 left-0 w-full border-t border-gray-600 py-3 flex justify-between items-center text-sm text-gray-300">
                        <span className="pl-3">National Planning Council</span>
                        <span className="pr-3">© 2026. All Rights Reserved.</span>
                    </div>

                </div>

            </div>


        </div>
    )
}
