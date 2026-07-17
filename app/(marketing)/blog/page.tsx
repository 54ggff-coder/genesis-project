import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">Blog</h1>
      <p className="text-gray-600 mb-10">
        Posts will appear here.
      </p>

      <div className="space-y-4">
        <Link
          href="#"
          className="block p-5 rounded-lg border hover:bg-gray-50 transition"
        >
          <h2 className="text-xl font-semibold">Sample Post</h2>
          <p className="text-gray-600 mt-1">Replace this with real posts.</p>
        </Link>
      </div>
    </div>
  );
}