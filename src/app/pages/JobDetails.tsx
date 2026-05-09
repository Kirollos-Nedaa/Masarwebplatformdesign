import { useParams, Link } from 'react-router';
import { Bookmark, MapPin, Clock, DollarSign, Building2, Calendar, Users, Share2 } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { useDesign } from '../context/DesignContext';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

export default function JobDetails() {
  const { id } = useParams();
  const { mode } = useDesign();
  const isWireframe = mode === 'wireframe';

  const cardStyles = isWireframe
    ? 'bg-white border-2 border-gray-400 p-6'
    : 'bg-white border border-gray-200 rounded-lg p-6';

  return (
    <div>
      <Navbar isAuthenticated />
      
      <div className={isWireframe ? 'bg-gray-100 py-8' : 'bg-[#F8FAFC] py-8'}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link to="/jobs" className={isWireframe ? 'text-black underline' : 'text-[#2563EB] hover:underline'}>
              ← Back to Jobs
            </Link>
          </div>

          {/* Job Header */}
          <div className={`${cardStyles} mb-6`}>
            <div className="flex items-start justify-between mb-6">
              <div className="flex gap-4">
                <div className={isWireframe ? 'w-16 h-16 border-2 border-gray-600 flex items-center justify-center' : 'w-16 h-16 bg-gradient-to-br from-[#2563EB] to-[#EB6B25] rounded-lg flex items-center justify-center'}>
                  <Building2 className={isWireframe ? 'h-8 w-8 text-black' : 'h-8 w-8 text-white'} />
                </div>
                <div>
                  <h1 className={isWireframe ? 'text-2xl font-bold text-black mb-2' : 'text-2xl font-bold text-[#0F172A] mb-2'}>
                    Frontend Developer Intern
                  </h1>
                  <p className={isWireframe ? 'text-lg text-black mb-3' : 'text-lg text-gray-700 mb-3'}>
                    TechCorp
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <MapPin className={isWireframe ? 'h-4 w-4 text-black' : 'h-4 w-4 text-gray-500'} />
                      <span className={isWireframe ? 'text-black' : 'text-gray-600'}>San Francisco, CA</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className={isWireframe ? 'h-4 w-4 text-black' : 'h-4 w-4 text-gray-500'} />
                      <span className={isWireframe ? 'text-black' : 'text-gray-600'}>Posted 2 days ago</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className={isWireframe ? 'h-4 w-4 text-black' : 'h-4 w-4 text-gray-500'} />
                      <span className={isWireframe ? 'text-black' : 'text-gray-600'}>$25-35/hr</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className={isWireframe ? 'h-4 w-4 text-black' : 'h-4 w-4 text-gray-500'} />
                      <span className={isWireframe ? 'text-black' : 'text-gray-600'}>42 applicants</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" className={isWireframe ? 'border-2 border-gray-400' : ''}>
                  <Bookmark className={isWireframe ? 'text-black' : 'text-gray-600'} />
                </Button>
                <Button variant="outline" size="icon" className={isWireframe ? 'border-2 border-gray-400' : ''}>
                  <Share2 className={isWireframe ? 'text-black' : 'text-gray-600'} />
                </Button>
              </div>
            </div>

            <div className="flex gap-2 mb-6">
              <Badge variant={isWireframe ? 'outline' : 'secondary'} className={isWireframe ? 'border-2 border-gray-400' : ''}>
                Internship
              </Badge>
              <Badge variant={isWireframe ? 'outline' : 'secondary'} className={isWireframe ? 'border-2 border-gray-400' : ''}>
                Technology
              </Badge>
              <Badge variant={isWireframe ? 'outline' : 'secondary'} className={isWireframe ? 'border-2 border-gray-400' : ''}>
                Remote Friendly
              </Badge>
            </div>

            <div className="flex gap-4">
              <Link to={`/jobs/${id}/apply`} className="flex-1">
                <Button
                  className={isWireframe ? 'w-full border-2 border-gray-600' : 'w-full bg-[#2563EB] hover:bg-[#1d4ed8]'}
                  variant={isWireframe ? 'outline' : 'default'}
                  size="lg"
                >
                  Apply Now
                </Button>
              </Link>
            </div>
          </div>

          {/* Job Description */}
          <div className={`${cardStyles} mb-6`}>
            <h2 className={isWireframe ? 'text-xl font-bold text-black mb-4' : 'text-xl font-semibold text-[#0F172A] mb-4'}>
              Job Description
            </h2>
            <div className={isWireframe ? 'space-y-4 text-black' : 'space-y-4 text-gray-700'}>
              <p>
                We're looking for a talented and motivated Frontend Developer Intern to join our engineering team. 
                This is an excellent opportunity to work on real-world projects and learn from experienced developers.
              </p>
              <p>
                As a Frontend Developer Intern, you'll work closely with our product and design teams to build 
                beautiful, responsive web applications that delight our users. You'll gain hands-on experience 
                with modern web technologies including React, TypeScript, and Tailwind CSS.
              </p>
            </div>
          </div>

          {/* Requirements */}
          <div className={`${cardStyles} mb-6`}>
            <h2 className={isWireframe ? 'text-xl font-bold text-black mb-4' : 'text-xl font-semibold text-[#0F172A] mb-4'}>
              Requirements
            </h2>
            <ul className={isWireframe ? 'space-y-2 text-black' : 'space-y-2 text-gray-700'}>
              <li>• Currently pursuing a Bachelor's or Master's degree in Computer Science or related field</li>
              <li>• Strong understanding of HTML, CSS, and JavaScript</li>
              <li>• Experience with React or other modern frontend frameworks</li>
              <li>• Familiarity with version control systems (Git)</li>
              <li>• Good communication and teamwork skills</li>
              <li>• Passion for learning and staying up-to-date with web technologies</li>
            </ul>
          </div>

          {/* Preferred Qualifications */}
          <div className={`${cardStyles} mb-6`}>
            <h2 className={isWireframe ? 'text-xl font-bold text-black mb-4' : 'text-xl font-semibold text-[#0F172A] mb-4'}>
              Preferred Qualifications
            </h2>
            <ul className={isWireframe ? 'space-y-2 text-black' : 'space-y-2 text-gray-700'}>
              <li>• Experience with TypeScript</li>
              <li>• Knowledge of responsive design principles</li>
              <li>• Familiarity with CSS frameworks (Tailwind, Bootstrap, etc.)</li>
              <li>• Understanding of RESTful APIs</li>
              <li>• Portfolio or GitHub projects demonstrating your work</li>
            </ul>
          </div>

          {/* Benefits */}
          <div className={`${cardStyles} mb-6`}>
            <h2 className={isWireframe ? 'text-xl font-bold text-black mb-4' : 'text-xl font-semibold text-[#0F172A] mb-4'}>
              What We Offer
            </h2>
            <ul className={isWireframe ? 'space-y-2 text-black' : 'space-y-2 text-gray-700'}>
              <li>• Competitive hourly compensation ($25-35/hr)</li>
              <li>• Flexible work arrangements (remote-friendly)</li>
              <li>• Mentorship from senior engineers</li>
              <li>• Opportunity to work on production code</li>
              <li>• Professional development and learning opportunities</li>
              <li>• Potential for full-time conversion</li>
            </ul>
          </div>

          {/* Company Info */}
          <div className={cardStyles}>
            <h2 className={isWireframe ? 'text-xl font-bold text-black mb-4' : 'text-xl font-semibold text-[#0F172A] mb-4'}>
              About TechCorp
            </h2>
            <p className={isWireframe ? 'text-black mb-4' : 'text-gray-700 mb-4'}>
              TechCorp is a leading technology company building innovative solutions that help businesses 
              scale and grow. Our mission is to empower companies with cutting-edge tools and platforms.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className={isWireframe ? 'text-black mb-1' : 'text-gray-600 mb-1'}>Company Size</p>
                <p className={isWireframe ? 'font-bold text-black' : 'font-semibold text-[#0F172A]'}>500-1000 employees</p>
              </div>
              <div>
                <p className={isWireframe ? 'text-black mb-1' : 'text-gray-600 mb-1'}>Industry</p>
                <p className={isWireframe ? 'font-bold text-black' : 'font-semibold text-[#0F172A]'}>Technology</p>
              </div>
              <div>
                <p className={isWireframe ? 'text-black mb-1' : 'text-gray-600 mb-1'}>Founded</p>
                <p className={isWireframe ? 'font-bold text-black' : 'font-semibold text-[#0F172A]'}>2015</p>
              </div>
              <div>
                <p className={isWireframe ? 'text-black mb-1' : 'text-gray-600 mb-1'}>Location</p>
                <p className={isWireframe ? 'font-bold text-black' : 'font-semibold text-[#0F172A]'}>San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}