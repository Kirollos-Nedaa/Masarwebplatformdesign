import { useNavigate } from 'react-router';
import { Home, ArrowLeft, Search, MapPin } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { useDesign } from '../context/DesignContext';
import { Button } from '../components/ui/button';

export default function NotFound() {
  const { mode } = useDesign();
  const isWireframe = mode === 'wireframe';
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col" style={{ background: isWireframe ? '#f5f5f5' : '#F8FAFC' }}>
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-2xl w-full text-center">

          {/* Illustration / Number */}
          <div className="relative mb-8 flex justify-center">
            {isWireframe ? (
              <div className="border-4 border-gray-400 w-56 h-56 flex items-center justify-center">
                <span className="text-7xl font-bold text-gray-600">404</span>
              </div>
            ) : (
              <div className="relative">
                {/* Background circle decoration */}
                <div
                  className="w-56 h-56 rounded-full flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #EFF6FF 0%, #FFF7ED 100%)' }}
                >
                  <span
                    className="text-8xl font-bold select-none"
                    style={{ color: '#2563EB', opacity: 0.15 }}
                  >
                    404
                  </span>
                </div>
                {/* Foreground number */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className="text-7xl font-bold"
                    style={{ color: '#2563EB' }}
                  >
                    404
                  </span>
                </div>
                {/* Floating road pin */}
                <div
                  className="absolute -top-3 -right-3 w-10 h-10 rounded-full flex items-center justify-center shadow-md"
                  style={{ background: '#EB6B25' }}
                >
                  <MapPin className="h-5 w-5 text-white" />
                </div>
              </div>
            )}
          </div>

          {/* Heading */}
          <h1
            className="mb-3"
            style={{
              fontSize: '2rem',
              fontWeight: 700,
              color: isWireframe ? '#000' : '#0F172A',
            }}
          >
            Page Not Found
          </h1>

          {/* Sub-heading */}
          <p
            className="mb-2"
            style={{
              fontSize: '1.1rem',
              color: isWireframe ? '#444' : '#64748B',
            }}
          >
            Oops! It looks like this road leads nowhere.
          </p>
          <p
            className="mb-10"
            style={{
              fontSize: '0.95rem',
              color: isWireframe ? '#666' : '#94A3B8',
            }}
          >
            The page you're looking for might have been moved, deleted, or never existed. Let's get you back on the right path.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              onClick={() => navigate(-1)}
              variant={isWireframe ? 'outline' : 'outline'}
              className={isWireframe ? 'border-2 border-gray-500 gap-2' : 'gap-2 border-[#2563EB] text-[#2563EB] hover:bg-blue-50'}
            >
              <ArrowLeft className="h-4 w-4" />
              Go Back
            </Button>

            <Button
              onClick={() => navigate('/')}
              className={
                isWireframe
                  ? 'border-2 border-gray-700 gap-2'
                  : 'gap-2 text-white'
              }
              style={
                isWireframe
                  ? { background: '#fff', color: '#000' }
                  : { background: '#2563EB' }
              }
              variant={isWireframe ? 'outline' : 'default'}
            >
              <Home className="h-4 w-4" />
              Back to Home
            </Button>
          </div>

          {/* Footer note */}
          {!isWireframe && (
            <p className="mt-10" style={{ fontSize: '0.8rem', color: '#CBD5E1' }}>
              Error code: <span style={{ fontFamily: 'monospace', color: '#94A3B8' }}>404_NOT_FOUND</span>
            </p>
          )}
          {isWireframe && (
            <p className="mt-10 text-xs text-gray-400 border-t border-gray-300 pt-4">
              [Wireframe] Error code: 404_NOT_FOUND
            </p>
          )}
        </div>
      </main>
    </div>
  );
}
