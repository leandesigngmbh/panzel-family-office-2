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
  textColor?: "white" | undefined;
  subItems: SubItem[];
  color: string;
};

type RemainingStatsItemProps = {
  items: SubItem[];
  color: string;
};

const statsItems: StatsItemProps[] = [
  {
    title: "Pitch Decks Received",
    subtitle: "The breakdown of pitch decks that we've received",
    color: "indigo",
    textColor: "white",
    subItems: [
      { from: 0, to: 222 },
      { from: 0, to: 30, prefix: "All Women", suffix: "%" },
      { from: 0, to: 51, prefix: "All Men", suffix: "%" },
      { from: 0, to: 19, prefix: "Mixed", suffix: "%" },
    ],
  },

  {
    title: "All Venture",
    subtitle:
      "We've been tracking equity of our dealflow since February 2024, all other data is all-time, since venture inception. This is a breakdown of our investments across all venture by count.",
    color: "gray",
    subItems: [
      { from: 0, to: 90 },
      { from: 0, to: 13, prefix: "All Women", suffix: "%" },
      { from: 0, to: 62, prefix: "All Men", suffix: "%" },
      { from: 0, to: 25, prefix: "Mixed", suffix: "%" },
    ],
  },

  {
    title: "Fund Investments",
    subtitle: "This is a breakdown of funds by amount invested.",
    color: "rose",

    subItems: [
      { from: 0, to: 23 },
      { from: 0, to: 13, prefix: "All Women", suffix: "%" },
      { from: 0, to: 39, prefix: "All Men", suffix: "%" },
      { from: 0, to: 48, prefix: "Mixed", suffix: "%" },
    ],
  },

  {
    title: "Meetings Held",
    subtitle:
      "Of pitch decks reviewed, this is a breakdown of those that progressed to meetings with us",
    color: "emerald",
    subItems: [
      { from: 0, to: 87 },
      { from: 0, to: 32, prefix: "All Women", suffix: "%" },
      { from: 0, to: 52, prefix: "All Men", suffix: "%" },
      { from: 0, to: 16, prefix: "Mixed", suffix: "%" },
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
];

const TextColorMap: Record<string, string> = {
  emerald: "text-emerald-500",
  indigo: "text-indigo-500",
  violet: "text-violet-500",
  orange: "text-orange-500",
  rose: "text-rose-500",
  gray: "text-gray-500",
};

const ColorShadeMap: Record<string, string[]> = {
  emerald: [
    "bg-emerald-200",
    "bg-emerald-300",
    "bg-emerald-400",
    "bg-emerald-500",
    "bg-emerald-600",
    "bg-emerald-700",
  ],
  indigo: [
    "bg-indigo-200",
    "bg-indigo-300",
    "bg-indigo-400",
    "bg-indigo-500",
    "bg-indigo-600",
    "bg-indigo-700",
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
  rose: [
    "bg-rose-200",
    "bg-rose-300",
    "bg-rose-400",
    "bg-rose-500",
    "bg-rose-600",
    "bg-rose-700",
  ],
  gray: [
    "bg-gray-600",
    "bg-gray-500",
    "bg-gray-400",
    "bg-gray-300",
    "bg-gray-200",
    "bg-gray-100",
  ],
};

const getTailwindShades = (color: string) => ColorShadeMap[color] || [];

const RemainingStatsItems = ({ items, color }: RemainingStatsItemProps) => {
  const fullShades = getTailwindShades(color);
  const subItemShades = items.map(
    (_, i) => fullShades[i % fullShades.length] ?? "bg-gray-100"
  );

  return (
    <div className="w-full flex">
      {items.map((item, i) => (
        <div
          key={i}
          className={cn(
            "flex flex-col items-start justify-end overflow-hidden grow w-full"
          )}
          style={{ width: `${item.to}%` }}
        >
          <div className="md:px-4 px-1 py-2">
            {item.prefix && <p className="text-xs uppercase">{item.prefix}</p>}
          </div>

          <div
            className={cn(
              subItemShades[i],
              "w-full p-2 pt-3 md:p-4 md:pt-5 text-xs md:text-2xl xl:text-4xl leading-none text-gray-100"
            )}
          >
            <CountUp from={+item.from} to={+item.to} />
            {item.suffix && <span> {item.suffix}</span>}
          </div>
        </div>
      ))}
    </div>
  );
};

const StatsItem = ({ title, subtitle, subItems, color }: StatsItemProps) => {
  const fullShades = getTailwindShades("gray");
  const wrapperShade = fullShades[3] ?? "bg-gray-300";

  const mainItem = subItems[0];
  const otherItems = subItems.slice(1);

  const textColorClass = TextColorMap["gray"] ?? "text-black";

  return (
    <li className="grid md:grid-cols-3 w-full group">
      <div className="flex flex-col md:p-4 p-2 pb-8 md:pb-4 gap-2 w-full order-last md:order-none">
        <h2 className={cn("text-2xl md:text-4xl", textColorClass)}>{title}</h2>

        <p>{subtitle}</p>
      </div>

      <div
        className={cn(
          "flex-1 flex flex-col justify-end col-span-2",
          wrapperShade
        )}
      >
        {mainItem && (
          <div className="md:px-4 px-2 text-6xl md:text-8xl pb-24 py-6 flex flex-col items-baseline gap-2 w-full grow">
            {mainItem.prefix && (
              <span className="text-base">{mainItem.prefix}</span>
            )}

            <div className="w-full">
              <CountUp from={+mainItem.from} to={+mainItem.to} />
              {mainItem.suffix && <span>{mainItem.suffix}</span>}
            </div>
          </div>
        )}

        {otherItems.length > 0 && (
          <RemainingStatsItems items={otherItems} color={"gray"} />
        )}
      </div>
    </li>
  );
};

const StatsSection = () => {
  return (
    <section id="kpis" className="w-full flex flex-col pt-24">
      <h2 className="whitespace-nowrap md:p-4 p-2 uppercase text-base text-gray-400">
        Key Performance Indicators
      </h2>

      <ul className="w-full flex flex-col bg-neutral-100">
        {statsItems.map((item, i) => (
          <StatsItem {...item} key={i} />
        ))}
      </ul>
    </section>
  );
};

export default StatsSection;
