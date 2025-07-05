import React, { useState, useMemo } from 'react';
import { Activity, TrendingUp, BarChart3, Layers, CheckCircle2 } from 'lucide-react';

export interface Widget9Props {
  title?: string;
  metricValue?: string | number;
  changeRate?: string;
  isPositive?: boolean;
  dataPoints?: number[];
}

export const WidgetComponent9: React.FC<Widget9Props> = ({
  title = 'Analytics Widget #9',
  metricValue = '$' + (12400 + 8 * 850).toLocaleString(),
  changeRate = '+12.4%',
  isPositive = true,
  dataPoints = [26, 49, 26, 56, 63]
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const normalizedPoints = useMemo(() => {
    const max = Math.max(...dataPoints, 1);
    return dataPoints.map(p => (p / max) * 100);
  }, [dataPoints]);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          {title}
        </span>
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400">
          <BarChart3 className="h-4 w-4" />
        </div>
      </div>
      <div className="mt-4 flex items-baseline justify-between">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{metricValue}</h3>
        <span className={`text-xs font-bold ${isPositive ? 'text-emerald-600' : 'text-rose-600'}`}>
          {changeRate}
        </span>
      </div>
      <div className="mt-4 flex items-end gap-1.5 h-12">
        {normalizedPoints.map((h, idx) => (
          <div
            key={idx}
            style={{ height: `${h}%` }}
            className="flex-1 rounded-sm bg-indigo-500/80 transition-all hover:bg-indigo-600 dark:bg-indigo-600"
          />
        ))}
      </div>
    </div>
  );
};
