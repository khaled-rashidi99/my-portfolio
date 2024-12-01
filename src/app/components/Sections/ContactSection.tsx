import { ContactForm } from "../Contact/ContactForm";
import Image from "next/image";
export default function ContactSection() {
  return (
    <>
      <section className="my-20 flex flex-col items-center justify-center gap-10 px-4">
        <h1 className="bg-gradient-to-br from-purple-500 to-blue-500 bg-clip-text text-center text-5xl font-bold text-transparent hover:scale-105 hover:cursor-default">
          Get in Touch
        </h1>
        <p className="mx-auto text-center text-lg text-slate-300">
          I&apos;m currently looking for new opportunites, feel free to reach
          out to me anytime so we can make something great! <br /> I am always
          happy to hear from you, and I&apos;ll do my best to get back to you as
          soon as possible.
        </p>
        <div className="container grid grid-cols-1 items-center justify-center gap-10 px-4 md:grid-cols-2">
          <Image
            src="/images/contactHero.webp"
            alt="Contact"
            className="place-self-center"
            width={500}
            height={400}
          />
          <ContactForm />
        </div>
      </section>
    </>
  );
}
