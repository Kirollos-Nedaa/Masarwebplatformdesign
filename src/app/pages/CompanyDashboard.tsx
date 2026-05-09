import { Link } from 'react-router';
import { Briefcase, Users, Eye, TrendingUp, PlusCircle } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { DashboardSidebar } from '../components/DashboardSidebar';
import { StatusBadge } from '../components/StatusBadge';
import { useDesign } from '../context/DesignContext';
import { Button } from '../components/ui/button';

const postedJobs = [
  {
    id: '1',
    title: 'Frontend Developer Intern',
    status: 'Active' as const,
    applicants: 42,
    postedDate: '2024-02-28',
  },
  {
    id: '2',
    title: 'Backend Engineer',
    status: 'Active' as const,
    applicants: 68,
    postedDate: '2024-02-25',
  },
  {
    id: '3',
    title: 'Product Designer',
    status: 'Closed' as const,
    applicants: 35,
    postedDate: '2024-02-15',
  },
];

export default function CompanyDashboard() {
  const { mode } = useDesign();
  const isWireframe = mode === 'wireframe';

  const statCardStyles = isWireframe
    ? 'bg-white border-2 border-gray-400 p-6'
    : 'bg-white border border-gray-200 rounded-lg p-6';

  const cardStyles = isWireframe
    ? 'bg-white border-2 border-gray-400 p-6'
    : 'bg-white border border-gray-200 rounded-lg p-6';

  return (
    <div>
      <Navbar userRole="company" isAuthenticated />
      <div className="flex">
        <DashboardSidebar userRole="company" />
        
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className={isWireframe ? 'text-3xl font-bold text-black mb-2' : 'text-3xl font-bold text-[#0F172A] mb-2'}>
                  Company Dashboard
                </h1>
                <p className={isWireframe ? 'text-black' : 'text-gray-600'}>
                  Manage your job postings and review candidates
                </p>
              </div>
              <Link to="/company/post-job">
                <Button
                  className={isWireframe ? 'border-2 border-gray-600' : 'bg-[#22C55E] hover:bg-[#16a34a]'}
                  variant={isWireframe ? 'outline' : 'default'}
                >
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Post New Job
                </Button>
              </Link>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className={statCardStyles}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className={isWireframe ? 'text-sm text-black mb-1' : 'text-sm text-gray-600 mb-1'}>
                      Active Jobs
                    </p>
                    <p className={isWireframe ? 'text-2xl font-bold text-black' : 'text-2xl font-bold text-[#0F172A]'}>
                      8
                    </p>
                  </div>
                  {!isWireframe && <Briefcase className="h-8 w-8 text-[#2563EB]" />}
                </div>
              </div>

              <div className={statCardStyles}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className={isWireframe ? 'text-sm text-black mb-1' : 'text-sm text-gray-600 mb-1'}>
                      Total Applicants
                    </p>
                    <p className={isWireframe ? 'text-2xl font-bold text-black' : 'text-2xl font-bold text-[#0F172A]'}>
                      245
                    </p>
                  </div>
                  {!isWireframe && <Users className="h-8 w-8 text-[#22C55E]" />}
                </div>
              </div>
            </div>

            {/* Posted Jobs */}
            <div className={cardStyles}>
              <div className="flex items-center justify-between mb-6">
                <h2 className={isWireframe ? 'text-xl font-bold text-black' : 'text-xl font-semibold text-[#0F172A]'}>
                  Posted Jobs
                </h2>
                <Link to="/jobs">
                  <span className={isWireframe ? 'text-black underline text-sm' : 'text-[#2563EB] hover:underline text-sm'}>
                    View All →
                  </span>
                </Link>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className={isWireframe ? 'border-b-2 border-gray-400' : 'border-b border-gray-200'}>
                      <th className={isWireframe ? 'text-left py-3 px-4 text-black font-bold' : 'text-left py-3 px-4 text-gray-600 font-medium text-sm'}>
                        Job Title
                      </th>
                      <th className={isWireframe ? 'text-left py-3 px-4 text-black font-bold' : 'text-left py-3 px-4 text-gray-600 font-medium text-sm'}>
                        Status
                      </th>
                      <th className={isWireframe ? 'text-left py-3 px-4 text-black font-bold' : 'text-left py-3 px-4 text-gray-600 font-medium text-sm'}>
                        Applicants
                      </th>
                      <th className={isWireframe ? 'text-left py-3 px-4 text-black font-bold' : 'text-left py-3 px-4 text-gray-600 font-medium text-sm'}>
                        Posted
                      </th>
                      <th className={isWireframe ? 'text-left py-3 px-4 text-black font-bold' : 'text-left py-3 px-4 text-gray-600 font-medium text-sm'}>
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {postedJobs.map((job) => (
                      <tr key={job.id} className={isWireframe ? 'border-b border-gray-400' : 'border-b border-gray-200 hover:bg-gray-50'}>
                        <td className={isWireframe ? 'py-4 px-4 font-bold text-black' : 'py-4 px-4 font-medium text-[#0F172A]'}>
                          {job.title}
                        </td>
                        <td className="py-4 px-4">
                          <StatusBadge status={job.status} />
                        </td>
                        <td className={isWireframe ? 'py-4 px-4 text-black' : 'py-4 px-4 text-gray-700'}>
                          {job.applicants}
                        </td>
                        <td className={isWireframe ? 'py-4 px-4 text-black' : 'py-4 px-4 text-gray-600 text-sm'}>
                          {new Date(job.postedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex gap-2">
                            <Link to={`/company/applicants/${job.id}`}>
                              <Button
                                variant="outline"
                                size="sm"
                                className={isWireframe ? 'border-2 border-gray-400' : ''}
                              >
                                View Applicants
                              </Button>
                            </Link>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className={cardStyles}>
                <h3 className={isWireframe ? 'font-bold text-black mb-2' : 'font-semibold text-[#0F172A] mb-2'}>
                  New Applicants
                </h3>
                <p className={isWireframe ? 'text-2xl font-bold text-black mb-2' : 'text-2xl font-bold text-[#2563EB] mb-2'}>
                  23
                </p>
                <p className={isWireframe ? 'text-sm text-black' : 'text-sm text-gray-600'}>
                  Review new candidates who applied in the last 24 hours
                </p>
              </div>

              <div className={cardStyles}>
                <h3 className={isWireframe ? 'font-bold text-black mb-2' : 'font-semibold text-[#0F172A] mb-2'}>
                  Pending Reviews
                </h3>
                <p className={isWireframe ? 'text-2xl font-bold text-black mb-2' : 'text-2xl font-bold text-[#2563EB] mb-2'}>
                  12
                </p>
                <p className={isWireframe ? 'text-sm text-black' : 'text-sm text-gray-600'}>
                  Applications waiting for your review
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}