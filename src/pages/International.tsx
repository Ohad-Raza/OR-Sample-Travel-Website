import { motion } from 'motion/react';
import { Globe, Plane, Shield, FileText, CheckCircle, ArrowUpRight } from 'lucide-react';

const International = () => {
  const destinations = [
    {
      name: 'Turkey',
      tagline: 'Gateway to Europe',
      desc: 'Explore Istanbul, Cappadocia, and Antalya. E-Visa support and cultural group tours.',
      img: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=800&auto=format&fit=crop',
      visaStatus: 'E-Visa (3 Days)',
      countries: ['Istanbul', 'Cappadocia', 'Bursa', 'Antalya']
    },
    {
      name: 'China',
      tagline: 'Business & Heritage',
      desc: 'Professional trade fair assistance and visa services for Guangzhou and Beijing.',
      img: 'https://images.unsplash.com/photo-1547984609-4b7b37a72a8c?q=80&w=800&auto=format&fit=crop',
      visaStatus: 'L/M Visa (10 Days)',
      countries: ['Canton Fair', 'Great Wall', 'Shanghai']
    },
    {
      name: 'Indonesia',
      tagline: 'Tropical Paradise',
      desc: 'Visa on arrival support for Bali and Jakarta leisure trips.',
      img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop',
      visaStatus: 'On Arrival Support',
      countries: ['Bali', 'Lombok', 'Jakarta']
    }
  ];

  const subDestinations = ['Nepal', 'Bangladesh', 'Thailand', 'Vietnam'];

  return (
    <div className="pt-24 min-h-screen bg-zinc-50">
      {/* Hero Section */}
      <section className="bg-emerald-900 text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10 scale-150 rotate-12">
          <Globe size={400} />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl font-serif font-bold mb-6">Global Visa & Tours</h1>
            <p className="text-xl text-emerald-100/70 leading-relaxed mb-8">
              Expert visa assistance and curated tours to the most vibrant destinations in Asia and Europe.
            </p>
            <div className="flex items-center gap-6">
               <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg border border-white/20">
                 <Shield size={20} className="text-amber-500" />
                 <span className="text-sm font-bold uppercase tracking-widest">Secured Process</span>
               </div>
               <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg border border-white/20">
                 <CheckCircle size={20} className="text-amber-500" />
                 <span className="text-sm font-bold uppercase tracking-widest">98% Success Rate</span>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 -mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((dest, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-zinc-100 flex flex-col h-full group"
            >
              <div className="h-64 relative overflow-hidden">
                <img src={dest.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={dest.name} />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                  <p className="text-amber-400 text-xs font-black uppercase tracking-[0.3em] mb-1">{dest.tagline}</p>
                  <h3 className="text-3xl font-serif font-bold">{dest.name}</h3>
                </div>
              </div>
              <div className="p-8 flex-grow">
                <p className="text-zinc-600 mb-6 leading-relaxed">{dest.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {dest.countries.map((c, j) => (
                    <span key={j} className="text-[10px] uppercase font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">{c}</span>
                  ))}
                </div>
                <div className="pt-6 border-t border-zinc-100 flex items-center justify-between mt-auto">
                   <div>
                     <p className="text-xs uppercase font-black text-zinc-400 mb-1">Visa Processing</p>
                     <p className="font-bold text-emerald-900">{dest.visaStatus}</p>
                   </div>
                   <button className="w-12 h-12 bg-zinc-900 text-white rounded-2xl flex items-center justify-center hover:bg-emerald-800 transition-colors">
                     <ArrowUpRight size={24} />
                   </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Secondary Destinations */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="bg-emerald-50 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 text-emerald-100 scale-[2]">
            <Plane size={100} />
          </div>
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-emerald-950 mb-6 underline decoration-amber-500 decoration-4 underline-offset-8">Also Providing Services For</h2>
              <p className="text-zinc-600 text-lg mb-8">We have extended our expert visa filing and tour planning services to several other high-demand regions.</p>
              <div className="grid grid-cols-2 gap-4">
                {subDestinations.map((d, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-2xl shadow-sm border border-emerald-100 font-bold text-emerald-900">
                    <CheckCircle className="text-amber-600" size={20} />
                    {d}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <div className="space-y-4">
                  <div className="h-40 rounded-3xl overflow-hidden shadow-lg"><img src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover" alt="Nepal" /></div>
                  <div className="h-60 rounded-3xl overflow-hidden shadow-lg"><img src="https://images.unsplash.com/photo-1585938389612-a552a28d6914?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover" alt="Bangladesh" /></div>
               </div>
               <div className="space-y-4 pt-12">
                  <div className="h-60 rounded-3xl overflow-hidden shadow-lg"><img src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover" alt="Thailand" /></div>
                  <div className="h-40 rounded-3xl overflow-hidden shadow-lg"><img src="https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover" alt="Vietnam" /></div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-emerald-950">Simple 4-Step Process</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            {[
              { num: '01', title: 'Consultation', desc: 'Discuss your travel needs and check eligibility.' },
              { num: '02', title: 'Documentation', desc: 'Expert assistance in gathering required documents.' },
              { num: '03', title: 'Filing', desc: 'Swift submission to embassy with optimal filing.' },
              { num: '04', title: 'Approval', desc: 'Collect your passport and fly to your destination.' }
            ].map((step, i) => (
              <div key={i} className="relative group text-center md:text-left">
                <span className="text-6xl font-black text-emerald-100 transition-colors group-hover:text-amber-100 block mb-4">{step.num}</span>
                <h4 className="text-xl font-bold text-emerald-900 mb-2">{step.title}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default International;
