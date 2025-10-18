"use client"
// pages/auth/register.tsx
import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Register() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [name, setName] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await axios.post("/api/auth/register", { name, email, password: pw });
      router.push("/auth/login");
    } catch (err) {
  if (err instanceof Error) {
    console.error(err.message);
  } else {
    console.error("Unknown error:", err);
  }
}

  }

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl mb-4">Register</h1>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input value={name} onChange={e=>setName(e.target.value)} placeholder="Name" className="w-full p-2 border"/>
        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="w-full p-2 border"/>
        <input value={pw} onChange={e=>setPw(e.target.value)} placeholder="Password" type="password" className="w-full p-2 border"/>
        <button className="px-4 py-2 bg-blue-600 text-white rounded">Create account</button>
        <hr />
        <Link href="/auth/login">Login here</Link>
      </form>
    </div>
  );
}
