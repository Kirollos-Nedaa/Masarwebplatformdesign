import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router';
import { Upload, FileText, CheckCircle, Building2, MapPin, DollarSign, Briefcase } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { useDesign } from '../context/DesignContext';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Checkbox } from '../components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';

export default function Apply() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { mode } = useDesign();
  const isWireframe = mode === 'wireframe';
  const [submitted, setSubmitted] = useState(false);

  const cardStyles = isWireframe
    ? 'bg-white border-2 border-gray-400 p-6 mb-6'
    : 'bg-white border border-gray-200 rounded-lg p-6 mb-6';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulate submission
    setTimeout(() => {
      navigate('/candidate/applications');
    }, 3000);
  };

  if (submitted) {
    return (
      <div>
        <Navbar isAuthenticated userRole="candidate" />
        
        <div className={isWireframe ? 'bg-gray-100 min-h-screen py-16' : 'bg-[#F8FAFC] min-h-screen py-16'}>
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={cardStyles}>
              <div className="text-center">
                <div className={isWireframe ? 'w-20 h-20 border-4 border-gray-600 mx-auto mb-6 flex items-center justify-center' : 'w-20 h-20 rounded-full bg-gradient-to-br from-[#EB6B25] to-[#22C55E] mx-auto mb-6 flex items-center justify-center'}>
                  <CheckCircle className={isWireframe ? 'h-12 w-12 text-black' : 'h-12 w-12 text-white'} />
                </div>
                <h1 className={isWireframe ? 'text-3xl font-bold text-black mb-4' : 'text-3xl font-bold text-[#0F172A] mb-4'}>
                  Application Submitted!
                </h1>
                <p className={isWireframe ? 'text-black mb-8' : 'text-gray-600 mb-8'}>
                  Your application for <span className={isWireframe ? 'font-bold' : 'font-semibold text-[#0F172A]'}>Frontend Developer Intern at TechCorp</span> has been successfully submitted.
                </p>
                <div className={isWireframe ? 'bg-gray-100 border-2 border-gray-400 p-6 mb-8' : 'bg-[#F8FAFC] rounded-lg p-6 mb-8'}>
                  <h3 className={isWireframe ? 'font-bold text-black mb-3' : 'font-semibold text-[#0F172A] mb-3'}>
                    What's Next?
                  </h3>
                  <ul className={isWireframe ? 'text-left space-y-2 text-black' : 'text-left space-y-2 text-gray-700'}>
                    <li>• The hiring team will review your application</li>
                    <li>• You'll receive updates via email</li>
                    <li>• Track your application status in your dashboard</li>
                    <li>• We typically respond within 5-7 business days</li>
                  </ul>
                </div>
                <div className="flex gap-4 justify-center">
                  <Link to="/candidate/applications">
                    <Button
                      className={isWireframe ? 'border-2 border-gray-600' : 'bg-[#2563EB] hover:bg-[#1d4ed8]'}
                      variant={isWireframe ? 'outline' : 'default'}
                    >
                      View My Applications
                    </Button>
                  </Link>
                  <Link to="/jobs">
                    <Button
                      variant="outline"
                      className={isWireframe ? 'border-2 border-gray-400' : ''}
                    >
                      Browse More Jobs
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar isAuthenticated userRole="candidate" />
      
      <div className={isWireframe ? 'bg-gray-100 py-8' : 'bg-[#F8FAFC] py-8'}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link to={`/jobs/${id}`} className={isWireframe ? 'text-black underline' : 'text-[#2563EB] hover:underline'}>
              ← Back to Job Details
            </Link>
          </div>

          {/* Page Header */}
          <div className="mb-8">
            <h1 className={isWireframe ? 'text-3xl font-bold text-black mb-2' : 'text-3xl font-bold text-[#0F172A] mb-2'}>
              Apply for Position
            </h1>
            <p className={isWireframe ? 'text-black' : 'text-gray-600'}>
              Complete the form below to submit your application
            </p>
          </div>

          {/* Job Summary */}
          <div className={cardStyles}>
            <div className="flex gap-4 items-start">
              <div className={isWireframe ? 'w-12 h-12 border-2 border-gray-600 flex items-center justify-center flex-shrink-0' : 'w-12 h-12 bg-gradient-to-br from-[#EB6B25] to-[#2563EB] rounded-lg flex items-center justify-center flex-shrink-0'}>
                <Building2 className={isWireframe ? 'h-6 w-6 text-black' : 'h-6 w-6 text-white'} />
              </div>
              <div className="flex-1">
                <h2 className={isWireframe ? 'text-xl font-bold text-black mb-1' : 'text-xl font-semibold text-[#0F172A] mb-1'}>
                  Frontend Developer Intern
                </h2>
                <p className={isWireframe ? 'text-black mb-2' : 'text-gray-700 mb-2'}>
                  TechCorp
                </p>
                <div className="flex flex-wrap gap-3 text-sm">
                  <div className="flex items-center gap-1">
                    <MapPin className={isWireframe ? 'h-4 w-4 text-black' : 'h-4 w-4 text-gray-500'} />
                    <span className={isWireframe ? 'text-black' : 'text-gray-600'}>San Francisco, CA</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Briefcase className={isWireframe ? 'h-4 w-4 text-black' : 'h-4 w-4 text-gray-500'} />
                    <span className={isWireframe ? 'text-black' : 'text-gray-600'}>Internship</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <DollarSign className={isWireframe ? 'h-4 w-4 text-black' : 'h-4 w-4 text-gray-500'} />
                    <span className={isWireframe ? 'text-black' : 'text-gray-600'}>$25-35/hr</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Personal Information */}
            <div className={cardStyles}>
              <h3 className={isWireframe ? 'text-lg font-bold text-black mb-4' : 'text-lg font-semibold text-[#0F172A] mb-4'}>
                Personal Information
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className={isWireframe ? 'text-black' : ''}>
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      required
                      defaultValue="John"
                      className={isWireframe ? 'border-2 border-gray-400 mt-1' : 'mt-1'}
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className={isWireframe ? 'text-black' : ''}>
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      required
                      defaultValue="Doe"
                      className={isWireframe ? 'border-2 border-gray-400 mt-1' : 'mt-1'}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className={isWireframe ? 'text-black' : ''}>
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    defaultValue="john.doe@example.com"
                    className={isWireframe ? 'border-2 border-gray-400 mt-1' : 'mt-1'}
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className={isWireframe ? 'text-black' : ''}>
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    defaultValue="+1 (555) 123-4567"
                    className={isWireframe ? 'border-2 border-gray-400 mt-1' : 'mt-1'}
                  />
                </div>

                <div>
                  <Label htmlFor="location" className={isWireframe ? 'text-black' : ''}>
                    Current Location *
                  </Label>
                  <Input
                    id="location"
                    required
                    defaultValue="San Francisco, CA"
                    className={isWireframe ? 'border-2 border-gray-400 mt-1' : 'mt-1'}
                  />
                </div>
              </div>
            </div>

            {/* Resume */}
            <div className={cardStyles}>
              <h3 className={isWireframe ? 'text-lg font-bold text-black mb-4' : 'text-lg font-semibold text-[#0F172A] mb-4'}>
                Resume/CV *
              </h3>
              
              <div className="space-y-4">
                <RadioGroup defaultValue="existing">
                  <div className="flex items-center space-x-2 mb-3">
                    <RadioGroupItem value="existing" id="existing" />
                    <Label htmlFor="existing" className={isWireframe ? 'text-black cursor-pointer' : 'cursor-pointer'}>
                      Use my existing resume
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="upload" id="upload" />
                    <Label htmlFor="upload" className={isWireframe ? 'text-black cursor-pointer' : 'cursor-pointer'}>
                      Upload a new resume
                    </Label>
                  </div>
                </RadioGroup>

                <div className={isWireframe ? 'border-2 border-gray-400 p-4 flex items-center gap-3' : 'border border-gray-200 rounded-lg p-4 flex items-center gap-3 bg-[#F8FAFC]'}>
                  <FileText className={isWireframe ? 'h-8 w-8 text-black' : 'h-8 w-8 text-[#2563EB]'} />
                  <div className="flex-1">
                    <p className={isWireframe ? 'font-bold text-black' : 'font-medium text-[#0F172A]'}>
                      John_Doe_Resume.pdf
                    </p>
                    <p className={isWireframe ? 'text-sm text-black' : 'text-sm text-gray-600'}>
                      Last updated: March 1, 2026
                    </p>
                  </div>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className={isWireframe ? 'border-2 border-gray-400' : ''}
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    Replace
                  </Button>
                </div>

                <p className={isWireframe ? 'text-sm text-black' : 'text-sm text-gray-500'}>
                  Accepted formats: PDF, DOC, DOCX (max 5MB)
                </p>
              </div>
            </div>

            {/* Cover Letter */}
            <div className={cardStyles}>
              <h3 className={isWireframe ? 'text-lg font-bold text-black mb-4' : 'text-lg font-semibold text-[#0F172A] mb-4'}>
                Cover Letter *
              </h3>
              <div>
                <Label htmlFor="coverLetter" className={isWireframe ? 'text-black' : ''}>
                  Why are you interested in this position?
                </Label>
                <Textarea
                  id="coverLetter"
                  required
                  rows={8}
                  placeholder="Tell us about your interest in this role, relevant experience, and what makes you a great fit..."
                  className={isWireframe ? 'border-2 border-gray-400 mt-2' : 'mt-2'}
                />
                <p className={isWireframe ? 'text-sm text-black mt-2' : 'text-sm text-gray-500 mt-2'}>
                  Minimum 100 characters
                </p>
              </div>
            </div>

            {/* Additional Questions */}
            <div className={cardStyles}>
              <h3 className={isWireframe ? 'text-lg font-bold text-black mb-4' : 'text-lg font-semibold text-[#0F172A] mb-4'}>
                Additional Questions
              </h3>
              <div className="space-y-6">
                <div>
                  <Label htmlFor="availability" className={isWireframe ? 'text-black' : ''}>
                    When are you available to start? *
                  </Label>
                  <Input
                    id="availability"
                    required
                    placeholder="e.g., Immediately, 2 weeks notice, June 2026"
                    className={isWireframe ? 'border-2 border-gray-400 mt-1' : 'mt-1'}
                  />
                </div>

                <div>
                  <Label htmlFor="experience" className={isWireframe ? 'text-black' : ''}>
                    Do you have experience with React? *
                  </Label>
                  <RadioGroup defaultValue="yes" className="mt-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="react-yes" />
                      <Label htmlFor="react-yes" className={isWireframe ? 'text-black cursor-pointer' : 'cursor-pointer'}>
                        Yes
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="react-no" />
                      <Label htmlFor="react-no" className={isWireframe ? 'text-black cursor-pointer' : 'cursor-pointer'}>
                        No
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label className={isWireframe ? 'text-black mb-2 block' : 'mb-2 block'}>
                    Are you legally authorized to work in the United States? *
                  </Label>
                  <RadioGroup defaultValue="yes">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="auth-yes" />
                      <Label htmlFor="auth-yes" className={isWireframe ? 'text-black cursor-pointer' : 'cursor-pointer'}>
                        Yes
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="auth-no" />
                      <Label htmlFor="auth-no" className={isWireframe ? 'text-black cursor-pointer' : 'cursor-pointer'}>
                        No
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className={cardStyles}>
              <div className="space-y-4">
                <div className="flex items-start space-x-2">
                  <Checkbox id="terms" required />
                  <div>
                    <Label
                      htmlFor="terms"
                      className={isWireframe ? 'text-black cursor-pointer' : 'cursor-pointer'}
                    >
                      I agree to the terms and conditions *
                    </Label>
                    <p className={isWireframe ? 'text-sm text-black mt-1' : 'text-sm text-gray-500 mt-1'}>
                      By submitting this application, I confirm that the information provided is accurate and complete.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox id="consent" required />
                  <div>
                    <Label
                      htmlFor="consent"
                      className={isWireframe ? 'text-black cursor-pointer' : 'cursor-pointer'}
                    >
                      I consent to data processing *
                    </Label>
                    <p className={isWireframe ? 'text-sm text-black mt-1' : 'text-sm text-gray-500 mt-1'}>
                      I understand that my personal data will be processed according to the company's privacy policy.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Buttons */}
            <div className="flex gap-4 justify-end">
              <Link to={`/jobs/${id}`}>
                <Button
                  type="button"
                  variant="outline"
                  className={isWireframe ? 'border-2 border-gray-400' : ''}
                >
                  Cancel
                </Button>
              </Link>
              <Button
                type="submit"
                className={isWireframe ? 'border-2 border-gray-600 px-8' : 'bg-[#2563EB] hover:bg-[#1d4ed8] px-8'}
                variant={isWireframe ? 'outline' : 'default'}
              >
                Submit Application
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}