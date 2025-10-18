"use client";
// pages/auth/login.tsx
import { signIn } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const router = useRouter();

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password: pw,
    });
    if (res?.ok) router.push("/");
    else alert("Invalid credentials");
  }

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl mb-4">Login</h1>
      <form onSubmit={submit} className="space-y-3">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full p-2 border"
        />
        <input
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          placeholder="Password"
          type="password"
          className="w-full p-2 border"
        />
        <button className="px-4 py-2 bg-green-600 text-white rounded">
          Sign in
        </button>
        <hr />
        <Link href="/auth/register">Signup here</Link>
      </form>
    </div>
  );
}
