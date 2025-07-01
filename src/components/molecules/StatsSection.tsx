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

const RemainingStatsItems = ({ items }: RemainingStatsItemProps) => {
  return (
    <div className="w-full flex text-2xl md:text-4xl">
      {items.map((item, i) => (
        <div
          key={i}
          className={cn(
            "flex flex-col items-start justify-end md:p-4 px-1 py-4 grow w-full not-last:border-r border-black/20"
          )}
          style={{ width: `${item.to}%` }}
        >
          <div>
            {item.prefix && (
              <span className="text-xs uppercase leading-none">
                {item.prefix}
              </span>
            )}

            <div>
              <CountUp from={+item.from} to={+item.to} />
              {item.suffix && <span>{item.suffix}</span>}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const StatsItem = ({ title, subtitle, subItems }: StatsItemProps) => {
  const mainItem = subItems[0];
  const otherItems = subItems.slice(1);

  return (
    <li className="grid md:grid-cols-3 w-full group border-b border-black/20">
      <div className="flex flex-col md:p-4 p-2 md:min-h-52 gap-2 w-full md:border-r border-black/20">
        <h2 className="text-2xl md:text-4xl">{title}</h2>
        <p>{subtitle}</p>
      </div>

      <div className={cn("flex-1 flex flex-col justify-end col-span-2")}>
        {mainItem && (
          <div
            className={cn(
              "md:px-4 px-2 text-6xl md:text-8xl pt-24 py-6 flex flex-col items-baseline gap-2 w-full grow border-b border-black/20"
            )}
          >
            {mainItem.prefix && (
              <span className="text-base">{mainItem.prefix}</span>
            )}

            <div className="w-full">
              <CountUp from={+mainItem.from} to={+mainItem.to} />
              {mainItem.suffix && <span>{mainItem.suffix}</span>}
            </div>
          </div>
        )}

        {otherItems.length > 0 && <RemainingStatsItems items={otherItems} />}
      </div>
    </li>
  );
};

const StatsSection = () => {
  return (
    <section id="kpis" className="w-full flex flex-col py-24">
      <h2 className="whitespace-nowrap md:p-4 p-2 uppercase text-base text-red">
        Key Performance Indicators
      </h2>

      <ul className="w-full flex flex-col border-black/20 border-t">
        {statsItems.map((item, i) => (
          <StatsItem {...item} key={i} />
        ))}
      </ul>
    </section>
  );
};

export default StatsSection;
