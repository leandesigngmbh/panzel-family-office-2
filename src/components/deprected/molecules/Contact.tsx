import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="bg-white w-full">
      <div className="px-8 py-16 flex w-full">
        <div className="flex flex-col gap-3 w-full">
          <h2 className="text-4xl tracking-tight">Contact</h2>

          <p className="mb-8 lg:mb-16">Get in touch with us</p>
        </div>

        <form action="#" className="space-y-8 w-full">
          <div>
            {/* <label id="email" className="block mb-2 text-sm">
              Email
            </label> */}
            <input
              type="email"
              id="email"
              className="border-b border-gray-300 text-sm focus:ring-0 placeholder-black focus:outline-none focus:border-black block w-full py-2.5"
              placeholder="Email"
              required
            />
          </div>

          <div>
            {/* <label id="subject" className="block mb-2 text-sm">
              Subject
            </label> */}
            <input
              type="text"
              id="subject"
              className="block py-2.5 w-full text-sm border-b border-gray-300 focus:ring-0 placeholder-black focus:outline-none focus:border-black"
              placeholder="Subject"
              required
            />
          </div>

          <div className="sm:col-span-2">
            {/* <label id="message" className="block mb-2 text-sm">
              Message
            </label> */}
            <textarea
              id="message"
              className="block py-2.5 w-full text-sm border-b border-gray-300 focus:ring-0 placeholder-black focus:outline-none focus:border-black"
              placeholder="Message"
            ></textarea>
          </div>

          <Button type="submit">Send message</Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
