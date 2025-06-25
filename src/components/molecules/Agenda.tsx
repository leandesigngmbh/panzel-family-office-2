import { Button } from "@/components/ui/button";

const Agenda = () => {
  return (
    <div className="grid grid-cols-3 gap-px w-full">
      {/* Grid 1 Item Start */}
      <h2 className="text-sm whitespace-nowrap bg-gray-100 px-8 py-12">
        ● Build What’s Next.
      </h2>
      {/* Grid 1 Item End */}

      {/* Grid Item 2 Start */}
      <div className="min-h-[50vh] col-span-2 flex flex-col gap-16 px-4 py-12 bg-gray-100">
        <h3 className="max-w-prose text-8xl tracking-tight">
          Unified roots.
          <br />
          Evolving paths.
        </h3>

        <p className="max-w-sm">
          Tired of the "take over the family business" talk? You’ve got your own
          ideas — and we’re here to help you build them. Panzel Family Office
          backs next-gen founders from entrepreneurial families who want to go
          their own way — without tearing the legacy apart.
        </p>
      </div>
      {/* Grid 2 Item End */}

      {/* Grid Item 3 Start */}
      <div className="row-span-2 bg-gray-100"></div>
      {/* Grid Item 3 End */}

      {/* Grid Item 4 Start */}
      <div className="w-full flex flex-col gap-8 justify-between bg-gray-100 px-4 py-12">
        <div className="w-full">
          <h4 className="max-w-sm pr-4 text-2xl text-gray-400 text-pretty">
            <span className="text-black">
              For Founders from Family Businesses 
            </span>
            You don’t have to choose between independence and responsibility. We
            make space for both.
          </h4>
        </div>

        <div className="w-full flex flex-col gap-1.5 p-4 bg-gray-50 outline-gray-200 rounded-xl">
          <h4 className="font-semibold">What You Get</h4>
          <ul className="list-disc pl-4">
            <li className="">Seed Capital to launch your own venture</li>
            <li className="">Freedom to Lead with full control from day one</li>
            <li className="">
              A Smart Exit from the family business — without drama
            </li>
          </ul>
        </div>
      </div>
      {/* Grid Item 4 End */}

      {/* Grid Item 5 Start */}
      <div className="w-full flex flex-col gap-8 justify-between bg-gray-100 px-4 py-12">
        <div className="w-full">
          <h4 className="max-w-sm pr-4 text-2xl text-gray-400 text-pretty">
            <span className="text-black">For Family Business Owners </span>
            Support the next generation’s ambition — without losing what you’ve
            built.
          </h4>
        </div>

        <div className="w-full flex flex-col gap-1.5 p-4 bg-gray-50 outline-gray-200 rounded-xl">
          <h4 className="font-semibold">What We Protect</h4>
          <ul className="list-disc pl-4">
            <li className="">Legacy & Ownership stay untouched</li>
            <li className="">No Forced Sales or rushed transitions</li>
            <li className="">
              Clear Structures that avoid conflict down the line
            </li>
          </ul>
        </div>
      </div>
      {/* Grid Item 5 End */}

      {/* Grid Item 6 Start */}
      <div className="w-full col-span-2 flex flex-col items-start bg-gray-100 px-4 py-12 justify-between gap-9">
        {/* <h3 className="max-w-prose text-5xl tracking-tight">
          One Family. <br />
          Two Paths. <br />
          One Strategy.
        </h3> */}

        <p className="max-w-3xl text-2xl">
          We align founders and families — so both can grow without stepping on
          each other’s toes. It’s not either/or. It’s and. Ready to Launch? Your
          startup. Their legacy. Let’s make both thrive.
        </p>

        <Button size="lg">Let's Talk</Button>
      </div>
      {/* Grid Item 6 Start */}
    </div>
  );
};

export default Agenda;
