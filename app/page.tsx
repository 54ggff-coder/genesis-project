import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">

      <section className="max-w-6xl mx-auto px-6 py-20">

        <h1 className="text-6xl font-bold">
          Project Genesis
        </h1>

        <p className="text-xl mt-6 text-gray-600 max-w-2xl">
          Discover your hidden abilities and build your future through
          intelligent assessments.
        </p>

        <div className="mt-10 flex gap-4">

          <Link
            href="/assessment"
            className="bg-black text-white px-6 py-3 rounded-xl"
          >
            Start Free Assessment
          </Link>

          <Link
            href="/login"
            className="border px-6 py-3 rounded-xl"
          >
            Login
          </Link>

        </div>

      </section>

    </main>
  );
}