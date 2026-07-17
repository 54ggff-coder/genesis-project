type Props = {
  level: number;
};

export default function LevelCard({
  level,
}: Props) {

  return (

    <div className="rounded-2xl border p-6">

      <h2 className="text-xl font-semibold">

        Level

      </h2>

      <p className="text-5xl font-bold mt-5">

        {level}

      </p>

    </div>

  );

}