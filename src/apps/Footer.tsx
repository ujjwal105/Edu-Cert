import { SparklesCore } from "@/components/ui/sparkles";

export function Footer() {
  return (
    <div
      id="contact"
      className="h-[23rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden  relative text-white"
    >
      <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center relative z-20">
        EduCert
      </h1>
      <div className="w-[40rem] h-40 relative z-10">
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
      <div className="z-20 text-sm text-center bottom-0">
        <p>&copy; {new Date().getFullYear()} EduCert. All rights reserved.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-neutral-400">
          <a href="#courses" className="hover:text-white transition">
            Courses
          </a>
          <a href="#certification" className="hover:text-white transition">
            Certifications
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
          <a
            href="mailto:info@educert.com"
            className="hover:text-white transition"
          >
            info@educert.com
          </a>
        </div>
      </div>
    </div>
  );
}
