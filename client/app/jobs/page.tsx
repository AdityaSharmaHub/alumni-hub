 
import Link from "next/link";
import { BriefcaseIcon, ArrowRight } from "lucide-react";

export default function JobsPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <section id="jobs" className="flex-1 px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12">
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold leading-tight">
              Discover Exciting Jobs & Internships
            </h2>
            <p className="text-gray-600 text-lg">
              Find the best opportunities tailored for future leaders and innovators.
            </p>
            <Link 
              href="/jobs"
              className="inline-flex items-center gap-2 bg-[#448aff] text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
            >
              Browse Opportunities <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="w-full md:w-1/2 space-y-4">
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
              className="block bg-[#448aff]/10 rounded-xl p-4 text-center text-[#448aff] font-semibold hover:bg-[#448aff]/15 transition"
            >
              View More Opportunities <ArrowRight className="inline w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

const JobCard = ({ title, company, type }: { title: string; company: string; type: string }) => (
  <div className="bg-[#448aff]/5 rounded-xl p-5 flex flex-col space-y-3 hover:shadow-md transition">
    <div className="flex justify-between items-start">
      <div className="space-y-1">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-600 text-sm">{company}</p>
      </div>
      <BriefcaseIcon className="w-6 h-6 text-[#448aff]" />
    </div>
    <span className="inline-block bg-[#448aff]/10 text-[#448aff] px-3 py-1 rounded-full text-xs">
      {type}
    </span>
  </div>
);
