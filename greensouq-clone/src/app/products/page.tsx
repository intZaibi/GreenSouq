"use client"
import React from 'react';

export default function ProductPage() {
  return (
    <div className="flex flex-col md:flex-row justify-center min-h-screen p-4">
      <div className="md:w-1/2 p-4">
        <img
          src="prod1.webp"
          alt="Garden Sweet Sand 'Sweet Soil'"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="md:w-1/2 p-4">
        <h1 className="text-2xl mb-2 text-black">Garden Sweet Sand "Sweet Soil"</h1>
        <p className="text-gray-600 mb-2">Sale: <del>DhS 26.00</del> - DhS 13.00</p>
        <div className="flex flex-col mb-2 w-full">
  <label className="text-black mb-1">Select Weight:</label>
  <select className="p-2 border border-gray-300 rounded text-black w-full">
    <option>20 KG</option>
  </select>
</div>

        <div className="flex items-center gap-3 mb-4">
  {/* Quantity box */}
  <div className="flex items-center justify-center border border-gray-300 rounded w-1/2">
    <button className="px-3 py-2 border-r border-gray-300 text-black text-center">-</button>
    <span className="px-4 text-black">1</span>
    <button className="px-3 py-2 border-l border-gray-300 text-black text-center">+</button>
  </div>

  {/* Add to cart button */}
  <button className="w-1/2 p-2 bg-black text-white rounded hover:bg-gray-800">
    Add to cart
  </button>
</div>

        <button className="w-full p-2 bg-black text-white rounded hover:bg-gray-800">
          Buy it now
        </button>
        <p className="mt-2 text-gray-600 text-sm p-3">
          <span className="text-black">⚬</span> Free returns on all eligible orders
          <br />
          You have 7 days to request a return. All sale items are final sale.
        </p>
        
        <p className="mt-4 text-black">
          Garden Sweet Sand "Sweet Soil"
          <br />
          Providing a garden with the best possible growing is medium essential for strong and
          healthy plants. They require a balance of air, water and nutrients to allow them to
          flourish. Structures vary throughout different areas of the UAE but generally it is of a
          sandy soil. Garden beds should have a good quality "Garden Sweet Sand or Sweet
          Soil"-which is low in salt-as a base for the growing medium.
        </p>
      </div>
    </div>
  );
}