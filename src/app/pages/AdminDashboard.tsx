import { Users, Briefcase, Building2, Flag, TrendingUp, UserCheck } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { DashboardSidebar } from '../components/DashboardSidebar';
import { StatusBadge } from '../components/StatusBadge';
import { useDesign } from '../context/DesignContext';
import { Button } from '../components/ui/button';

const recentUsers = [
  { id: '1', name: 'John Doe', email: 'john@email.com', role: 'Candidate', joinedDate: '2024-03-05', status: 'Active' },
  { id: '2', name: 'TechCorp Inc.', email: 'contact@techcorp.com', role: 'Company', joinedDate: '2024-03-04', status: 'Active' },
  { id: '3', name: 'Sarah Smith', email: 'sarah@email.com', role: 'Candidate', joinedDate: '2024-03-03', status: 'Active' },
];

const recentJobs = [
  { id: '1', title: 'Frontend Developer', company: 'TechCorp', status: 'Active' as const, posted: '2024-03-05' },
  { id: '2', title: 'Data Scientist', company: 'DataCo', status: 'Active' as const, posted: '2024-03-04' },
  { id: '3', title: 'Product Designer', company: 'DesignStudio', status: 'Closed' as const, posted: '2024-03-01' },
];

const reportedContent = [
  { id: '1', type: 'Job', title: 'Suspicious Job Posting', reporter: 'User #234', date: '2024-03-05' },
  { id: '2', type: 'User', title: 'Inappropriate Profile Content', reporter: 'User #156', date: '2024-03-04' },
];

export default function AdminDashboard() {
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
      <Navbar userRole="admin" isAuthenticated />
      <div className="flex">
        <DashboardSidebar userRole="admin" />
        
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className={isWireframe ? 'text-3xl font-bold text-black mb-2' : 'text-3xl font-bold text-[#0F172A] mb-2'}>
                Admin Dashboard
              </h1>
              <p className={isWireframe ? 'text-black' : 'text-gray-600'}>
                Monitor platform activity and manage users and content
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
              <div className={statCardStyles}>
                <div className="flex items-center justify-between mb-2">
                  <p className={isWireframe ? 'text-sm text-black' : 'text-sm text-gray-600'}>
                    Total Users
                  </p>
                  {!isWireframe && <Users className="h-5 w-5 text-[#2563EB]" />}
                </div>
                <p className={isWireframe ? 'text-2xl font-bold text-black' : 'text-2xl font-bold text-[#0F172A]'}>
                  12,458
                </p>
              </div>

              <div className={statCardStyles}>
                <div className="flex items-center justify-between mb-2">
                  <p className={isWireframe ? 'text-sm text-black' : 'text-sm text-gray-600'}>
                    Candidates
                  </p>
                  {!isWireframe && <UserCheck className="h-5 w-5 text-[#2563EB]" />}
                </div>
                <p className={isWireframe ? 'text-2xl font-bold text-black' : 'text-2xl font-bold text-[#0F172A]'}>
                  9,834
                </p>
              </div>

              <div className={statCardStyles}>
                <div className="flex items-center justify-between mb-2">
                  <p className={isWireframe ? 'text-sm text-black' : 'text-sm text-gray-600'}>
                    Companies
                  </p>
                  {!isWireframe && <Building2 className="h-5 w-5 text-[#EB6B25]" />}
                </div>
                <p className={isWireframe ? 'text-2xl font-bold text-black' : 'text-2xl font-bold text-[#0F172A]'}>
                  2,624
                </p>
              </div>

              <div className={statCardStyles}>
                <div className="flex items-center justify-between mb-2">
                  <p className={isWireframe ? 'text-sm text-black' : 'text-sm text-gray-600'}>
                    Active Jobs
                  </p>
                  {!isWireframe && <Briefcase className="h-5 w-5 text-[#22C55E]" />}
                </div>
                <p className={isWireframe ? 'text-2xl font-bold text-black' : 'text-2xl font-bold text-[#0F172A]'}>
                  4,892
                </p>
              </div>

              <div className={statCardStyles}>
                <div className="flex items-center justify-between mb-2">
                  <p className={isWireframe ? 'text-sm text-black' : 'text-sm text-gray-600'}>
                    Applications
                  </p>
                  {!isWireframe && <TrendingUp className="h-5 w-5 text-[#22C55E]" />}
                </div>
                <p className={isWireframe ? 'text-2xl font-bold text-black' : 'text-2xl font-bold text-[#0F172A]'}>
                  28,419
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 mb-8">
              {/* Recent Users */}
              <div className={cardStyles}>
                <div className="flex items-center justify-between mb-6">
                  <h2 className={isWireframe ? 'text-xl font-bold text-black' : 'text-xl font-semibold text-[#0F172A]'}>
                    Recent Users
                  </h2>
                  <Button variant="ghost" size="sm">
                    View All →
                  </Button>
                </div>
                <div className="space-y-4">
                  {recentUsers.map((user) => (
                    <div key={user.id} className={isWireframe ? 'flex items-center justify-between py-3 border-b border-gray-400' : 'flex items-center justify-between py-3 border-b border-gray-200 last:border-0'}>
                      <div>
                        <h3 className={isWireframe ? 'font-bold text-black mb-1' : 'font-medium text-[#0F172A] mb-1'}>
                          {user.name}
                        </h3>
                        <p className={isWireframe ? 'text-sm text-black' : 'text-sm text-gray-600'}>
                          {user.email} • {user.role}
                        </p>
                        <p className={isWireframe ? 'text-xs text-black' : 'text-xs text-gray-500'}>
                          Joined {new Date(user.joinedDate).toLocaleDateString()}
                        </p>
                      </div>
                      <Button variant="outline" size="sm" className={isWireframe ? 'border-2 border-gray-400' : ''}>
                        Manage
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Jobs */}
              <div className={cardStyles}>
                <div className="flex items-center justify-between mb-6">
                  <h2 className={isWireframe ? 'text-xl font-bold text-black' : 'text-xl font-semibold text-[#0F172A]'}>
                    Recent Job Posts
                  </h2>
                  <Button variant="ghost" size="sm">
                    View All →
                  </Button>
                </div>
                <div className="space-y-4">
                  {recentJobs.map((job) => (
                    <div key={job.id} className={isWireframe ? 'flex items-center justify-between py-3 border-b border-gray-400' : 'flex items-center justify-between py-3 border-b border-gray-200 last:border-0'}>
                      <div>
                        <h3 className={isWireframe ? 'font-bold text-black mb-1' : 'font-medium text-[#0F172A] mb-1'}>
                          {job.title}
                        </h3>
                        <p className={isWireframe ? 'text-sm text-black' : 'text-sm text-gray-600'}>
                          {job.company}
                        </p>
                        <p className={isWireframe ? 'text-xs text-black' : 'text-xs text-gray-500'}>
                          Posted {new Date(job.posted).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <StatusBadge status={job.status} />
                        <Button variant="outline" size="sm" className={isWireframe ? 'border-2 border-gray-400' : ''}>
                          Review
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}