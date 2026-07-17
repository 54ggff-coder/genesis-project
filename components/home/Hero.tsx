import Link from "next/link";

export default function Hero() {
  return (

    <section className="py-24">

      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-6xl font-bold">

          Discover Your Hidden Potential

        </h1>

        <p className="mt-6 text-xl text-gray-600 max-w-2xl">

          Learn your strengths, personality,
          future career paths and hidden skills.

        </p>

        <div className="mt-10 flex gap-4">

          <Link
            href="/assessment"
            className="bg-black text-white px-6 py-3 rounded-xl"
          >
            Start Free
          </Link>

          <Link
            href="/register"
            className="border px-6 py-3 rounded-xl"
          >
            Create Account
          </Link>

        </div>

      </div>

    </section>

  );
}