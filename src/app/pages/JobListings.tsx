import { Search, MapPin, Briefcase, DollarSign, SlidersHorizontal } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { JobCard } from '../components/JobCard';
import { useDesign } from '../context/DesignContext';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Checkbox } from '../components/ui/checkbox';

const jobs = [
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
    description: 'Work alongside experienced designers to create beautiful and intuitive user interfaces.',
  },
  {
    id: '4',
    title: 'Data Scientist',
    company: 'DataCorp',
    location: 'Seattle, WA',
    type: 'Full-time',
    salary: '$130k-160k',
    postedDate: '4 days ago',
    description: 'Analyze large datasets and build machine learning models to drive business insights.',
  },
  {
    id: '5',
    title: 'Marketing Intern',
    company: 'BrandAgency',
    location: 'Los Angeles, CA',
    type: 'Internship',
    salary: '$18-25/hr',
    postedDate: '1 week ago',
    description: 'Support our marketing team in creating campaigns and analyzing performance metrics.',
  },
  {
    id: '6',
    title: 'Full Stack Developer',
    company: 'WebSolutions',
    location: 'Austin, TX',
    type: 'Full-time',
    salary: '$110k-140k',
    postedDate: '2 weeks ago',
    description: 'Build end-to-end web applications using modern technologies and frameworks.',
  },
];

const jobTypes = ['Internship', 'Full-time', 'Part-time', 'Contract'];
const industries = ['Technology', 'Finance', 'Healthcare', 'Marketing', 'Design', 'Data Science'];

export default function JobListings() {
  const { mode } = useDesign();
  const isWireframe = mode === 'wireframe';

  const sidebarStyles = isWireframe
    ? 'bg-white border-r-2 border-gray-400 p-6 w-80'
    : 'bg-white border-r border-gray-200 p-6 w-80';

  return (
    <div>
      <Navbar isAuthenticated />
      
      <div className="flex">
        {/* Filters Sidebar */}
        <aside className={sidebarStyles}>
          <div className="flex items-center justify-between mb-6">
            <h2 className={isWireframe ? 'text-lg font-bold text-black' : 'text-lg font-semibold text-[#0F172A]'}>
              Filters
            </h2>
            <Button variant="ghost" size="sm">
              Clear All
            </Button>
          </div>

          {/* Location Filter */}
          <div className="mb-6">
            <h3 className={isWireframe ? 'font-bold text-black mb-3' : 'font-medium text-[#0F172A] mb-3'}>
              Location
            </h3>
            <div className="relative">
              <MapPin className={isWireframe ? 'absolute left-3 top-1/2 transform -translate-y-1/2 text-black h-4 w-4' : 'absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4'} />
              <Input
                placeholder="City, state, or zip"
                className={isWireframe ? 'pl-10 border-2 border-gray-400' : 'pl-10'}
              />
            </div>
          </div>

          {/* Job Type Filter */}
          <div className="mb-6">
            <h3 className={isWireframe ? 'font-bold text-black mb-3' : 'font-medium text-[#0F172A] mb-3'}>
              Job Type
            </h3>
            <div className="space-y-2">
              {jobTypes.map((type) => (
                <label key={type} className="flex items-center gap-2">
                  <Checkbox className={isWireframe ? 'border-2 border-gray-400' : ''} />
                  <span className={isWireframe ? 'text-black' : 'text-gray-700'}>{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Industry Filter */}
          <div className="mb-6">
            <h3 className={isWireframe ? 'font-bold text-black mb-3' : 'font-medium text-[#0F172A] mb-3'}>
              Industry
            </h3>
            <div className="space-y-2">
              {industries.map((industry) => (
                <label key={industry} className="flex items-center gap-2">
                  <Checkbox className={isWireframe ? 'border-2 border-gray-400' : ''} />
                  <span className={isWireframe ? 'text-black' : 'text-gray-700'}>{industry}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Salary Range */}
          <div className="mb-6">
            <h3 className={isWireframe ? 'font-bold text-black mb-3' : 'font-medium text-[#0F172A] mb-3'}>
              Salary Range
            </h3>
            <Select>
              <SelectTrigger className={isWireframe ? 'border-2 border-gray-400' : ''}>
                <SelectValue placeholder="Select range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-50k">$0 - $50k</SelectItem>
                <SelectItem value="50k-100k">$50k - $100k</SelectItem>
                <SelectItem value="100k-150k">$100k - $150k</SelectItem>
                <SelectItem value="150k+">$150k+</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="max-w-5xl mx-auto">
            {/* Search Bar */}
            <div className="mb-8">
              <div className="flex gap-2 mb-4">
                <div className="flex-1 relative">
                  <Search className={isWireframe ? 'absolute left-3 top-1/2 transform -translate-y-1/2 text-black h-5 w-5' : 'absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5'} />
                  <Input
                    placeholder="Search jobs, companies, or keywords..."
                    className={isWireframe ? 'pl-10 border-2 border-gray-400 h-12' : 'pl-10 h-12'}
                  />
                </div>
                <Button
                  className={isWireframe ? 'h-12 px-8 border-2 border-gray-600' : 'h-12 px-8 bg-[#2563EB] hover:bg-[#1d4ed8]'}
                  variant={isWireframe ? 'outline' : 'default'}
                >
                  Search
                </Button>
              </div>

              {/* Results Header */}
              <div className="flex items-center justify-between">
                <p className={isWireframe ? 'text-black' : 'text-gray-600'}>
                  <span className={isWireframe ? 'font-bold' : 'font-semibold text-[#0F172A]'}>248 jobs</span> found
                </p>
                <Select defaultValue="recent">
                  <SelectTrigger className={isWireframe ? 'w-48 border-2 border-gray-400' : 'w-48'}>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recent">Most Recent</SelectItem>
                    <SelectItem value="relevant">Most Relevant</SelectItem>
                    <SelectItem value="salary-high">Salary: High to Low</SelectItem>
                    <SelectItem value="salary-low">Salary: Low to High</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Job Cards */}
            <div className="space-y-4">
              {jobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex items-center justify-center gap-2">
              <Button
                variant="outline"
                className={isWireframe ? 'border-2 border-gray-400' : ''}
              >
                Previous
              </Button>
              {[1, 2, 3, 4, 5].map((page) => (
                <Button
                  key={page}
                  variant={page === 1 ? 'default' : 'outline'}
                  className={isWireframe ? 'border-2 border-gray-400' : page === 1 ? 'bg-[#2563EB]' : ''}
                >
                  {page}
                </Button>
              ))}
              <Button
                variant="outline"
                className={isWireframe ? 'border-2 border-gray-400' : ''}
              >
                Next
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
