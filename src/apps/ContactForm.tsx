"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";

import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";

function ContactForm() {
  const placeholders = [
    "Get updates at your inbox",
    "Drop your email to join the waitlist",
    "Your best email here",
    "Stay informed – enter your email",
    "Start learning – enter email",
    "We'll notify you – type your email",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="h-[40rem] w-full rounded-md bg-white relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          Join the Course
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Be the first to access our upcoming tech courses—ranging from
          Full-Stack Development and UI/UX Design to Data Science and DevOps.
          Get hands-on experience, mentorship, and certifications that will
          launch your career forward.
        </p>
        {/* <Input
          type="email"
          placeholder="you@example.com"
          className="rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 w-full relative z-10 mt-4 bg-gray-50 placeholder:text-neutral-700"
        /> */}
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
        />
      </div>
      <BackgroundBeams />
    </div>
  );
}

export default ContactForm;
