import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full px-4 py-24 flex-col grid grid-cols-3"
    >
      <div className="flex flex-col w-full pr-8">
        <h2 className="whitespace-nowrap uppercase text-base text-red">
          Contact
        </h2>
        <p className="text-4xl max-w-xl indent-24">
          If you have questions or would like to learn more about our services
          and how Panzel Family Office can work with you, contact us
          confidentially here.
        </p>
      </div>

      <div className="col-span-2" />
      <div className="col-span-1" />

      <form action="#" className="space-y-8 w-full col-span-2 pt-3">
        <div>
          {/* <label id="email" className="block mb-2">
              Email
            </label> */}
          <input
            type="email"
            id="email"
            className="border-b border-gray-300 focus:ring-0 placeholder-black focus:outline-none focus:border-black block w-full py-2.5"
            placeholder="Email"
            required
          />
        </div>

        <div>
          {/* <label id="subject" className="block mb-2">
              Subject
            </label> */}
          <input
            type="text"
            id="subject"
            className="block py-2.5 w-full border-b border-gray-300 focus:ring-0 placeholder-black focus:outline-none focus:border-black"
            placeholder="Subject"
            required
          />
        </div>

        <div className="sm:col-span-2">
          {/* <label id="message" className="block mb-2">
              Message
            </label> */}
          <textarea
            id="message"
            className="block py-2.5 w-full border-b border-gray-300 focus:ring-0 placeholder-black focus:outline-none focus:border-black"
            placeholder="Message"
          ></textarea>
        </div>

        <Button size="lg" variant="default" type="submit">
          Send message
        </Button>
      </form>
    </section>
  );
};

export default Contact;
