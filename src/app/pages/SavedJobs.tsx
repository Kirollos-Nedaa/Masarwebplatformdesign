import { useState } from 'react';
import { Bookmark, BookmarkX, Search } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { DashboardSidebar } from '../components/DashboardSidebar';
import { JobCard } from '../components/JobCard';
import { useDesign } from '../context/DesignContext';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';

const initialSavedJobs = [
  {
    id: '1',
    title: 'Frontend Developer Intern',
    company: 'TechCorp',
    location: 'San Francisco, CA',
    type: 'Internship',
    salary: '$25-35/hr',
    postedDate: '2 days ago',
    description: 'Join our team as a frontend developer intern and work on cutting-edge web applications using React and TypeScript.',
    saved: true,
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
    saved: true,
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
    saved: true,
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
    saved: true,
  },
];

export default function SavedJobs() {
  const { mode } = useDesign();
  const isWireframe = mode === 'wireframe';
  const [savedJobs, setSavedJobs] = useState(initialSavedJobs);
  const [searchQuery, setSearchQuery] = useState('');

  const handleRemove = (jobId: string) => {
    setSavedJobs(savedJobs.filter(job => job.id !== jobId));
  };

  const filteredJobs = savedJobs.filter(job =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Navbar userRole="candidate" isAuthenticated />
      <div className="flex">
        <DashboardSidebar userRole="candidate" />
        
        <main className="flex-1 p-8 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-2">
                <Bookmark className={isWireframe ? 'h-8 w-8 text-black' : 'h-8 w-8 text-[#2563EB]'} />
                <h1 className={isWireframe ? 'text-3xl font-bold text-black' : 'text-3xl font-bold text-[#0F172A]'}>
                  Saved Jobs
                </h1>
              </div>
              <p className={isWireframe ? 'text-black' : 'text-gray-600'}>
                Jobs you've bookmarked for later review
              </p>
            </div>

            {/* Search and Filter Bar */}
            <div className={isWireframe ? 'bg-white border-2 border-gray-400 p-6 mb-6' : 'bg-white border border-gray-200 rounded-lg p-6 mb-6'}>
              <div className="flex gap-4 items-center">
                <div className="flex-1 relative">
                  <Search className={isWireframe ? 'absolute left-3 top-1/2 transform -translate-y-1/2 text-black h-5 w-5' : 'absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5'} />
                  <Input
                    placeholder="Search saved jobs..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={isWireframe ? 'pl-10 border-2 border-gray-400' : 'pl-10'}
                  />
                </div>
                <Select defaultValue="recent">
                  <SelectTrigger className={isWireframe ? 'w-48 border-2 border-gray-400' : 'w-48'}>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recent">Recently Saved</SelectItem>
                    <SelectItem value="oldest">Oldest First</SelectItem>
                    <SelectItem value="salary-high">Salary: High to Low</SelectItem>
                    <SelectItem value="salary-low">Salary: Low to High</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Stats */}
            <div className="mb-6 flex items-center justify-between">
              <p className={isWireframe ? 'text-black' : 'text-gray-600'}>
                <span className={isWireframe ? 'font-bold text-lg' : 'font-semibold text-[#0F172A] text-lg'}>
                  {filteredJobs.length}
                </span> {filteredJobs.length === 1 ? 'job' : 'jobs'} saved
              </p>
              {savedJobs.length > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSavedJobs([])}
                  className={isWireframe ? 'border border-gray-400' : 'text-gray-600 hover:text-red-600'}
                >
                  <BookmarkX className="h-4 w-4 mr-2" />
                  Clear All
                </Button>
              )}
            </div>

            {/* Job Cards or Empty State */}
            {filteredJobs.length > 0 ? (
              <div className="space-y-4">
                {filteredJobs.map((job) => (
                  <div key={job.id} className="relative">
                    <JobCard job={job} onSave={handleRemove} />
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleRemove(job.id)}
                      className={isWireframe 
                        ? 'absolute top-4 right-16 border border-gray-400' 
                        : 'absolute top-4 right-16 text-red-600 hover:bg-red-50'
                      }
                    >
                      <BookmarkX className="h-4 w-4 mr-1" />
                      Remove
                    </Button>
                  </div>
                ))}
              </div>
            ) : savedJobs.length === 0 ? (
              /* Empty State */
              <div className={isWireframe ? 'bg-white border-2 border-gray-400 p-12 text-center' : 'bg-white border border-gray-200 rounded-lg p-12 text-center'}>
                <Bookmark className={isWireframe ? 'h-16 w-16 text-black mx-auto mb-4' : 'h-16 w-16 text-gray-300 mx-auto mb-4'} />
                <h3 className={isWireframe ? 'text-xl font-bold text-black mb-2' : 'text-xl font-semibold text-[#0F172A] mb-2'}>
                  No saved jobs yet
                </h3>
                <p className={isWireframe ? 'text-black mb-6' : 'text-gray-600 mb-6'}>
                  Start browsing jobs and save the ones you're interested in
                </p>
                <Button
                  onClick={() => window.location.href = '/jobs'}
                  className={isWireframe ? 'border-2 border-gray-600' : 'bg-gradient-to-r from-[#2563EB] to-[#EB6B25] hover:opacity-90'}
                  variant={isWireframe ? 'outline' : 'default'}
                >
                  Browse Jobs
                </Button>
              </div>
            ) : (
              /* No Results State */
              <div className={isWireframe ? 'bg-white border-2 border-gray-400 p-12 text-center' : 'bg-white border border-gray-200 rounded-lg p-12 text-center'}>
                <Search className={isWireframe ? 'h-16 w-16 text-black mx-auto mb-4' : 'h-16 w-16 text-gray-300 mx-auto mb-4'} />
                <h3 className={isWireframe ? 'text-xl font-bold text-black mb-2' : 'text-xl font-semibold text-[#0F172A] mb-2'}>
                  No matching jobs found
                </h3>
                <p className={isWireframe ? 'text-black' : 'text-gray-600'}>
                  Try adjusting your search query
                </p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
