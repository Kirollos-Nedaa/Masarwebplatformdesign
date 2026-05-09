import { Link } from 'react-router';
import { Briefcase, FileText, Bookmark, TrendingUp } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { DashboardSidebar } from '../components/DashboardSidebar';
import { JobCard } from '../components/JobCard';
import { useDesign } from '../context/DesignContext';
import { Progress } from '../components/ui/progress';

const recommendedJobs = [
  {
    id: '1',
    title: 'Frontend Developer Intern',
    company: 'TechCorp',
    location: 'San Francisco, CA',
    type: 'Internship',
    salary: '$25-35/hr',
    postedDate: '2 days ago',
    description: 'Join our team as a frontend developer intern and work on cutting-edge web applications.',
  },
  {
    id: '2',
    title: 'UX Design Intern',
    company: 'DesignCo',
    location: 'Remote',
    type: 'Internship',
    salary: '$20-30/hr',
    postedDate: '1 week ago',
    description: 'Help design beautiful user experiences for our mobile and web applications.',
  },
];

const recentApplications = [
  { id: '1', title: 'Software Engineer Intern', company: 'Google', status: 'Under Review', appliedDate: '2 days ago' },
  { id: '2', title: 'Product Manager Intern', company: 'Microsoft', status: 'Applied', appliedDate: '5 days ago' },
  { id: '3', title: 'Data Analyst', company: 'Amazon', status: 'Rejected', appliedDate: '1 week ago' },
];

export default function CandidateDashboard() {
  const { mode } = useDesign();
  const isWireframe = mode === 'wireframe';

  const statCardStyles = isWireframe
    ? 'bg-white border-2 border-gray-400 p-6'
    : 'bg-white border border-gray-200 rounded-lg p-6';

  return (
    <div>
      <Navbar userRole="candidate" isAuthenticated />
      <div className="flex">
        <DashboardSidebar userRole="candidate" />
        
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className={isWireframe ? 'text-3xl font-bold text-black mb-2' : 'text-3xl font-bold text-[#0F172A] mb-2'}>
                Welcome back, John!
              </h1>
              <p className={isWireframe ? 'text-black' : 'text-gray-600'}>
                Here's what's happening with your job search
              </p>
            </div>

            {/* Profile Completion */}
            <div className={`${statCardStyles} mb-8`}>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className={isWireframe ? 'font-bold text-black mb-1' : 'font-semibold text-[#0F172A] mb-1'}>
                    Complete Your Profile
                  </h3>
                  <p className={isWireframe ? 'text-sm text-black' : 'text-sm text-gray-600'}>
                    75% complete - Add your skills and resume to stand out
                  </p>
                </div>
                <Link to="/candidate/profile">
                  <span className={isWireframe ? 'text-black underline text-sm' : 'text-[#2563EB] hover:underline text-sm'}>
                    Complete Profile →
                  </span>
                </Link>
              </div>
              <Progress value={75} className={isWireframe ? 'border border-gray-400' : ''} />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className={statCardStyles}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className={isWireframe ? 'text-sm text-black mb-1' : 'text-sm text-gray-600 mb-1'}>
                      Applications
                    </p>
                    <p className={isWireframe ? 'text-2xl font-bold text-black' : 'text-2xl font-bold text-[#0F172A]'}>
                      12
                    </p>
                  </div>
                  {!isWireframe && <FileText className="h-8 w-8 text-[#2563EB]" />}
                </div>
              </div>

              <div className={statCardStyles}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className={isWireframe ? 'text-sm text-black mb-1' : 'text-sm text-gray-600 mb-1'}>
                      Saved Jobs
                    </p>
                    <p className={isWireframe ? 'text-2xl font-bold text-black' : 'text-2xl font-bold text-[#0F172A]'}>
                      8
                    </p>
                  </div>
                  {!isWireframe && <Bookmark className="h-8 w-8 text-[#EB6B25]" />}
                </div>
              </div>

              <div className={statCardStyles}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className={isWireframe ? 'text-sm text-black mb-1' : 'text-sm text-gray-600 mb-1'}>
                      Under Review
                    </p>
                    <p className={isWireframe ? 'text-2xl font-bold text-black' : 'text-2xl font-bold text-[#0F172A]'}>
                      5
                    </p>
                  </div>
                  {!isWireframe && <TrendingUp className="h-8 w-8 text-[#22C55E]" />}
                </div>
              </div>
            </div>

            {/* Recent Applications */}
            <div className={`${statCardStyles} mb-8`}>
              <div className="flex items-center justify-between mb-6">
                <h2 className={isWireframe ? 'text-xl font-bold text-black' : 'text-xl font-semibold text-[#0F172A]'}>
                  Recent Applications
                </h2>
                <Link to="/candidate/applications">
                  <span className={isWireframe ? 'text-black underline text-sm' : 'text-[#2563EB] hover:underline text-sm'}>
                    View All →
                  </span>
                </Link>
              </div>
              <div className="space-y-4">
                {recentApplications.map((app) => (
                  <div key={app.id} className={isWireframe ? 'flex items-center justify-between py-3 border-b border-gray-400' : 'flex items-center justify-between py-3 border-b border-gray-200 last:border-0'}>
                    <div>
                      <h3 className={isWireframe ? 'font-bold text-black mb-1' : 'font-medium text-[#0F172A] mb-1'}>
                        {app.title}
                      </h3>
                      <p className={isWireframe ? 'text-sm text-black' : 'text-sm text-gray-600'}>
                        {app.company} • Applied {app.appliedDate}
                      </p>
                    </div>
                    <span className={isWireframe ? 'border border-gray-400 px-3 py-1 text-sm' : `px-3 py-1 text-sm rounded-full ${
                      app.status === 'Under Review' ? 'bg-yellow-100 text-yellow-800' :
                      app.status === 'Applied' ? 'bg-blue-100 text-blue-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {app.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended Jobs */}
            <div>
              <h2 className={isWireframe ? 'text-xl font-bold text-black mb-6' : 'text-xl font-semibold text-[#0F172A] mb-6'}>
                Recommended for You
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {recommendedJobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}