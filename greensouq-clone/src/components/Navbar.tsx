// components/Navbar.tsx
import Link from "next/link";
import { signOut } from "next-auth/react";
import { Session } from "next-auth";


interface NavbarProps {
  session: Session | null;
}

export default function Navbar({ session }: NavbarProps) {
  return (
    <nav className="p-4 bg-white shadow-md flex justify-between items-center">
      <Link href="/"><a className="font-bold">Greensouq Clone</a></Link>
      <div className="space-x-4">
        <Link href="/favorites">Favorites</Link>
        {session?.user ? (
          <>
            <span className="text-sm">Hi, {session.user?.email}</span>
            <button onClick={()=>signOut()} className="ml-2 text-sm">Sign out</button>
          </>
        ) : (
          <>
            <Link href="/auth/login">Login</Link>
            <Link href="/auth/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}
