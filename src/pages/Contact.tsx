import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, MessageSquare, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-24 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h1 className="text-5xl font-serif font-bold text-emerald-950 mb-6">Plan Your <br /><span className="text-amber-600 italic">Next Chapter</span></h1>
              <p className="text-zinc-600 text-lg leading-relaxed">
                Whether you're planning a pilgrimage to Mecca or a business trip to China, our team is ready to assist you in every step.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6 p-6 rounded-3xl bg-zinc-50 border border-zinc-100 hover:shadow-lg transition-all group">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-emerald-700 shadow-sm group-hover:scale-110 transition-transform">
                   <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs font-black uppercase text-zinc-400 tracking-widest mb-1">Call Us Anywhere</p>
                  <p className="text-xl font-bold text-emerald-950">+92 300 1234567</p>
                  <p className="text-sm text-zinc-500 mt-1">Available 9am - 7pm Mon to Sat</p>
                </div>
              </div>

              <div className="flex items-start gap-6 p-6 rounded-3xl bg-zinc-50 border border-zinc-100 hover:shadow-lg transition-all group">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-emerald-700 shadow-sm group-hover:scale-110 transition-transform">
                   <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-black uppercase text-zinc-400 tracking-widest mb-1">Email Inquiry</p>
                  <p className="text-xl font-bold text-emerald-950">info@alburaqtravel.com</p>
                  <p className="text-sm text-zinc-500 mt-1">Typical response within 1 hour</p>
                </div>
              </div>

              <div className="flex items-start gap-6 p-6 rounded-3xl bg-zinc-50 border border-zinc-100 hover:shadow-lg transition-all group">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-emerald-700 shadow-sm group-hover:scale-110 transition-transform">
                   <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs font-black uppercase text-zinc-400 tracking-widest mb-1">Official Branch</p>
                  <p className="text-xl font-bold text-emerald-950">Blue Area, Islamabad</p>
                  <p className="text-sm text-zinc-500 mt-1">Opposite Centaurus Mall</p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-emerald-900 text-white flex items-center justify-between">
               <div>
                  <h4 className="text-xl font-bold mb-1">Live WhatsApp Support?</h4>
                  <p className="text-emerald-100/60 text-sm">Instant quotes and availability.</p>
               </div>
               <button className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                  <MessageSquare size={20} />
               </button>
            </div>
          </div>

          {/* Right: Booking Form */}
          <div className="lg:col-span-7">
            <motion.div 
               initial={{ opacity: 0, x: 30 }}
               animate={{ opacity: 1, x: 0 }}
               className="p-10 md:p-14 bg-white shadow-2xl rounded-[3rem] border border-zinc-100 relative"
            >
              <div className="absolute top-0 right-14 w-20 h-2 bg-amber-500 rounded-b-full"></div>
              
              <h3 className="text-3xl font-serif font-bold text-emerald-950 mb-8">Send Inquiries</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 px-1">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full px-6 py-4 bg-zinc-50 border border-zinc-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-emerald-700/10 focus:border-emerald-700 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 px-1">Phone Number</label>
                    <input type="tel" placeholder="+92 300 0000000" className="w-full px-6 py-4 bg-zinc-50 border border-zinc-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-emerald-700/10 focus:border-emerald-700 transition-all" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 px-1">Interested In</label>
                  <select className="w-full px-6 py-4 bg-zinc-50 border border-zinc-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-emerald-700/10 focus:border-emerald-700 transition-all appearance-none cursor-pointer">
                    <option>Umrah Package</option>
                    <option>Hajj Package</option>
                    <option>Turkey Cultural Tour</option>
                    <option>China Business Visa</option>
                    <option>International Air Tickets</option>
                    <option>Others</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 px-1">Departure Month</label>
                    <input type="month" className="w-full px-6 py-4 bg-zinc-50 border border-zinc-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-emerald-700/10 focus:border-emerald-700 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 px-1">Travelers</label>
                    <input type="number" min="1" placeholder="1" className="w-full px-6 py-4 bg-zinc-50 border border-zinc-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-emerald-700/10 focus:border-emerald-700 transition-all" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 px-1">Message / Requirements</label>
                  <textarea rows={4} placeholder="I would like to know more about the premium hotels..." className="w-full px-6 py-4 bg-zinc-50 border border-zinc-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-emerald-700/10 focus:border-emerald-700 transition-all resize-none"></textarea>
                </div>

                <button className="w-full py-5 bg-brand-emerald hover:bg-brand-emerald-dark text-white rounded-2xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 transition-all shadow-xl shadow-brand-emerald/20 group">
                  Send Booking Request
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
