import { motion } from 'motion/react';
import { Ticket, Hotel, FileCheck, Globe, HelpCircle, ArrowRight } from 'lucide-react';

const Services = () => {
  const mainServices = [
    {
      icon: <Ticket className="text-amber-600" size={32} />,
      title: 'Ticket Booking',
      desc: 'Exclusive agreements with Saudi Airlines, Emirates, and Qatar Airways for competitive fares.',
      details: ['Local & International', 'Corporate Deals', 'Baggage Support']
    },
    {
      icon: <Hotel className="text-amber-600" size={32} />,
      title: 'Hotel Reservations',
      desc: 'Worldwide hotel network with a focus on proximity to holy sites and business centers.',
      details: ['Makkah/Madinah', 'Group Bookings', 'Luxury Suites']
    },
    {
      icon: <FileCheck className="text-amber-600" size={32} />,
      title: 'Visa Application',
      desc: 'Certified consultation for Umrah, China, Turkey, and EU visas with high success rates.',
      details: ['Document Review', 'Fast-Track Service', 'E-Visa Facility']
    }
  ];

  return (
    <div className="pt-24 pb-24 bg-zinc-50">
      {/* Banner */}
      <section className="bg-emerald-900 text-white py-24 mb-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
            <h1 className="text-5xl font-serif font-bold mb-6">Our Operations & <span className="text-amber-500">Expertise</span></h1>
            <p className="text-xl text-emerald-100/70 max-w-2xl mx-auto">
              From the smallest logistics to large group management, our services are built on precision and global reach.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
           <img src="https://images.unsplash.com/photo-1436491865332-7a61a109c0f?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover" alt="Travel" />
        </div>
      </section>

      {/* Main Services Table */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {mainServices.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-12 rounded-[3.5rem] shadow-xl border border-zinc-100 hover:border-amber-500/30 transition-all group"
            >
              <div className="mb-10 w-16 h-16 bg-zinc-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                {s.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold text-emerald-950 mb-4">{s.title}</h3>
              <p className="text-zinc-500 mb-8 leading-relaxed text-sm">{s.desc}</p>
              <ul className="space-y-3">
                {s.details.map((d, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm font-bold text-emerald-900/80">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                    {d}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Specialized Visa Info Section */}
        <div className="bg-white rounded-[4rem] p-12 md:p-20 shadow-2xl overflow-hidden relative">
          <div className="absolute bottom-0 right-0 p-12 text-zinc-50 opacity-10 scale-[3]">
             <Globe size={150} />
          </div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-1 bg-emerald-950 text-white text-[10px] uppercase font-black rounded-full tracking-widest mb-6">Visa Specialist Operations</div>
              <h2 className="text-4xl font-serif font-bold text-emerald-950 mb-8">China & Turkey <br /><span className="text-amber-600">Visa Specialists</span></h2>
              <p className="text-zinc-600 leading-relaxed mb-8">
                We take pride in our specialized knowledge of China Business (M) Visas and Turkish Tourist Visas. Our team stays updated with the latest embassy requirements to ensure your application is processed without delays.
              </p>
              <div className="space-y-6">
                {[
                  { label: 'Documentation Assistance', val: 'We help in drafting invitation letters and cover letters.' },
                  { label: 'Embassy Representation', val: 'For countries where allowed, we submit on your behalf.' },
                  { label: 'Group Filing', val: 'Optimized processing for large corporate or family groups.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 flex-shrink-0"><ArrowRight size={14} /></div>
                    <div>
                      <p className="font-bold text-emerald-950">{item.label}</p>
                      <p className="text-sm text-zinc-500">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
               <div className="p-8 bg-zinc-50 rounded-3xl border border-zinc-100 text-center">
                  <h4 className="text-4xl font-serif font-black text-amber-600 mb-2">3k+</h4>
                  <p className="text-xs font-bold uppercase text-zinc-400">Turkey Visas</p>
               </div>
               <div className="p-8 bg-zinc-50 rounded-3xl border border-zinc-100 text-center">
                  <h4 className="text-4xl font-serif font-black text-emerald-800 mb-2">1.5k+</h4>
                  <p className="text-xs font-bold uppercase text-zinc-400">China Visas</p>
               </div>
               <div className="col-span-2 p-10 bg-emerald-950 text-white rounded-3xl flex items-center justify-between">
                  <div>
                    <h4 className="text-xl font-bold font-serif mb-2 text-amber-500 italic block underline sm:no-underline">Need Custom Quotation?</h4>
                    <p className="text-emerald-100/50 text-sm">Send us your travel dates and group size.</p>
                  </div>
                  <HelpCircle size={40} className="text-white/20" />
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
