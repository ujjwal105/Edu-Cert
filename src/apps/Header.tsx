import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="text-2xl font-bold text-primary">
          EduCert
        </a>
        <nav className="hidden md:flex space-x-6">
          <a href="#courses" className="text-foreground hover:text-primary">
            Courses
          </a>
          <a
            href="#certification"
            className="text-foreground hover:text-primary"
          >
            Certifications
          </a>
          <a
            href="#testimonials"
            className="text-foreground hover:text-primary"
          >
            Testimonials
          </a>
          <a href="#contact" className="text-foreground hover:text-primary">
            Contact
          </a>
        </nav>
        <Button asChild className="md:ml-4">
          <a href="#contact">Enroll Now</a>
        </Button>
      </div>
    </header>
  );
}
