"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-4xl font-bold">Something went wrong</h1>
      <p className="mt-3 text-gray-600">{error.message}</p>
      <button
        onClick={() => reset()}
        className="mt-6 bg-black text-white px-6 py-3 rounded-xl"
      >
        Try again
      </button>
    </div>
  );
}
