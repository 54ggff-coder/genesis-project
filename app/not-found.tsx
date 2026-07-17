// app/not-found.tsx
import Link from "next/link";
export default function NotFound() {
  return (
    <main className="max-w-3xl mx-auto py-32 text-center">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-4 text-gray-600">هذه الصفحة غير موجودة.</p>
      <Link href="/" className="mt-6 inline-block underline">العودة للرئيسية</Link>
    </main>
  );
}
