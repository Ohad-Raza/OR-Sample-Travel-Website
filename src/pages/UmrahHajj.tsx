import { motion } from 'motion/react';
import { BookOpen, MapPin, Calendar, Clock, Star, Heart, CheckCircle2 } from 'lucide-react';

const UmrahHajj = () => {
  const packages = [
    {
      type: 'Economy Umrah',
      price: '$999',
      duration: '15 Days',
      features: ['3-Star Hotels', 'Economy Flights', 'Shared Transport', 'Group Guide'],
      color: 'bg-emerald-50',
      textColor: 'text-emerald-900',
      border: 'border-emerald-200'
    },
    {
      type: 'Premium Umrah',
      price: '$1,499',
      duration: '15 Days',
      features: ['5-Star Hotels', 'Business Flights', 'Private Transport', 'VIP Buffet', 'Ziarah Included'],
      color: 'bg-amber-50',
      textColor: 'text-amber-900',
      border: 'border-amber-200',
      highlight: true
    },
    {
      type: 'Hajj 2026',
      price: '$4,500',
      duration: '40 Days',
      features: ['Shifting/Non-Shifting', 'Mina Tents A/C', 'Arafat Support', 'Religious Scholars', 'Pre-Hajj Seminar'],
      color: 'bg-zinc-50',
      textColor: 'text-zinc-900',
      border: 'border-zinc-200'
    }
  ];

  const highlights = [
    { icon: <MapPin className="text-amber-600" />, title: 'Walking Distance', desc: 'All hotels are within 500m of the Haram.' },
    { icon: <Star className="text-amber-600" />, title: 'Ziyarat Tours', desc: 'Comprehensive guided tours to historical sites.' },
    { icon: <Heart className="text-amber-600" />, title: 'Ihram Kit', desc: 'Complimentary Ihram and prayer essentials.' },
    { icon: <Clock className="text-amber-600" />, title: '24/7 Assistance', desc: 'Our team is available round the clock in Makkah/Madinah.' }
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Header section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=2560&auto=format&fit=crop"
            className="w-full h-full object-cover filter brightness-[0.4]"
            alt="Umrah"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-50 via-transparent to-black/30"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Sacred Journeys</h1>
            <p className="text-xl text-emerald-50/80 leading-relaxed max-w-lg">
              Embark on a life-changing pilgrimage with the trust of Al-Buraq. We handle the logistics; you focus on your Ibaadah.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing/Packages Table */}
      <section className="max-w-7xl mx-auto px-4 -mt-24 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-[2.5rem] p-10 border-2 ${pkg.border} ${pkg.color} ${pkg.highlight ? 'shadow-2xl ring-4 ring-brand-emerald/10' : 'shadow-lg'} relative overflow-hidden`}
            >
               {pkg.highlight && (
                 <div className="absolute top-0 right-0 bg-brand-emerald text-white text-[10px] uppercase font-black px-6 py-2 rounded-bl-3xl tracking-[0.2em]">
                   Recommended
                 </div>
               )}
               
               <h3 className={`text-3xl font-bold tracking-tight ${pkg.textColor} mb-2`}>{pkg.type}</h3>
               <div className="flex items-baseline gap-2 mb-8">
                 <span className={`text-4xl font-black ${pkg.textColor}`}>{pkg.price}</span>
                 <span className="text-slate-500 text-sm">/ Per Person</span>
               </div>

               <div className="space-y-4 mb-10">
                 <div className="flex items-center gap-3 text-sm font-black text-slate-400 uppercase tracking-widest">
                   <Clock size={16} /> {pkg.duration}
                 </div>
                 <div className="h-[1px] bg-slate-200 w-full"></div>
                 <ul className="space-y-4">
                   {pkg.features.map((feat, j) => (
                     <li key={j} className="flex items-start gap-3 text-slate-600">
                       <CheckCircle2 size={18} className="text-brand-emerald mt-1 flex-shrink-0" />
                       <span className="text-sm font-bold tracking-tight">{feat}</span>
                     </li>
                   ))}
                 </ul>
               </div>

               <button className={`w-full py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all ${
                 pkg.highlight 
                 ? 'bg-brand-emerald text-white shadow-xl shadow-brand-emerald/20 hover:bg-brand-emerald-dark' 
                 : 'bg-slate-800 text-white hover:bg-slate-900'
               }`}>
                 Book Package
               </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Info Sections */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-amber-700 font-bold tracking-[0.3em] text-xs uppercase mb-4 block">Our Commitment</span>
            <h2 className="text-4xl font-serif font-bold text-emerald-950 mb-8 leading-tight">Focus on Your Prayers, <br /> We'll Handle the Rest.</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {highlights.map((item, i) => (
                <div key={i} className="space-y-3">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-md border border-zinc-100 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-emerald-950">{item.title}</h4>
                  <p className="text-sm text-zinc-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1542640244-7e6726274fd1?q=80&w=1200&auto=format&fit=crop" 
                className="w-full h-full object-cover" 
                alt="Madinah"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/40 to-transparent"></div>
              <div className="absolute bottom-10 left-10 right-10 p-8 glass bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl text-white">
                <p className="text-2xl font-serif font-black mb-2">Group 24 Travel</p>
                <p className="text-zinc-200 text-sm">Join our upcoming group in December for a spiritually enriched journey.</p>
              </div>
            </div>
            {/* Decoration */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* Monthly Packages Mini-Grid */}
      <section className="bg-emerald-950 py-24 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold mb-12 text-center underline decoration-amber-500 underline-offset-8">Packages by Month</h2>
          <div className="flex flex-nowrap md:grid md:grid-cols-4 gap-6 overflow-x-auto pb-8 scrollbar-hide">
            {['September', 'October', 'November', 'December'].map((month, i) => (
              <div key={i} className="min-w-[280px] p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col justify-between hover:bg-white/10 transition-colors group cursor-pointer">
                <div>
                  <h4 className="text-2xl font-bold font-serif mb-2">{month} 2026</h4>
                  <p className="text-amber-400 text-sm font-bold tracking-widest uppercase">Groups Open</p>
                  <p className="text-emerald-100/60 text-sm mt-4 leading-relaxed">Early booking discounts available for this month's departure group.</p>
                </div>
                <div className="mt-8 flex justify-between items-end">
                  <span className="text-emerald-100 flex items-center gap-2 text-sm">View Slots <Calendar size={16} /></span>
                  <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const ArrowRight = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
);

export default UmrahHajj;
