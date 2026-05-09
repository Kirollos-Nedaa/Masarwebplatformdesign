import { Link } from 'react-router';
import { Search, Briefcase, Users, CheckCircle, Building2, TrendingUp, Award } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { JobCard } from '../components/JobCard';
import { useDesign } from '../context/DesignContext';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';

const featuredJobs = [
  {
    id: '1',
    title: 'Frontend Developer Intern',
    company: 'TechCorp',
    location: 'San Francisco, CA',
    type: 'Internship',
    salary: '$25-35/hr',
    postedDate: '2 days ago',
    description: 'Join our team as a frontend developer intern and work on cutting-edge web applications using React and TypeScript.',
  },
  {
    id: '2',
    title: 'Software Engineer',
    company: 'StartupXYZ',
    location: 'Remote',
    type: 'Full-time',
    salary: '$120k-150k',
    postedDate: '1 week ago',
    description: 'We are looking for a passionate software engineer to build scalable backend systems and APIs.',
  },
  {
    id: '3',
    title: 'Product Design Intern',
    company: 'DesignStudio',
    location: 'New York, NY',
    type: 'Internship',
    salary: '$20-30/hr',
    postedDate: '3 days ago',
    description: 'Work alongside experienced designers to create beautiful and intuitive user interfaces for mobile and web applications.',
  },
];

const topCompanies = [
  { name: 'Google', jobs: 245 },
  { name: 'Microsoft', jobs: 189 },
  { name: 'Amazon', jobs: 312 },
  { name: 'Meta', jobs: 156 },
  { name: 'Apple', jobs: 198 },
  { name: 'Netflix', jobs: 87 },
];

export default function Landing() {
  const { mode } = useDesign();
  const isWireframe = mode === 'wireframe';

  const heroStyles = isWireframe
    ? 'bg-white border-b-2 border-gray-400 py-20'
    : 'bg-gradient-to-br from-[#EBF5FF] to-[#F8FAFC] py-20';

  const sectionStyles = isWireframe ? 'py-16 bg-gray-100' : 'py-16 bg-white';

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className={heroStyles}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1
              className={
                isWireframe
                  ? 'text-4xl font-bold text-black mb-6'
                  : 'text-5xl font-bold text-[#0F172A] mb-6'
              }
            >
              Find Internships & Jobs That Launch Your Career
            </h1>
            <p className={isWireframe ? 'text-lg text-black mb-8' : 'text-xl text-gray-600 mb-8'}>
              Connect with top companies and discover opportunities that match your skills and
              aspirations.
            </p>

            {/* Search Bar */}
            <div className="flex gap-2 max-w-2xl mx-auto mb-8">
              <div className="flex-1 relative">
                <Search
                  className={
                    isWireframe
                      ? 'absolute left-3 top-1/2 transform -translate-y-1/2 text-black h-5 w-5'
                      : 'absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5'
                  }
                />
                <Input
                  placeholder="Search jobs, companies, or keywords..."
                  className={
                    isWireframe
                      ? 'pl-10 border-2 border-gray-400 h-12'
                      : 'pl-10 h-12 border-gray-300'
                  }
                />
              </div>
              <Button
                className={
                  isWireframe
                    ? 'h-12 px-8 border-2 border-gray-600'
                    : 'h-12 px-8 bg-[#2563EB] hover:bg-[#1d4ed8]'
                }
                variant={isWireframe ? 'outline' : 'default'}
              >
                Search
              </Button>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 justify-center">
              <Link to="/register">
                <Button
                  size="lg"
                  className={
                    isWireframe
                      ? 'border-2 border-gray-600'
                      : 'bg-[#2563EB] hover:bg-[#1d4ed8]'
                  }
                  variant={isWireframe ? 'outline' : 'default'}
                >
                  Get Started
                </Button>
              </Link>
              <Link to="/company/post-job">
                <Button
                  size="lg"
                  variant="outline"
                  className={
                    isWireframe
                      ? 'border-2 border-gray-400'
                      : 'border-[#EB6B25] text-[#EB6B25] hover:bg-[#FFF4ED]'
                  }
                >
                  Login
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className={sectionStyles}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className={isWireframe ? 'text-3xl font-bold text-black' : 'text-3xl font-bold text-[#0F172A]'}>
              Featured Jobs
            </h2>
            <Link to="/jobs">
              <Button variant="ghost" className={isWireframe ? 'border border-gray-400' : ''}>
                View All →
              </Button>
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      </section>

      {/* Top Companies Section */}
      <section className={isWireframe ? 'py-16 bg-white' : 'py-16 bg-[#F8FAFC]'}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={isWireframe ? 'text-3xl font-bold text-black text-center mb-12' : 'text-3xl font-bold text-[#0F172A] text-center mb-12'}>
            Top Companies Hiring
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {topCompanies.map((company) => (
              <div
                key={company.name}
                className={
                  isWireframe
                    ? 'bg-white border-2 border-gray-400 p-6 text-center'
                    : 'bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-shadow'
                }
              >
                <div className="flex items-center justify-center mb-2">
                  <Building2 className={isWireframe ? 'h-8 w-8 text-black' : 'h-8 w-8 text-[#2563EB]'} />
                </div>
                <h3 className={isWireframe ? 'font-bold text-black mb-1' : 'font-semibold text-[#0F172A] mb-1'}>
                  {company.name}
                </h3>
                <p className={isWireframe ? 'text-sm text-black' : 'text-sm text-gray-600'}>
                  {company.jobs} jobs
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className={sectionStyles}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={isWireframe ? 'text-3xl font-bold text-black text-center mb-12' : 'text-3xl font-bold text-[#0F172A] text-center mb-12'}>
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className={isWireframe ? 'inline-flex items-center justify-center w-16 h-16 border-2 border-gray-600 mb-4' : 'inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#2563EB] to-[#1d4ed8] mb-4'}>
                <Users className={isWireframe ? 'h-8 w-8 text-black' : 'h-8 w-8 text-white'} />
              </div>
              <h3 className={isWireframe ? 'text-xl font-bold text-black mb-2' : 'text-xl font-semibold text-[#0F172A] mb-2'}>
                Create Profile
              </h3>
              <p className={isWireframe ? 'text-black' : 'text-gray-600'}>
                Sign up and build your professional profile with your skills, education, and experience.
              </p>
            </div>
            <div className="text-center">
              <div className={isWireframe ? 'inline-flex items-center justify-center w-16 h-16 border-2 border-gray-600 mb-4' : 'inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#EB6B25] to-[#d35a1a] mb-4'}>
                <Briefcase className={isWireframe ? 'h-8 w-8 text-black' : 'h-8 w-8 text-white'} />
              </div>
              <h3 className={isWireframe ? 'text-xl font-bold text-black mb-2' : 'text-xl font-semibold text-[#0F172A] mb-2'}>
                Browse Jobs
              </h3>
              <p className={isWireframe ? 'text-black' : 'text-gray-600'}>
                Explore thousands of internships and jobs tailored to your preferences and qualifications.
              </p>
            </div>
            <div className="text-center">
              <div className={isWireframe ? 'inline-flex items-center justify-center w-16 h-16 border-2 border-gray-600 mb-4' : 'inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#22C55E] to-[#16a34a] mb-4'}>
                <TrendingUp className={isWireframe ? 'h-8 w-8 text-black' : 'h-8 w-8 text-white'} />
              </div>
              <h3 className={isWireframe ? 'text-xl font-bold text-black mb-2' : 'text-xl font-semibold text-[#0F172A] mb-2'}>
                Get Hired
              </h3>
              <p className={isWireframe ? 'text-black' : 'text-gray-600'}>
                Apply with one click, track your applications, and land your dream job.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className={isWireframe ? 'py-20 bg-gray-200 border-t-2 border-gray-400' : 'py-20 bg-[#2563EB]'}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={isWireframe ? 'text-3xl font-bold text-black mb-4' : 'text-3xl font-bold text-white mb-4'}>
            Ready to Take the Next Step?
          </h2>
          <p className={isWireframe ? 'text-lg text-black mb-8' : 'text-xl text-blue-100 mb-8'}>
            Join thousands of students and professionals finding their perfect opportunity.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/register">
              <Button
                size="lg"
                variant={isWireframe ? 'outline' : 'secondary'}
                className={isWireframe ? 'border-2 border-gray-600 bg-white' : 'bg-white text-[#2563EB] hover:bg-gray-100'}
              >
                Sign Up Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}