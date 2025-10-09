import { useState } from "react";
import {
  Globe,
  Users,
  Briefcase,
  TrendingUp,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  Mail,
  Phone,
  ArrowRight,
  Star,
  Code,
  MessageSquare,
  CheckCircle,
  Menu,
  X,
  Send
} from "lucide-react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Career() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    role: "",
    experience: "",
    portfolio: "",
    coverLetter: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const backendURL = import.meta.env.VITE_BACKEND_URL ;


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`${backendURL}/api/gmail`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast.success("✅ Application submitted successfully! We'll get back to you soon.");

        // Reset form
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          country: "",
          role: "",
          experience: "",
          portfolio: "",
          coverLetter: ""
        });
      } else {
        toast.error("❌ Failed to send application. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("⚠️ Something went wrong. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="w-full min-h-screen bg-white overflow-hidden">
        <header className="w-full px-6 md:px-12 lg:px-20 py-4 md:py-6 ">
      <div className="flex items-center justify-between max-w-[1600px] mx-auto relative z-60">
        {/* Logo */}
        <div className="flex  items-center relative z-60">
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
        <div className="absolute right-0 top-0 opacity-10 pointer-events-none">
          <Users className="w-64 h-64 md:w-96 md:h-96 text-white" />
        </div>

        <div className="max-w-[1600px] mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Join Our Global Team
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-medium max-w-3xl leading-relaxed">
            Build your remote career with a collaborative agency that values talent, integrity, and growth. We're looking for passionate professionals ready to work globally.
          </p>
        </div>
      </section>

      <section className="w-full px-6 md:px-12 lg:px-20 py-12 md:py-16">
        <div className="max-w-[1600px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D0029] mb-8">Open Positions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border-2 border-gray-200 p-6 hover:border-[#FF316F] transition-all hover:shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <MessageSquare className="w-6 h-6 text-[#FF316F]" />
                <h3 className="text-xl font-bold text-[#0D0029]">Job Bidder</h3>
              </div>
              <p className="text-[#6F6F6F] mb-4">Apply to remote jobs and coordinate interviews. Strong communication and writing skills required.</p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#FF316F]" />
                  <span className="text-sm text-[#6F6F6F]">Excellent proposal writing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#FF316F]" />
                  <span className="text-sm text-[#6F6F6F]">Strong communication skills</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#FF316F]" />
                  <span className="text-sm text-[#6F6F6F]">Scheduling expertise</span>
                </div>
              </div>
              <div className="text-[#0D0029] font-semibold">Remote • Global</div>
            </div>

            <div className="border-2 border-[#FF316F] p-6 hover:shadow-lg transition-all bg-gradient-to-b from-white to-[#FFF5F8]">
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-6 h-6 text-[#FF316F]" />
                <h3 className="text-xl font-bold text-[#0D0029]">Interview Handler</h3>
              </div>
              <div className="bg-[#FF316F] text-white text-xs px-3 py-1 rounded-full inline-block mb-3">Featured</div>
              <p className="text-[#6F6F6F] mb-4">Represent clients in interviews with full technical support. Earn 20-40% of salary.</p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#FF316F]" />
                  <span className="text-sm text-[#6F6F6F]">Proficient English</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#FF316F]" />
                  <span className="text-sm text-[#6F6F6F]">Strong client interaction</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#FF316F]" />
                  <span className="text-sm text-[#6F6F6F]">No deep technical skills needed</span>
                </div>
              </div>
              <div className="text-[#0D0029] font-semibold">Remote • High Earning Potential</div>
            </div>

            <div className="border-2 border-gray-200 p-6 hover:border-[#FF316F] transition-all hover:shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <Code className="w-6 h-6 text-[#FF316F]" />
                <h3 className="text-xl font-bold text-[#0D0029]">Full-Stack Developer</h3>
              </div>
              <p className="text-[#6F6F6F] mb-4">Provide technical support during interviews and handle project delivery with excellence.</p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#FF316F]" />
                  <span className="text-sm text-[#6F6F6F]">Full-stack expertise</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#FF316F]" />
                  <span className="text-sm text-[#6F6F6F]">Interview support skills</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#FF316F]" />
                  <span className="text-sm text-[#6F6F6F]">Project delivery focus</span>
                </div>
              </div>
              <div className="text-[#0D0029] font-semibold">Remote • Global</div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#F8F8F8] py-12 md:py-16">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D0029] mb-12 text-center">Why Join Aurevia?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF316F] rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0D0029] mb-2">Global Network</h3>
              <p className="text-[#6F6F6F]">Work with talented professionals from USA, Ukraine, Japan, Singapore, and more</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF316F] rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0D0029] mb-2">Career Growth</h3>
              <p className="text-[#6F6F6F]">Continuous professional development and skill enhancement opportunities</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF316F] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0D0029] mb-2">Team Support</h3>
              <p className="text-[#6F6F6F]">24/7 backing from senior developers and interview supporters</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF316F] rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0D0029] mb-2">100% Remote</h3>
              <p className="text-[#6F6F6F]">Work from anywhere with flexible schedules and great work-life balance</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-6 md:px-12 lg:px-20 py-12 md:py-16">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D0029] mb-4 text-center">Apply Now</h2>
          <p className="text-center text-[#6F6F6F] mb-8">Join our mission-driven team and build your remote career with us</p>

        

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <label className="block text-[#0D0029] font-semibold mb-2">Phone *</label>
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
                <label className="block text-[#0D0029] font-semibold mb-2">Country *</label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FF316F] focus:outline-none transition-colors"
                >
                  <option value="">Select your country</option>
                  <option value="USA">USA</option>
                  <option value="Ukraine">Ukraine</option>
                  <option value="Japan">Japan</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Hong Kong">Hong Kong</option>
                  <option value="India">India</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-[#0D0029] font-semibold mb-2">Position *</label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FF316F] focus:outline-none transition-colors"
                >
                  <option value="">Select position</option>
                  <option value="Job Bidder">Job Bidder</option>
                  <option value="Interview Handler">Interview Handler</option>
                  <option value="Full-Stack Developer">Full-Stack Developer</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-[#0D0029] font-semibold mb-2">Years of Experience *</label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FF316F] focus:outline-none transition-colors"
                >
                  <option value="">Select experience</option>
                  <option value="0-1">0-1 years</option>
                  <option value="1-3">1-3 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5+">5+ years</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[#0D0029] font-semibold mb-2">Portfolio/LinkedIn URL</label>
              <input
                type="url"
                name="portfolio"
                value={formData.portfolio}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FF316F] focus:outline-none transition-colors"
                placeholder="https://linkedin.com/in/yourprofile"
              />
            </div>

            <div>
              <label className="block text-[#0D0029] font-semibold mb-2">Cover Letter *</label>
              <textarea
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleInputChange}
                rows={6}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FF316F] focus:outline-none transition-colors resize-none"
                placeholder="Tell us why you want to join Aurevia and what makes you a great fit..."
              />
            </div>

            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full bg-[#0D0029] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#FF316F] transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>Processing...</>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Submit Application</span>
                </>
              )}
            </button>
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