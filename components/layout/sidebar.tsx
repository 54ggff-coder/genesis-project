import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 border-r min-h-screen p-6">

      <h2 className="text-xl font-bold mb-6">
        Dashboard
      </h2>

      <nav className="space-y-4">

        <Link href="/dashboard">
          Home
        </Link>

        <br />

        <Link href="/assessment">
          Assessment
        </Link>

        <br />

        <Link href="/report">
          Reports
        </Link>

        <br />

        <Link href="/profile">
          Profile
        </Link>

      </nav>

    </aside>
  );
}