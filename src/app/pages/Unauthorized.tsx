import { useNavigate } from 'react-router';
import { ShieldOff, Home, ArrowLeft, LogIn, Lock } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { useDesign } from '../context/DesignContext';
import { Button } from '../components/ui/button';

export default function Unauthorized() {
  const { mode } = useDesign();
  const isWireframe = mode === 'wireframe';
  const navigate = useNavigate();

  const reasons = [
    'You are not logged in to your account.',
    'Your session may have expired.',
    'You don\'t have the required role to access this page.',
    'The resource is restricted to specific user types.',
  ];

  return (
    <div className="min-h-screen flex flex-col" style={{ background: isWireframe ? '#f5f5f5' : '#F8FAFC' }}>
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-2xl w-full text-center">

          {/* Illustration / Icon */}
          <div className="relative mb-8 flex justify-center">
            {isWireframe ? (
              <div className="border-4 border-gray-400 w-56 h-56 flex flex-col items-center justify-center gap-2">
                <Lock className="h-16 w-16 text-gray-600" />
                <span className="text-4xl font-bold text-gray-600">403</span>
              </div>
            ) : (
              <div className="relative">
                {/* Background circle */}
                <div
                  className="w-56 h-56 rounded-full flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #FEF3C7 0%, #FEE2E2 100%)' }}
                >
                  <span
                    className="text-8xl font-bold select-none"
                    style={{ color: '#EB6B25', opacity: 0.12 }}
                  >
                    403
                  </span>
                </div>
                {/* Centered icon */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center shadow"
                    style={{ background: '#FFF7ED', border: '2px solid #EB6B25' }}
                  >
                    <ShieldOff className="h-8 w-8" style={{ color: '#EB6B25' }} />
                  </div>
                  <span
                    className="text-4xl font-bold"
                    style={{ color: '#EB6B25' }}
                  >
                    403
                  </span>
                </div>
                {/* Lock badge */}
                <div
                  className="absolute -top-3 -right-3 w-10 h-10 rounded-full flex items-center justify-center shadow-md"
                  style={{ background: '#DC2626' }}
                >
                  <Lock className="h-5 w-5 text-white" />
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
            Access Denied
          </h1>

          {/* Sub-heading */}
          <p
            className="mb-2"
            style={{
              fontSize: '1.1rem',
              color: isWireframe ? '#444' : '#64748B',
            }}
          >
            You don't have permission to view this page.
          </p>
          <p
            className="mb-10"
            style={{
              fontSize: '0.95rem',
              color: isWireframe ? '#666' : '#94A3B8',
            }}
          >
            This area is restricted. Please check your credentials or contact your administrator if you believe this is a mistake.
          </p>

          {/* Reasons box */}
          <div
            className="mb-10 p-5 text-left"
            style={{
              background: isWireframe ? '#fff' : '#fff',
              border: isWireframe ? '2px solid #9CA3AF' : '1px solid #FED7AA',
              borderRadius: isWireframe ? 0 : '0.75rem',
              borderLeft: isWireframe ? '4px solid #6B7280' : '4px solid #EB6B25',
            }}
          >
            <p
              className="mb-3"
              style={{
                fontSize: '0.85rem',
                fontWeight: 600,
                color: isWireframe ? '#000' : '#92400E',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              This may have happened because:
            </p>
            <ul className="space-y-2">
              {reasons.map((reason, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2"
                  style={{
                    fontSize: '0.875rem',
                    color: isWireframe ? '#333' : '#64748B',
                  }}
                >
                  <span
                    style={{
                      marginTop: '0.15rem',
                      flexShrink: 0,
                      width: '1.1rem',
                      height: '1.1rem',
                      borderRadius: isWireframe ? 0 : '50%',
                      background: isWireframe ? '#E5E7EB' : '#FFF7ED',
                      border: isWireframe ? '1px solid #6B7280' : '1px solid #FED7AA',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.6rem',
                      color: isWireframe ? '#374151' : '#EB6B25',
                      fontWeight: 700,
                    }}
                  >
                    {i + 1}
                  </span>
                  {reason}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              onClick={() => navigate(-1)}
              variant="outline"
              className={isWireframe ? 'border-2 border-gray-500 gap-2' : 'gap-2 border-gray-300 text-gray-600 hover:bg-gray-50'}
            >
              <ArrowLeft className="h-4 w-4" />
              Go Back
            </Button>

            <Button
              onClick={() => navigate('/')}
              className={isWireframe ? 'border-2 border-gray-700 gap-2' : 'gap-2 text-white'}
              style={isWireframe ? { background: '#fff', color: '#000' } : { background: '#2563EB' }}
              variant={isWireframe ? 'outline' : 'default'}
            >
              <Home className="h-4 w-4" />
              Back to Home
            </Button>
          </div>

          {/* Footer note */}
          {!isWireframe && (
            <p className="mt-10" style={{ fontSize: '0.8rem', color: '#CBD5E1' }}>
              Error code: <span style={{ fontFamily: 'monospace', color: '#94A3B8' }}>403_FORBIDDEN</span>
            </p>
          )}
          {isWireframe && (
            <p className="mt-10 text-xs text-gray-400 border-t border-gray-300 pt-4">
              [Wireframe] Error code: 403_FORBIDDEN
            </p>
          )}
        </div>
      </main>
    </div>
  );
}
