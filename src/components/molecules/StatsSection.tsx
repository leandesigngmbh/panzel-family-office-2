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
};

type RemainingStatsItemProps = {
  items: SubItem[];
};

const statsItems: StatsItemProps[] = [
  {
    title: "Pitch Decks Received",
    subtitle: "The breakdown of pitch decks that we've received",

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

    subItems: [
      { from: 0, to: 23 },
      { from: 0, to: 13, prefix: "All Women", suffix: "%" },
      { from: 0, to: 39, prefix: "All Men", suffix: "%" },
      { from: 0, to: 48, prefix: "Mixed", suffix: "%" },
    ],
  },
];

const HATCH_PATTERN_MAP: Record<string, string[]> = {
  default: ["bg-hatch-diagonal", "bg-hatch-cross", "bg-hatch-dots"],
};

const getHatchPatterns = (pattern: string) =>
  HATCH_PATTERN_MAP[pattern] || HATCH_PATTERN_MAP["default"];

const RemainingStatsItems = ({ items }: RemainingStatsItemProps) => {
  const hatchList = getHatchPatterns("default");
  const subItemPatterns = items.map((_, i) => hatchList[i % hatchList.length]);

  return (
    <div className="w-full flex text-4xl">
      {items.map((item, i) => (
        <div
          key={i}
          className={cn(
            "flex flex-col items-start justify-end p-3 min-h-24",
            subItemPatterns[i]
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

const StatsItem = ({ title, subtitle, pattern, subItems }: StatsItemProps) => {
  const mainItem = subItems[0];
  const otherItems = subItems.slice(1);
  const mainPattern = getHatchPatterns(pattern)[0];

  return (
    <li className="flex w-full group hover:bg-gray-200 transition-colors duration-300">
      <div className="flex flex-col p-4 min-h-52 gap-2 max-w-md w-full">
        <h2 className="text-4xl">{title}</h2>
        <p>{subtitle}</p>
      </div>

      <div className={cn("flex-1 flex flex-col justify-end")}>
        {/* MAIN ITEM */}
        {mainItem && (
          <div
            className={cn(
              "px-3 text-8xl pt-24 py-6 flex flex-col items-baseline gap-2",
              mainPattern
            )}
          >
            {mainItem.prefix && (
              <span className="text-base">{mainItem.prefix}</span>
            )}
            <div>
              <CountUp from={+mainItem.from} to={+mainItem.to} />
              {mainItem.suffix && <span>{mainItem.suffix}</span>}
            </div>
          </div>
        )}

        {/* REMAINING ITEMS */}
        {otherItems.length > 0 && (
          <RemainingStatsItems items={otherItems} pattern={pattern} />
        )}
      </div>
    </li>
  );
};

const StatsSection = () => {
  return (
    <ul id="kpis" className="w-full flex flex-col">
      <h2 className="whitespace-nowrap p-4 uppercase text-base text-red">
        Key Performance Indicators
      </h2>

      <div className="w-full">
        {statsItems.map((item, i) => (
          <StatsItem {...item} key={i} />
        ))}
      </div>
    </ul>
  );
};

export default StatsSection;
