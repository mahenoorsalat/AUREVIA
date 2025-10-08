import { useState, useEffect } from 'react';
import { Globe, Users, Briefcase, TrendingUp, Linkedin, Twitter, Instagram, Facebook, Target, Heart, Shield, Lightbulb, CheckCircle, Menu, X, ArrowRight } from 'lucide-react';
import { Link } from "react-router-dom";

export default function About() {
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
                <Users className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 text-[#FF316F]" />
              </div>

              <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-[#0D0029] leading-tight mb-6 md:mb-8 hero-animate">
                <span className='font-medium italic serif'>About</span><br/>Aurevia
              </h1>

              <p className="text-base md:text-lg lg:text-xl text-black font-medium max-w-4xl leading-relaxed hero-animate">
                We are a global, fully remote agency that unites talented professionals from across the world. Our strength lies in collaboration, diversity, and a strong commitment to delivering excellence.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Who We Are Section */}
      <section className="w-full px-6 md:px-12 lg:px-20 py-12 md:py-16 lg:py-20">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="animate-on-scroll">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-black mb-8">
                Who We Are
              </h2>
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#FF316F] to-[#FFC700]" />
                <p className="text-base md:text-lg text-[#6F6F6F] font-medium leading-relaxed mb-6 pl-8">
                  We are a global, fully remote agency that unites talented professionals from across the world—including the USA, Ukraine, Hong Kong, Singapore, Japan, and India.
                </p>
                <p className="text-base md:text-lg text-[#6F6F6F] font-medium leading-relaxed pl-8">
                  By combining our collective skills, we ensure that every project is handled seamlessly, every client is supported effectively, and every team member continues to grow both professionally and financially.
                </p>
              </div>
            </div>

            <div className="space-y-6 animate-on-scroll">
              <div className="bg-gradient-to-br from-[#0B304A] to-[#0D0029] p-8 rounded-lg hover:scale-105 transition-transform">
                <Globe className="w-12 h-12 text-[#FF316F] mb-4" />
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Global Presence</h3>
                <p className="text-[#E7E7E7] font-medium">Operating across multiple platforms and accounts in USA, Ukraine, and Japan</p>
              </div>
              <div className="bg-gradient-to-br from-[#FF316F] to-[#D1094A] p-8 rounded-lg hover:scale-105 transition-transform">
                <Users className="w-12 h-12 text-white mb-4" />
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Diverse Team</h3>
                <p className="text-white/90 font-medium">Professionals from 6+ countries working together seamlessly</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full bg-[#0B304A] py-12 md:py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute left-0 top-0 opacity-10 pointer-events-none">
          <Target className="w-64 h-64 md:w-96 md:h-96 text-white" />
        </div>

        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-12 text-center animate-on-scroll">
            Our Mission
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-all animate-on-scroll">
              <div className="w-12 h-12 bg-[#FF316F] rounded-full flex items-center justify-center mb-4">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Secure Opportunities</h3>
              <p className="text-[#E7E7E7] font-medium leading-relaxed">
                To secure more remote job opportunities through collaborative effort and ensure steady, issue-free project execution
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-all animate-on-scroll">
              <div className="w-12 h-12 bg-[#FFC700] rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-[#0D0029]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Continuous Growth</h3>
              <p className="text-[#E7E7E7] font-medium leading-relaxed">
                To continuously grow both agency-wide revenue and the individual income of every member by maintaining long-term engagements
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-all animate-on-scroll">
              <div className="w-12 h-12 bg-[#FF9C41] rounded-full flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Global Presence</h3>
              <p className="text-[#E7E7E7] font-medium leading-relaxed">
                To strengthen our presence in the global freelancing market, operating across multiple platforms worldwide
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="w-full px-6 md:px-12 lg:px-20 py-12 md:py-16 lg:py-20">
        <div className="max-w-[1600px] mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0D0029] mb-4 text-center animate-on-scroll">
            Core Values
          </h2>
          <p className="text-lg md:text-xl text-[#6F6F6F] font-medium text-center mb-12 animate-on-scroll">
            The Soul of Our Agency
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group animate-on-scroll">
              <div className="w-20 h-20 bg-gradient-to-br from-[#FF316F] to-[#D1094A] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#0D0029] mb-3">Team Spirit</h3>
              <p className="text-[#6F6F6F] font-medium">We believe in collaboration over competition</p>
            </div>

            <div className="text-center group animate-on-scroll">
              <div className="w-20 h-20 bg-gradient-to-br from-[#FFC700] to-[#FF9C41] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#0D0029] mb-3">Cooperation</h3>
              <p className="text-[#6F6F6F] font-medium">Every member contributes to the success of the whole team</p>
            </div>

            <div className="text-center group animate-on-scroll">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0B304A] to-[#0D0029] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#0D0029] mb-3">Integrity</h3>
              <p className="text-[#6F6F6F] font-medium">We value honesty and professionalism in all our work</p>
            </div>

            <div className="text-center group animate-on-scroll">
              <div className="w-20 h-20 bg-gradient-to-br from-[#6479EB] to-[#4F5FD1] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Lightbulb className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#0D0029] mb-3">Truth</h3>
              <p className="text-[#6F6F6F] font-medium">We build trust with transparency and reliability</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full bg-gradient-to-b from-white to-gray-50 px-6 md:px-12 lg:px-20 py-12 md:py-16 lg:py-20">
        <div className="max-w-[1600px] mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0D0029] mb-12 text-center animate-on-scroll">
            Why Choose Aurevia?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-on-scroll">
              <CheckCircle className="w-6 h-6 text-[#FF316F] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg md:text-xl font-bold text-[#0D0029] mb-2">Global Network</h3>
                <p className="text-[#6F6F6F] font-medium">A worldwide network of skilled professionals across multiple countries and time zones</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-on-scroll">
              <CheckCircle className="w-6 h-6 text-[#FF316F] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg md:text-xl font-bold text-[#0D0029] mb-2">Proven System</h3>
                <p className="text-[#6F6F6F] font-medium">A tested system for securing jobs and maintaining them with excellence</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-on-scroll">
              <CheckCircle className="w-6 h-6 text-[#FF316F] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg md:text-xl font-bold text-[#0D0029] mb-2">Full Support</h3>
                <p className="text-[#6F6F6F] font-medium">Collaborative support in every step—from job bidding to interview handling to project delivery</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-on-scroll">
              <CheckCircle className="w-6 h-6 text-[#FF316F] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg md:text-xl font-bold text-[#0D0029] mb-2">Mission-Driven</h3>
                <p className="text-[#6F6F6F] font-medium">An approach where both the agency and individual members thrive together</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-[#0B304A] py-12 md:py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
          <Briefcase className="w-64 h-64 md:w-96 md:h-96 text-white" />
        </div>

        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 animate-on-scroll">
            Ready to Join Our Global Team?
          </h2>
          <p className="text-base md:text-lg text-[#E7E7E7] font-medium leading-relaxed mb-8 max-w-3xl mx-auto animate-on-scroll">
            Become part of a collaborative, mission-driven agency where your skills are valued and your career thrives
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 animate-on-scroll">
            <button className="bg-[#D1094A] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#FF316F] transition-all duration-300 hover:scale-105 flex items-center gap-2">
              <span>Join Our Team</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-white text-[#0D0029] font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105">
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
              <a href="#about" className="text-[#FF316F] font-semibold transition-colors text-sm lg:text-base">About</a>
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