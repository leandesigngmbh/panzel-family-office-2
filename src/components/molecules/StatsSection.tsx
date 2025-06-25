"use client";

import CountUp from "@/components/atoms/CountUp";
import { cn } from "@/lib/utils";

type SubItem = {
  from: number | string;
  to: number | string;
  prefix?: string;
  suffix?: string;
};

type StatsItemProps = {
  title: string;
  subtitle: string;
  color: string;
  textColor?: "white" | undefined;
  subItems: SubItem[];
};

type RemainingStatsItemProps = {
  color: string;
  items: SubItem[];
};

const statsItems: StatsItemProps[] = [
  {
    title: "Pitch Decks Received",
    subtitle: "The breakdown of pitch decks that we've received",
    color: "blue",
    textColor: "white",
    subItems: [
      { from: 0, to: 222 },
      { from: 0, to: 30, prefix: "All Women", suffix: "%" },
      { from: 0, to: 51, prefix: "All Men", suffix: "%" },
      { from: 0, to: 19, prefix: "Mixed", suffix: "%" },
    ],
  },
  {
    title: "Meetings Held",
    subtitle:
      "Of pitch decks reviewed, this is a breakdown of those that progressed to meetings with us",
    color: "cyan",
    subItems: [
      { from: 0, to: 87 },
      { from: 0, to: 32, prefix: "All Women", suffix: "%" },
      { from: 0, to: 52, prefix: "All Men", suffix: "%" },
      { from: 0, to: 16, prefix: "Mixed", suffix: "%" },
    ],
  },
  {
    title: "All Venture",
    subtitle:
      "We've been tracking equity of our dealflow since February 2024, all other data is all-time, since venture inception. This is a breakdown of our investments across all venture by count.",
    color: "violet",
    subItems: [
      { from: 0, to: 90 },
      { from: 0, to: 13, prefix: "All Women", suffix: "%" },
      { from: 0, to: 62, prefix: "All Men", suffix: "%" },
      { from: 0, to: 25, prefix: "Mixed", suffix: "%" },
    ],
  },
  {
    title: "Startup Investments",
    subtitle: "This is a breakdown of our startups by amount invested.",
    color: "orange",
    subItems: [
      { from: 0, to: 67 },
      { from: 0, to: 15, prefix: "All Women", suffix: "%" },
      { from: 0, to: 70, prefix: "All Men", suffix: "%" },
      { from: 0, to: 15, prefix: "Mixed", suffix: "%" },
    ],
  },
  {
    title: "Fund Investments",
    subtitle: "This is a breakdown of funds by amount invested.",
    color: "yellow",
    subItems: [
      { from: 0, to: 23 },
      { from: 0, to: 13, prefix: "All Women", suffix: "%" },
      { from: 0, to: 39, prefix: "All Men", suffix: "%" },
      { from: 0, to: 48, prefix: "Mixed", suffix: "%" },
    ],
  },
];

const COLOR_SHADE_MAP: Record<string, string[]> = {
  cyan: [
    "bg-green-200",
    "bg-green-300",
    "bg-green-400",
    "bg-green-500",
    "bg-green-600",
    "bg-green-700",
  ],
  blue: [
    "bg-blue-200",
    "bg-blue-300",
    "bg-blue-400",
    "bg-blue-500",
    "bg-blue-600",
    "bg-blue-700",
  ],
  violet: [
    "bg-violet-200",
    "bg-violet-300",
    "bg-violet-400",
    "bg-violet-500",
    "bg-violet-600",
    "bg-violet-700",
  ],
  orange: [
    "bg-orange-200",
    "bg-orange-300",
    "bg-orange-400",
    "bg-orange-500",
    "bg-orange-600",
    "bg-orange-700",
  ],
  yellow: [
    "bg-yellow-100",
    "bg-yellow-200",
    "bg-yellow-300",
    "bg-yellow-400",
    "bg-yellow-500",
    "bg-yellow-600",
  ],
};

const getTailwindShades = (color: string) => COLOR_SHADE_MAP[color] || [];

const RemainingStatsItems = ({ items, color }: RemainingStatsItemProps) => {
  const fullShades = getTailwindShades(color);
  const subItemShades = items.map(
    (_, i) => fullShades[i % fullShades.length] ?? "bg-gray-100"
  );

  return (
    <div className="w-full flex text-4xl">
      {items.map((item, i) => (
        <div
          key={i}
          className={cn(
            "flex flex-col items-start justify-end p-3 min-h-24",
            subItemShades[i]
          )}
          style={{ width: `${item.to}%` }}
        >
          {item.prefix && <span className="text-base">{item.prefix}</span>}

          <div>
            <CountUp from={+item.from} to={+item.to} />
            {item.suffix && <span>{item.suffix}</span>}
          </div>
        </div>
      ))}
    </div>
  );
};

const StatsItem = ({ title, subtitle, color, subItems }: StatsItemProps) => {
  const fullShades = getTailwindShades(color);
  const wrapperShade = fullShades[3] ?? "bg-gray-300";

  const mainItem = subItems[0];
  const otherItems = subItems.slice(1);

  return (
    <li className="flex w-full bg-gray-100 group hover:bg-gray-200 transition-colors duration-300">
      <div className="flex flex-col px-8 py-8 min-h-52 gap-3 max-w-md w-full">
        <h2 className="text-4xl">{title}</h2>
        <p>{subtitle}</p>
      </div>

      <div className={cn("flex-1 flex flex-col justify-end", wrapperShade)}>
        {/* MAIN ITEM — FIRST SUBITEM */}
        {mainItem && (
          <div className="px-3 text-8xl pt-24 py-6 flex flex-col items-baseline gap-2">
            {mainItem.prefix && (
              <span className="text-base">{mainItem.prefix}</span>
            )}
            <div>
              <CountUp from={+mainItem.from} to={+mainItem.to} />
              {mainItem.suffix && <span>{mainItem.suffix}</span>}
            </div>
          </div>
        )}

        {/* REMAINING SUBITEMS */}
        {otherItems.length > 0 && (
          <RemainingStatsItems items={otherItems} color={color} />
        )}
      </div>
    </li>
  );
};

const StatsSection = () => {
  return (
    <ul id="kpis" className="w-full flex flex-col bg-gray-100">
      {statsItems.map((item, i) => (
        <StatsItem {...item} key={i} />
      ))}
    </ul>
  );
};

export default StatsSection;
