import { useState } from 'react';
import { Upload, Linkedin, Link as LinkIcon, MapPin, Users, Globe, Building2, ShieldCheck, Mail, KeyRound, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router';
import { Navbar } from '../components/Navbar';
import { DashboardSidebar } from '../components/DashboardSidebar';
import { useDesign } from '../context/DesignContext';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';

const industries = ['Technology', 'Finance', 'Healthcare', 'Education', 'Retail', 'Manufacturing'];

type LoginProvider = 'google' | 'email';

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

export default function CompanyProfile() {
  const { mode } = useDesign();
  const isWireframe = mode === 'wireframe';
  const navigate = useNavigate();
  const [loginProvider, setLoginProvider] = useState<LoginProvider>('email');

  const cardStyles = isWireframe
    ? 'bg-white border-2 border-gray-400 p-6 mb-6'
    : 'bg-white border border-gray-200 rounded-lg p-6 mb-6';

  const sectionRowStyles = isWireframe
    ? 'flex items-center justify-between border-2 border-gray-300 p-4'
    : 'flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg p-4';

  return (
    <div className={isWireframe ? 'bg-white' : 'bg-[#F8FAFC]'}>
      <Navbar userRole="company" isAuthenticated />
      <div className="flex">
        <DashboardSidebar userRole="company" />

        <main className="flex-1 p-8">
          <div className="max-w-4xl mx-auto">

            {/* ── Page Header ── */}
            <div className="mb-8">
              <h1 className={isWireframe ? 'text-3xl font-bold text-black mb-1' : 'text-3xl font-bold text-[#0F172A] mb-1'}>
                Company Profile
              </h1>
              <p className={isWireframe ? 'text-black' : 'text-gray-500'}>
                Manage your company information, branding, and account settings.
              </p>
            </div>

            {/* ═══════════════════════════════════════
                SECTION 1 — COMPANY PROFILE
            ════════════════════════════════════════ */}

            {/* 1. Company Identity (Logo + Name combined) */}
            <div className={cardStyles}>
              <h2 className={isWireframe ? 'text-xl font-bold text-black mb-5' : 'text-xl font-semibold text-[#0F172A] mb-5'}>
                Company Identity
              </h2>
              <div className="flex items-start gap-6">
                {/* Logo preview */}
                <div className="flex-shrink-0">
                  <div className={isWireframe
                    ? 'w-24 h-24 border-2 border-gray-400 flex items-center justify-center'
                    : 'w-24 h-24 rounded-xl border border-gray-200 flex items-center justify-center bg-gray-50 shadow-sm'}>
                    <Building2 className={isWireframe ? 'h-12 w-12 text-black' : 'h-12 w-12 text-gray-300'} />
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className={`mt-2 w-24 text-xs ${isWireframe ? 'border-2 border-gray-400' : ''}`}
                  >
                    <Upload className="h-3 w-3 mr-1" />
                    Upload
                  </Button>
                  <p className={`text-xs mt-1 text-center ${isWireframe ? 'text-black' : 'text-gray-400'}`}>
                    PNG, JPG · 2MB
                  </p>
                </div>

                {/* Company name + tagline */}
                <div className="flex-1 space-y-4">
                  <div>
                    <Label htmlFor="companyName" className={isWireframe ? 'text-black' : ''}>Company Name</Label>
                    <Input id="companyName" defaultValue="TechCorp Inc." className={isWireframe ? 'border-2 border-gray-400 mt-1' : 'mt-1'} />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="industry" className={isWireframe ? 'text-black' : ''}>Industry</Label>
                      <Select defaultValue="technology">
                        <SelectTrigger className={isWireframe ? 'border-2 border-gray-400 mt-1' : 'mt-1'}>
                          <SelectValue placeholder="Select industry" />
                        </SelectTrigger>
                        <SelectContent>
                          {industries.map((industry) => (
                            <SelectItem key={industry} value={industry.toLowerCase()}>{industry}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="companySize" className={isWireframe ? 'text-black flex items-center gap-2' : 'flex items-center gap-2'}>
                        <Users className="h-4 w-4" /> Company Size
                      </Label>
                      <Select defaultValue="51-200">
                        <SelectTrigger className={isWireframe ? 'border-2 border-gray-400 mt-1' : 'mt-1'}>
                          <SelectValue placeholder="Select size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10">1–10 employees</SelectItem>
                          <SelectItem value="11-50">11–50 employees</SelectItem>
                          <SelectItem value="51-200">51–200 employees</SelectItem>
                          <SelectItem value="201-500">201–500 employees</SelectItem>
                          <SelectItem value="501+">501+ employees</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. About the Company */}
            <div className={cardStyles}>
              <h2 className={isWireframe ? 'text-xl font-bold text-black mb-5' : 'text-xl font-semibold text-[#0F172A] mb-5'}>
                About the Company
              </h2>
              <div>
                <Label htmlFor="description" className={isWireframe ? 'text-black' : ''}>Company Description</Label>
                <Textarea
                  id="description"
                  rows={5}
                  defaultValue="TechCorp is a leading technology company focused on developing innovative software solutions for businesses worldwide. We're committed to creating a positive impact through technology and fostering a collaborative work environment."
                  className={isWireframe ? 'border-2 border-gray-400 mt-1' : 'mt-1'}
                />
              </div>
            </div>

            {/* 3. Contact Information */}
            <div className={cardStyles}>
              <h2 className={isWireframe ? 'text-xl font-bold text-black mb-5' : 'text-xl font-semibold text-[#0F172A] mb-5'}>
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email" className={isWireframe ? 'text-black' : ''}>Contact Email</Label>
                    <Input id="email" type="email" defaultValue="contact@techcorp.com" className={isWireframe ? 'border-2 border-gray-400 mt-1' : 'mt-1'} />
                  </div>
                  <div>
                    <Label htmlFor="phone" className={isWireframe ? 'text-black' : ''}>Phone Number</Label>
                    <Input id="phone" defaultValue="+1 (555) 987-6543" className={isWireframe ? 'border-2 border-gray-400 mt-1' : 'mt-1'} />
                  </div>
                </div>
                <div>
                  <Label htmlFor="address" className={isWireframe ? 'text-black flex items-center gap-2' : 'flex items-center gap-2'}>
                    <MapPin className="h-4 w-4" /> Headquarters Address
                  </Label>
                  <Input id="address" defaultValue="123 Tech Street, San Francisco, CA 94105" className={isWireframe ? 'border-2 border-gray-400 mt-1' : 'mt-1'} />
                </div>
              </div>
            </div>

            {/* 4. Online Presence */}
            <div className={cardStyles}>
              <h2 className={isWireframe ? 'text-xl font-bold text-black mb-5' : 'text-xl font-semibold text-[#0F172A] mb-5'}>
                Online Presence
              </h2>
              <div className="space-y-4">
                <div>
                  <Label className={isWireframe ? 'text-black flex items-center gap-2' : 'flex items-center gap-2'}>
                    <Globe className="h-4 w-4" /> Company Website
                  </Label>
                  <Input placeholder="https://yourcompany.com" defaultValue="https://techcorp.com" className={isWireframe ? 'border-2 border-gray-400 mt-1' : 'mt-1'} />
                </div>
                <div>
                  <Label className={isWireframe ? 'text-black flex items-center gap-2' : 'flex items-center gap-2'}>
                    <Linkedin className="h-4 w-4" /> LinkedIn
                  </Label>
                  <Input placeholder="https://linkedin.com/company/yourcompany" defaultValue="https://linkedin.com/company/techcorp" className={isWireframe ? 'border-2 border-gray-400 mt-1' : 'mt-1'} />
                </div>
                <div>
                  <Label className={isWireframe ? 'text-black flex items-center gap-2' : 'flex items-center gap-2'}>
                    <LinkIcon className="h-4 w-4" /> Other Link
                  </Label>
                  <Input placeholder="https://..." defaultValue="https://twitter.com/techcorp" className={isWireframe ? 'border-2 border-gray-400 mt-1' : 'mt-1'} />
                </div>
              </div>
            </div>

            {/* ── Save Profile Button ── */}
            <div className="flex justify-end mb-10">
              <Button
                className={isWireframe ? 'border-2 border-gray-600 px-8' : 'bg-[#2563EB] hover:bg-[#1d4ed8] px-8'}
                variant={isWireframe ? 'outline' : 'default'}
              >
                Save Changes
              </Button>
            </div>

            {/* ═══════════════════════════════════════
                SECTION 2 — ACCOUNT & SECURITY
            ════════════════════════════════════════ */}

            {/* Divider label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-2">
                <ShieldCheck className={isWireframe ? 'h-5 w-5 text-black' : 'h-5 w-5 text-[#2563EB]'} />
                <span className={isWireframe ? 'text-lg font-bold text-black' : 'text-lg font-semibold text-[#0F172A]'}>
                  Account &amp; Security
                </span>
              </div>
              <div className={`flex-1 h-px ${isWireframe ? 'bg-gray-400' : 'bg-gray-200'}`} />
            </div>

            {/* Account & Security Card */}
            <div className={isWireframe ? 'bg-white border-2 border-gray-400 p-6 mb-6' : 'bg-white border border-gray-200 rounded-lg overflow-hidden mb-6'}>

              {/* ── Sign-in Method row ── */}
              <div className={isWireframe ? '' : 'px-6 pt-6 pb-5'}>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className={isWireframe ? 'font-bold text-black text-sm' : 'text-sm font-semibold text-[#0F172A]'}>
                      Sign-in Method
                    </p>
                    <p className={isWireframe ? 'text-black text-xs mt-0.5' : 'text-gray-400 text-xs mt-0.5'}>
                      How you authenticate to your account
                    </p>
                  </div>
                  {/* Demo switcher */}
                  <div className={`flex items-center gap-1 text-xs ${isWireframe ? 'border-2 border-gray-300 p-1' : 'bg-gray-100 rounded-md p-1'}`}>
                    <button
                      onClick={() => setLoginProvider('google')}
                      className={`px-2 py-1 rounded transition-colors ${
                        isWireframe
                          ? loginProvider === 'google' ? 'bg-gray-300 font-bold' : 'hover:bg-gray-100'
                          : loginProvider === 'google' ? 'bg-white shadow text-[#0F172A] font-medium' : 'text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      Google
                    </button>
                    <button
                      onClick={() => setLoginProvider('email')}
                      className={`px-2 py-1 rounded transition-colors ${
                        isWireframe
                          ? loginProvider === 'email' ? 'bg-gray-300 font-bold' : 'hover:bg-gray-100'
                          : loginProvider === 'email' ? 'bg-white shadow text-[#0F172A] font-medium' : 'text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      Email
                    </button>
                  </div>
                </div>

                {/* Provider row */}
                {loginProvider === 'google' ? (
                  <div className={isWireframe
                    ? 'flex items-center gap-4 border-2 border-gray-300 p-4'
                    : 'flex items-center gap-4 border border-gray-200 rounded-lg p-4 bg-gray-50'}>
                    <div className={isWireframe
                      ? 'w-10 h-10 border-2 border-gray-400 flex items-center justify-center flex-shrink-0'
                      : 'w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center flex-shrink-0'}>
                      {isWireframe
                        ? <span className="text-sm font-bold text-black">G</span>
                        : <GoogleIcon className="h-5 w-5" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={isWireframe ? 'font-bold text-black text-sm' : 'font-medium text-[#0F172A] text-sm'}>
                          Google
                        </span>
                        <span className={isWireframe
                          ? 'text-xs border border-gray-500 px-1.5 py-0.5 font-bold'
                          : 'inline-flex items-center gap-1 text-xs bg-[#22C55E]/10 text-[#16a34a] border border-[#22C55E]/25 px-2 py-0.5 rounded-full font-medium'}>
                          {!isWireframe && <CheckCircle2 className="h-3 w-3" />}
                          Active
                        </span>
                      </div>
                      <p className={isWireframe ? 'text-xs text-black mt-0.5' : 'text-xs text-gray-400 mt-0.5'}>
                        admin@techcorp.com
                      </p>
                    </div>
                    <span className={isWireframe ? 'text-xs text-black italic' : 'text-xs text-gray-400'}>
                      Connected via OAuth
                    </span>
                  </div>
                ) : (
                  <div className={isWireframe
                    ? 'flex items-center gap-4 border-2 border-gray-300 p-4'
                    : 'flex items-center gap-4 border border-gray-200 rounded-lg p-4 bg-gray-50'}>
                    <div className={isWireframe
                      ? 'w-10 h-10 border-2 border-gray-400 flex items-center justify-center flex-shrink-0'
                      : 'w-10 h-10 rounded-full bg-[#2563EB]/10 flex items-center justify-center flex-shrink-0'}>
                      <Mail className={isWireframe ? 'h-5 w-5 text-black' : 'h-5 w-5 text-[#2563EB]'} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={isWireframe ? 'font-bold text-black text-sm' : 'font-medium text-[#0F172A] text-sm'}>
                          Email &amp; Password
                        </span>
                        <span className={isWireframe
                          ? 'text-xs border border-gray-500 px-1.5 py-0.5 font-bold'
                          : 'inline-flex items-center gap-1 text-xs bg-[#22C55E]/10 text-[#16a34a] border border-[#22C55E]/25 px-2 py-0.5 rounded-full font-medium'}>
                          {!isWireframe && <CheckCircle2 className="h-3 w-3" />}
                          Active
                        </span>
                      </div>
                      <p className={isWireframe ? 'text-xs text-black mt-0.5' : 'text-xs text-gray-400 mt-0.5'}>
                        contact@techcorp.com
                      </p>
                    </div>
                    <span className={isWireframe ? 'text-xs text-black italic' : 'text-xs text-gray-400'}>
                      Direct login
                    </span>
                  </div>
                )}
              </div>

              {/* Divider */}
              <div className={isWireframe ? 'border-t-2 border-gray-300 my-4' : 'border-t border-gray-100 mx-6 my-1'} />

              {/* ── Password row ── */}
              <div className={isWireframe ? 'mt-4' : 'px-6 pt-3 pb-6'}>
                <div className={sectionRowStyles}>
                  <div className="flex items-center gap-3">
                    <div className={isWireframe
                      ? 'w-10 h-10 border-2 border-gray-400 flex items-center justify-center flex-shrink-0'
                      : 'w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0'}>
                      <KeyRound className={isWireframe ? 'h-5 w-5 text-black' : 'h-5 w-5 text-gray-500'} />
                    </div>
                    <div>
                      <p className={isWireframe ? 'font-bold text-black text-sm' : 'font-medium text-[#0F172A] text-sm'}>
                        Password
                      </p>
                      <p className={isWireframe ? 'text-xs text-black' : 'text-xs text-gray-400'}>
                        {loginProvider === 'google'
                          ? 'Managed by Google — no password set'
                          : 'Last changed: Never'}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant={loginProvider === 'google' ? 'outline' : (isWireframe ? 'outline' : 'default')}
                    disabled={loginProvider === 'google'}
                    className={
                      loginProvider === 'google'
                        ? (isWireframe ? 'border-2 border-gray-300 text-gray-400' : 'text-gray-400 border-gray-200 cursor-not-allowed')
                        : (isWireframe ? 'border-2 border-gray-600' : 'bg-[#2563EB] hover:bg-[#1d4ed8]')
                    }
                    onClick={() => navigate('/change-password?role=company')}
                    title={loginProvider === 'google' ? 'Password is managed by Google' : undefined}
                  >
                    Change Password
                  </Button>
                </div>
                {loginProvider === 'google' && (
                  <p className={`text-xs mt-2 ${isWireframe ? 'text-black' : 'text-gray-400'}`}>
                    Your account uses Google Sign-In. To change your password, visit your Google Account settings.
                  </p>
                )}
              </div>

            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
