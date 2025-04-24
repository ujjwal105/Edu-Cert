// import { Badge } from "@/components/ui/badge";

// export default function Certification() {
//   return (
//     <section id="certification" className="py-16 bg-muted">
//       <div className="container mx-auto px-4 text-center">
//         <h2 className="text-3xl font-bold text-foreground mb-8">
//           Government-Affiliated Certifications
//         </h2>
//         <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
//           Our certifications are recognized by government bodies, ensuring your
//           credentials are trusted and valued in the industry. Complete our
//           courses to earn verifiable certificates that boost your career.
//         </p>
//         <div className="flex justify-center space-x-4">
//           <Badge variant="secondary" className="text-lg py-2 px-4">
//             Industry-Recognized
//           </Badge>
//           <Badge variant="secondary" className="text-lg py-2 px-4">
//             Government-Affiliated
//           </Badge>
//           <Badge variant="secondary" className="text-lg py-2 px-4">
//             Verifiable Credentials
//           </Badge>
//         </div>
//       </div>
//     </section>
//   );
// }

import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

function Certification() {
  return (
    <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
      <GridItem
        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
        icon={<Box className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Real-World Project Experience"
        description="Work on hands-on projects that simulate industry challenges to build a job-ready portfolio."
      />

      <GridItem
        area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
        icon={<Settings className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Career Mentorship & Guidance"
        description="Get one-on-one guidance from industry experts to shape your career path and crack interviews."
      />

      <GridItem
        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
        icon={<Lock className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Internship & Job Referrals"
        description="Top performers are referred to hiring partners and startup networks for internships and jobs."
      />

      <GridItem
        area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
        icon={<Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Industry-Recognized Certifications"
        description="Earn certificates that validate your skills and boost your resume for tech roles."
      />

      <GridItem
        area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
        icon={<Search className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Community & Networking"
        description="Join a vibrant community of learners, alumni, and mentors to grow together and collaborate."
      />
    </ul>
  );
}
export default Certification;

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                {title}
              </h3>
              <h2 className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
