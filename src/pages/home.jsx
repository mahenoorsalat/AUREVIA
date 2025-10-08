import { useState, useEffect } from 'react';
import { Globe, Users, Briefcase, TrendingUp, Linkedin, Twitter, Instagram, Facebook, Mail, Phone, ArrowRight, Star, Code, MessageSquare, CheckCircle, Menu, X } from 'lucide-react';
import { Link } from "react-router-dom";

export default function Home() {
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

    // Hero animations
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

    {/* Header Overlay */}
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
                <Globe className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 text-[#FF316F]" />
              </div>

              <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-[#0D0029] leading-tight mb-6 md:mb-8 hero-animate">
                <span className='font-medium italic serif'>Building Careers Through</span><br/>Global Collaboration and<br/>Remote Excellence
              </h1>

              <p className="text-base md:text-lg lg:text-xl text-black font-medium max-w-4xl leading-relaxed mb-8 hero-animate">
                Aurevia connects talented professionals worldwide with premium remote opportunities. Our collaborative approach ensures sustainable growth for every team member while delivering excellence to clients across the globe.
              </p>

              <div className="flex flex-wrap items-center gap-4 md:gap-6 hero-animate">
                <button className="bg-[#0D0029] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#FF316F] transition-all duration-300 hover:scale-105 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>Join Our Team</span>
                </button>

                <a href="#learn-more" className="flex items-center gap-2 cursor-pointer hover:gap-4 transition-all group text-black font-semibold">
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </section>
        </div>

        {/* Services Section */}
        <section className="w-full px-6 md:px-12 lg:px-20 py-12 md:py-16">
          <div className="max-w-[1600px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
              <div className="text-center flex animate-on-scroll">
                <h3 className="text-3xl md:text-4xl lg:text-4xl italic font-normal text-black hover:text-[#FF316F] transition-colors cursor-pointer mb-2">
                  Job Bidding
                </h3>
                <Star className="w-6 h-6 md:w-8 md:h-8 text-[#FFC700] fill-[#FFC700] mx-auto" />
              </div>
              
              <div className="text-center flex animate-on-scroll">
                <h3 className="text-3xl md:text-4xl lg:text-4xl italic font-normal text-black hover:text-[#FF316F] transition-colors cursor-pointer mb-2">
                  Interview Support
                </h3>
                <Star className="w-6 h-6 md:w-8 md:h-8 text-[#FFC700] fill-[#FFC700] mx-auto" />
              </div>
              
              <div className="text-center flex animate-on-scroll">
                <h3 className="text-3xl md:text-4xl lg:text-4xl italic font-normal text-black hover:text-[#FF316F] transition-colors cursor-pointer">
                  Development
                </h3>
                                <Star className="w-6 h-6 md:w-8 md:h-8 text-[#FFC700] fill-[#FFC700] mx-auto" />

              </div>
            </div>
          </div>
        </section>

        {/* Mission & Stats Section */}
        <section className="w-full px-6 md:px-12 lg:px-20 py-12 md:py-16">
          <div className="max-w-[1600px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Mission */}
              <div className="animate-on-scroll">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-black mb-8">
                  Our Mission
                </h2>
              </div>

              {/* Stats and Story */}
              <div className="space-y-8">
                <div className="animate-on-scroll">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#0D0029] leading-tight mb-4">
                    Creating Sustainable<br/>Opportunities Globally
                  </h3>
                  <p className="text-base md:text-lg text-[#6F6F6F] font-medium leading-relaxed">
                    Our mission is clear: secure remote job opportunities through collaboration and ensure steady project execution. We grow agency revenue and individual income by maintaining long-term, stable remote engagements across multiple platforms in the USA, Ukraine, and Japan.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 animate-on-scroll">
                  <div>
                    <div className="text-2xl md:text-3xl font-semibold text-black">Global</div>
                    <div className="text-base md:text-lg text-[#6F6F6F] font-medium">6+ Countries</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-semibold text-black">100% Remote</div>
                    <div className="text-base md:text-lg text-[#6F6F6F] font-medium">Work Model</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-semibold text-black">24/7</div>
                    <div className="text-base md:text-lg text-[#6F6F6F] font-medium">Team Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dark Services Section */}
        <section className="w-full bg-[#0B304A] py-12 md:py-16 lg:py-20 relative overflow-hidden">
          <div className="absolute right-0 top-0 opacity-10 pointer-events-none">
            <Users className="w-64 h-64 md:w-96 md:h-96 text-white" />
          </div>

          <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-white/80 font-bold leading-tight mb-12 animate-on-scroll">
              Remote Job Placement. Technical Excellence.<br/>Career Growth Support
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Service 1 */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[rgba(233.75,112.36,74.02,0.80)] font-bold">
                  <MessageSquare className="w-5 h-5" />
                  <span>Job Bidding</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[rgba(204,204,204,0.52)] rounded-full" />
                  <div className="w-2 h-2 bg-[rgba(204,204,204,0.52)] rounded-full" />
                </div>
                <h3 className="text-xl md:text-2xl text-white font-bold">Application & Proposal Writing</h3>
              </div>

              {/* Service 2 */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[rgba(162.56,162.56,162.56,0.80)] font-bold">
                  <Users className="w-5 h-5" />
                  <span>Interview Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[rgba(204,204,204,0.52)] rounded-full" />
                  <div className="w-2 h-2 bg-[rgba(204,204,204,0.52)] rounded-full" />
                </div>
                <h3 className="text-xl md:text-2xl text-white font-bold">Real-time Technical Backing</h3>
              </div>

              {/* Service 3 */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[rgba(100.25,121.95,235.88,0.80)] font-bold">
                  <TrendingUp className="w-5 h-5" />
                  <span>Career Growth</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[rgba(204,204,204,0.52)] rounded-full" />
                  <div className="w-2 h-2 bg-[rgba(204,204,204,0.52)] rounded-full" />
                </div>
                <h3 className="text-xl md:text-2xl text-white font-bold">Continuous Professional Development</h3>
              </div>

              {/* Service 4 */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[rgba(233.75,112.36,74.02,0.80)] font-bold">
                  <Code className="w-5 h-5" />
                  <span>Development</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[rgba(204,204,204,0.52)] rounded-full" />
                  <div className="w-2 h-2 bg-[rgba(204,204,204,0.52)] rounded-full" />
                </div>
                <h3 className="text-xl md:text-2xl text-white font-bold">Full-Stack Project Delivery</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Global Talent Section */}
        <section className="w-full px-6 md:px-12 lg:px-20 py-12 md:py-16 lg:py-20">
          <div className="max-w-[1600px] mx-auto">
            {/* Stats Card */}
            <div className="max-w-md mb-12 animate-on-scroll">
              <div className="border-2 border-[#FF316F] hover:border-[#FFC700] transition-colors p-6 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-[#595656] to-transparent opacity-20" />
                <div className="relative flex items-center justify-center gap-2">
                  <div className="bg-[#DEDDDD] rounded-full px-6 py-2 flex items-center gap-2 hover:bg-[#FF316F] hover:text-white transition-all cursor-pointer">
                    <TrendingUp className="w-4 h-4" />
                    <span className="font-medium text-lg">20-40%</span>
                  </div>
                </div>
                <p className="text-center text-sm mt-2">Earnings for Handlers</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-4 md:mb-48">
              <div className="animate-on-scroll">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0D0029] mb-6">
                  Uniting Global Talent<br/>Through Remote Excellence
                </h2>
             
                <button className="bg-[#0D0029] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#FF316F] transition-all duration-300 hover:scale-105 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>Join Our Team</span>
                </button>
              </div>

              <div className="space-y-6 animate-on-scroll">

                   <p className="text-base md:text-lg text-[#6F6F6F] font-medium leading-relaxed mb-8">
                  We are a global, fully remote agency uniting talented professionals from USA, Ukraine, Hong Kong, Singapore, Japan, and India. Our strength lies in collaboration and diversity.
                </p>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#FF316F] flex-shrink-0 mt-1" />
                  <p className="text-base md:text-lg text-[#6F6F6F] font-medium leading-relaxed">
                    Global network of skilled professionals across 6+ countries
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#FF316F] flex-shrink-0 mt-1" />
                  <p className="text-base md:text-lg text-[#6F6F6F] font-medium leading-relaxed">
                    Proven system for securing and maintaining remote positions
                  </p>
                </div>
              </div>
            </div>

            {/* Team & Partners */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
              <div className="animate-on-scroll">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0D0029] text-center mb-6">
                  Our Team
                </h2>
                <div className="space-y-4">
                  <p className="text-lg md:text-xl text-black font-medium">USA - Senior Developer</p>
                  <p className="text-lg md:text-xl text-black font-medium">Ukraine - Interview Handler</p>
                </div>
              </div>

          <div className="animate-on-scroll">
  <h2 className="text-3xl md:text-4xl font-bold text-[#0D0029] text-center mb-6">
    Our Partners
  </h2>
<div className="grid grid-cols-3 gap-6 items-center justify-items-center">
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/4/44/Google-flutter-logo.svg"
    alt="Google"
    className="w-24 h-16 object-contain hover:scale-110 transition-transform cursor-pointer"
  />
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
    alt="Amazon"
    className="w-24 h-16 object-contain hover:scale-110 transition-transform cursor-pointer"
  />
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png"
    alt="Slack"
    className="w-24 h-16 object-contain hover:scale-110 transition-transform cursor-pointer"
  />
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
    alt="Facebook"
    className="w-24 h-16 object-contain hover:scale-110 transition-transform cursor-pointer"
  />
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
    alt="LinkedIn"
    className="w-24 h-16 object-contain hover:scale-110 transition-transform cursor-pointer"
  />
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
    alt="Netflix"
    className="w-24 h-16 object-contain hover:scale-110 transition-transform cursor-pointer"
  />
</div>


</div>

            </div>
          </div>
        </section>

        {/* CTA Section with Dark Background */}
        <section className="w-full bg-[#0B304A] py-12 md:py-16 lg:py-20 relative overflow-hidden">
          <div className="absolute left-0 bottom-0 opacity-10 pointer-events-none">
            <Briefcase className="w-64 h-64 md:w-96 md:h-96 text-white" />
          </div>

          <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
            <p className="text-base md:text-lg text-[#E7E7E7] font-medium leading-relaxed mb-8 max-w-3xl animate-on-scroll">
              We operate with core values of team spirit, cooperation, integrity, and truth. Join our global network where collaboration drives success and every member thrives together.
            </p>

            <div className="animate-on-scroll">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
                <span className="text-white">
                  A global agency focused on collaboration, growth, and excellence.{' '}
                </span>
                <span className="text-[#FF9C41] hover:text-[#FFC700] transition-colors cursor-pointer">
                  Let's work together.
                </span>
              </h2>
              <button className="bg-[#D1094A] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#FF316F] transition-all duration-300 hover:scale-105 flex items-center gap-2 mt-6">
                <Phone className="w-4 h-4" />
                <span>Contact Us</span>
              </button>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="w-full px-6 md:px-12 lg:px-20 py-12 md:py-16 lg:py-20">
          <div className="max-w-[1600px] mx-auto text-center">
            <p className="text-base md:text-lg text-[#595959] font-semibold mb-4 animate-on-scroll">
              BUILD YOUR REMOTE CAREER WITH US
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-black font-extrabold mb-8 animate-on-scroll">
              Join Aurevia Today
            </h2>
            <p className="text-base md:text-lg text-[#6F6F6F] font-medium leading-relaxed max-w-3xl mx-auto animate-on-scroll">
              Join our mission-driven team where collaboration, integrity, and excellence create sustainable opportunities for professionals worldwide.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full px-6 md:px-12 lg:px-20 py-8 md:py-12 border-t border-gray-200">
          <div className="max-w-[1600px] mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <nav className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
                <a href="#home" className="text-[#0D0029] font-semibold hover:text-[#FF316F] transition-colors text-sm lg:text-base">Home</a>
                <a href="#about" className="text-[#0D0029] font-semibold hover:text-[#FF316F] transition-colors text-sm lg:text-base">About</a>
                <a href="#services" className="text-[#0D0029] font-semibold hover:text-[#FF316F] transition-colors text-sm lg:text-base">Services</a>
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