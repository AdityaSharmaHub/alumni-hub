import Header from "@/components/header/header";
import Link from "next/link";
import { BriefcaseIcon } from "lucide-react";
import {
  ArrowRight,
  Code,
  Globe,
  Lightbulb,
  Telescope,
  Users,
} from "lucide-react";
import Testimonials from "@/components/testimonials/testimonials";
import NavigationCards from "@/components/navcards/Navcards";

export const apiUrl = process.env.API_URL;

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section id="home" className="grid grid-cols-1 lg:grid-cols-2 mt-24 px-6 py-12 gap-8">
        <div className="space-y-6">
          <h3 className="text-4xl md:text-7xl text-[#448aff] font-bold w-full max-w-xl">
            Empowering Future Innovators & Leaders
          </h3>
          <p className="text-gray-600 text-lg max-w-xl">
            Building tomorrow&apos;s technology leaders through innovation,
            education, and collaboration.
          </p>
          <button className="flex items-center gap-2 bg-[#448aff] text-white px-6 py-3 rounded-2xl hover:bg-[#448aff] transition-colors">
            Get Started <ArrowRight className="w-5 h-5" />
          </button>
        </div>
        <div className="text-5xl">
           <NavigationCards/>
        </div>
      </section>

      <section id="" className="px-6 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            What Makes Us Different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Globe className="w-8 h-8" />}
              title="Global Reach"
              description="Connect with innovators and leaders from around the world"
            />
            <FeatureCard
              icon={<Code className="w-8 h-8" />}
              title="Weekly Events"
              description="Access to the latest Events"
            />
            <FeatureCard
              icon={<Users className="w-8 h-8" />}
              title="Community Driven"
              description="Join a thriving community of like-minded professionals"
            />
          </div>
        </div>
      </section>

      <section id="about" className="px-6 py-24 bg-[#448aff]/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <StatCard number="10K+" label="Active Users" />
            <StatCard number="500+" label="Projects Completed" />
            <StatCard number="150+" label="Global Partners" />
            <StatCard number="50+" label="Countries Reached" />
          </div>
        </div>
      </section>
      <section id="jobs" className="px-6 py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold">
                Latest Jobs/Internships
              </h2>
              <p className="text-gray-600 text-lg">
                We provide the tools, resources, and community support needed to
                turn innovative ideas into reality. Join us in shaping the
                future of technology and leadership.
              </p>
            </div>
            
            <Link 
              href="/jobs"
              className="inline-flex items-center gap-2 bg-[#448aff] text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
            >
              View All Opportunities <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <JobCard 
              title="Frontend Developer"
              company="Tech Solutions Inc."
              type="Full-time"
            />
            <JobCard 
              title="UX Design Intern"
              company="Creative Labs"
              type="Internship"
            />
            <JobCard 
              title="Product Manager"
              company="Innovation Hub"
              type="Remote"
            />
            <Link 
              href="/jobs" 
              className="bg-[#448aff]/10 rounded-2xl p-6 flex items-center justify-center hover:bg-[#448aff]/15 transition-colors"
            >
              <div className="text-lg font-semibold text-[#448aff] flex items-center gap-2">
                View More Opportunities <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
      <section id="events" className="px-6 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold">
                Upcoming Events
              </h2>
              <p className="text-gray-600 text-lg">
                We provide the tools, resources, and community support needed to
                turn innovative ideas into reality. Join us in shaping the
                future of technology and leadership.
              </p>
              <button className="flex items-center gap-2 bg-[#448aff] text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
                Learn More <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#448aff]/5 rounded-2xl p-6 aspect-square flex items-center justify-center">
                <Lightbulb className="w-16 h-16 text-[#448aff]" />
              </div>
              <div className="bg-[#448aff]/5 rounded-2xl p-6 aspect-square flex items-center justify-center">
                <Telescope className="w-16 h-16 text-[#448aff]" />
              </div>
              <div className="bg-[#448aff]/10 rounded-2xl p-6 aspect-square flex items-center justify-center col-span-2">
                <div className="text-2xl font-bold text-[#448aff]">
                  Innovation Hub
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="testimonials" className="px-6 py-24 bg-white">
        <Testimonials/>
      </section>
    </div>
  );
}

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="bg-[#448aff]/5 rounded-2xl p-8 space-y-4">
    <div className="text-[#448aff]">{icon}</div>
    <h3 className="text-xl font-bold">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const JobCard = ({ title, company, type }: { title: string; company: string; type: string }) => (
  <div className="bg-[#448aff]/5 rounded-2xl p-6 flex flex-col space-y-3 hover:shadow-lg transition-all">
    <div className="flex justify-between items-start">
      <div className="space-y-2">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-600">{company}</p>
      </div>
      <BriefcaseIcon className="w-6 h-6 text-[#448aff]" />
    </div>
    <span className="inline-block bg-[#448aff]/10 text-[#448aff] px-3 py-1 rounded-full text-sm">
      {type}
    </span>
  </div>
);

const StatCard = ({ number, label }: { number: string; label: string }) => (
  <div className="space-y-2">
    <div className="text-4xl font-bold text-[#448aff]">{number}</div>
    <div className="text-gray-600">{label}</div>
  </div>
);
