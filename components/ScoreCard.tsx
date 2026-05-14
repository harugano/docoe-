interface ScoreCardProps {
  label: string;
  score: number;
  color?: string;
  icon?: string;
}

export default function ScoreCard({
  label,
  score,
  color = "#2d6a4f",
  icon,
}: ScoreCardProps) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#ede8dc] flex flex-col gap-1">
      <div className="flex items-center gap-1.5 text-xs text-[#4a5e4a]">
        {icon && <span className="text-base">{icon}</span>}
        {label}
      </div>
      <div className="text-2xl font-bold" style={{ color }}>
        {score}
        <span className="text-xs font-normal text-[#8aaa8a] ml-1">pt</span>
      </div>
    </div>
  );
}
