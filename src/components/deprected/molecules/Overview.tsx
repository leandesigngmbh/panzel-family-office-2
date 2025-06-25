const keywords = [
  "Asset Management",
  "Wealth Management",
  "Startup Platform for NextGen",
  "Hiring and Staffing Services",
  "Relocation Services",
  "Family Office Services",
  "Boarding Services",
];

const Overview = () => {
  return (
    <div id="about-us" className="flex w-full">
      <div
        data-speed="0.9"
        className="bg-black text-white min-h-[140vh] w-full p-4 flex basis-1/2 flex-col items-end text-right justify-between"
      >
        <div className="flex w-full justify-between">
          <h2 className="text-sm whitespace-nowrap pl-4">● About us</h2>

          <p className="text-8xl tracking-tight">
            {/* <span className="text-gray-400">Driven by</span> */}
            {/* <br /> */}
            Built on <br /> legacy.
          </p>
        </div>

        <ul className="flex items-start flex-col w-full gap-12">
          <div className="flex items-start flex-col w-full">
            {keywords.map((item, i) => {
              return (
                <li key={i} className="text-5xl">
                  {item}
                </li>
              );
            })}
          </div>

          <li>100 years of insight. Focused on what’s next.</li>
        </ul>
      </div>

      <div
        data-speed="1.1"
        className="bg-white basis-1/2 text-black min-h-[140vh] w-full"
      >
        <p className="p-4 text-8xl tracking-tight">
          Driven by innovation. <br />  
        </p>

        <div className="flex w-full">
          {/* Left Col Start */}
          <div className="flex flex-col w-full">
            <p className="text-lg p-4 mt-40">
              Since 1918, Panzel Family Office has redefined what it means to
              serve families. Independent, family-led, and built on over a
              century of trust, we go beyond the expected—delivering bold,
              tailored strategies that make a real impact across generations.
            </p>

            <div className="w-full aspect-[4/6] relative flex flex-col">
              <div className="w-full h-1/12 bg-amber-300 text-white flex items-start justify-end text-xs flex-col py-1 px-4">
                8.3 %
              </div>
              <div className="w-full h-1/12 bg-amber-400 text-white flex items-start justify-end text-xs flex-col py-1 px-4">
                8.3 %
              </div>
              <div className="w-full h-2/12 bg-amber-500 text-white flex items-start justify-end text-xs flex-col py-1 px-4">
                16.6 %
              </div>
              <div className="w-full h-3/12 bg-amber-600 text-white flex items-start justify-end text-xs flex-col py-1 px-4">
                25%
              </div>
              <div className="w-full h-5/12 bg-amber-700 text-white flex items-start justify-end text-xs flex-col py-1 px-4">
                41%
              </div>
            </div>

            {/* <Image
              src={"/assets/overview-image2.jpg"}
              width={900}
              height={1622}
              // className="bg-contain"
              alt=""
            /> */}
          </div>
          {/* Left Col End */}

          {/* Right Col Start */}
          <div className="w-full">
            <div className="w-full aspect-[4/6] relative flex flex-col">
              <div className="w-full h-1/12 bg-blue-300 text-white flex items-start justify-end text-xs flex-col py-1 px-4 font-normal">
                8.3 %
              </div>
              <div className="w-full h-1/12 bg-blue-400 text-white flex items-start justify-end text-xs flex-col py-1 px-4 font-normal">
                8.3 %
              </div>
              <div className="w-full h-2/12 bg-blue-500 text-white flex items-start justify-end text-xs flex-col py-1 px-4 font-normal">
                16.6 %
              </div>
              <div className="w-full h-3/12 bg-blue-600 text-white flex items-start justify-end text-xs flex-col py-1 px-4 font-normal">
                25%
              </div>
              <div className="w-full h-5/12 bg-blue-700 text-white flex items-start justify-end text-xs flex-col py-1 px-4 font-normal">
                41%
              </div>
            </div>
          </div>
          {/* <div className="flex flex-col w-full">
            <Image
              src={"/assets/overview-image1.jpg"}
              width={900}
              height={1482}
              // className="bg-contain"
              alt=""
            />
          </div> */}
          {/* Right Col End */}
        </div>
      </div>
    </div>
  );
};

export default Overview;
