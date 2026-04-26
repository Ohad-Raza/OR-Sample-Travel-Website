import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Globe, Compass, Users, MapPin, Search } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Umrah & Hajj', path: '/umrah-hajj' },
    { name: 'International', path: '/international' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-sm py-3' : 'bg-transparent py-5 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-brand-emerald rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-emerald-200 group-hover:scale-110 transition-transform">
              B
            </div>
            <div className="flex flex-col">
              <span className={`text-2xl font-bold tracking-tight ${scrolled ? 'text-slate-800 brand-underline' : 'text-white'}`}>
                AL-BURAQ<span className={scrolled ? 'text-brand-emerald' : 'text-brand-amber'}>TRAVELS</span>
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-bold tracking-tight hover:text-brand-emerald transition-colors relative group ${
                  location.pathname === link.path 
                    ? scrolled ? 'text-brand-emerald' : 'text-brand-amber' 
                    : scrolled ? 'text-slate-600' : 'text-white'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div 
                    layoutId="navTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-current"
                  />
                )}
              </Link>
            ))}
            <Link 
              to="/contact"
              className="bg-brand-emerald text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-md hover:bg-brand-emerald-dark transition-all hover:shadow-lg active:scale-95"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-current"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-zinc-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2 text-zinc-800 font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 rounded-lg hover:bg-zinc-50"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-3 py-4 bg-emerald-700 text-white rounded-xl font-bold"
              >
                Book Your Journey
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
