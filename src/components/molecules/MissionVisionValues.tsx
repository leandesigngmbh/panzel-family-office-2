type Values = { title: string; p: string };

const MissionVisionValues = () => {
  const values = [
    {
      title: "Kindness, Respect & Integrity",
      p: "Treat others the way we want to be treated, internally and externally.",
    },
    {
      title: "Driven by Excellence",
      p: "Seek to operate with the highest standards and deliver differentiated results.",
    },
    { title: "Team First", p: "Collaborative approach — together we can win." },
    { title: "Kindness, Respect & Integrity" },
    { title: "Kindness, Respect & Integrity" },
  ];

  return (
    <section className="py-24 md:px-4 px-2 bg-black text-white">
      <div className="grid grid-cols-2 max-w-7xl mx-auto border border-current rounded-2xl">
        <div className="p-24 flex flex-col gap-2 border-e border-current">
          <h2 className="text-4xl">Mission</h2>
          <p>
            Our mission is to deliver differentiated results to our investors by
            leveraging our complementary experience to support great brands that
            meet the needs of the modern consumer.
          </p>
        </div>

        <div className="p-24 flex flex-col gap-2">
          <h2 className="text-4xl">Vision</h2>
          <p>
            Partnering with high-quality, growing companies focused on consumer
            products and services, including beauty & personal care; health &
            wellness; food & beverage; branded apparel, accessories & footwear;
            hospitality and luxury, among others.
          </p>
        </div>

        <div className="col-span-full p-24 flex flex-col gap-8 border-t border-current">
          <h2 className="text-4xl">Values</h2>
          <div className="grid grid-cols-3 gap-12">
            {values.map(({ title, p }, i) => {
              return (
                <li key={i} className="flex flex-col gap-2 w-full">
                  <h3 className="text-2xl">{title}</h3>
                  <p>{p}</p>
                </li>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionValues;
