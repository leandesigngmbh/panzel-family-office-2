const teamMembers = [
  { name: "Johann", position: "CEO", img: "" },
  { name: "Inge", position: "CFO", img: "" },
  { name: "Ole", position: "COO", img: "" },
];

const Team = () => {
  return (
    <div className="flex flex-col bg-white px-8 py-24 gap-12 w-full">
      <h2 className="text-sm whitespace-nowrap">● Team</h2>

      <ul className="grid grid-cols-3 gap-12 w-full bg-white">
        {teamMembers.map(({ name, position }, i) => {
          return (
            <li key={i} className="flex flex-col gap-6">
              <div className="w-full aspect-[4/5] bg-blue-500 overflow-clip relative">
                <div
                  data-speed={0.5}
                  className="absolute inset-0 bg-red-400 scale-110"
                ></div>
              </div>
              <div className="flex flex-col gap-3 text-2xl">
                <div>
                  <h3>{name}</h3>
                  <h3>{position}</h3>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Team;
