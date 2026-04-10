"use client"
import React, { useState } from 'react'
export default function Home() {
  const Sector = [
    { id: 1, name: "Economy" },
    { id: 2, name: "Labour" },
    { id: 3, name: "Health" },
    { id: 4, name: "Education" },
    { id: 5, name: "Environment" },
    { id: 6, name: "Transportation and Logistics" },
    { id: 7, name: "Energy" },
    { id: 8, name: "Social" },
    { id: 9, name: "Tourism" },
    { id: 10, name: "Communication" },
    { id: 11, name: "Urban dev and Infrastructure" },
    { id: 12, name: "Culture" },
    { id: 13, name: "Sports and youth" },
    { id: 14, name: "National Statistics" }
  ];

  const Sources = [
    { id: 1, name: "Agent" },
    { id: 2, name: "Public work Authority" },
    { id: 3, name: "Civil Service and Government Development" },
    { id: 4, name: "CGIS" },
    { id: 5, name: "CRA" },
    { id: 6, name: "General Retirement and Social Insurance Authority" },
    { id: 7, name: "Qatar Central Security" },
    { id: 8, name: "General Authority of Customer" },
    { id: 9, name: "General Tax Authority" },
    { id: 10, name: "HIA" },
    { id: 11, name: "Human Medical Corporation" }

  ];



  const [selectedSectors, setSelectedSectors] = useState([])
  const [selectedSources, setSelectedSources] = useState([])
  const [file, setFile] = useState(null);
  




  const handleClick = (id) => {
    setSelectedSectors(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id])

  };

  const handleSubmit = (id) => {

    setSelectedSources(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);

  }
 const uploadFile = async () => {
  if (!file) {
    alert("Select file first");
    return;
  }

  const formData = new FormData();
  formData.append("file", file);

  try {
    const res = await fetch("http://localhost:3200/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Upload failed");
    }

    alert(data.message);
  } catch (err) {
    alert('you can only upload .csv file');
  }
};


  return (
    <div className="min-h-screen bg-gray-100 flex">
      <main className="flex-1 p-6">

        <div className="rounded-2xl overflow-hidden relative mb-6">
          <img
            src="/Rectangle 240647890.png"
            className="w-full h-40 object-cover"
          />
          <div className="absolute top-8 px-6">
            <h1 className="text-white text-sm top-5 ">
              Last Updated Jan 18,2025
            </h1>
          </div>
          <div className="absolute top-22 px-6">

            <h1 className="text-white  text-2xl font-semibold">
              User Management
            </h1>
            <p className="text-white text-sm ">Manage User accounts access and permission</p>
          </div>
        </div>
        <div className="">
          <button className="border-t text-white bg-[#C8A96A] rounded-full px-3 py-1 text-center">User Management</button>
          <button className="text-black rounded-full border border-gray-300 px-3 py-1 ml-2">Data Request Management</button>
        </div>
        <div className="mt-3 p-2">
          <button className="text-black rounded-full border border-gray-300 px-3 py-1">Users</button>
          <button className="text-white bg-[#C8A96A] rounded-full ml-2 px-3 py-1 ">Bulk Upload</button>
          <button className="text-black rounded-full border border-gray-300 px-3 py-1 ml-2">Roles</button>
          <button className="text-black rounded-full border border-gray-300 px-3 py-1 ml-2">Permissions</button>
          <button className="text-black rounded-full border border-gray-300 px-3 py-1 ml-2">Groups</button>
          <button className="text-black rounded-full border border-gray-300 px-3 py-1 ml-2">Ministers</button>
        </div>
        <div className="p-2">
          <h1 className="font-bold text-xl text-black">Bulk User Upload</h1>
          <p className="text-gray-500 text-sm">upload a CSV  or Excel file with userdetailes(username,email and password).Assign shared settings below for all uploaded</p>
          <p className="text-gray-500 text-sm pl-270 hover:underline cursor-pinter">Download CSV Template</p>
        </div>

        <div className="ml-1.5 w-full h-140 border border-gray-100 rounded-lg bg-gray-200">
          <h1 className="text-black text-sm pt-2 pl-10 mt-5">Upload file</h1>
          <div className="ml-10 mt-2 w-300 h-30 border-dotted border-2  border-gray-200 rounded-lg bg-gray-300 ">
            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              className='text-black text-md pl-130 mt-4'
            />

            {file && <p className='text-black text-sm pl-120'>{file.name}</p>}

            {file && (
              <button onClick={() => setFile(null)} className='text-sm text-red-800 pl-150 pt-6'>
                Remove
              </button>
            )}
          </div>
          <div className="mt-2 ml-10 flex gap-2 ">
            <div>
              <label className="text-sm text-black">Role</label><br />
              <button className="border border-gray-300 text-black rounded-full bg-white p-2 ">
                <select className="">
                  <option value="">Minister</option>
                  <option value="">District Magistrate</option>
                  <option value="">Director General police</option>
                </select>
              </button>
            </div>
            <div>
              <label className="text-sm text-black">Group</label><br />
              <button className="border border-gray-300 text-black rounded-full bg-white p-2 ">
                <select className="">
                  <option value="">Finance Minister Dept.</option>
                  <option value="">Transport Mister Dept.</option>
                  <option value="">Home Minister Dept.</option>
                </select>
              </button>
            </div>
            <div>
              <label className="text-sm text-black">Ministry</label><br />
              <button className="border border-gray-300 text-black rounded-full bg-white p-2 ">
                <select className="">
                  <option value="">Ministry of Finance</option>
                  <option value="">Ministry of Education</option>
                  <option value="">Ministry of Defence</option>
                </select>
              </button>
            </div>



          </div>
          {/* <div className="mt-3 ml-10 ">
                <h1 className="text-black font-bold text-sm ">Sector Access</h1>
                <button className="text-black border border-gray-400 rounded-full px-2 bg-[#C8A96A]">Economy</button>
                <button className="text-black border-gray-400 bg-[#C8A96A] px-2  rounded-full ml-2">Labour</button>
                <button className="text-black border-gray-400 bg-[#C8A96A] px-2  rounded-full ml-2">Health</button>
                <button className="text-black border-gray-400 bg-white px-2  rounded-full ml-2">Education</button>
                <button className="text-black border-gray-400 bg-white px-2  rounded-full ml-2">Environments</button>
                <button className="text-black border-gray-400 bg-white px-2  rounded-full ml-2">Transportations and Logistics</button>
                <button className="text-black border-gray-400 bg-white px-2  rounded-full ml-2">Energy</button>
                <button className="text-black border-gray-400 bg-white px-2  rounded-full ml-2">Social</button>
                <button className="text-black border-gray-400 bg-white px-2  rounded-full ml-2">Tourism</button>
                <button className="text-black border-gray-400 bg-white px-2  rounded-full ml-2">Communication</button>
                <button className="text-black border-gray-400 bg-white px-2  rounded-full ml-2 mt-4 p-1">Urban dev. and Infrastructure</button>
                <button className="text-black border-gray-400 bg-white px-2  rounded-full ml-2">Culture</button>
                <button className="text-black border-gray-400 bg-white px-2  rounded-full ml-2">Sports and youth</button>
                <button className="text-black border-gray-400 bg-white px-2  rounded-full ml-2">National Statistics</button>

            </div> */}
          <div className="mt-3 ml-6">
            <h1 className="text-gray-800 font-semibold text-sm mb-2">Sector Access</h1>

            <div className="flex flex-wrap gap-2">
              {Sector.map((u) => (
                <button
                  key={u.id}
                  onClick={() => handleClick(u.id)}
                  className={`px-3 py-1 text-sm border rounded-full transition-all duration-200
                  ${selectedSectors.includes(u.id)
                      ? "bg-[#C8A96A] text-white "
                      : "text-gray-700 bg-gray-100 border-gray-300 hover:bg-gray-200 hover:border-gray-400"
                    }`}
                >
                  {u.name}
                </button>
              ))}
            </div>
          </div>
          {/* <div className="mt-3 ml-10 ">
                <h1 className="text-black font-bold text-sm ">Sources</h1>
                <button className="text-black border border-gray-400 rounded-full px-2 bg-white ">Agent</button>
                <button className="text-black border-gray-400 bg-[#C8A96A] px-2  rounded-full ml-2 ">Public work Authority</button>
                <button className="text-black border-gray-400 bg-white px-2  rounded-full ml-2">Civil service and government Development</button>
                <button className="text-black border-gray-400 bg-white px-2  rounded-full ml-2">CGIS</button>
                <button className="text-black border-gray-400 bg-white px-2  rounded-full ml-2">CRA</button>
                <button className="text-black border-gray-400 bg-white px-2  rounded-full ml-2">General Retirement and social Insurance Authority</button>
                <button className="text-black border-gray-400 bg-white px-2  rounded-full ml-2">Qatar Central Securities</button>
                <button className="text-black border-gray-400 bg-white px-2  rounded-full ml-2">General Authority of Customer</button>
                <button className="text-black border-gray-400 bg-[#C8A96A] px-2  rounded-full ml-2">General Tax Authority</button>
                <button className="text-black border-gray-400 bg-white px-2  rounded-full ml-2">HIA</button>
                <button className="text-black border-gray-400 bg-white px-2  rounded-full ml-2 mt-4 p-1">Human medical Corporation</button>
               


            </div> */}


          <div className="mt-6 ml-6">
            <h1 className="text-gray-800 font-semibold text-sm mb-2">
              Sources
            </h1>

            <div className="flex flex-wrap gap-2">
              {Sources.map((u) => (
                <button
                  key={u.id}
                  onClick={() => handleSubmit(u.id)}
                  className={`px-3 py-1 text-sm border rounded-full transition-all duration-200
                 ${selectedSources.includes(u.id)
                      ? "bg-[#C8A96A] text-white"
                      : "text-gray-700 bg-gray-100 border-gray-300 hover:bg-gray-200 hover:border-gray-400"
                    }`}
                >
                  {u.name}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-10 ml-140 ">
            <button className="text-white border border-gray-300 rounded-full bg-[#C8A96A] px-3 py-1  " onClick={uploadFile}>Upload &Create User</button>
          </div>
        </div>
      </main>

    </div>
  );
}


