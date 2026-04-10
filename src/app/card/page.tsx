"use client";

import React from "react";


interface CardItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

//commented code
const cardData: CardItem[] = [
  {
    id: 1,
    title: "Mountain View",
    description: "Beautiful mountain scenery.",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJlfGVufDB8fDB8fHww",
  },
  {
    id: 2,
    title: "Ocean Breeze",
    description: "Relaxing ocean vibes.",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fHww",
  },
  {
    id: 3,
    title: "City Lights",
    description: "Night city skyline.",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8fDB8fHww",
  },
];


export default function Home() {
  return (
    <main className="min-h-screen bg-blue-200 p-6">
      <h1 className="text-3xl text-black font-bold mb-6 hover:text-green-700 cursor-pointer">Card Layout</h1>

      <div className="grid gap-6  flex-column sm:grid-cols-2 md:grid-cols-3 transform transition duration-300 hover:scale-100">
        {cardData.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg  transition"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover cursor-pointer"
            />

            <div className="p-4">
              
              <h2 className="text-lg text-black font-semibold">{item.title}</h2>
              <p className="text-gray-600 text-sm mt-2">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}