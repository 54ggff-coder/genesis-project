type Props = {
  title: string;
  value: string | number;
};

export default function StatsCard({
  title,
  value,
}: Props) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">

      <h3 className="text-gray-500 text-sm">

        {title}

      </h3>

      <p className="text-3xl font-bold mt-3">

        {value}

      </p>

    </div>
  );
}