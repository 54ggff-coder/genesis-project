type Props = {
  xp: number;
};

export default function XPCard({
  xp,
}: Props) {

  return (

    <div className="rounded-2xl border p-6">

      <h2 className="text-xl font-semibold">

        Experience

      </h2>

      <p className="text-4xl font-bold mt-4">

        {xp} XP

      </p>

    </div>

  );

}