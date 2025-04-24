import Certification from "./apps/Certification";
import ContactForm from "./apps/ContactForm";

import Courses from "./apps/Courses";
import { Footer } from "./apps/Footer";

import Header from "./apps/Header";
import Hero from "./apps/Hero";
import { HeroHighlightDemo } from "./apps/HeroHighLight";
import Testimonials from "./apps/Testimonials";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <HeroHighlightDemo />
        <Courses />
        <Certification />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
