"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

function Testimonials() {
  return (
    <>
      <div className="text-center px-4 py-10 mt-10">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Hear it from our learners
        </h2>
        <p className="mt-2 text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Real stories from real people—how our courses helped them transform
          their skills, careers, and confidence.
        </p>
      </div>
      <div className="mb-10 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </>
  );
}

export default Testimonials;
const testimonials = [
  {
    quote:
      "This platform changed the way I learn. The instructors are industry experts and the content is practical and easy to follow. I've landed two freelance gigs thanks to what I learned here.",
    name: "Ananya Singh",
    title: "Frontend Developer, Freelancer",
  },
  {
    quote:
      "I went from having zero knowledge of data analysis to getting hired as a junior data analyst. The structured learning paths and real-world projects made all the difference.",
    name: "Raj Mehta",
    title: "Data Analyst, Finverse Solutions",
  },
  {
    quote:
      "As a working professional, time is my biggest constraint. The self-paced format and bite-sized lessons helped me upskill in Python without compromising my schedule.",
    name: "Priya Iyer",
    title: "Business Analyst, Deloitte",
  },
  {
    quote:
      "The UX/UI design course helped me pivot from graphic design to product design. The portfolio projects were incredibly helpful during interviews.",
    name: "Mohit Kumar",
    title: "Product Designer, Startify Labs",
  },
  {
    quote:
      "What stood out to me was the mentorship support. Having weekly calls with a real expert made my learning journey feel guided and personal.",
    name: "Sneha Reddy",
    title: "Software Engineer Intern, Zoho",
  },
  {
    quote:
      "The career path in full-stack development was exactly what I needed. With hands-on projects and resume reviews, I was job-ready in six months.",
    name: "Yash Sharma",
    title: "Full Stack Developer, CodeCraft Inc.",
  },
  {
    quote:
      "I enrolled just to explore machine learning, but now I'm working on my own AI-powered app. The clarity and depth of the teaching here is unmatched.",
    name: "Ishita Dube",
    title: "Independent ML Developer",
  },
  {
    quote:
      "Learning digital marketing here gave me the confidence to start my own agency. I now consult with local businesses and see real impact from my work.",
    name: "Nikhil Arora",
    title: "Founder, BuzzMint Marketing",
  },
  {
    quote:
      "I’m an educator myself, and I’ve recommended this platform to my students. The pedagogy, community, and tools are top-notch.",
    name: "Dr. Kavita Desai",
    title: "Professor, IIT Bombay",
  },
  {
    quote:
      "The practical knowledge and project-based curriculum gave me a head start in my internship. Everything I needed was right here.",
    name: "Aman Verma",
    title: "Intern, TCS",
  },
];
