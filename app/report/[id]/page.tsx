export default function Page({ params }: { params: { id: string } }) {
  return (
    <main className="min-h-screen p-6">
      <h1 className="text-2xl font-bold">Report</h1>
      <p className="text-gray-600 mt-2">
        Report ID: {params.id}
      </p>
    </main>
  );
}