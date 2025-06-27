import { cn } from "@/lib/utils";
import Image from "next/image";

type TeamMemberProps = {
  name: string;
  position: string;
  img: string;
  about?: string;
};

const teamMembers = [
  {
    name: "Sven Panzel",
    position: "Head of Family Office",
    img: "/assets/team/sven-panzel-portrait-business.jpg",
    about:
      "Sven is the Head and CEO, having previously served as Board Member with top tier Private Banks and IAM (Independent Asset Managers) in Switzerland and Luxembourg to select the right partners and best matching services for his family enterprises from the Shipping and Medical Packaging industry. Sven has more than 30 years of investment banking experience gained in Europe, United States and Japan – primarily with the Treasury and Risk market analyses as Avaloq, Goldman Sachs and SunGard. He is a MBA graduate of ISG and INSEAD. Prior to his professional life Sven was member and coach of the German and Swedish National Rowing Team, double World Champion and participated 1984 at the Olympics in Los Angeles.",
  },
  {
    name: "Nadine Panzel",
    position: "Chief of Finances",
    img: "/assets/team/Nadine-portrait-min.jpg",
    about:
      "Nadine is CIO (Chief Investment Officer) of Panzel Family Office pro-bono and Board Member since 2008. During the pandemic crises (2019-2021) she doubled AUM of PFO. She is Senior Manager in Corporate Finance in Stuttgart. Prior she worked 25 years with Mercedes Benz Group with the transformation of Daimler AG’s Spin-Off of the Daimler Truck unit. Nadine graduated with a Diploma of the Baden-Württemberg Cooperative State University (DHBW) in Stuttgart. She is engaged within a professional chorus in Gotha and supports young women from East Germany and Ukraine to become leaders in family owned businesses.",
  },
  {
    name: "Dr. Annette Ryčl",
    position: "Headhunting",
    img: "/assets/team/Nadine-portrait-min.jpg",
    about:
      "Annette is Chairwoman of Board of Panzel Family Office since 1990. She has been working more than 30 years as a retained Headhunter in Geneva and Zurich for legal Board Advisory and Placements and Recruitments for top tier leadership positions but for women only. She worked in Germany, Norway, Sweden and Switzerland mainly for IR Automotive, Telco and later Private Investment Banking and Wealth Mgt, recruiting investment talent for midsize ($10-500m) Single Family Offices. She studied at University Paris Sorbonne 1 (Panthéon) Philosophy, Political and Social Science and Human Resources. She still advised family dynasties in Canada, Germany, Norway, Sweden and Switzerland and holds lecturers and speeches at WEF, London School of Economics and INSEAD.",
  },
];

const TeamItem: React.FC<TeamMemberProps> = ({
  name,
  position,
  img,
  about,
}) => {
  return (
    <li className="flex flex-col gap-6 w-full items-start">
      <div className="aspect-[4/5] w-52 shrink-0 bg-red overflow-clip relative">
        <Image src={img} fill alt="" className="w-full h-full object-cover" />
      </div>

      <div className="flex max-w-lg flex-col gap-3 col-span-2">
        <div>
          <h3 className="text-4xl">{name}</h3>
          <span className="text-base text-red">[ {position} ]</span>
        </div>

        <p>{about}</p>
      </div>
    </li>
  );
};

const Team = () => {
  return (
    <div className="flex py-24 px-4 w-full">
      <div className="basis-1/3">
        <h2 className="whitespace-nowrap uppercase text-base text-red">Team</h2>
      </div>

      <div className="basis-2/3 grid grid-cols-2 gap-24">
        {teamMembers.map((props, i) => {
          return <TeamItem key={i} {...props} />;
        })}
      </div>
    </div>
  );
};

export default Team;
