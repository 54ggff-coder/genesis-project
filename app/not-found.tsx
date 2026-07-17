import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-4 text-xl text-gray-600">
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="mt-8 bg-black text-white px-6 py-3 rounded-xl"
      >
        Back to Home
      </Link>
    </div>
  );
}
