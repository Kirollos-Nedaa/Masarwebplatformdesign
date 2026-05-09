import { Link } from 'react-router';
import {
  Search, Briefcase, Users, Building2, TrendingUp,
  MapPin, Code2, Palette, BarChart3, Megaphone,
  DollarSign, Stethoscope, GraduationCap, Settings,
  ArrowRight, CheckCircle, Star, Clock, ChevronRight
} from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { useDesign } from '../context/DesignContext';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';

/* ─── Static data ─────────────────────────────────────────── */

const stats = [
  { value: '12,500+', label: 'Jobs Posted' },
  { value: '3,200+',  label: 'Companies'   },
  { value: '48,000+', label: 'Candidates'  },
  { value: '89%',     label: 'Hiring Rate' },
];

const categories = [
  { label: 'Technology', icon: Code2,        count: 3240 },
  { label: 'Finance',       icon: Palette,      count: 980  },
  { label: 'Healthcare',     icon: BarChart3,    count: 1540 },
  { label: 'Education',            icon: Megaphone,    count: 720  },
  { label: 'Manufacturing',              icon: DollarSign,   count: 860  },
  { label: 'Retail',           icon: Stethoscope,  count: 610  },
  { label: 'Energy',            icon: GraduationCap,count: 430  },
  { label: 'Transportation',           icon: Settings,     count: 570  },
  { label: 'Hospitality',           icon: Settings,     count: 570  },
  { label: 'Construction',           icon: Settings,     count: 570  },
  { label: 'Agriculture',           icon: Settings,     count: 570  },
  { label: 'Media',           icon: Settings,     count: 570  },
  { label: 'Telecommunications',           icon: Settings,     count: 570  },
  { label: 'Government',           icon: Settings,     count: 570  },
  { label: 'NonProfit',           icon: Settings,     count: 570  },
  { label: 'Operations',           icon: Settings,     count: 570  },
  { label: 'Other',           icon: Settings,     count: 570  },
];

const featuredJobs = [
  {
    id: '1', title: 'Frontend Developer Intern', company: 'TechCorp',
    location: 'San Francisco, CA', type: 'Internship', salary: '$25–35/hr',
    postedDate: '2 days ago', logo: 'T', color: '#2563EB',
    description: 'Join our engineering team to build responsive web interfaces using React and TypeScript. You will collaborate directly with senior developers and ship features used by thousands of users.',
  },
  {
    id: '2', title: 'Software Engineer', company: 'StartupXYZ',
    location: 'Remote', type: 'Full-time', salary: '$120k–150k',
    postedDate: '1 week ago', logo: 'S', color: '#EB6B25',
    description: 'Design and build scalable backend services and REST APIs that power our core product. You will own full features end-to-end in a fast-moving, collaborative environment.',
  },
  {
    id: '3', title: 'Product Design Intern', company: 'DesignStudio',
    location: 'New York, NY', type: 'Internship', salary: '$20–30/hr',
    postedDate: '3 days ago', logo: 'D', color: '#22C55E',
    description: 'Work alongside our design team to craft intuitive user experiences for mobile and web. You will conduct user research, create wireframes, and deliver polished UI mockups in Figma.',
  },
  {
    id: '4', title: 'Data Analyst', company: 'DataFlow Inc.',
    location: 'Austin, TX', type: 'Full-time', salary: '$85k–105k',
    postedDate: '5 days ago', logo: 'F', color: '#8B5CF6',
    description: 'Analyze large datasets to uncover business insights and build dashboards that guide strategic decisions. You will work closely with product and growth teams to define key metrics.',
  },
  {
    id: '5', title: 'Marketing Coordinator', company: 'BrandCo',
    location: 'Chicago, IL', type: 'Part-time', salary: '$18–24/hr',
    postedDate: '4 days ago', logo: 'B', color: '#EC4899',
    description: 'Support our marketing team in planning and executing campaigns across social, email, and content channels. Ideal for someone detail-oriented who loves storytelling and brand strategy.',
  },
  {
    id: '6', title: 'Backend Engineer', company: 'CloudSystems',
    location: 'Seattle, WA', type: 'Full-time', salary: '$130k–160k',
    postedDate: '6 days ago', logo: 'C', color: '#0EA5E9',
    description: 'Build and maintain cloud-native infrastructure and microservices at scale. You will work with Go, Kubernetes, and AWS to ensure high availability and performance across our platform.',
  },
];

const trustedCompanies = [
  'Google', 'Microsoft', 'Amazon', 'Salesforce', 'Adobe', 'Stripe', 'Shopify', 'Atlassian',
];

const steps = [
  {
    num: '01', icon: Users, title: 'Create Your Profile',
    desc: 'Sign up in minutes and build a professional profile that showcases your skills, education, and experience.',
    color: '#2563EB',
  },
  {
    num: '02', icon: Search, title: 'Discover Opportunities',
    desc: 'Browse thousands of internships and jobs. Filter by industry, location, and salary.',
    color: '#EB6B25',
  },
  {
    num: '03', icon: TrendingUp, title: 'Apply & Get Hired',
    desc: 'Apply with one click, track every application, and land your dream opportunity.',
    color: '#22C55E',
  },
];

const testimonials = [
  {
    name: 'Sarah K.',     role: 'Software Intern @ Google',
    text: 'Masar helped me land my dream internship at Google. The job matching was spot-on and the application process was seamless.',
    avatar: 'S', color: '#2563EB',
  },
  {
    name: 'Omar A.',      role: 'Full-time Engineer @ Stripe',
    text: 'I went from a fresh graduate to a full-time role at Stripe in under 6 weeks. The platform is incredibly easy to use.',
    avatar: 'O', color: '#EB6B25',
  },
  {
    name: 'Lena M.',      role: 'UX Design Intern @ Adobe',
    text: 'The quality of companies on Masar is exceptional. I had 3 interview offers within my first week of signing up.',
    avatar: 'L', color: '#22C55E',
  },
];

/* ─── Component ───────────────────────────────────────────── */

export default function Landing() {
  const { mode } = useDesign();
  const isWireframe = mode === 'wireframe';

  /* shared style helpers */
  const card = isWireframe
    ? 'bg-white border-2 border-gray-400'
    : 'bg-white border border-gray-200 rounded-xl';

  const sectionTitle = isWireframe
    ? 'text-3xl font-bold text-black'
    : 'text-3xl font-bold text-[#0F172A]';

  const sectionSubtitle = isWireframe
    ? 'text-gray-700 mt-2'
    : 'text-gray-500 mt-2';

  return (
    <div className={isWireframe ? 'bg-white' : 'bg-white'}>
      <Navbar />

      {/* ══════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════ */}
      <section className={isWireframe
        ? 'bg-white border-b-2 border-gray-400 py-16'
        : 'bg-gradient-to-br from-[#EFF6FF] via-[#F8FAFC] to-white py-16 border-b border-gray-100'}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left — copy */}
            <div>
              <h1 className={isWireframe
                ? 'text-4xl font-bold text-black mb-4 leading-tight'
                : 'text-5xl font-bold text-[#0F172A] mb-4 leading-tight'}>
                Find Internships &amp;<br />Jobs That{' '}
                <span className={isWireframe ? 'text-black underline' : 'text-[#2563EB]'}>
                  Launch
                </span>{' '}
                Your Career
              </h1>

              <p className={isWireframe
                ? 'text-lg text-gray-700 mb-8'
                : 'text-lg text-gray-500 mb-8 leading-relaxed'}>
                Masar connects ambitious students and professionals with top companies
                offering internships and full-time roles. Your path. Your Future.
              </p>

              {/* Search bar */}
              <div className={`flex gap-2 mb-6 p-2 ${isWireframe
                ? 'border-2 border-gray-400'
                : 'bg-white border border-gray-200 rounded-xl shadow-sm'}`}>
                <div className="relative flex-1">
                  <Search className={`absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 ${isWireframe ? 'text-black' : 'text-gray-400'}`} />
                  <Input
                    placeholder="Job title, keywords..."
                    className={isWireframe
                      ? 'pl-9 border-2 border-gray-300 h-10'
                      : 'pl-9 h-10 border-0 focus-visible:ring-0 shadow-none'}
                  />
                </div>
                
                <Button
                  className={isWireframe
                    ? 'h-10 px-5 border-2 border-gray-600'
                    : 'h-10 px-5 bg-[#2563EB] hover:bg-[#1d4ed8]'}
                  variant={isWireframe ? 'outline' : 'default'}
                >
                  Search
                </Button>
              </div>
            </div>

            {/* Right — live preview card */}
            <div className="hidden lg:flex flex-col gap-4">
              {/* Header card */}
              <div className={`${card} p-5`}>
                <div className="flex items-center justify-between mb-4">
                  <p className={isWireframe ? 'font-bold text-black text-sm' : 'text-sm font-semibold text-[#0F172A]'}>
                    Latest Openings
                  </p>
                </div>
                {[
                  { logo: 'T', color: '#2563EB', title: 'Frontend Developer Intern', co: 'TechCorp', salary: '$25–35/hr', badge: 'Internship' },
                  { logo: 'S', color: '#EB6B25', title: 'Software Engineer',          co: 'StartupXYZ', salary: '$120k+',    badge: 'Full-time' },
                  { logo: 'D', color: '#22C55E', title: 'Product Design Intern',       co: 'DesignStudio', salary: '$20–30/hr', badge: 'Internship' },
                  { logo: 'D', color: '#22C55E', title: 'Product Design Intern',       co: 'DesignStudio', salary: '$20–30/hr', badge: 'Internship' },
                  { logo: 'D', color: '#22C55E', title: 'Product Design Intern',       co: 'DesignStudio', salary: '$20–30/hr', badge: 'Internship' },
                ].map((j, i) => (
                  <div key={i} className={`flex items-center gap-3 py-3 ${i < 2 ? (isWireframe ? 'border-b-2 border-gray-200' : 'border-b border-gray-100') : ''}`}>
                    <div className={isWireframe
                      ? 'w-9 h-9 border-2 border-gray-400 flex items-center justify-center flex-shrink-0 font-bold text-sm'
                      : 'w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-white text-sm'}
                      style={!isWireframe ? { backgroundColor: j.color } : {}}>
                      {j.logo}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={isWireframe ? 'text-xs font-bold text-black truncate' : 'text-xs font-semibold text-[#0F172A] truncate'}>{j.title}</p>
                      <p className={isWireframe ? 'text-xs text-gray-600' : 'text-xs text-gray-400'}>{j.co} · {j.salary}</p>
                    </div>
                    <span className={isWireframe
                      ? 'text-xs border border-gray-400 px-1.5 py-0.5 flex-shrink-0'
                      : 'text-xs bg-[#2563EB]/10 text-[#2563EB] px-2 py-0.5 rounded-full flex-shrink-0'}>
                      {j.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          2. TRUSTED BY
      ══════════════════════════════════════════ */}
      <section className={isWireframe ? 'py-10 border-b-2 border-gray-300 bg-white' : 'py-10 border-b border-gray-100 bg-white'}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className={`text-center text-sm mb-6 ${isWireframe ? 'text-gray-600 font-bold' : 'text-gray-400 font-medium tracking-wide uppercase text-xs'}`}>
            Trusted by teams at the world's best companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4">
            {trustedCompanies.map((name) => (
              <span key={name} className={isWireframe
                ? 'text-gray-500 font-bold text-sm border border-gray-300 px-3 py-1'
                : 'text-gray-400 font-semibold text-sm hover:text-gray-600 transition-colors'}>
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          3. STATS BAR
      ══════════════════════════════════════════ */}
      <section className={isWireframe ? 'py-14 bg-gray-100 border-b-2 border-gray-400' : 'py-14 bg-[#2563EB]'}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s, i) => (
              <div key={s.label}>
                <p className={isWireframe ? 'text-4xl font-bold text-black' : 'text-4xl font-bold text-white'}>
                  {s.value}
                </p>
                <p className={isWireframe ? 'text-sm text-gray-700 mt-1' : 'text-sm text-blue-200 mt-1'}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          4. BROWSE BY INDUSTRY
      ══════════════════════════════════════════ */}
      <section className={isWireframe ? 'py-16 bg-white border-b-2 border-gray-300' : 'py-16 bg-[#F8FAFC] border-b border-gray-100'}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionTitle}>Browse by Industry</h2>
            <p className={sectionSubtitle}>Explore opportunities across every industry</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {categories.map(({ label, icon: Icon, count }) => (
              <Link to="/jobs" key={label}>
                <div className={`${card} p-5 flex items-center gap-4 cursor-pointer group ${isWireframe ? 'hover:bg-gray-50' : 'hover:shadow-md hover:border-[#2563EB]/30 transition-all'}`}>
                  <div className={isWireframe
                    ? 'w-10 h-10 border-2 border-gray-400 flex items-center justify-center flex-shrink-0'
                    : 'w-10 h-10 rounded-lg bg-[#2563EB]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#2563EB]/20 transition-colors'}>
                    <Icon className={isWireframe ? 'h-5 w-5 text-black' : 'h-5 w-5 text-[#2563EB]'} />
                  </div>
                  <div className="min-w-0">
                    <p className={isWireframe ? 'text-sm font-bold text-black truncate' : 'text-sm font-semibold text-[#0F172A] truncate'}>
                      {label}
                    </p>
                    <p className={isWireframe ? 'text-xs text-gray-600' : 'text-xs text-gray-400 mt-0.5'}>
                      {count.toLocaleString()} jobs
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          5. FEATURED JOBS
      ══════════════════════════════════════════ */}
      <section className={isWireframe ? 'py-16 bg-gray-100 border-b-2 border-gray-400' : 'py-16 bg-white border-b border-gray-100'}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className={sectionTitle}>Featured Opportunities</h2>
              <p className={sectionSubtitle}>Hand-picked roles from top-rated companies</p>
            </div>
            <Link to="/jobs">
              <Button
                variant="outline"
                className={isWireframe ? 'border-2 border-gray-400' : 'border-gray-300 text-[#2563EB] hover:border-[#2563EB]/40'}
              >
                View All Jobs <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featuredJobs.map((job) => (
              <Link to={`/jobs/${job.id}`} key={job.id}>
                <div className={`${card} p-5 h-full flex flex-col ${isWireframe ? 'hover:bg-gray-50' : 'hover:shadow-md transition-all group'}`}>
                  {/* Company row */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={isWireframe
                          ? 'w-11 h-11 border-2 border-gray-400 flex items-center justify-center font-bold text-base flex-shrink-0'
                          : 'w-11 h-11 rounded-xl flex items-center justify-center font-bold text-white text-base flex-shrink-0'}
                        style={!isWireframe ? { backgroundColor: job.color } : {}}
                      >
                        {job.logo}
                      </div>
                      <div>
                        <p className={isWireframe ? 'font-bold text-black text-sm' : 'font-semibold text-[#0F172A] text-sm'}>
                          {job.company}
                        </p>
                        <div className={`flex items-center gap-1 text-xs ${isWireframe ? 'text-gray-600' : 'text-gray-400'}`}>
                          <MapPin className="h-3 w-3" />
                          {job.location}
                        </div>
                      </div>
                    </div>
                    <span className={isWireframe
                      ? 'text-xs border border-gray-400 px-2 py-0.5 font-bold'
                      : 'text-xs font-medium px-2.5 py-0.5 rounded-full border'}
                      style={!isWireframe ? {
                        backgroundColor: job.type === 'Internship' ? '#EFF6FF' : job.type === 'Full-time' ? '#F0FDF4' : '#FFF7ED',
                        color: job.type === 'Internship' ? '#2563EB' : job.type === 'Full-time' ? '#16a34a' : '#C2410C',
                        borderColor: job.type === 'Internship' ? '#BFDBFE' : job.type === 'Full-time' ? '#BBF7D0' : '#FED7AA',
                      } : {}}>
                      {job.type}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className={isWireframe
                    ? 'font-bold text-black mb-3'
                    : 'font-semibold text-[#0F172A] mb-3 group-hover:text-[#2563EB] transition-colors'}>
                    {job.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-sm leading-relaxed mb-4 flex-1 ${isWireframe ? 'text-gray-700' : 'text-gray-500'}`}
                    style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {job.description}
                  </p>

                  {/* Footer */}
                  <div className={`flex items-center justify-between mt-auto pt-4 ${isWireframe ? 'border-t-2 border-gray-200' : 'border-t border-gray-100'}`}>
                    <div className={`flex items-center gap-1 text-sm ${isWireframe ? 'font-bold text-black' : 'font-semibold text-[#0F172A]'}`}>
                      <DollarSign className="h-3.5 w-3.5" />
                      {job.salary}
                    </div>
                    <div className={`flex items-center gap-1 text-xs ${isWireframe ? 'text-gray-600' : 'text-gray-400'}`}>
                      <Clock className="h-3 w-3" />
                      {job.postedDate}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          6. HOW IT WORKS
      ══════════════════════════════════════════ */}
      <section className={isWireframe ? 'py-16 bg-white border-b-2 border-gray-300' : 'py-16 bg-[#F8FAFC] border-b border-gray-100'}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={sectionTitle}>How Masar Works</h2>
            <p className={sectionSubtitle}>Get hired in three simple steps</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connector line — visible on md+ */}
            {!isWireframe && (
              <div className="hidden md:block absolute top-10 left-[calc(16.66%+1.5rem)] right-[calc(16.66%+1.5rem)] h-px bg-gray-200 z-0" />
            )}

            {steps.map(({ num, icon: Icon, title, desc, color }) => (
              <div key={num} className="relative z-10 flex flex-col items-center text-center">
                {/* Step circle */}
                <div className={isWireframe
                  ? 'w-20 h-20 border-2 border-gray-600 flex items-center justify-center mb-5'
                  : 'w-20 h-20 rounded-full flex items-center justify-center mb-5 shadow-sm border-4 border-white'}
                  style={!isWireframe ? { backgroundColor: color } : {}}>
                  <Icon className={isWireframe ? 'h-9 w-9 text-black' : 'h-9 w-9 text-white'} />
                </div>
                {/* Step number label */}
                <span className={`text-xs font-bold tracking-wider mb-2 ${isWireframe ? 'text-gray-500' : ''}`}
                  style={!isWireframe ? { color } : {}}>
                  STEP {num}
                </span>
                <h3 className={isWireframe ? 'text-xl font-bold text-black mb-3' : 'text-xl font-semibold text-[#0F172A] mb-3'}>
                  {title}
                </h3>
                <p className={isWireframe ? 'text-gray-700' : 'text-gray-500 leading-relaxed'}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          7. TESTIMONIALS
      ══════════════════════════════════════════ */}
      <section className={isWireframe ? 'py-16 bg-gray-100 border-b-2 border-gray-400' : 'py-16 bg-white border-b border-gray-100'}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionTitle}>Success Stories</h2>
            <p className={sectionSubtitle}>See how Masar helped others find their path</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className={`${card} p-6 flex flex-col gap-4`}>
                {/* Stars */}
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={isWireframe ? 'h-4 w-4 text-black fill-black' : 'h-4 w-4 text-[#F59E0B] fill-[#F59E0B]'} />
                  ))}
                </div>
                <p className={isWireframe ? 'text-sm text-gray-700 leading-relaxed' : 'text-sm text-gray-600 leading-relaxed'}>
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <div
                    className={isWireframe
                      ? 'w-9 h-9 border-2 border-gray-400 flex items-center justify-center font-bold text-sm flex-shrink-0'
                      : 'w-9 h-9 rounded-full flex items-center justify-center font-bold text-white text-sm flex-shrink-0'}
                    style={!isWireframe ? { backgroundColor: t.color } : {}}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className={isWireframe ? 'text-sm font-bold text-black' : 'text-sm font-semibold text-[#0F172A]'}>{t.name}</p>
                    <p className={isWireframe ? 'text-xs text-gray-600' : 'text-xs text-gray-400'}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          8. DUAL CTA — CANDIDATES + COMPANIES
      ══════════════════════════════════════════ */}
      <section className={isWireframe ? 'py-16 bg-white border-b-2 border-gray-400' : 'py-16 bg-[#F8FAFC] border-b border-gray-100'}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionTitle}>Get Started</h2>
            <p className={sectionSubtitle}>Your jeurny starts here.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">

            {/* Candidates card */}
            <div className={isWireframe
              ? 'border-2 border-gray-400 p-8'
              : 'bg-[#2563EB] rounded-2xl p-8'}>
              <div className={isWireframe
                ? 'w-12 h-12 border-2 border-gray-400 flex items-center justify-center mb-5'
                : 'w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-5'}>
                <GraduationCap className={isWireframe ? 'h-6 w-6 text-black' : 'h-6 w-6 text-white'} />
              </div>
              <h3 className={isWireframe ? 'text-2xl font-bold text-black mb-3' : 'text-2xl font-bold text-white mb-3'}>
                For Candidates
              </h3>
              <p className={isWireframe ? 'text-gray-700 mb-6' : 'text-blue-100 mb-6'}>
                Create your free profile, upload your resume, and start applying to hundreds
                of internships and jobs — all in one place.
              </p>
              <ul className="space-y-2 mb-7">
                {['Free profile & resume upload', 'One-click applications', 'Real-time application tracking'].map((item) => (
                  <li key={item} className={`flex items-center gap-2 text-sm ${isWireframe ? 'text-black' : 'text-blue-100'}`}>
                    <CheckCircle className={isWireframe ? 'h-4 w-4 text-black' : 'h-4 w-4 text-white'} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/register">
                <Button
                  size="lg"
                  className={isWireframe
                    ? 'border-2 border-gray-600'
                    : 'bg-white text-[#2563EB] hover:bg-gray-100'}
                  variant={isWireframe ? 'outline' : 'secondary'}
                >
                  Create Free Account
                </Button>
              </Link>
            </div>

            {/* Companies card */}
            <div className={isWireframe
              ? 'border-2 border-gray-400 p-8'
              : 'bg-[#0F172A] rounded-2xl p-8'}>
              <div className={isWireframe
                ? 'w-12 h-12 border-2 border-gray-400 flex items-center justify-center mb-5'
                : 'w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-5'}>
                <Building2 className={isWireframe ? 'h-6 w-6 text-black' : 'h-6 w-6 text-white'} />
              </div>
              <h3 className={isWireframe ? 'text-2xl font-bold text-black mb-3' : 'text-2xl font-bold text-white mb-3'}>
                For Companies
              </h3>
              <p className={isWireframe ? 'text-gray-700 mb-6' : 'text-gray-400 mb-6'}>
                Post jobs, review applications, and hire top student and professional talent
                faster than ever with Masar's smart matching engine.
              </p>
              <ul className="space-y-2 mb-7">
                {['Post unlimited jobs', 'AI-powered candidate matching', 'Integrated applicant management'].map((item) => (
                  <li key={item} className={`flex items-center gap-2 text-sm ${isWireframe ? 'text-black' : 'text-gray-300'}`}>
                    <CheckCircle className={isWireframe ? 'h-4 w-4 text-black' : 'h-4 w-4 text-[#22C55E]'} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/register">
                <Button
                  size="lg"
                  className={isWireframe
                    ? 'border-2 border-gray-600'
                    : 'bg-[#EB6B25] hover:bg-[#d35a1a] text-white'}
                  variant={isWireframe ? 'outline' : 'default'}
                >
                  Start Hiring Today
                </Button>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          9. FOOTER
      ══════════════════════════════════════════ */}
      <footer className={isWireframe ? 'bg-gray-200 border-t-2 border-gray-400 pt-12 pb-6' : 'bg-[#0F172A] pt-12 pb-6'}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">

            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-3">
                {!isWireframe && (
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2563EB] to-[#EB6B25] flex items-center justify-center">
                    <Briefcase className="h-4 w-4 text-white" />
                  </div>
                )}
                <span className={isWireframe ? 'font-bold text-black text-xl' : 'font-bold text-white text-xl'}>
                  Masar
                </span>
              </div>
              <p className={isWireframe ? 'text-sm text-gray-700' : 'text-sm text-gray-400 leading-relaxed'}>
                Your Path. Your Future.
              </p>
            </div>

            {/* For Candidates */}
            <div>
              <p className={isWireframe ? 'font-bold text-black text-sm mb-3' : 'font-semibold text-white text-sm mb-3'}>
                For Candidates
              </p>
              <ul className="space-y-2">
                {['Browse Jobs', 'Create Profile', 'Application Tracking'].map((item) => (
                  <li key={item}>
                    <Link to="/jobs">
                      <span className={isWireframe
                        ? 'text-sm text-gray-700 hover:text-black'
                        : 'text-sm text-gray-400 hover:text-white transition-colors'}>
                        {item}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* For Companies */}
            <div>
              <p className={isWireframe ? 'font-bold text-black text-sm mb-3' : 'font-semibold text-white text-sm mb-3'}>
                For Companies
              </p>
              <ul className="space-y-2">
                {['Post a Job', 'Manage Applicants', 'Company Profile'].map((item) => (
                  <li key={item}>
                    <Link to="/company/post-job">
                      <span className={isWireframe
                        ? 'text-sm text-gray-700 hover:text-black'
                        : 'text-sm text-gray-400 hover:text-white transition-colors'}>
                        {item}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <p className={isWireframe ? 'font-bold text-black text-sm mb-3' : 'font-semibold text-white text-sm mb-3'}>
                Support
              </p>
              <ul className="space-y-2">
                {['Help Center', 'Privacy Policy', 'Terms of Use'].map((item) => (
                  <li key={item}>
                    <span className={isWireframe
                      ? 'text-sm text-gray-700 hover:text-black cursor-pointer'
                      : 'text-sm text-gray-400 hover:text-white transition-colors cursor-pointer'}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Bottom bar */}
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-3 pt-6 ${isWireframe ? 'border-t-2 border-gray-400' : 'border-t border-gray-800'}`}>
            <p className={isWireframe ? 'text-sm text-gray-600' : 'text-sm text-gray-500'}>
              © 2026 Masar. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}