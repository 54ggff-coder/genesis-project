import StatsCard from "./StatsCard";

export default function Overview() {
  return (

    <div className="grid md:grid-cols-3 gap-6">

      <StatsCard
        title="Completed Tests"
        value="0"
      />

      <StatsCard
        title="Skills Found"
        value="0"
      />

      <StatsCard
        title="Progress"
        value="0%"
      />

    </div>

  );
}