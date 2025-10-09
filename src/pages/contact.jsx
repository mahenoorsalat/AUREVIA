import { useState } from 'react';
import { Globe, Users, Briefcase, TrendingUp, Linkedin, Twitter, Instagram, Facebook, Mail, Phone, MapPin, Menu, X, Send, Clock } from 'lucide-react';
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";


export default function Contact() {
  
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
const backendURL = import.meta.env.VITE_BACKEND_URL ;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitStatus({ type: '', message: '' });

  try {
    const response = await fetch(`${backendURL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': 'YOUR_API_KEY_HERE'
      },
      body: JSON.stringify(formData)
    });

    if (!response.ok) throw new Error('Submission failed');

    // Toast success notification
    toast.success("✅ Message sent successfully! We'll get back to you within 24 hours.");

    setSubmitStatus({
      type: 'success',
      message: 'Message sent successfully! We\'ll get back to you within 24 hours.'
    });

    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: ''
    });
  } catch (error) {
    console.error(error);

    // Toast error notification
    toast.error("❌ Failed to send message. Please try again.");

    setSubmitStatus({
      type: 'error',
      message: 'Failed to send message. Please try again.'
    });
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <div className="w-full min-h-screen bg-white overflow-hidden">
       <header className="w-full px-6 md:px-12 lg:px-20 py-4 md:py-6 ">
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

      <section className="w-full px-6 md:px-12 lg:px-20 py-20 md:py-32 bg-gradient-to-br from-[#0D0029] to-[#0B304A] relative overflow-hidden">
        <div className="absolute left-0 bottom-0 opacity-10 pointer-events-none">
          <Mail className="w-64 h-64 md:w-96 md:h-96 text-white" />
        </div>

        <div className="max-w-[1600px] mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Get In Touch
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-medium max-w-3xl leading-relaxed">
            Have questions about our services or want to join our team? We'd love to hear from you. Reach out and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      <section className="w-full px-6 md:px-12 lg:px-20 py-12 md:py-16">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-[#FF316F] to-[#D1094A] p-8 rounded-2xl text-white hover:scale-105 transition-transform">
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <Mail className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-white/80 mb-4">Send us an email anytime</p>
              <a href="mailto:contact@aurevia.com" className="text-white font-semibold hover:underline">contact@aurevia.com</a>
            </div>

            <div className="bg-gradient-to-br from-[#0D0029] to-[#0B304A] p-8 rounded-2xl text-white hover:scale-105 transition-transform">
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <Phone className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-white/80 mb-4">Mon-Fri 9am to 6pm EST</p>
              <a href="tel:+1234567890" className="text-white font-semibold hover:underline">+1 (234) 567-8900</a>
            </div>

            <div className="bg-gradient-to-br from-[#FFC700] to-[#FF9C41] p-8 rounded-2xl text-white hover:scale-105 transition-transform">
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-2">Working Hours</h3>
              <p className="text-white/80 mb-2">Monday - Friday</p>
              <p className="text-white font-semibold">9:00 AM - 6:00 PM EST</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0D0029] mb-6">Send Us a Message</h2>
              <p className="text-[#6F6F6F] mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>

              {submitStatus.message && (
                <div className={`mb-6 p-4 rounded-lg ${submitStatus.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
                  {submitStatus.message}
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <label className="block text-[#0D0029] font-semibold mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FF316F] focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-[#0D0029] font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FF316F] focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-[#0D0029] font-semibold mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FF316F] focus:outline-none transition-colors"
                    placeholder="+1 234 567 8900"
                  />
                </div>

                <div>
                  <label className="block text-[#0D0029] font-semibold mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FF316F] focus:outline-none transition-colors"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label className="block text-[#0D0029] font-semibold mb-2">Subject *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FF316F] focus:outline-none transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Career Opportunities">Career Opportunities</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#0D0029] font-semibold mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FF316F] focus:outline-none transition-colors resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-[#0D0029] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#FF316F] transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-[#0D0029] mb-4">Why Contact Aurevia?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#FF316F] rounded-full flex items-center justify-center flex-shrink-0">
                      <Globe className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0D0029] mb-1">Global Reach</h4>
                      <p className="text-[#6F6F6F]">Connect with a truly international team spanning USA, Ukraine, Japan, Singapore, Hong Kong, and India.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#FF316F] rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0D0029] mb-1">Expert Team</h4>
                      <p className="text-[#6F6F6F]">Our professionals are ready to help with job placement, technical support, and career development.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#FF316F] rounded-full flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0D0029] mb-1">Remote Opportunities</h4>
                      <p className="text-[#6F6F6F]">Discover sustainable remote career opportunities with comprehensive support every step of the way.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#FF316F] rounded-full flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0D0029] mb-1">Career Growth</h4>
                      <p className="text-[#6F6F6F]">We're committed to your professional development and income growth through collaborative success.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#0D0029] to-[#0B304A] p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-4">Our Global Presence</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 flex-shrink-0" />
                    <span>United States</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 flex-shrink-0" />
                    <span>Ukraine</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 flex-shrink-0" />
                    <span>Japan</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 flex-shrink-0" />
                    <span>Singapore</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 flex-shrink-0" />
                    <span>Hong Kong</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 flex-shrink-0" />
                    <span>India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#F8F8F8] py-12 md:py-16">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D0029] mb-4">Frequently Asked Questions</h2>
            <p className="text-[#6F6F6F]">Quick answers to common questions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1200px] mx-auto">
            <div className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-[#FF316F] transition-colors">
              <h3 className="font-bold text-[#0D0029] mb-2">How do I apply for a position?</h3>
              <p className="text-[#6F6F6F]">Visit our Careers page and fill out the application form. We review all applications and respond within 3-5 business days.</p>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-[#FF316F] transition-colors">
              <h3 className="font-bold text-[#0D0029] mb-2">What positions are available?</h3>
              <p className="text-[#6F6F6F]">We're hiring Job Bidders, Interview Handlers, and Full-Stack Developers. All positions are 100% remote.</p>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-[#FF316F] transition-colors">
              <h3 className="font-bold text-[#0D0029] mb-2">What is the earning potential?</h3>
              <p className="text-[#6F6F6F]">Interview Handlers earn 20-40% of salary. Compensation varies by role and experience level.</p>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-[#FF316F] transition-colors">
              <h3 className="font-bold text-[#0D0029] mb-2">Do I need technical skills?</h3>
              <p className="text-[#6F6F6F]">It depends on the role. Interview Handlers don't need deep technical skills as we provide full technical support.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full px-6 md:px-12 lg:px-20 py-8 md:py-12 border-t border-gray-200 bg-white">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <nav className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
              <a href="/" className="text-[#0D0029] font-semibold hover:text-[#FF316F] transition-colors text-sm lg:text-base">Home</a>
              <a href="/about" className="text-[#0D0029] font-semibold hover:text-[#FF316F] transition-colors text-sm lg:text-base">About</a>
              <a href="#services" className="text-[#0D0029] font-semibold hover:text-[#FF316F] transition-colors text-sm lg:text-base">Services</a>
              <a href="/careers" className="text-[#0D0029] font-semibold hover:text-[#FF316F] transition-colors text-sm lg:text-base">Careers</a>
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

      <ToastContainer
  position="top-right"
  autoClose={3000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="colored"
/>
    </div>
  );
}