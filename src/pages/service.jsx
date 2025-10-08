import { useState, useEffect } from 'react';
import { MessageSquare, Users, TrendingUp, Code, Linkedin, Twitter, Instagram, Facebook, Menu, X, CheckCircle, ArrowRight, Briefcase, Target, Zap, Shield } from 'lucide-react';
import { Link } from "react-router-dom";

export default function ServicesPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'all 0.8s ease-out';
      observer.observe(el);
    });

    const heroElements = document.querySelectorAll('.hero-animate');
    heroElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'all 1s ease-out';
    });

    setTimeout(() => {
      heroElements.forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      });
    }, 200);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full min-h-screen bg-white overflow-hidden relative">
      <div style={{
        backgroundImage: "url('./Gradient.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }} className="relative">

        {/* Header */}
         <header className="w-full px-6 md:px-12 lg:px-20 py-4 md:py-6 absolute top-0 left-0 z-50">
      <div className="flex items-center justify-between max-w-[1600px] mx-auto relative z-60">
        {/* Logo */}
        <div className="flex items-center relative z-60">
          <Link to="/">
            <img
              className="h-8 md:h-14 lg:h-14 hover:scale-105 transition-transform cursor-pointer"
              src="./LOGO.png"
              alt="Aurevia Logo"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-10">
          <Link
            to="/"
            className="text-[#0D0029] font-semibold hover:text-[#FF316F] transition-colors text-sm lg:text-base"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-[#0D0029] font-semibold hover:text-[#FF316F] transition-colors text-sm lg:text-base"
          >
            About
          </Link>
          <Link
            to="/service"
            className="text-[#0D0029] font-semibold hover:text-[#FF316F] transition-colors text-sm lg:text-base"
          >
            Services
          </Link>
          <Link
            to="/career"
            className="text-[#0D0029] font-semibold hover:text-[#FF316F] transition-colors text-sm lg:text-base"
          >
            Careers
          </Link>
        </nav>

        {/* Contact Button */}
        <Link
          to="/contact"
          className="hidden md:block bg-[#0D0029] text-white font-semibold px-6 py-2 rounded-full hover:bg-[#FF316F] transition-all duration-300 hover:scale-105 text-sm lg:text-base"
        >
          Contact Us
        </Link>

        {/* Mobile Hamburger / Close */}
        <button
          className="md:hidden p-2 rounded-md text-[#0D0029] hover:text-[#FF316F] transition-colors relative z-60"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
          <div className="bg-white w-80 rounded-lg shadow-lg p-6 flex flex-col gap-6 relative z-50">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="text-[#0D0029] font-semibold hover:text-[#FF316F] text-base text-center"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="text-[#0D0029] font-semibold hover:text-[#FF316F] text-base text-center"
            >
              About
            </Link>
            <Link
              to="/service"
              onClick={() => setMenuOpen(false)}
              className="text-[#0D0029] font-semibold hover:text-[#FF316F] text-base text-center"
            >
              Services
            </Link>
            <Link
              to="/career"
              onClick={() => setMenuOpen(false)}
              className="text-[#0D0029] font-semibold hover:text-[#FF316F] text-base text-center"
            >
              Careers
            </Link>
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="bg-[#0D0029] text-white font-semibold px-6 py-2 rounded-full hover:bg-[#FF316F] transition-all duration-300 hover:scale-105 text-base text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>

        {/* Hero Section */}
        <section className="w-full px-6 md:px-12 lg:px-20 py-32 md:py-40 lg:py-48 relative z-10">
          <div className="max-w-[1600px] mx-auto">
            <div className="relative">
              <div className="absolute -top-10 -right-10 md:-top-20 md:-right-20 lg:-top-32 lg:-right-32 opacity-20 pointer-events-none hero-animate">
                <Briefcase className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 text-[#FF316F]" />
              </div>

              <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-[#0D0029] leading-tight mb-6 md:mb-8 hero-animate">
                <span className='font-medium italic serif'>Our</span><br/>Services
              </h1>

              <p className="text-base md:text-lg lg:text-xl text-black font-medium max-w-4xl leading-relaxed hero-animate">
                Comprehensive remote job placement and technical support services designed to create sustainable opportunities for professionals worldwide.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Main Services Grid */}
      <section className="w-full px-6 md:px-12 lg:px-20 py-12 md:py-16 lg:py-20">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Job Bidding Service */}
            <div className="bg-gradient-to-br from-[#FF316F]/5 to-[#FF316F]/10 p-8 lg:p-10 rounded-2xl hover:shadow-xl transition-all animate-on-scroll group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FF316F] to-[#D1094A] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0D0029] mb-4">Job Bidding</h2>
              <p className="text-base md:text-lg text-[#6F6F6F] font-medium mb-6 leading-relaxed">
                Professional application and proposal writing services to secure remote opportunities across global platforms.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FF316F] flex-shrink-0 mt-1" />
                  <p className="text-[#6F6F6F] font-medium">Strategic job applications targeting US and EU markets</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FF316F] flex-shrink-0 mt-1" />
                  <p className="text-[#6F6F6F] font-medium">Customized proposals for each opportunity</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FF316F] flex-shrink-0 mt-1" />
                  <p className="text-[#6F6F6F] font-medium">Minimum 5 new company interviews per week guarantee</p>
                </div>
              </div>
            </div>

            {/* Interview Support Service */}
            <div className="bg-gradient-to-br from-[#6479EB]/5 to-[#6479EB]/10 p-8 lg:p-10 rounded-2xl hover:shadow-xl transition-all animate-on-scroll group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#6479EB] to-[#4F5FD1] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0D0029] mb-4">Interview Support</h2>
              <p className="text-base md:text-lg text-[#6F6F6F] font-medium mb-6 leading-relaxed">
                Real-time technical backing during interviews to ensure your success in every engagement.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#6479EB] flex-shrink-0 mt-1" />
                  <p className="text-[#6F6F6F] font-medium">Full technical backing from senior developers</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#6479EB] flex-shrink-0 mt-1" />
                  <p className="text-[#6F6F6F] font-medium">Real-time support for coding challenges</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#6479EB] flex-shrink-0 mt-1" />
                  <p className="text-[#6F6F6F] font-medium">Professional representation without technical stress</p>
                </div>
              </div>
            </div>

            {/* Career Growth Service */}
            <div className="bg-gradient-to-br from-[#FFC700]/5 to-[#FFC700]/10 p-8 lg:p-10 rounded-2xl hover:shadow-xl transition-all animate-on-scroll group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FFC700] to-[#FF9C41] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0D0029] mb-4">Career Growth</h2>
              <p className="text-base md:text-lg text-[#6F6F6F] font-medium mb-6 leading-relaxed">
                Continuous professional development to ensure long-term success and income growth.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FFC700] flex-shrink-0 mt-1" />
                  <p className="text-[#6F6F6F] font-medium">Long-term stable remote engagements</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FFC700] flex-shrink-0 mt-1" />
                  <p className="text-[#6F6F6F] font-medium">Continuous skill development programs</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FFC700] flex-shrink-0 mt-1" />
                  <p className="text-[#6F6F6F] font-medium">20-40% earnings for interview handlers</p>
                </div>
              </div>
            </div>

            {/* Development Service */}
            <div className="bg-gradient-to-br from-[#0B304A]/5 to-[#0B304A]/10 p-8 lg:p-10 rounded-2xl hover:shadow-xl transition-all animate-on-scroll group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0B304A] to-[#0D0029] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0D0029] mb-4">Development</h2>
              <p className="text-base md:text-lg text-[#6F6F6F] font-medium mb-6 leading-relaxed">
                Full-stack project delivery with expert developers ensuring seamless execution.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#0B304A] flex-shrink-0 mt-1" />
                  <p className="text-[#6F6F6F] font-medium">Complete project responsibility and maintenance</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#0B304A] flex-shrink-0 mt-1" />
                  <p className="text-[#6F6F6F] font-medium">Issue-free, steady project execution</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#0B304A] flex-shrink-0 mt-1" />
                  <p className="text-[#6F6F6F] font-medium">Meeting client expectations with excellence</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full bg-[#0B304A] py-12 md:py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute right-0 top-0 opacity-10 pointer-events-none">
          <Target className="w-64 h-64 md:w-96 md:h-96 text-white" />
        </div>

        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-12 text-center animate-on-scroll">
            How It Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-on-scroll">
              <div className="w-20 h-20 bg-[#FF316F] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold">
                1
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Application Phase</h3>
              <p className="text-[#E7E7E7] font-medium leading-relaxed">
                Our job bidders craft compelling proposals and secure interview opportunities for you
              </p>
            </div>

            <div className="text-center animate-on-scroll">
              <div className="w-20 h-20 bg-[#FFC700] rounded-full flex items-center justify-center mx-auto mb-6 text-[#0D0029] text-3xl font-bold">
                2
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Interview Success</h3>
              <p className="text-[#E7E7E7] font-medium leading-relaxed">
                Interview handlers represent you with full technical backing from our expert team
              </p>
            </div>

            <div className="text-center animate-on-scroll">
              <div className="w-20 h-20 bg-[#6479EB] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold">
                3
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Project Delivery</h3>
              <p className="text-[#E7E7E7] font-medium leading-relaxed">
                Our developers ensure flawless execution and long-term project maintenance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full px-6 md:px-12 lg:px-20 py-12 md:py-16 lg:py-20">
        <div className="max-w-[1600px] mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0D0029] mb-12 text-center animate-on-scroll">
            Why Our Services Stand Out
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border-2 border-[#FF316F] p-6 rounded-lg hover:shadow-lg transition-all animate-on-scroll">
              <Zap className="w-10 h-10 text-[#FF316F] mb-4" />
              <h3 className="text-lg font-bold text-[#0D0029] mb-2">Fast Results</h3>
              <p className="text-[#6F6F6F] font-medium text-sm">Minimum 5 interviews per week guaranteed</p>
            </div>

            <div className="bg-white border-2 border-[#FFC700] p-6 rounded-lg hover:shadow-lg transition-all animate-on-scroll">
              <Shield className="w-10 h-10 text-[#FFC700] mb-4" />
              <h3 className="text-lg font-bold text-[#0D0029] mb-2">Full Support</h3>
              <p className="text-[#6F6F6F] font-medium text-sm">24/7 technical backing and guidance</p>
            </div>

            <div className="bg-white border-2 border-[#6479EB] p-6 rounded-lg hover:shadow-lg transition-all animate-on-scroll">
              <TrendingUp className="w-10 h-10 text-[#6479EB] mb-4" />
              <h3 className="text-lg font-bold text-[#0D0029] mb-2">High Earnings</h3>
              <p className="text-[#6F6F6F] font-medium text-sm">20-40% income for interview handlers</p>
            </div>

            <div className="bg-white border-2 border-[#0B304A] p-6 rounded-lg hover:shadow-lg transition-all animate-on-scroll">
              <Briefcase className="w-10 h-10 text-[#0B304A] mb-4" />
              <h3 className="text-lg font-bold text-[#0D0029] mb-2">Global Reach</h3>
              <p className="text-[#6F6F6F] font-medium text-sm">Access to US, EU, and Asian markets</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-b from-white to-gray-50 px-6 md:px-12 lg:px-20 py-12 md:py-16 lg:py-20">
        <div className="max-w-[1600px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0D0029] mb-6 animate-on-scroll">
            Ready to Transform Your Remote Career?
          </h2>
          <p className="text-base md:text-lg text-[#6F6F6F] font-medium leading-relaxed max-w-3xl mx-auto mb-8 animate-on-scroll">
            Let our comprehensive services help you secure and maintain successful remote positions worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 animate-on-scroll">
            <button className="bg-[#0D0029] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#FF316F] transition-all duration-300 hover:scale-105 flex items-center gap-2">
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-white text-[#0D0029] border-2 border-[#0D0029] font-semibold px-8 py-3 rounded-full hover:bg-gray-50 transition-all duration-300 hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full px-6 md:px-12 lg:px-20 py-8 md:py-12 border-t border-gray-200">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <nav className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
              <a href="#home" className="text-[#0D0029] font-semibold hover:text-[#FF316F] transition-colors text-sm lg:text-base">Home</a>
              <a href="#about" className="text-[#0D0029] font-semibold hover:text-[#FF316F] transition-colors text-sm lg:text-base">About</a>
              <a href="#services" className="text-[#FF316F] font-semibold transition-colors text-sm lg:text-base">Services</a>
              <a href="#careers" className="text-[#0D0029] font-semibold hover:text-[#FF316F] transition-colors text-sm lg:text-base">Careers</a>
            </nav>

            <div className="flex items-center gap-4 md:gap-6">
              <a href="#linkedin" className="hover:scale-110 transition-transform">
                <Linkedin className="w-6 h-6 text-[#0D0029] hover:text-[#FF316F] transition-colors" />
              </a>
              <a href="#twitter" className="hover:scale-110 transition-transform">
                <Twitter className="w-6 h-6 text-[#0D0029] hover:text-[#FF316F] transition-colors" />
              </a>
              <a href="#instagram" className="hover:scale-110 transition-transform">
                <Instagram className="w-6 h-6 text-[#0D0029] hover:text-[#FF316F] transition-colors" />
              </a>
              <a href="#facebook" className="hover:scale-110 transition-transform">
                <Facebook className="w-6 h-6 text-[#0D0029] hover:text-[#FF316F] transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}