import { Ship, Fish } from "lucide-react";

interface StatsOverviewProps {
  stats?: { totalPorts: number; totalSpecies: number };
  isLoading: boolean;
}

export default function StatsOverview({
  stats,
  isLoading,
}: StatsOverviewProps) {
  if (isLoading) {
    return (
      <div
        className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6"
        data-testid="stats-loading"
      >
        {[1, 2].map((i) => (
          <div
            key={i}
            className="bg-card rounded-lg p-4 border border-border animate-pulse"
          >
            <div className="h-16 bg-muted rounded"></div>
          </div>
        ))}
      </div>
    );
  }

  if (!stats) {
    return (
      <div
        className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6"
        data-testid="stats-error"
      >
        <div className="bg-card rounded-lg p-4 border border-border col-span-4">
          <div className="text-center text-muted-foreground">
            Failed to load statistics
          </div>
        </div>
      </div>
    );
  }

  const statItems = [
    {
      label: "Total Ports",
      value: stats.totalPorts.toString(),
      icon: Ship,
      color: "text-balck",
      testId: "stat-total-ports",
    },
    {
      label: "Fish Species",
      value: stats.totalSpecies.toString(),
      icon: Fish,
      color: "text-balck",
      testId: "stat-total-species",
    },
  ];

  return (
    <div
      className="grid grid-cols-2 font-open-sans md:grid-cols-4 gap-6 mb-16"
      data-testid="stats-overview"
    >
      {statItems.map((item) => (
        <div
          key={item.testId}
          className="bg-card p-2 md:p-4 border border-border"
          data-testid={item.testId}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-800">
                {item.label}
              </p>
              <p
                className={`md:text-2xl font-bold text-[#34699a] ${item.color}`}
                data-testid={`${item.testId}-value`}
              >
                {item.value}
              </p>
            </div>
            <item.icon className={`text-[#34699a] text-xl`} />
          </div>
        </div>
      ))}
    </div>
  );
}
