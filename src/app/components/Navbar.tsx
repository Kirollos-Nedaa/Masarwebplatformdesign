import { Link } from 'react-router';
import { Building2, User, LogOut, Menu, Briefcase } from 'lucide-react';
import { useDesign } from '../context/DesignContext';
import { Button } from './ui/button';

interface NavbarProps {
  userRole?: 'candidate' | 'company' | 'admin' | null;
  isAuthenticated?: boolean;
}

export function Navbar({ userRole = null, isAuthenticated = false }: NavbarProps) {
  const { mode } = useDesign();
  const isWireframe = mode === 'wireframe';

  const wireframeStyles = isWireframe
    ? 'bg-white border-2 border-gray-400'
    : 'bg-white shadow-sm border-b border-gray-200';

  const logoStyles = isWireframe
    ? 'text-black font-bold text-xl'
    : 'text-[#2563EB] font-bold text-xl';

  const buttonVariant = isWireframe ? 'outline' : 'default';

  return (
    <nav className={`${wireframeStyles} sticky top-0 z-50`}>
      <div className="flex items-center justify-between max-w-7xl mx-auto p-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          {!isWireframe && (
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2563EB] to-[#EB6B25] flex items-center justify-center">
              <Briefcase className="h-5 w-5 text-white" />
            </div>
          )}
          <span className={logoStyles}>Masar</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          <Link
            to="/jobs"
            className={isWireframe ? 'text-black' : 'text-gray-700 hover:text-[#2563EB]'}
          >
            Find Jobs
          </Link>

          {!isAuthenticated ? (
            <>
              <Link
                to="/login"
                className={isWireframe ? 'text-black' : 'text-gray-700 hover:text-[#2563EB]'}
              >
                Login
              </Link>
              <Link to="/register">
                <Button
                  variant={buttonVariant}
                  className={!isWireframe ? 'bg-[#2563EB] hover:bg-[#1d4ed8]' : ''}
                >
                  Sign Up
                </Button>
              </Link>
            </>
          ) : (
            <>
              {userRole === 'candidate' && (
                <>
                  <Link
                    to="/candidate/dashboard"
                    className={isWireframe ? 'text-black' : 'text-gray-700 hover:text-[#2563EB]'}
                  >
                    Dashboard
                  </Link>
                  <Link
                    to="/candidate/applications"
                    className={isWireframe ? 'text-black' : 'text-gray-700 hover:text-[#2563EB]'}
                  >
                    Applications
                  </Link>
                </>
              )}
              {userRole === 'company' && (
                <>
                  <Link
                    to="/company/dashboard"
                    className={isWireframe ? 'text-black' : 'text-gray-700 hover:text-[#2563EB]'}
                  >
                    Dashboard
                  </Link>
                  <Link to="/company/post-job">
                    <Button
                      variant={buttonVariant}
                      className={!isWireframe ? 'bg-[#22C55E] hover:bg-[#16a34a]' : ''}
                    >
                      Post a Job
                    </Button>
                  </Link>
                </>
              )}
              {userRole === 'admin' && (
                <Link
                  to="/admin/dashboard"
                  className={isWireframe ? 'text-black' : 'text-gray-700 hover:text-[#2563EB]'}
                >
                  Admin Dashboard
                </Link>
              )}
              <Link to="/candidate/profile">
                <Button variant="ghost" size="icon">
                  <User className={isWireframe ? 'text-black' : 'text-gray-700'} />
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}