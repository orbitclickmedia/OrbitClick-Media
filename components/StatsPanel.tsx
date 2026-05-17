type StatItem = {
  value: string;
  label: string;
};

type StatsPanelProps = {
  stats: StatItem[];
  disclaimer?: boolean;
};

export function StatsPanel({ stats, disclaimer = true }: StatsPanelProps) {
  return (
    <div className="stats-panel">
      <div className="hero-stats">
        {stats.map((stat) => (
          <div key={stat.label}>
            <dt className="stat-val">{stat.value}</dt>
            <dd className="stat-label">{stat.label}</dd>
          </div>
        ))}
      </div>
      {disclaimer ? (
        <p className="stats-disclaimer">*Based on aggregated client campaign data, 2024–2026. Results vary.</p>
      ) : null}
    </div>
  );
}
