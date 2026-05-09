import { Link } from 'react-router';
import { Briefcase } from 'lucide-react';
import { useDesign } from '../context/DesignContext';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';

export default function Login() {
  const { mode } = useDesign();
  const isWireframe = mode === 'wireframe';

  const containerStyles = isWireframe
    ? 'min-h-screen flex items-center justify-center bg-gray-100'
    : 'min-h-screen flex items-center justify-center bg-gradient-to-br from-[#EBF5FF] to-[#F8FAFC]';

  const cardStyles = isWireframe
    ? 'bg-white border-2 border-gray-400 p-8 w-full max-w-md'
    : 'bg-white rounded-lg shadow-lg p-8 w-full max-w-md';

  return (
    <div className={containerStyles}>
      <div className={cardStyles}>
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {!isWireframe && (
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#2563EB] to-[#EB6B25] flex items-center justify-center">
              <Briefcase className="h-6 w-6 text-white" />
            </div>
          )}
          <h1 className={isWireframe ? 'text-2xl font-bold text-black' : 'text-2xl font-bold text-[#0F172A]'}>
            Masar
          </h1>
        </div>

        <h2 className={isWireframe ? 'text-xl font-bold text-black mb-2' : 'text-2xl font-semibold text-[#0F172A] mb-2'}>
          Welcome Back
        </h2>
        <p className={isWireframe ? 'text-black mb-6' : 'text-gray-600 mb-6'}>
          Sign in to your account to continue
        </p>

        <form className="space-y-4">
          <div>
            <Label htmlFor="email" className={isWireframe ? 'text-black' : ''}>
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              className={isWireframe ? 'border-2 border-gray-400 mt-1' : 'mt-1'}
            />
          </div>

          <div>
            <Label htmlFor="password" className={isWireframe ? 'text-black' : ''}>
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              className={isWireframe ? 'border-2 border-gray-400 mt-1' : 'mt-1'}
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className={isWireframe ? 'border-2 border-gray-400' : ''}
              />
              <span className={isWireframe ? 'text-sm text-black' : 'text-sm text-gray-600'}>
                Remember me
              </span>
            </label>
            <Link
              to="/forgot-password"
              className={isWireframe ? 'text-sm text-black underline' : 'text-sm text-[#2563EB] hover:underline'}
            >
              Forgot password?
            </Link>
          </div>

          <Link to="/candidate/dashboard">
            <Button
              type="button"
              className={isWireframe ? 'w-full border-2 border-gray-600' : 'w-full bg-[#2563EB] hover:bg-[#1d4ed8]'}
              variant={isWireframe ? 'outline' : 'default'}
            >
              Sign In
            </Button>
          </Link>
        </form>

        <div className="mt-6 text-center">
          <p className={isWireframe ? 'text-sm text-black' : 'text-sm text-gray-600'}>
            Don't have an account?{' '}
            <Link
              to="/register"
              className={isWireframe ? 'text-black underline font-bold' : 'text-[#2563EB] hover:underline font-medium'}
            >
              Sign up
            </Link>
          </p>
        </div>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className={isWireframe ? 'w-full border-t-2 border-gray-400' : 'w-full border-t border-gray-300'}></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className={isWireframe ? 'px-2 bg-white text-black' : 'px-2 bg-white text-gray-500'}>
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <Button
              variant="outline"
              className={isWireframe ? 'border-2 border-gray-400' : ''}
            >
              Google
            </Button>
            <Button
              variant="outline"
              className={isWireframe ? 'border-2 border-gray-400' : ''}
            >
              LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}