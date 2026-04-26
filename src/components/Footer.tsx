import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-emerald-950 text-emerald-50">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-emerald-700 rounded-full flex items-center justify-center text-white font-serif text-xl shadow-lg border-2 border-amber-500">
                B
              </div>
              <span className="font-serif font-bold text-xl tracking-wide text-white">
                AL-BURAQ
              </span>
            </Link>
            <p className="text-sm text-emerald-200/70 leading-relaxed">
              Experience the world with faith and trust. Specializing in sacred journeys of Umrah & Hajj since 2010.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-amber-400 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-amber-400 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-amber-400 transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-bold tracking-wider">Quick Links</h3>
            <ul className="space-y-2 text-sm text-emerald-200/70">
              <li><Link to="/umrah-hajj" className="hover:text-amber-400">Umrah & Hajj Packages</Link></li>
              <li><Link to="/international" className="hover:text-amber-400">International Tours</Link></li>
              <li><Link to="/services" className="hover:text-amber-400">Visa Services</Link></li>
              <li><Link to="/gallery" className="hover:text-amber-400">Group Gallery</Link></li>
            </ul>
          </div>

          {/* Destinations */}
          <div className="space-y-4">
            <h3 className="text-white font-bold tracking-wider">Destinations</h3>
            <ul className="space-y-2 text-sm text-emerald-200/70">
              <li>Turkey & Balkans</li>
              <li>China Business Tours</li>
              <li>Indonesia & Bali</li>
              <li>Nepal & Bangladesh</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-white font-bold tracking-wider">Contact Info</h3>
            <ul className="space-y-3 text-sm text-emerald-200/70">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-amber-500 flex-shrink-0" />
                <span>123 Travel Street, Opp Grand Mosque, Islamabad, Pakistan</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-amber-500 flex-shrink-0" />
                <span>+92 300 1234567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-amber-500 flex-shrink-0" />
                <span>info@alburaqtravel.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-emerald-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-emerald-200/40">
          <p>© 2026 Al-Buraq Travel & Tours. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-emerald-200">Privacy Policy</a>
            <a href="#" className="hover:text-emerald-200">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
