import { Link } from 'react-router';
import { User, Building2, Briefcase } from 'lucide-react';
import { useDesign } from '../context/DesignContext';
import { Button } from '../components/ui/button';

export default function RoleSelection() {
  const { mode } = useDesign();
  const isWireframe = mode === 'wireframe';

  const containerStyles = isWireframe
    ? 'min-h-screen flex items-center justify-center bg-gray-100'
    : 'min-h-screen flex items-center justify-center bg-gradient-to-br from-[#EBF5FF] to-[#F8FAFC]';

  const cardStyles = isWireframe
    ? 'bg-white border-2 border-gray-400 p-8 w-full max-w-4xl'
    : 'bg-white rounded-lg shadow-lg p-8 w-full max-w-4xl';

  const roleCardStyles = isWireframe
    ? 'border-2 border-gray-400 p-8 text-center hover:bg-gray-100 cursor-pointer'
    : 'border-2 border-gray-200 rounded-lg p-8 text-center hover:border-[#2563EB] hover:shadow-md transition-all cursor-pointer';

  return (
    <div className={containerStyles}>
      <div className={cardStyles}>
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {!isWireframe && <Briefcase className="h-8 w-8 text-[#2563EB]" />}
          <h1 className={isWireframe ? 'text-2xl font-bold text-black' : 'text-2xl font-bold text-[#0F172A]'}>
            Masar
          </h1>
        </div>

        <h2 className={isWireframe ? 'text-xl font-bold text-black mb-4 text-center' : 'text-3xl font-semibold text-[#0F172A] mb-4 text-center'}>
          How would you like to use Masar?
        </h2>
        <p className={isWireframe ? 'text-black mb-12 text-center' : 'text-gray-600 mb-12 text-center'}>
          Select how you'll be using Masar
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Candidate Card */}
          <Link to="/candidate/dashboard">
            <div className={roleCardStyles}>
              <div className={isWireframe ? 'inline-flex items-center justify-center w-20 h-20 border-2 border-gray-600 mb-6' : 'inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#2563EB] to-[#1d4ed8] mb-6'}>
                <User className={isWireframe ? 'h-10 w-10 text-black' : 'h-10 w-10 text-white'} />
              </div>
              <h3 className={isWireframe ? 'text-xl font-bold text-black mb-3' : 'text-xl font-semibold text-[#0F172A] mb-3'}>
                I'm a Candidate
              </h3>
              <p className={isWireframe ? 'text-black mb-6' : 'text-gray-600 mb-6'}>
                Looking for internships or full-time positions to launch my career
              </p>
              <ul className={isWireframe ? 'text-left space-y-2 text-black text-sm' : 'text-left space-y-2 text-gray-600 text-sm'}>
                <li>• Search and apply to jobs</li>
                <li>• Build your professional profile</li>
                <li>• Track application status</li>
                <li>• Get matched with opportunities</li>
              </ul>
            </div>
          </Link>

          {/* Company Card */}
          <Link to="/company/dashboard">
            <div className={roleCardStyles}>
              <div className={isWireframe ? 'inline-flex items-center justify-center w-20 h-20 border-2 border-gray-600 mb-6' : 'inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#EB6B25] to-[#d35a1a] mb-6'}>
                <Building2 className={isWireframe ? 'h-10 w-10 text-black' : 'h-10 w-10 text-white'} />
              </div>
              <h3 className={isWireframe ? 'text-xl font-bold text-black mb-3' : 'text-xl font-semibold text-[#0F172A] mb-3'}>
                I'm a Company
              </h3>
              <p className={isWireframe ? 'text-black mb-6' : 'text-gray-600 mb-6'}>
                Looking to hire talented interns and employees for my organization
              </p>
              <ul className={isWireframe ? 'text-left space-y-2 text-black text-sm' : 'text-left space-y-2 text-gray-600 text-sm'}>
                <li>• Post job openings</li>
                <li>• Review candidate applications</li>
                <li>• Manage hiring pipeline</li>
                <li>• Access talent pool</li>
              </ul>
            </div>
          </Link>
        </div>

        <div className="mt-8 text-center">
          <p className={isWireframe ? 'text-sm text-black' : 'text-sm text-gray-600'}>
            Already have an account?{' '}
            <Link
              to="/login"
              className={isWireframe ? 'text-black underline font-bold' : 'text-[#2563EB] hover:underline font-medium'}
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}