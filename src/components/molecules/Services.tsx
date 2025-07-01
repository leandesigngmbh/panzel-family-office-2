import Text from "@/components/atoms/Text";

const Services = () => {
  return (
    <section className="py-24 md:px-4 px-2">
      <div className="flex justify-start flex-col">
        <h2 className="whitespace-nowrap uppercase text-base text-red">
          Services
        </h2>

        <Text
          text="Asset Management,
Wealth Management,
Startup Platform for NextGen,
Hiring and Staffing Services,
Relocation Services,
Family Office Services,
Boarding Services."
        />
      </div>
    </section>
  );
};

export default Services;
