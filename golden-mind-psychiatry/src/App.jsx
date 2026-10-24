import React, { useState, useEffect } from 'react';
import {
  ClipboardCheck,
  Pill,
  Brain,
  Heart,
  Smile,
  Wind,
  Sun,
  ShieldCheck,
  Video,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  UserCheck,
  Phone,
  Mail,
  MapPin,
  Clock,
  Lock,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  Calendar,
  Search,
  BookOpen,
  Activity,
  Award,
  Check
} from 'lucide-react';
import BrandLogo from './components/BrandLogo';
import {
  PRACTICE_INFO,
  SERVICES_DATA,
  INSURANCE_PLANS,
  BLOG_POSTS
} from './data/siteData';

const ICON_MAP = {
  ClipboardCheck,
  Pill,
  Brain,
  Heart,
  Smile,
  Wind,
  Sun,
  ShieldCheck,
  Video,
  Sparkles
};

export default function App() {
  // Pages: 'home' | 'about' | 'services' | 'service-detail' | 'telehealth' | 'insurance' | 'blog' | 'resources' | 'contact'
  const [currentPage, setCurrentPage] = useState('services');
  const [activeServiceId, setActiveServiceId] = useState('depression');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState('');

  // Interactive states for subpages
  const [careMatcherGoal, setCareMatcherGoal] = useState('depression');
  const [insuranceSearch, setInsuranceSearch] = useState('');
  const [visitTypeCalc, setVisitTypeCalc] = useState('eval');
  const [reimbursePercent, setReimbursePercent] = useState(70);
  const [selectedBlogPost, setSelectedBlogPost] = useState(null);
  const [telehealthChecks, setTelehealthChecks] = useState({
    wifi: true,
    camera: false,
    space: false,
    idCard: false
  });
  const [selfCheckAnswers, setSelfCheckAnswers] = useState({});
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  // Breath pacer state (Resources page)
  const [breathingActive, setBreathingActive] = useState(false);
  const [breathPhase, setBreathPhase] = useState('Inhale (4s)');

  // Contact form state
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Depression & Mood Disorder Care',
    mode: 'Telehealth Video Visit',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    if (!breathingActive) return;
    const phases = ['Inhale Slowly (4s)', 'Hold Gently (4s)', 'Exhale Completely (6s)'];
    let idx = 0;
    const interval = setInterval(() => {
      idx = (idx + 1) % phases.length;
      setBreathPhase(phases[idx]);
    }, 4000);
    return () => clearInterval(interval);
  }, [breathingActive]);

  // Navigate helper
  const navigateTo = (page, options = {}) => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setCurrentPage(page);

    if (options.serviceId) {
      setActiveServiceId(options.serviceId);
      setSelfCheckAnswers({});
      setOpenFaqIndex(0);
    }

    if (options.scrollToAnchor && page === 'services') {
      setTimeout(() => {
        const el = document.getElementById(options.scrollToAnchor);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const openDedicatedServicePage = (serviceId) => {
    navigateTo('service-detail', { serviceId });
  };

  const openBookingWithService = (serviceTitle) => {
    setSelectedServiceForBooking(serviceTitle || 'Comprehensive Psychiatric Evaluation');
    setBookingModalOpen(true);
  };

  const activeServiceObj =
    SERVICES_DATA.find((s) => s.id === activeServiceId) || SERVICES_DATA[6];

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7] text-[#4A525A]">
      {/* =====================================================================
          TOP CRISIS & CONTACT BAR
          ===================================================================== */}
      <div className="bg-[#1E252B] text-[#F4EBD0] text-xs py-2 px-4 sm:px-8 border-b border-[#C59B27]/30">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${PRACTICE_INFO.email}`}
              className="flex items-center gap-1.5 hover:text-[#C59B27] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#C59B27]" />
              <span>{PRACTICE_INFO.email}</span>
            </a>
            <a
              href={`tel:${PRACTICE_INFO.phone}`}
              className="hidden sm:flex items-center gap-1.5 hover:text-[#C59B27] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C59B27]" />
              <span>{PRACTICE_INFO.phone}</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1">
              <Video className="w-3.5 h-3.5 text-[#C59B27]" />
              In-Person &amp; Telehealth Available
            </span>
          </div>
        </div>
      </div>

      {/* =====================================================================
          MAIN NAVIGATION BAR (Radiant Souls Architecture + Golden Mind Palette)
          ===================================================================== */}
      <nav
        aria-label="Main navigation"
        className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E6DEC8] shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => navigateTo('home')}
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            <BrandLogo className="w-11 h-11 transition-transform duration-300 group-hover:scale-105" />
            <div>
              <span className="block font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#1E252B]">
                Golden Mind <span className="text-[#C59B27]">Psychiatry</span>
              </span>
              <span className="block text-[10px] uppercase tracking-[0.2em] text-[#9E7B1C] font-semibold">
                PLLC · Compassionate Care
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#1E252B]">
            <button
              onClick={() => navigateTo('home')}
              className={`py-2 transition-colors ${
                currentPage === 'home'
                  ? 'text-[#C59B27] font-semibold border-b-2 border-[#C59B27]'
                  : 'hover:text-[#C59B27]'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => navigateTo('about')}
              className={`py-2 transition-colors ${
                currentPage === 'about'
                  ? 'text-[#C59B27] font-semibold border-b-2 border-[#C59B27]'
                  : 'hover:text-[#C59B27]'
              }`}
            >
              About
            </button>

            {/* Services Dropdown + Hub Link */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                onClick={() => navigateTo('services')}
                className={`flex items-center gap-1 py-2 transition-colors ${
                  currentPage === 'services' || currentPage === 'service-detail'
                    ? 'text-[#C59B27] font-semibold border-b-2 border-[#C59B27]'
                    : 'hover:text-[#C59B27]'
                }`}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute left-0 top-full pt-2 w-80 z-50 animate-fade-in">
                  <div className="bg-white rounded-2xl shadow-xl border border-[#E6DEC8] p-3">
                    <button
                      onClick={() => navigateTo('services')}
                      className="w-full text-left px-3 py-2.5 rounded-xl bg-[#F4EBD0]/60 hover:bg-[#F4EBD0] text-[#1E252B] font-semibold text-xs uppercase tracking-wider flex items-center justify-between mb-2"
                    >
                      <span>View All 10 Services Hub</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#9E7B1C]" />
                    </button>
                    <div className="grid grid-cols-1 gap-1 max-h-80 overflow-y-auto">
                      {SERVICES_DATA.map((service) => (
                        <button
                          key={service.id}
                          onClick={() => openDedicatedServicePage(service.id)}
                          className="w-full text-left px-3 py-2 rounded-lg text-xs hover:bg-[#F5F0E6] flex items-center justify-between group"
                        >
                          <span className="font-medium text-[#1E252B] group-hover:text-[#9E7B1C]">
                            <span className="text-[#C59B27] font-bold mr-1.5">
                              {service.number.replace('Service ', '')}.
                            </span>
                            {service.shortTitle}
                          </span>
                          <ChevronRight className="w-3.5 h-3.5 text-[#C59B27] opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => navigateTo('telehealth')}
              className={`py-2 transition-colors ${
                currentPage === 'telehealth'
                  ? 'text-[#C59B27] font-semibold border-b-2 border-[#C59B27]'
                  : 'hover:text-[#C59B27]'
              }`}
            >
              Telehealth
            </button>
            <button
              onClick={() => navigateTo('insurance')}
              className={`py-2 transition-colors ${
                currentPage === 'insurance'
                  ? 'text-[#C59B27] font-semibold border-b-2 border-[#C59B27]'
                  : 'hover:text-[#C59B27]'
              }`}
            >
              Insurance
            </button>
            <button
              onClick={() => navigateTo('blog')}
              className={`py-2 transition-colors ${
                currentPage === 'blog'
                  ? 'text-[#C59B27] font-semibold border-b-2 border-[#C59B27]'
                  : 'hover:text-[#C59B27]'
              }`}
            >
              Blog
            </button>
            <button
              onClick={() => navigateTo('resources')}
              className={`py-2 transition-colors ${
                currentPage === 'resources'
                  ? 'text-[#C59B27] font-semibold border-b-2 border-[#C59B27]'
                  : 'hover:text-[#C59B27]'
              }`}
            >
              Resources
            </button>
            <button
              onClick={() => navigateTo('contact')}
              className={`py-2 transition-colors ${
                currentPage === 'contact'
                  ? 'text-[#C59B27] font-semibold border-b-2 border-[#C59B27]'
                  : 'hover:text-[#C59B27]'
              }`}
            >
              Contact
            </button>
          </div>

          {/* Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => openBookingWithService('Comprehensive Psychiatric Consultation')}
              className="bg-[#C59B27] hover:bg-[#9E7B1C] text-white font-semibold text-sm px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all flex items-center gap-2"
            >
              <span>Book Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            className="lg:hidden p-2 rounded-xl border border-[#E6DEC8] text-[#1E252B]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-[#E6DEC8] px-6 py-5 space-y-3 animate-fade-in">
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About Us' },
                { id: 'services', label: 'Services Hub' },
                { id: 'telehealth', label: 'Telehealth' },
                { id: 'insurance', label: 'Insurance' },
                { id: 'blog', label: 'Blog' },
                { id: 'resources', label: 'Resources' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => navigateTo(item.id)}
                  className={`text-left px-3 py-2 rounded-xl text-sm font-medium ${
                    currentPage === item.id
                      ? 'bg-[#C59B27] text-white'
                      : 'bg-[#F5F0E6] text-[#1E252B]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="pt-2 border-t border-[#E6DEC8]">
              <p className="text-xs font-bold uppercase tracking-wider text-[#9E7B1C] mb-2">
                Individual Service Pages
              </p>
              <div className="grid grid-cols-2 gap-1.5">
                {SERVICES_DATA.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => openDedicatedServicePage(s.id)}
                    className="text-left text-xs py-1.5 px-2.5 rounded-lg hover:bg-[#F4EBD0] text-[#1E252B] truncate"
                  >
                    {s.number.replace('Service ', '')}. {s.shortTitle}
                  </button>
                ))}
              </div>
            </div>
            <button
              onClick={() => openBookingWithService('Initial Psychiatric Evaluation')}
              className="w-full bg-[#C59B27] text-white font-semibold py-3 rounded-full text-sm flex items-center justify-center gap-2"
            >
              <span>Schedule Your Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </nav>

      {/* =====================================================================
          MAIN PAGE ROUTER
          ===================================================================== */}
      <main className="flex-grow">
        {/* -------------------------------------------------------------------
            1. SERVICES HUB PAGE (Radiant Souls services.html + #depression)
            ------------------------------------------------------------------- */}
        {currentPage === 'services' && (
          <div className="animate-fade-in">
            {/* Split Page Header */}
            <header className="max-w-7xl mx-auto px-4 sm:px-8 py-12 lg:py-16 grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-5">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4EBD0] text-[#9E7B1C] text-xs font-bold uppercase tracking-widest">
                  <Sparkles className="w-3.5 h-3.5" /> What We Offer
                </span>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1E252B] leading-tight">
                  Comprehensive Psychiatric Services
                </h1>
                <p className="text-base sm:text-lg text-[#4A525A] leading-relaxed max-w-2xl">
                  We offer a full spectrum of mental health services — each delivered with clinical
                  precision and genuine compassion. Click any service below to explore its dedicated
                  clinical page or jump directly to a specialty section.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <button
                    onClick={() => openBookingWithService('Comprehensive Psychiatric Consultation')}
                    className="bg-[#C59B27] hover:bg-[#9E7B1C] text-white font-semibold px-7 py-3.5 rounded-full shadow-md transition-all flex items-center gap-2 text-sm"
                  >
                    <span>Schedule Your Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => openDedicatedServicePage('depression')}
                    className="bg-white hover:bg-[#F4EBD0] text-[#1E252B] border border-[#C59B27] font-semibold px-6 py-3.5 rounded-full transition-all text-sm"
                  >
                    Open Dedicated Depression Page (#depression)
                  </button>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden border-2 border-[#E6DEC8] shadow-xl bg-[#F5F0E6]">
                  <img
                    src={PRACTICE_INFO.heroImage}
                    alt="Golden Mind Psychiatry PLLC — Compassionate psychiatric care"
                    className="w-full h-80 sm:h-96 object-cover"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-[#1E252B]/90 backdrop-blur-md text-white p-4 rounded-2xl border border-[#C59B27]/40">
                    <p className="text-xs uppercase tracking-widest text-[#C59B27] font-bold">
                      Golden Mind Psychiatry PLLC
                    </p>
                    <p className="font-serif text-lg font-semibold">
                      Your Path to Emotional Well-Being Starts Here
                    </p>
                  </div>
                </div>
              </div>
            </header>

            {/* Sticky Jump-To-Service Bar */}
            <nav
              aria-label="Jump to service"
              className="sticky top-20 z-40 bg-[#F5F0E6]/95 backdrop-blur-md border-y border-[#E6DEC8] py-3 px-4 sm:px-8 shadow-sm"
            >
              <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto no-scrollbar">
                <span className="text-xs font-bold uppercase tracking-wider text-[#9E7B1C] shrink-0 mr-2">
                  Jump To:
                </span>
                {SERVICES_DATA.map((service) => (
                  <a
                    key={service.id}
                    href={`#${service.id}`}
                    className={`shrink-0 px-4 py-1.5 rounded-full text-xs font-semibold transition-all border ${
                      service.id === 'depression'
                        ? 'bg-[#C59B27] text-white border-[#C59B27] shadow-sm'
                        : 'bg-white text-[#1E252B] border-[#E6DEC8] hover:border-[#C59B27] hover:bg-[#F4EBD0]'
                    }`}
                  >
                    {service.shortTitle}
                  </a>
                ))}
              </div>
            </nav>

            {/* All 10 Alternating Service Sections (Service 01 - Service 10) */}
            <div>
              {SERVICES_DATA.map((service, index) => {
                const IconComponent = ICON_MAP[service.iconName] || Sparkles;
                const isEven = index % 2 === 1;

                return (
                  <section
                    key={service.id}
                    id={service.id}
                    className={`py-16 lg:py-24 px-4 sm:px-8 scroll-mt-32 border-b border-[#E6DEC8]/60 ${
                      isEven ? 'bg-[#F5F0E6]' : 'bg-[#FDFBF7]'
                    }`}
                  >
                    <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                      {/* Image Column (Left on Even, Right on Odd) */}
                      <div
                        className={`lg:col-span-5 ${
                          isEven ? 'lg:order-1' : 'lg:order-2'
                        }`}
                      >
                        <div className="relative group rounded-3xl overflow-hidden border-2 border-[#E6DEC8] shadow-lg bg-white">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-80 sm:h-[420px] object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute top-4 left-4 bg-[#1E252B]/85 backdrop-blur-md text-[#F4EBD0] px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase border border-[#C59B27]/40">
                            {service.number}
                          </div>
                          <button
                            onClick={() => openDedicatedServicePage(service.id)}
                            className="absolute bottom-4 right-4 bg-white/95 hover:bg-[#C59B27] text-[#1E252B] hover:text-white font-semibold text-xs px-4 py-2.5 rounded-full shadow-md transition-all flex items-center gap-1.5"
                          >
                            <span>View Dedicated Page</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      {/* Text & Checklist Column */}
                      <div
                        className={`lg:col-span-7 space-y-5 ${
                          isEven ? 'lg:order-2' : 'lg:order-1'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-2xl bg-[#F4EBD0] border border-[#C59B27]/30 flex items-center justify-center text-[#9E7B1C]">
                            <IconComponent className="w-6 h-6" />
                          </div>
                          <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-[#C59B27]">
                              {service.number}
                            </p>
                            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E252B]">
                              {service.title}
                            </h2>
                          </div>
                        </div>

                        <p className="text-base font-semibold text-[#9E7B1C]">
                          {service.subtitle}
                        </p>

                        <p className="text-[#4A525A] leading-relaxed">
                          {service.description}
                        </p>

                        {/* 2-Column Checklist Card */}
                        <div className="grid sm:grid-cols-2 gap-6 bg-white p-6 rounded-2xl border border-[#E6DEC8] shadow-sm">
                          <div>
                            <h3 className="text-xs font-bold uppercase tracking-wider text-[#1E252B] mb-3 pb-2 border-b border-[#E6DEC8]">
                              {service.col1Title}
                            </h3>
                            <ul className="space-y-2">
                              {service.col1Items.map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm">
                                  <CheckCircle2 className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h3 className="text-xs font-bold uppercase tracking-wider text-[#1E252B] mb-3 pb-2 border-b border-[#E6DEC8]">
                              {service.col2Title}
                            </h3>
                            <ul className="space-y-2">
                              {service.col2Items.map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm">
                                  <UserCheck className="w-4 h-4 text-[#9E7B1C] shrink-0 mt-0.5" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Dual Action Buttons */}
                        <div className="flex flex-wrap items-center gap-3 pt-2">
                          <button
                            onClick={() => openBookingWithService(service.title)}
                            className="bg-[#C59B27] hover:bg-[#9E7B1C] text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all flex items-center gap-2 text-sm"
                          >
                            <span>{service.ctaText}</span>
                            <ArrowRight className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => openDedicatedServicePage(service.id)}
                            className="bg-white hover:bg-[#F4EBD0] text-[#1E252B] border border-[#C59B27] font-semibold px-5 py-3 rounded-full transition-all text-sm flex items-center gap-2"
                          >
                            <span>Explore Full {service.shortTitle} Page</span>
                            <ChevronRight className="w-4 h-4 text-[#9E7B1C]" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </section>
                );
              })}
            </div>
          </div>
        )}

        {/* -------------------------------------------------------------------
            2. DEDICATED INDIVIDUAL SERVICE PAGE (Standalone Pages 01 - 10)
            ------------------------------------------------------------------- */}
        {currentPage === 'service-detail' && (
          <div className="animate-fade-in">
            {/* Breadcrumb & Service Switcher Bar */}
            <div className="bg-[#F5F0E6] border-b border-[#E6DEC8] py-3 px-4 sm:px-8">
              <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => navigateTo('services', { scrollToAnchor: activeServiceObj.id })}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#1E252B] hover:text-[#C59B27]"
                >
                  <ArrowLeft className="w-4 h-4 text-[#C59B27]" />
                  <span>Back to All Services Hub</span>
                </button>
                <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
                  {SERVICES_DATA.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => openDedicatedServicePage(s.id)}
                      className={`px-3 py-1 rounded-full text-xs font-semibold shrink-0 transition-all ${
                        s.id === activeServiceObj.id
                          ? 'bg-[#C59B27] text-white'
                          : 'bg-white text-[#1E252B] border border-[#E6DEC8] hover:bg-[#F4EBD0]'
                      }`}
                    >
                      {s.number.replace('Service ', '')}. {s.shortTitle}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Service Hero */}
            <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12 lg:py-16 grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4EBD0] text-[#9E7B1C] text-xs font-bold uppercase tracking-widest">
                  <span>{activeServiceObj.number}</span>
                  <span>·</span>
                  <span>Dedicated Clinical Specialty</span>
                </div>
                <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1E252B]">
                  {activeServiceObj.title}
                </h1>
                <p className="text-lg font-semibold text-[#9E7B1C]">
                  {activeServiceObj.subtitle}
                </p>
                <p className="text-[#4A525A] leading-relaxed">
                  {activeServiceObj.longDescription}
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <button
                    onClick={() => openBookingWithService(activeServiceObj.title)}
                    className="bg-[#C59B27] hover:bg-[#9E7B1C] text-white font-semibold px-7 py-3.5 rounded-full shadow-md transition-all flex items-center gap-2 text-sm"
                  >
                    <span>{activeServiceObj.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => navigateTo('contact')}
                    className="bg-white hover:bg-[#F4EBD0] text-[#1E252B] border border-[#E6DEC8] font-semibold px-6 py-3.5 rounded-full transition-all text-sm"
                  >
                    Ask a Clinical Question
                  </button>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="rounded-3xl overflow-hidden border-2 border-[#E6DEC8] shadow-xl">
                  <img
                    src={activeServiceObj.image}
                    alt={activeServiceObj.title}
                    className="w-full h-80 sm:h-96 object-cover"
                  />
                </div>
              </div>
            </section>

            {/* 4-Step Clinical Care Journey */}
            <section className="bg-[#F5F0E6] py-14 px-4 sm:px-8 border-y border-[#E6DEC8]">
              <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-10">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#C59B27]">
                    What To Expect
                  </p>
                  <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E252B] mt-1">
                    Your 4-Step {activeServiceObj.shortTitle} Pathway
                  </h2>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {activeServiceObj.timeline.map((item) => (
                    <div
                      key={item.step}
                      className="bg-white p-6 rounded-2xl border border-[#E6DEC8] shadow-sm relative"
                    >
                      <span className="inline-block px-3 py-1 rounded-full bg-[#F4EBD0] text-[#9E7B1C] font-bold text-xs mb-3">
                        Step {item.step}
                      </span>
                      <h3 className="font-serif text-xl font-bold text-[#1E252B] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#4A525A]">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Interactive Self-Reflection + Checklist + FAQs */}
            <section className="max-w-7xl mx-auto px-4 sm:px-8 py-16 grid lg:grid-cols-12 gap-10">
              {/* Left: Interactive Self-Check */}
              <div className="lg:col-span-6 bg-white p-7 rounded-3xl border border-[#E6DEC8] shadow-sm space-y-5">
                <span className="text-xs font-bold uppercase tracking-widest text-[#C59B27]">
                  Interactive Self-Reflection
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1E252B]">
                  Is {activeServiceObj.shortTitle} Care Right for You?
                </h3>
                <p className="text-sm text-[#4A525A]">
                  Select any statements below that resonate with your current experience:
                </p>
                <div className="space-y-3">
                  {activeServiceObj.selfCheckQuestions.map((q, idx) => {
                    const checked = !!selfCheckAnswers[idx];
                    return (
                      <button
                        key={idx}
                        onClick={() =>
                          setSelfCheckAnswers((prev) => ({ ...prev, [idx]: !prev[idx] }))
                        }
                        className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start gap-3 ${
                          checked
                            ? 'bg-[#F4EBD0]/60 border-[#C59B27] text-[#1E252B]'
                            : 'bg-[#FDFBF7] border-[#E6DEC8] hover:border-[#C59B27]'
                        }`}
                      >
                        <div
                          className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 ${
                            checked ? 'bg-[#C59B27] text-white' : 'border border-[#C59B27]'
                          }`}
                        >
                          {checked && <Check className="w-3.5 h-3.5" />}
                        </div>
                        <span className="text-sm font-medium">{q}</span>
                      </button>
                    );
                  })}
                </div>
                {Object.values(selfCheckAnswers).some(Boolean) && (
                  <div className="p-4 rounded-2xl bg-[#1E252B] text-white flex flex-col sm:flex-row items-center justify-between gap-4 animate-fade-in">
                    <p className="text-xs sm:text-sm text-[#F4EBD0]">
                      You checked one or more indicators. A personalized consultation can provide
                      clarity and relief.
                    </p>
                    <button
                      onClick={() => openBookingWithService(activeServiceObj.title)}
                      className="shrink-0 bg-[#C59B27] hover:bg-[#9E7B1C] text-white text-xs font-bold px-5 py-2.5 rounded-full"
                    >
                      Book Now
                    </button>
                  </div>
                )}
              </div>

              {/* Right: Service FAQs & Included Pillars */}
              <div className="lg:col-span-6 space-y-6">
                <div className="bg-white p-7 rounded-3xl border border-[#E6DEC8] shadow-sm">
                  <h3 className="font-serif text-2xl font-bold text-[#1E252B] mb-4">
                    Frequently Asked Questions
                  </h3>
                  <div className="space-y-3">
                    {activeServiceObj.faqs.map((faq, i) => (
                      <div
                        key={i}
                        className="border border-[#E6DEC8] rounded-2xl overflow-hidden"
                      >
                        <button
                          onClick={() => setOpenFaqIndex(openFaqIndex === i ? -1 : i)}
                          className="w-full text-left px-5 py-4 bg-[#FDFBF7] hover:bg-[#F5F0E6] font-semibold text-sm text-[#1E252B] flex items-center justify-between"
                        >
                          <span>{faq.q}</span>
                          <ChevronDown
                            className={`w-4 h-4 text-[#C59B27] transition-transform ${
                              openFaqIndex === i ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        {openFaqIndex === i && (
                          <div className="px-5 py-4 text-sm text-[#4A525A] bg-white border-t border-[#E6DEC8]">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Prev / Next Service Navigation */}
                <div className="flex items-center justify-between gap-4 pt-2">
                  {SERVICES_DATA.map((s, idx) => {
                    if (s.id !== activeServiceObj.id) return null;
                    const prev = SERVICES_DATA[(idx - 1 + SERVICES_DATA.length) % SERVICES_DATA.length];
                    const next = SERVICES_DATA[(idx + 1) % SERVICES_DATA.length];
                    return (
                      <React.Fragment key={s.id}>
                        <button
                          onClick={() => openDedicatedServicePage(prev.id)}
                          className="flex-1 p-4 rounded-2xl bg-white border border-[#E6DEC8] hover:border-[#C59B27] text-left transition-all"
                        >
                          <span className="text-[11px] uppercase tracking-wider text-[#9E7B1C] font-bold block">
                            ← Previous Service
                          </span>
                          <span className="font-serif text-lg font-bold text-[#1E252B]">
                            {prev.shortTitle}
                          </span>
                        </button>
                        <button
                          onClick={() => openDedicatedServicePage(next.id)}
                          className="flex-1 p-4 rounded-2xl bg-white border border-[#E6DEC8] hover:border-[#C59B27] text-right transition-all"
                        >
                          <span className="text-[11px] uppercase tracking-wider text-[#9E7B1C] font-bold block">
                            Next Service →
                          </span>
                          <span className="font-serif text-lg font-bold text-[#1E252B]">
                            {next.shortTitle}
                          </span>
                        </button>
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>
            </section>
          </div>
        )}

        {/* -------------------------------------------------------------------
            3. HOME PAGE (index.html structure + Golden Mind Palette)
            ------------------------------------------------------------------- */}
        {currentPage === 'home' && (
          <div className="animate-fade-in">
            {/* Hero Section */}
            <section className="relative bg-[#1E252B] text-white py-16 lg:py-24 px-4 sm:px-8 border-b-4 border-[#C59B27]">
              <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex flex-wrap gap-2">
                    {['Board-Certified Providers', 'Telehealth Available', 'Evidence-Based Care'].map(
                      (badge) => (
                        <span
                          key={badge}
                          className="px-3.5 py-1 rounded-full bg-[#C59B27]/20 border border-[#C59B27]/50 text-[#F4EBD0] text-xs font-semibold"
                        >
                          ✓ {badge}
                        </span>
                      )
                    )}
                  </div>
                  <h1 className="font-serif text-4xl sm:text-6xl font-bold leading-tight text-white">
                    Your Path to <span className="text-[#C59B27]">Emotional Well-Being</span> Starts Here.
                  </h1>
                  <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-2xl">
                    {PRACTICE_INFO.aboutParagraph1}
                  </p>
                  <div className="flex flex-wrap gap-4 pt-2">
                    <button
                      onClick={() => openBookingWithService('Initial Psychiatric Consultation')}
                      className="bg-[#C59B27] hover:bg-[#9E7B1C] text-white font-semibold px-8 py-4 rounded-full shadow-lg transition-all flex items-center gap-2"
                    >
                      <span>Schedule Your Consultation</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => navigateTo('services')}
                      className="bg-white/10 hover:bg-white/20 text-white border border-[#F4EBD0]/40 font-semibold px-7 py-4 rounded-full transition-all"
                    >
                      Explore All 10 Services
                    </button>
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <div className="rounded-3xl overflow-hidden border-2 border-[#C59B27] shadow-2xl">
                    <img
                      src={PRACTICE_INFO.heroImage}
                      alt="Golden Mind Psychiatry PLLC"
                      className="w-full h-80 sm:h-[420px] object-cover"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Interactive Quick Care Matcher */}
            <section className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
              <div className="bg-[#F5F0E6] rounded-3xl p-8 lg:p-12 border border-[#E6DEC8] grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 space-y-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#9E7B1C]">
                    Interactive Care Finder
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E252B]">
                    What Support Are You Looking For Today?
                  </h2>
                  <p className="text-sm text-[#4A525A]">
                    Select a concern to preview our specialized clinical approach and open its
                    dedicated page.
                  </p>
                </div>
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {SERVICES_DATA.slice(0, 7).map((s) => (
                      <button
                        key={s.id}
                        onClick={() => setCareMatcherGoal(s.id)}
                        className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                          careMatcherGoal === s.id
                            ? 'bg-[#C59B27] text-white shadow'
                            : 'bg-white text-[#1E252B] border border-[#E6DEC8] hover:border-[#C59B27]'
                        }`}
                      >
                        {s.shortTitle}
                      </button>
                    ))}
                  </div>
                  {(() => {
                    const matched =
                      SERVICES_DATA.find((s) => s.id === careMatcherGoal) || SERVICES_DATA[6];
                    return (
                      <div className="bg-white p-6 rounded-2xl border border-[#E6DEC8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div>
                          <span className="text-xs font-bold text-[#C59B27] uppercase">
                            {matched.number}
                          </span>
                          <h3 className="font-serif text-2xl font-bold text-[#1E252B]">
                            {matched.title}
                          </h3>
                          <p className="text-sm text-[#4A525A] mt-1">{matched.description}</p>
                        </div>
                        <button
                          onClick={() => openDedicatedServicePage(matched.id)}
                          className="shrink-0 bg-[#1E252B] hover:bg-[#C59B27] text-white text-xs font-semibold px-5 py-3 rounded-full transition-colors flex items-center gap-1.5"
                        >
                          <span>Open Page</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    );
                  })()}
                </div>
              </div>
            </section>

            {/* Services Grid Preview */}
            <section className="max-w-7xl mx-auto px-4 sm:px-8 pb-16">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#C59B27]">
                    Clinical Specialties
                  </p>
                  <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E252B]">
                    Our 10 Specialized Psychiatric Services
                  </h2>
                </div>
                <button
                  onClick={() => navigateTo('services')}
                  className="text-sm font-bold text-[#9E7B1C] hover:text-[#C59B27] flex items-center gap-1"
                >
                  <span>View Full Alternating Services Hub</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {SERVICES_DATA.map((service) => (
                  <div
                    key={service.id}
                    className="bg-white rounded-2xl p-6 border border-[#E6DEC8] hover:border-[#C59B27] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#C59B27]">
                        {service.number}
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-[#1E252B] mt-1 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-[#4A525A] line-clamp-3 mb-4">
                        {service.description}
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-[#E6DEC8]">
                      <button
                        onClick={() => openDedicatedServicePage(service.id)}
                        className="text-xs font-bold text-[#9E7B1C] hover:text-[#C59B27] flex items-center gap-1"
                      >
                        <span>Dedicated Service Page</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => openBookingWithService(service.title)}
                        className="text-xs font-semibold bg-[#F4EBD0] hover:bg-[#C59B27] text-[#1E252B] hover:text-white px-3.5 py-1.5 rounded-full transition-colors"
                      >
                        Book
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* -------------------------------------------------------------------
            4. ABOUT US PAGE (With Your Exact Golden Mind Psychiatry Write-Up)
            ------------------------------------------------------------------- */}
        {currentPage === 'about' && (
          <div className="animate-fade-in">
            <section className="max-w-7xl mx-auto px-4 sm:px-8 py-14 lg:py-20 grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4EBD0] text-[#9E7B1C] text-xs font-bold uppercase tracking-widest">
                  About {PRACTICE_INFO.name}
                </span>
                <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1E252B] leading-tight">
                  Illuminating the Path to Emotional Well-Being &amp; Stability.
                </h1>
                <div className="space-y-4 text-base sm:text-lg text-[#4A525A] leading-relaxed bg-white p-6 sm:p-8 rounded-3xl border border-[#E6DEC8] shadow-sm">
                  <p>{PRACTICE_INFO.aboutParagraph1}</p>
                  <p>{PRACTICE_INFO.aboutParagraph2}</p>
                </div>
                <div className="flex flex-wrap gap-4 pt-2">
                  <button
                    onClick={() => openBookingWithService('Initial Psychiatric Consultation')}
                    className="bg-[#C59B27] hover:bg-[#9E7B1C] text-white font-semibold px-7 py-3.5 rounded-full shadow-md transition-all flex items-center gap-2 text-sm"
                  >
                    <span>Book an Appointment</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => navigateTo('services')}
                    className="bg-white hover:bg-[#F4EBD0] text-[#1E252B] border border-[#C59B27] font-semibold px-6 py-3.5 rounded-full transition-all text-sm"
                  >
                    Explore Our Services
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-3xl overflow-hidden border-2 border-[#E6DEC8] shadow-xl bg-white">
                  <img
                    src={PRACTICE_INFO.aboutImage}
                    alt="About Golden Mind Psychiatry PLLC"
                    className="w-full h-96 sm:h-[460px] object-cover"
                  />
                </div>
              </div>
            </section>

            {/* Our Philosophy 3-Pillar Grid */}
            <section className="bg-[#F5F0E6] py-16 px-4 sm:px-8 border-y border-[#E6DEC8]">
              <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-12">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#C59B27]">
                    Our Foundation
                  </p>
                  <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E252B]">
                    Our Clinical Philosophy &amp; Core Values
                  </h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      title: 'Compassionate Care',
                      desc: 'We listen deeply and honor your unique lived experience. Every treatment plan is co-created in a judgment-free, supportive environment.'
                    },
                    {
                      title: 'Evidence-Based Precision',
                      desc: 'Our interventions are rooted in modern psychiatric research and clinical best practices, tailored to your unique biological and personal profile.'
                    },
                    {
                      title: 'Whole-Person Accessibility',
                      desc: 'With flexible in-person and telehealth options, we make it easier to access quality support for ADHD, anxiety, depression, PTSD, and bipolar disorder.'
                    }
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="bg-white p-8 rounded-3xl border border-[#E6DEC8] shadow-sm"
                    >
                      <div className="w-11 h-11 rounded-2xl bg-[#F4EBD0] text-[#9E7B1C] flex items-center justify-center mb-4">
                        <Award className="w-6 h-6" />
                      </div>
                      <h3 className="font-serif text-2xl font-bold text-[#1E252B] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#4A525A] leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}

        {/* -------------------------------------------------------------------
            5. TELEHEALTH PAGE (telehealth.html)
            ------------------------------------------------------------------- */}
        {currentPage === 'telehealth' && (
          <div className="animate-fade-in max-w-7xl mx-auto px-4 sm:px-8 py-14 space-y-14">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="px-3.5 py-1.5 rounded-full bg-[#F4EBD0] text-[#9E7B1C] text-xs font-bold uppercase tracking-widest">
                  HIPAA-Compliant Virtual Care
                </span>
                <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1E252B]">
                  Accessible Telepsychiatry Wherever You Are
                </h1>
                <p className="text-[#4A525A] leading-relaxed">
                  With the convenience of telehealth options, Golden Mind Psychiatry PLLC makes it
                  easier for you to access psychiatric evaluations, medication management, and
                  specialized treatment from the comfort of your home.
                </p>
                <button
                  onClick={() => openBookingWithService('Telepsychiatry Video Consultation')}
                  className="bg-[#C59B27] hover:bg-[#9E7B1C] text-white font-semibold px-7 py-3.5 rounded-full shadow-md transition-all inline-flex items-center gap-2 text-sm"
                >
                  <span>Book a Virtual Appointment</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Interactive Telehealth Readiness Checklist */}
              <div className="lg:col-span-5 bg-white p-7 rounded-3xl border border-[#E6DEC8] shadow-sm space-y-4">
                <h2 className="font-serif text-2xl font-bold text-[#1E252B]">
                  Interactive Telehealth Readiness Check
                </h2>
                <p className="text-xs text-[#4A525A]">
                  Verify these 4 quick items before your virtual session:
                </p>
                {[
                  { key: 'wifi', label: 'Stable internet or cellular connection' },
                  { key: 'camera', label: 'Smartphone, tablet, or computer with camera & mic' },
                  { key: 'space', label: 'Private, quiet, well-lit space for your conversation' },
                  { key: 'idCard', label: 'Photo ID and current medication list handy' }
                ].map((item) => (
                  <button
                    key={item.key}
                    onClick={() =>
                      setTelehealthChecks((prev) => ({ ...prev, [item.key]: !prev[item.key] }))
                    }
                    className={`w-full text-left p-3.5 rounded-2xl border flex items-center gap-3 text-sm ${
                      telehealthChecks[item.key]
                        ? 'bg-[#F4EBD0]/60 border-[#C59B27] text-[#1E252B] font-medium'
                        : 'bg-[#FDFBF7] border-[#E6DEC8]'
                    }`}
                  >
                    <CheckCircle2
                      className={`w-5 h-5 ${
                        telehealthChecks[item.key] ? 'text-[#C59B27]' : 'text-gray-300'
                      }`}
                    />
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* -------------------------------------------------------------------
            6. INSURANCE & FEES PAGE (insurance.html)
            ------------------------------------------------------------------- */}
        {currentPage === 'insurance' && (
          <div className="animate-fade-in max-w-7xl mx-auto px-4 sm:px-8 py-14 space-y-12">
            <div className="max-w-3xl space-y-3">
              <span className="px-3.5 py-1.5 rounded-full bg-[#F4EBD0] text-[#9E7B1C] text-xs font-bold uppercase tracking-widest">
                Transparent Coverage
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1E252B]">
                Insurance &amp; Self-Pay Investment
              </h1>
              <p className="text-[#4A525A]">
                We accept major commercial insurance plans and offer transparent self-pay rates with
                automated out-of-network Superbills.
              </p>
            </div>

            <div className="grid lg:grid-cols-12 gap-10">
              {/* Plan Search */}
              <div className="lg:col-span-7 bg-white p-7 rounded-3xl border border-[#E6DEC8] space-y-5">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="font-serif text-2xl font-bold text-[#1E252B]">
                    Accepted Insurance Carriers
                  </h2>
                  <div className="relative">
                    <Search className="w-4 h-4 text-[#C59B27] absolute left-3 top-3" />
                    <input
                      type="text"
                      placeholder="Filter insurer..."
                      value={insuranceSearch}
                      onChange={(e) => setInsuranceSearch(e.target.value)}
                      className="pl-9 pr-4 py-2 rounded-full border border-[#E6DEC8] text-xs focus:outline-none focus:border-[#C59B27]"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {INSURANCE_PLANS.filter((p) =>
                    p.name.toLowerCase().includes(insuranceSearch.toLowerCase())
                  ).map((plan) => (
                    <div
                      key={plan.name}
                      className="p-4 rounded-2xl bg-[#FDFBF7] border border-[#E6DEC8] flex items-center justify-between"
                    >
                      <div>
                        <p className="font-semibold text-sm text-[#1E252B]">{plan.name}</p>
                        <p className="text-xs text-[#4A525A]">{plan.type}</p>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-[#F4EBD0] text-[#9E7B1C] text-[11px] font-bold">
                        {plan.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Out-of-Network Superbill Estimator */}
              <div className="lg:col-span-5 bg-[#F5F0E6] p-7 rounded-3xl border border-[#E6DEC8] space-y-5">
                <h2 className="font-serif text-2xl font-bold text-[#1E252B]">
                  Self-Pay &amp; Superbill Estimator
                </h2>
                <div className="flex gap-2">
                  <button
                    onClick={() => setVisitTypeCalc('eval')}
                    className={`flex-1 py-2.5 rounded-xl text-xs font-bold ${
                      visitTypeCalc === 'eval'
                        ? 'bg-[#C59B27] text-white'
                        : 'bg-white text-[#1E252B]'
                    }`}
                  >
                    Initial Evaluation ($275)
                  </button>
                  <button
                    onClick={() => setVisitTypeCalc('followup')}
                    className={`flex-1 py-2.5 rounded-xl text-xs font-bold ${
                      visitTypeCalc === 'followup'
                        ? 'bg-[#C59B27] text-white'
                        : 'bg-white text-[#1E252B]'
                    }`}
                  >
                    Medication Follow-Up ($150)
                  </button>
                </div>
                <div>
                  <label className="text-xs font-semibold text-[#1E252B] flex justify-between mb-1">
                    <span>Estimated Out-of-Network Reimbursement:</span>
                    <span className="text-[#9E7B1C] font-bold">{reimbursePercent}%</span>
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="80"
                    step="10"
                    value={reimbursePercent}
                    onChange={(e) => setReimbursePercent(Number(e.target.value))}
                    className="w-full accent-[#C59B27]"
                  />
                </div>
                {(() => {
                  const baseFee = visitTypeCalc === 'eval' ? 275 : 150;
                  const estBack = Math.round((baseFee * reimbursePercent) / 100);
                  const netCost = baseFee - estBack;
                  return (
                    <div className="bg-white p-5 rounded-2xl border border-[#E6DEC8] space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Upfront Self-Pay Rate:</span>
                        <span className="font-bold text-[#1E252B]">${baseFee}</span>
                      </div>
                      <div className="flex justify-between text-[#9E7B1C]">
                        <span>Est. Insurance Reimbursement:</span>
                        <span>-${estBack}</span>
                      </div>
                      <div className="flex justify-between pt-2 border-t border-[#E6DEC8] font-bold text-base text-[#1E252B]">
                        <span>Estimated Net Out-of-Pocket:</span>
                        <span className="text-[#C59B27]">${netCost}</span>
                      </div>
                    </div>
                  );
                })()}
              </div>
            </div>
          </div>
        )}

        {/* -------------------------------------------------------------------
            7. BLOG PAGE (blog.html)
            ------------------------------------------------------------------- */}
        {currentPage === 'blog' && (
          <div className="animate-fade-in max-w-7xl mx-auto px-4 sm:px-8 py-14 space-y-10">
            <div className="max-w-2xl space-y-2">
              <span className="px-3.5 py-1.5 rounded-full bg-[#F4EBD0] text-[#9E7B1C] text-xs font-bold uppercase tracking-widest">
                Clinical Insights
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1E252B]">
                Mental Wellness Articles &amp; Guides
              </h1>
            </div>

            {selectedBlogPost ? (
              <article className="bg-white p-8 lg:p-12 rounded-3xl border border-[#E6DEC8] max-w-4xl mx-auto space-y-6">
                <button
                  onClick={() => setSelectedBlogPost(null)}
                  className="text-xs font-bold text-[#9E7B1C] flex items-center gap-1"
                >
                  <ArrowLeft className="w-4 h-4" /> Back to All Articles
                </button>
                <span className="inline-block px-3 py-1 rounded-full bg-[#F4EBD0] text-[#9E7B1C] text-xs font-bold">
                  {selectedBlogPost.category} · {selectedBlogPost.readTime}
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E252B]">
                  {selectedBlogPost.title}
                </h2>
                <img
                  src={selectedBlogPost.image}
                  alt={selectedBlogPost.title}
                  className="w-full h-80 object-cover rounded-2xl"
                />
                <div className="space-y-4 text-[#4A525A] leading-relaxed">
                  {selectedBlogPost.content.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </article>
            ) : (
              <div className="grid md:grid-cols-3 gap-8">
                {BLOG_POSTS.map((post) => (
                  <div
                    key={post.id}
                    className="bg-white rounded-3xl overflow-hidden border border-[#E6DEC8] shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-52 object-cover"
                      />
                      <div className="p-6 space-y-3">
                        <span className="text-xs font-bold text-[#C59B27] uppercase">
                          {post.category} · {post.readTime}
                        </span>
                        <h2 className="font-serif text-2xl font-bold text-[#1E252B]">
                          {post.title}
                        </h2>
                        <p className="text-sm text-[#4A525A]">{post.excerpt}</p>
                      </div>
                    </div>
                    <div className="px-6 pb-6">
                      <button
                        onClick={() => setSelectedBlogPost(post)}
                        className="text-xs font-bold text-[#9E7B1C] hover:text-[#C59B27] flex items-center gap-1"
                      >
                        <span>Read Full Article</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* -------------------------------------------------------------------
            8. RESOURCES PAGE (resources.html)
            ------------------------------------------------------------------- */}
        {currentPage === 'resources' && (
          <div className="animate-fade-in max-w-7xl mx-auto px-4 sm:px-8 py-14 space-y-12">
            <div className="max-w-2xl space-y-2">
              <span className="px-3.5 py-1.5 rounded-full bg-[#F4EBD0] text-[#9E7B1C] text-xs font-bold uppercase tracking-widest">
                Patient Toolkit
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1E252B]">
                Patient Resources &amp; Grounding Tools
              </h1>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Guided Breath Pacer */}
              <div className="bg-white p-8 rounded-3xl border border-[#E6DEC8] text-center space-y-5">
                <Activity className="w-10 h-10 text-[#C59B27] mx-auto" />
                <h2 className="font-serif text-2xl font-bold text-[#1E252B]">
                  Interactive Nervous System Breath Pacer
                </h2>
                <p className="text-sm text-[#4A525A]">
                  Use this 4-4-6 cadence to activate your parasympathetic nervous system during
                  moments of acute stress.
                </p>
                <div className="py-6">
                  <div
                    className={`w-36 h-36 rounded-full mx-auto flex items-center justify-center border-4 border-[#C59B27] bg-[#F4EBD0]/50 transition-all duration-1000 ${
                      breathingActive ? 'scale-110' : 'scale-100'
                    }`}
                  >
                    <span className="text-xs font-bold text-[#1E252B] px-3">
                      {breathingActive ? breathPhase : 'Ready'}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setBreathingActive(!breathingActive)}
                  className="bg-[#C59B27] hover:bg-[#9E7B1C] text-white text-xs font-bold px-6 py-3 rounded-full"
                >
                  {breathingActive ? 'Pause Exercise' : 'Start Guided Breathing'}
                </button>
              </div>

              {/* Crisis & Support Directory */}
              <div className="bg-[#1E252B] text-white p-8 rounded-3xl border border-[#C59B27]/40 space-y-4">
                <h2 className="font-serif text-2xl font-bold text-[#C59B27]">
                  24/7 Immediate Crisis Support
                </h2>
                <p className="text-sm text-gray-300">
                  If you or a loved one are experiencing a mental health crisis, please use these
                  free, confidential 24/7 resources immediately:
                </p>
                <ul className="space-y-3 text-sm">
                  <li className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                    <strong className="text-[#F4EBD0] block">988 Suicide &amp; Crisis Lifeline</strong>
                    Call or text <strong>988</strong> (Available 24/7, free and confidential)
                  </li>
                  <li className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                    <strong className="text-[#F4EBD0] block">Crisis Text Line</strong>
                    Text <strong>HOME to 741741</strong> to connect with a crisis counselor
                  </li>
                  <li className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                    <strong className="text-[#F4EBD0] block">Direct Practice Email</strong>
                    <a href={`mailto:${PRACTICE_INFO.email}`} className="underline text-[#C59B27]">
                      {PRACTICE_INFO.email}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* -------------------------------------------------------------------
            9. CONTACT & BOOKING PAGE (contact.html structure)
            ------------------------------------------------------------------- */}
        {currentPage === 'contact' && (
          <div className="animate-fade-in">
            <header className="bg-[#1E252B] text-white py-14 px-4 sm:px-8 border-b-4 border-[#C59B27]">
              <div className="max-w-7xl mx-auto max-w-3xl space-y-3">
                <p className="text-xs font-bold uppercase tracking-widest text-[#C59B27]">
                  {PRACTICE_INFO.name}
                </p>
                <h1 className="font-serif text-4xl sm:text-5xl font-bold">
                  Contact &amp; Appointment Request
                </h1>
                <p className="text-gray-300 text-sm sm:text-base">
                  Begin your journey toward clarity and emotional well-being. Reach out directly at{' '}
                  <a
                    href={`mailto:${PRACTICE_INFO.email}`}
                    className="text-[#C59B27] underline font-semibold"
                  >
                    {PRACTICE_INFO.email}
                  </a>{' '}
                  or submit a secure request below.
                </p>
              </div>
            </header>

            <section className="max-w-7xl mx-auto px-4 sm:px-8 py-14 grid lg:grid-cols-12 gap-12">
              {/* Left: Locations, Hours, Direct Contact */}
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-white p-7 rounded-3xl border border-[#E6DEC8] space-y-5">
                  <h2 className="font-serif text-2xl font-bold text-[#1E252B]">
                    Direct Practice Contact
                  </h2>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-[#C59B27]" />
                      <div>
                        <span className="block text-xs text-[#9E7B1C] font-bold uppercase">
                          Official Email
                        </span>
                        <a
                          href={`mailto:${PRACTICE_INFO.email}`}
                          className="font-semibold text-[#1E252B] hover:text-[#C59B27]"
                        >
                          {PRACTICE_INFO.email}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-[#C59B27]" />
                      <div>
                        <span className="block text-xs text-[#9E7B1C] font-bold uppercase">
                          Phone
                        </span>
                        <a
                          href={`tel:${PRACTICE_INFO.phone}`}
                          className="font-semibold text-[#1E252B] hover:text-[#C59B27]"
                        >
                          {PRACTICE_INFO.phone}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-[#C59B27]" />
                      <div>
                        <span className="block text-xs text-[#9E7B1C] font-bold uppercase">
                          Business Hours
                        </span>
                        <span className="text-[#1E252B]">{PRACTICE_INFO.hours}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#F5F0E6] p-7 rounded-3xl border border-[#E6DEC8] space-y-4">
                  <h3 className="font-serif text-2xl font-bold text-[#1E252B]">
                    Clinic &amp; Telehealth Locations
                  </h3>
                  {PRACTICE_INFO.locations.map((loc) => (
                    <div
                      key={loc.title}
                      className="bg-white p-4 rounded-2xl border border-[#E6DEC8]"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-sm text-[#1E252B]">{loc.title}</span>
                        <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-[#F4EBD0] text-[#9E7B1C] font-bold">
                          {loc.type}
                        </span>
                      </div>
                      <p className="text-xs text-[#4A525A]">{loc.address}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: HIPAA-Compliant Booking Form */}
              <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-[#E6DEC8] shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9E7B1C] bg-[#F4EBD0]/60 px-4 py-2 rounded-full w-fit mb-5">
                  <Lock className="w-3.5 h-3.5" />
                  <span>Secure Appointment &amp; Inquiry Request</span>
                </div>

                {formSubmitted ? (
                  <div className="p-8 rounded-2xl bg-[#F5F0E6] border border-[#C59B27] text-center space-y-4">
                    <CheckCircle2 className="w-12 h-12 text-[#C59B27] mx-auto" />
                    <h3 className="font-serif text-3xl font-bold text-[#1E252B]">
                      Request Received
                    </h3>
                    <p className="text-sm text-[#4A525A]">
                      Thank you, <strong>{contactForm.name}</strong>. Our care coordinator will
                      respond within 1 business day from{' '}
                      <strong>{PRACTICE_INFO.email}</strong>.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="bg-[#C59B27] text-white text-xs font-bold px-6 py-2.5 rounded-full"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase text-[#1E252B] mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={contactForm.name}
                          onChange={(e) =>
                            setContactForm({ ...contactForm, name: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-[#E6DEC8] text-sm focus:outline-none focus:border-[#C59B27]"
                          placeholder="Jane Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase text-[#1E252B] mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={contactForm.email}
                          onChange={(e) =>
                            setContactForm({ ...contactForm, email: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-[#E6DEC8] text-sm focus:outline-none focus:border-[#C59B27]"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase text-[#1E252B] mb-1">
                          Service of Interest
                        </label>
                        <select
                          value={contactForm.service}
                          onChange={(e) =>
                            setContactForm({ ...contactForm, service: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-[#E6DEC8] text-sm bg-white focus:outline-none focus:border-[#C59B27]"
                        >
                          {SERVICES_DATA.map((s) => (
                            <option key={s.id} value={s.title}>
                              {s.number}: {s.shortTitle}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase text-[#1E252B] mb-1">
                          Preferred Session Format
                        </label>
                        <select
                          value={contactForm.mode}
                          onChange={(e) =>
                            setContactForm({ ...contactForm, mode: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-[#E6DEC8] text-sm bg-white focus:outline-none focus:border-[#C59B27]"
                        >
                          <option>Telehealth Video Visit</option>
                          <option>In-Person Sanctuary Visit</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-[#1E252B] mb-1">
                        How Can We Support You?
                      </label>
                      <textarea
                        rows={4}
                        value={contactForm.message}
                        onChange={(e) =>
                          setContactForm({ ...contactForm, message: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-[#E6DEC8] text-sm focus:outline-none focus:border-[#C59B27]"
                        placeholder="Share any questions or preferred appointment days/times..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#C59B27] hover:bg-[#9E7B1C] text-white font-semibold py-3.5 rounded-full shadow-md transition-all flex items-center justify-center gap-2 text-sm"
                    >
                      <span>Submit Consultation Request</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </section>
          </div>
        )}
      </main>

      {/* =====================================================================
          PRE-FOOTER CALL TO ACTION BANNER
          ===================================================================== */}
      <section className="bg-[#1E252B] text-white py-14 px-4 sm:px-8 border-t-4 border-[#C59B27] text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold">
            Begin Your Healing Journey Today
          </h2>
          <p className="text-[#F4EBD0] text-sm sm:text-base">
            Compassionate, evidence-based psychiatric care tailored to your unique needs—available
            in-person and via convenient telehealth.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={() => openBookingWithService('Initial Psychiatric Consultation')}
              className="bg-[#C59B27] hover:bg-[#9E7B1C] text-white font-semibold px-7 py-3.5 rounded-full shadow-md transition-all inline-flex items-center gap-2 text-sm"
            >
              <span>Schedule Your Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={`mailto:${PRACTICE_INFO.email}`}
              className="bg-white/10 hover:bg-white/20 text-white border border-[#F4EBD0]/30 font-semibold px-6 py-3.5 rounded-full transition-all text-sm"
            >
              Email {PRACTICE_INFO.email}
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================================
          4-COLUMN FOOTER (Radiant Souls Structure + Golden Mind Colors)
          ===================================================================== */}
      <footer className="bg-[#1E252B] text-gray-300 pt-14 pb-8 px-4 sm:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <BrandLogo className="w-10 h-10" />
              <span className="font-serif text-xl font-bold text-white">
                Golden Mind <span className="text-[#C59B27]">Psychiatry</span>
              </span>
            </div>
            <p className="text-xs leading-relaxed text-gray-400">
              {PRACTICE_INFO.name} is a compassionate mental health provider dedicated to supporting
              individuals on their journey to emotional well-being.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#C59B27] mb-4">
              Practice Pages
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => navigateTo('about')} className="hover:text-[#C59B27]">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('services')} className="hover:text-[#C59B27]">
                  All 10 Services Hub
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('telehealth')} className="hover:text-[#C59B27]">
                  Telehealth Psychiatry
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('blog')} className="hover:text-[#C59B27]">
                  Blog &amp; Clinical Insights
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#C59B27] mb-4">
              Individual Services
            </h3>
            <ul className="space-y-2 text-xs">
              {SERVICES_DATA.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => openDedicatedServicePage(s.id)}
                    className="hover:text-[#C59B27]"
                  >
                    {s.shortTitle}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => openDedicatedServicePage('depression')}
                  className="text-[#C59B27] font-semibold hover:underline"
                >
                  Depression Care (#depression)
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#C59B27] mb-4">
              Connect
            </h3>
            <div className="space-y-2 text-sm">
              <p className="text-xs text-gray-400">{PRACTICE_INFO.hours}</p>
              <p>
                <a href={`tel:${PRACTICE_INFO.phone}`} className="hover:text-[#C59B27]">
                  {PRACTICE_INFO.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${PRACTICE_INFO.email}`}
                  className="text-[#F4EBD0] hover:text-[#C59B27] underline"
                >
                  {PRACTICE_INFO.email}
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-2">
          <p>© {new Date().getFullYear()} {PRACTICE_INFO.name}. All rights reserved.</p>
          <p>
            If you are in crisis, call or text <strong className="text-[#C59B27]">988</strong>.
          </p>
        </div>
      </footer>

      {/* =====================================================================
          QUICK BOOKING MODAL
          ===================================================================== */}
      {bookingModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-7 border-2 border-[#C59B27] shadow-2xl space-y-5 animate-fade-in">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#9E7B1C]">
                  {PRACTICE_INFO.name}
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#1E252B]">
                  Schedule Consultation
                </h3>
              </div>
              <button
                onClick={() => setBookingModalOpen(false)}
                className="p-2 rounded-full hover:bg-[#F5F0E6]"
              >
                <X className="w-5 h-5 text-[#1E252B]" />
              </button>
            </div>
            <p className="text-xs text-[#4A525A]">
              Selected Service: <strong className="text-[#1E252B]">{selectedServiceForBooking}</strong>
            </p>
            <div className="space-y-3">
              <button
                onClick={() => {
                  setBookingModalOpen(false);
                  setContactForm((prev) => ({ ...prev, service: selectedServiceForBooking }));
                  navigateTo('contact');
                }}
                className="w-full bg-[#C59B27] hover:bg-[#9E7B1C] text-white font-semibold py-3.5 rounded-full text-sm flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Complete Online Booking Form</span>
              </button>
              <a
                href={`mailto:${PRACTICE_INFO.email}?subject=Consultation Request: ${encodeURIComponent(
                  selectedServiceForBooking
                )}`}
                className="w-full bg-[#F5F0E6] hover:bg-[#F4EBD0] text-[#1E252B] font-semibold py-3.5 rounded-full text-sm flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4 text-[#9E7B1C]" />
                <span>Email {PRACTICE_INFO.email}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}