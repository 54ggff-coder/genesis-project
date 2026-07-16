import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 border-b bg-white">

      <Link href="/" className="font-bold text-2xl">
        Genesis
      </Link>

      <div className="flex gap-5">

        <Link href="/">
          Home
        </Link>

        <Link href="/assessment">
          Assessment
        </Link>

        <Link href="/dashboard">
          Dashboard
        </Link>

        <Link href="/login">
          Login
        </Link>

      </div>

    </nav>
  );
}