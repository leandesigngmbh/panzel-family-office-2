import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full flex bg-neutral-100 md:px-4 px-2 py-24 flex-col gap-8"
    >
      <div className="flex w-full lg:flex-row flex-col gap-8 max-w-7xl mx-auto ">
        <div className="flex flex-col w-full pr-8">
          <h2 className="whitespace-nowrap uppercase text-base text-slate-400">
            Contact
          </h2>

          <p className="md:text-4xl text-2xl max-w-xl indent-24">
            If you have questions or would like to learn more about our services
            and how Panzel Family Office can work with you, contact us
            confidentially here.
          </p>
        </div>

        <form action="#" className="space-y-8 col-span-2 pt-3 w-full">
          <div>
            <input
              type="email"
              id="email"
              className="border-b border-neutral-300 focus:ring-0 placeholder-black focus:outline-none focus:border-black block w-full py-2.5"
              placeholder="Email"
              required
            />
          </div>

          <div>
            <input
              type="text"
              id="subject"
              className="block py-2.5 w-full border-b border-neutral-300 focus:ring-0 placeholder-black focus:outline-none focus:border-black"
              placeholder="Subject"
              required
            />
          </div>

          <div className="sm:col-span-2">
            <textarea
              id="message"
              className="block min-h-40 py-2.5 w-full border-b border-neutral-300 focus:ring-0 placeholder-black focus:outline-none focus:border-black"
              placeholder="Message"
            ></textarea>
          </div>

          <Button size="lg" variant="default" type="submit">
            Send message
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
