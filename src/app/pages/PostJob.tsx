import { Link } from 'react-router';
import { Navbar } from '../components/Navbar';
import { DashboardSidebar } from '../components/DashboardSidebar';
import { useDesign } from '../context/DesignContext';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Checkbox } from '../components/ui/checkbox';

export default function PostJob() {
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
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className={isWireframe ? 'text-3xl font-bold text-black mb-2' : 'text-3xl font-bold text-[#0F172A] mb-2'}>
                Post a New Job
              </h1>
              <p className={isWireframe ? 'text-black' : 'text-gray-600'}>
                Fill out the details below to create a new job posting
              </p>
            </div>

            <form className="space-y-6">
              {/* Basic Information */}
              <div className={cardStyles}>
                <h2 className={isWireframe ? 'text-xl font-bold text-black mb-6' : 'text-xl font-semibold text-[#0F172A] mb-6'}>
                  Basic Information
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="jobTitle" className={isWireframe ? 'text-black' : ''}>
                      Job Title *
                    </Label>
                    <Input
                      id="jobTitle"
                      placeholder="e.g. Frontend Developer Intern"
                      className={isWireframe ? 'border-2 border-gray-400 mt-1' : 'mt-1'}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="jobType" className={isWireframe ? 'text-black' : ''}>
                        Job Type *
                      </Label>
                      <Select>
                        <SelectTrigger id="jobType" className={isWireframe ? 'border-2 border-gray-400 mt-1' : 'mt-1'}>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="internship">Internship</SelectItem>
                          <SelectItem value="fulltime">Full-time</SelectItem>
                          <SelectItem value="parttime">Part-time</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="department" className={isWireframe ? 'text-black' : ''}>
                        Department *
                      </Label>
                      <Select>
                        <SelectTrigger id="department" className={isWireframe ? 'border-2 border-gray-400 mt-1' : 'mt-1'}>
                          <SelectValue placeholder="Select department" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="engineering">Engineering</SelectItem>
                          <SelectItem value="design">Design</SelectItem>
                          <SelectItem value="product">Product</SelectItem>
                          <SelectItem value="marketing">Marketing</SelectItem>
                          <SelectItem value="sales">Sales</SelectItem>
                          <SelectItem value="data">Data Science</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="location" className={isWireframe ? 'text-black' : ''}>
                        Location *
                      </Label>
                      <Input
                        id="location"
                        placeholder="e.g. San Francisco, CA"
                        className={isWireframe ? 'border-2 border-gray-400 mt-1' : 'mt-1'}
                      />
                    </div>

                    <div>
                      <Label htmlFor="workMode" className={isWireframe ? 'text-black' : ''}>
                        Work Mode *
                      </Label>
                      <Select>
                        <SelectTrigger id="workMode" className={isWireframe ? 'border-2 border-gray-400 mt-1' : 'mt-1'}>
                          <SelectValue placeholder="Select mode" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="onsite">On-site</SelectItem>
                          <SelectItem value="remote">Remote</SelectItem>
                          <SelectItem value="hybrid">Hybrid</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Compensation */}
              <div className={cardStyles}>
                <h2 className={isWireframe ? 'text-xl font-bold text-black mb-6' : 'text-xl font-semibold text-[#0F172A] mb-6'}>
                  Compensation
                </h2>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="salaryMin" className={isWireframe ? 'text-black' : ''}>
                        Minimum Salary
                      </Label>
                      <Input
                        id="salaryMin"
                        type="number"
                        placeholder="50000"
                        className={isWireframe ? 'border-2 border-gray-400 mt-1' : 'mt-1'}
                      />
                    </div>

                    <div>
                      <Label htmlFor="salaryMax" className={isWireframe ? 'text-black' : ''}>
                        Maximum Salary
                      </Label>
                      <Input
                        id="salaryMax"
                        type="number"
                        placeholder="80000"
                        className={isWireframe ? 'border-2 border-gray-400 mt-1' : 'mt-1'}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Job Description */}
              <div className={cardStyles}>
                <h2 className={isWireframe ? 'text-xl font-bold text-black mb-6' : 'text-xl font-semibold text-[#0F172A] mb-6'}>
                  Job Description
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="description" className={isWireframe ? 'text-black' : ''}>
                      Description *
                    </Label>
                    <Textarea
                      id="description"
                      rows={6}
                      placeholder="Describe the role, responsibilities, and what the candidate will be working on..."
                      className={isWireframe ? 'border-2 border-gray-400 mt-1' : 'mt-1'}
                    />
                  </div>

                  <div>
                    <Label htmlFor="requirements" className={isWireframe ? 'text-black' : ''}>
                      Requirements *
                    </Label>
                    <Textarea
                      id="requirements"
                      rows={6}
                      placeholder="List the required skills, qualifications, and experience..."
                      className={isWireframe ? 'border-2 border-gray-400 mt-1' : 'mt-1'}
                    />
                  </div>

                  <div>
                    <Label htmlFor="benefits" className={isWireframe ? 'text-black' : ''}>
                      Benefits & Perks
                    </Label>
                    <Textarea
                      id="benefits"
                      rows={4}
                      placeholder="What benefits and perks do you offer?"
                      className={isWireframe ? 'border-2 border-gray-400 mt-1' : 'mt-1'}
                    />
                  </div>
                </div>
              </div>

              {/* Application Details */}
              <div className={cardStyles}>
                <h2 className={isWireframe ? 'text-xl font-bold text-black mb-6' : 'text-xl font-semibold text-[#0F172A] mb-6'}>
                  Application Details
                </h2>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="deadline" className={isWireframe ? 'text-black' : ''}>
                        Application Deadline *
                      </Label>
                      <Input
                        id="deadline"
                        type="date"
                        className={isWireframe ? 'border-2 border-gray-400 mt-1' : 'mt-1'}
                      />
                    </div>

                    <div>
                      <Label htmlFor="positions" className={isWireframe ? 'text-black' : ''}>
                        Number of Positions *
                      </Label>
                      <Input
                        id="positions"
                        type="number"
                        defaultValue="1"
                        min="1"
                        className={isWireframe ? 'border-2 border-gray-400 mt-1' : 'mt-1'}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className={isWireframe ? 'text-black' : ''}>
                      Application Questions
                    </Label>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2">
                        <Checkbox defaultChecked className={isWireframe ? 'border-2 border-gray-400' : ''} />
                        <span className={isWireframe ? 'text-black' : 'text-gray-700'}>
                          Require resume/CV
                        </span>
                      </label>
                      <label className="flex items-center gap-2">
                        <Checkbox defaultChecked className={isWireframe ? 'border-2 border-gray-400' : ''} />
                        <span className={isWireframe ? 'text-black' : 'text-gray-700'}>
                          Require cover letter
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4 justify-end">
                <Link to="/company/dashboard">
                  <Button
                    variant="outline"
                    type="button"
                    className={isWireframe ? 'border-2 border-gray-400' : ''}
                  >
                    Cancel
                  </Button>
                </Link>
                <Link to="/company/dashboard">
                  <Button
                    type="button"
                    className={isWireframe ? 'border-2 border-gray-600' : 'bg-[#22C55E] hover:bg-[#16a34a]'}
                    variant={isWireframe ? 'outline' : 'default'}
                  >
                    Publish Job
                  </Button>
                </Link>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}
