"use client"
import Image from 'next/image';
import React from 'react';

export default function ProductPage() {
  return (
    <div className="flex md:flex-row flex-col justify-center p-4 min-h-screen">
      <div className="p-4 md:w-1/2">
        <Image
          width={500}
          height={500}
          src="prod1.webp"
          /* eslint-disable */
          alt="Garden Sweet Sand 'Sweet Soil'"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="p-4 md:w-1/2">
      {/* eslint-disable */}
        <h1 className="mb-2 text-black text-2xl">Garden Sweet Sand "Sweet Soil"</h1>
        <p className="mb-2 text-gray-600">Sale: <del>DhS 26.00</del> - DhS 13.00</p>
        <div className="flex flex-col mb-2 w-full">
  <label className="mb-1 text-black">Select Weight:</label>
  <select className="p-2 border border-gray-300 rounded w-full text-black">
    <option>20 KG</option>
  </select>
</div>

        <div className="flex items-center gap-3 mb-4">
  {/* Quantity box */}
  <div className="flex justify-center items-center border border-gray-300 rounded w-1/2">
    <button className="px-3 py-2 border-gray-300 border-r text-black text-center">-</button>
    <span className="px-4 text-black">1</span>
    <button className="px-3 py-2 border-gray-300 border-l text-black text-center">+</button>
  </div>

  {/* Add to cart button */}
  <button className="bg-black hover:bg-gray-800 p-2 rounded w-1/2 text-white">
    Add to cart
  </button>
</div>

        <button className="bg-black hover:bg-gray-800 p-2 rounded w-full text-white">
          Buy it now
        </button>
        <p className="bg-gray-100 mt-2 p-3 text-gray-600 text-sm">
          <span className="text-black">⚬</span> Free returns on all eligible orders
          <br />
          You have 7 days to request a return. All sale items are final sale.
        </p>
        
        <p className="mt-4 text-black">
        {/* eslint-disable  */}
           <h1 className="text-black text-2xl">Garden Sweet Sand "Sweet Soil"</h1>
          <br />
          Providing a garden with the best possible growing is medium essential for strong and
          healthy plants. They require a balance of air, water and nutrients to allow them to
          flourish. Structures vary throughout different areas of the UAE but generally it is of a
          sandy soil. Garden beds should have a good quality &quot;Garden Sweet Sand or Sweet
          Soil&quot;-which is low in salt-as a base for the growing medium.
        </p>
      </div>
    </div>
  );
}