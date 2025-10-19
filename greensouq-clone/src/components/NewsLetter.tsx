"use client"
import React, { FormEvent, useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const response = await fetch('/api/newsletter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    const data = await response.json();
    setMessage(data.message);
  };

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <h1 className="text-3xl mb-4 text-black">Newsletter</h1>
      <p className="mb-2 text-black">Invite customers to join your mailing list.</p>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-2 w-full max-w-md">
        <div className="flex flex-row gap-4 p-3 items-center justify-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            className="p-3 border border-black text-black rounded w-full sm:w-auto"
            required
          />
          <button
            type="submit"
            className="p-3 bg-black text-white rounded hover:bg-gray-800 w-full sm:w-auto"
          >
            Sign up
          </button>
        </div>
        {message && <p className="mt-2 text-black">{message}</p>}
      </form>
    </div>
  );
}