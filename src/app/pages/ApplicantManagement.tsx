import { useParams, Link } from 'react-router';
import { Download, Mail, Phone, Linkedin, Github, MapPin, Calendar } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { DashboardSidebar } from '../components/DashboardSidebar';
import { useDesign } from '../context/DesignContext';
import { Button } from '../components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Badge } from '../components/ui/badge';

const applicants = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john.smith@email.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    appliedDate: '2024-03-01',
    status: 'Under Review',
    education: 'Stanford University - BS Computer Science',
    experience: '2 years',
    skills: ['React', 'TypeScript', 'Node.js', 'Python'],
    resumeUrl: '#',
    linkedinUrl: 'https://linkedin.com/in/johnsmith',
    githubUrl: 'https://github.com/johnsmith',
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah.j@email.com',
    phone: '+1 (555) 234-5678',
    location: 'New York, NY',
    appliedDate: '2024-02-28',
    status: 'Applied',
    education: 'MIT - BS Computer Science',
    experience: '1 year',
    skills: ['JavaScript', 'React', 'CSS', 'Figma'],
    resumeUrl: '#',
    linkedinUrl: 'https://linkedin.com/in/sarahjohnson',
    githubUrl: 'https://github.com/sarahjohnson',
  },
  {
    id: '3',
    name: 'Michael Chen',
    email: 'michael.chen@email.com',
    phone: '+1 (555) 345-6789',
    location: 'Seattle, WA',
    appliedDate: '2024-02-27',
    status: 'Applied',
    education: 'UC Berkeley - BS EECS',
    experience: '3 years',
    skills: ['Vue.js', 'TypeScript', 'GraphQL', 'AWS'],
    resumeUrl: '#',
    linkedinUrl: 'https://linkedin.com/in/michaelchen',
    githubUrl: 'https://github.com/michaelchen',
  },
];

export default function ApplicantManagement() {
  const { jobId } = useParams();
  const { mode } = useDesign();
  const isWireframe = mode === 'wireframe';

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
            <div className="mb-8">
              <Link to="/company/dashboard" className={isWireframe ? 'text-black underline mb-4 inline-block' : 'text-[#2563EB] hover:underline mb-4 inline-block'}>
                ← Back to Dashboard
              </Link>
              <h1 className={isWireframe ? 'text-3xl font-bold text-black mb-2' : 'text-3xl font-bold text-[#0F172A] mb-2'}>
                Applicants - Frontend Developer Intern
              </h1>
              <p className={isWireframe ? 'text-black' : 'text-gray-600'}>
                Review and manage candidates who applied for this position
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className={isWireframe ? 'bg-white border-2 border-gray-400 p-4' : 'bg-white border border-gray-200 rounded-lg p-4'}>
                <p className={isWireframe ? 'text-sm text-black mb-1' : 'text-sm text-gray-600 mb-1'}>Total Applicants</p>
                <p className={isWireframe ? 'text-2xl font-bold text-black' : 'text-2xl font-bold text-[#0F172A]'}>42</p>
              </div>
              <div className={isWireframe ? 'bg-white border-2 border-gray-400 p-4' : 'bg-white border border-gray-200 rounded-lg p-4'}>
                <p className={isWireframe ? 'text-sm text-black mb-1' : 'text-sm text-gray-600 mb-1'}>Applied</p>
                <p className={isWireframe ? 'text-2xl font-bold text-black' : 'text-2xl font-bold text-[#0F172A]'}>15</p>
              </div>
              <div className={isWireframe ? 'bg-white border-2 border-gray-400 p-4' : 'bg-white border border-gray-200 rounded-lg p-4'}>
                <p className={isWireframe ? 'text-sm text-black mb-1' : 'text-sm text-gray-600 mb-1'}>Under Review</p>
                <p className={isWireframe ? 'text-2xl font-bold text-black' : 'text-2xl font-bold text-[#0F172A]'}>8</p>
              </div>
              <div className={isWireframe ? 'bg-white border-2 border-gray-400 p-4' : 'bg-white border border-gray-200 rounded-lg p-4'}>
                <p className={isWireframe ? 'text-sm text-black mb-1' : 'text-sm text-gray-600 mb-1'}>Rejected</p>
                <p className={isWireframe ? 'text-2xl font-bold text-black' : 'text-2xl font-bold text-[#0F172A]'}>19</p>
              </div>
            </div>

            {/* Filters */}
            <div className="flex gap-4 mb-6">
              <Select defaultValue="all">
                <SelectTrigger className={isWireframe ? 'w-48 border-2 border-gray-400' : 'w-48'}>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Applicants</SelectItem>
                  <SelectItem value="review">Under Review</SelectItem>
                  <SelectItem value="applied">Applied</SelectItem>
                  <SelectItem value="accepted">Accepted</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>

              <Select defaultValue="recent">
                <SelectTrigger className={isWireframe ? 'w-48 border-2 border-gray-400' : 'w-48'}>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Most Recent</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                  <SelectItem value="name">Name A-Z</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Applicants List */}
            <div className="space-y-6">
              {applicants.map((applicant) => (
                <div key={applicant.id} className={cardStyles}>
                  <div className="flex gap-6">
                    {/* Avatar */}
                    <div className={isWireframe ? 'w-20 h-20 border-2 border-gray-600 flex items-center justify-center flex-shrink-0' : 'w-20 h-20 bg-[#EBF5FF] rounded-full flex items-center justify-center flex-shrink-0'}>
                      <span className={isWireframe ? 'text-2xl font-bold text-black' : 'text-2xl font-semibold text-[#2563EB]'}>
                        {applicant.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className={isWireframe ? 'text-xl font-bold text-black mb-1' : 'text-xl font-semibold text-[#0F172A] mb-1'}>
                            {applicant.name}
                          </h3>
                          <div className="flex flex-wrap gap-4 text-sm mb-2">
                            <div className="flex items-center gap-1">
                              <Mail className={isWireframe ? 'h-4 w-4 text-black' : 'h-4 w-4 text-gray-500'} />
                              <span className={isWireframe ? 'text-black' : 'text-gray-600'}>{applicant.email}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Phone className={isWireframe ? 'h-4 w-4 text-black' : 'h-4 w-4 text-gray-500'} />
                              <span className={isWireframe ? 'text-black' : 'text-gray-600'}>{applicant.phone}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className={isWireframe ? 'h-4 w-4 text-black' : 'h-4 w-4 text-gray-500'} />
                              <span className={isWireframe ? 'text-black' : 'text-gray-600'}>{applicant.location}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Calendar className={isWireframe ? 'h-4 w-4 text-black' : 'h-4 w-4 text-gray-500'} />
                            <span className={isWireframe ? 'text-black' : 'text-gray-600'}>
                              Applied {new Date(applicant.appliedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                            </span>
                          </div>
                        </div>

                        {/* Status Dropdown */}
                        <Select defaultValue={applicant.status.toLowerCase().replace(' ', '-')}>
                          <SelectTrigger className={isWireframe ? 'w-48 border-2 border-gray-400' : 'w-48'}>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="applied">Applied</SelectItem>
                            <SelectItem value="under-review">Under Review</SelectItem>
                            <SelectItem value="accepted">Accepted</SelectItem>
                            <SelectItem value="rejected">Rejected</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Education & Experience */}
                      <div className="mb-4">
                        <p className={isWireframe ? 'text-sm text-black mb-1' : 'text-sm text-gray-700 mb-1'}>
                          <span className={isWireframe ? 'font-bold' : 'font-medium'}>Education:</span> {applicant.education}
                        </p>
                        <p className={isWireframe ? 'text-sm text-black' : 'text-sm text-gray-700'}>
                          <span className={isWireframe ? 'font-bold' : 'font-medium'}>Experience:</span> {applicant.experience}
                        </p>
                      </div>

                      {/* Skills */}
                      <div className="mb-4">
                        <p className={isWireframe ? 'text-sm font-bold text-black mb-2' : 'text-sm font-medium text-gray-700 mb-2'}>
                          Skills:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {applicant.skills.map((skill) => (
                            <Badge
                              key={skill}
                              variant={isWireframe ? 'outline' : 'secondary'}
                              className={isWireframe ? 'border-2 border-gray-400' : ''}
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className={isWireframe ? 'border-2 border-gray-400' : ''}
                        >
                          <Download className="h-4 w-4 mr-1" />
                          Resume
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className={isWireframe ? 'border-2 border-gray-400' : ''}
                        >
                          <Linkedin className="h-4 w-4 mr-1" />
                          LinkedIn
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className={isWireframe ? 'border-2 border-gray-400' : ''}
                        >
                          <Github className="h-4 w-4 mr-1" />
                          GitHub
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className={isWireframe ? 'border-2 border-gray-400' : ''}
                        >
                          <Mail className="h-4 w-4 mr-1" />
                          Send Email
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
