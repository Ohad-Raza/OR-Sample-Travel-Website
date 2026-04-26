import { motion } from 'motion/react';
import { ArrowRight, Star, ShieldCheck, Clock, CheckCircle2, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const featuredPackages = [
    {
      title: 'Premium Umrah Package',
      dest: 'Makkah & Madinah',
      price: '$1,299',
      duration: '15 Days',
      img: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=800&auto=format&fit=crop',
      badge: 'Bestseller'
    },
    {
      title: 'Turkey Cultural Tour',
      dest: 'Istanbul & Cappadocia',
      price: '$950',
      duration: '10 Days',
      img: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=800&auto=format&fit=crop',
      badge: 'Group Deal'
    },
    {
      title: 'China Business Visa + Tour',
      dest: 'Guangzhou & Beijing',
      price: '$1,450',
      duration: '7 Days',
      img: 'https://images.unsplash.com/photo-1547984609-4b7b37a72a8c?q=80&w=800&auto=format&fit=crop',
      badge: 'Visa Included'
    }
  ];

  return (
    <div className="relative">
      {/* Hero & Featured Section */}
      <section className="pt-28 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[450px]">
          <div className="md:col-span-8 relative rounded-[2.5rem] overflow-hidden shadow-2xl group min-h-[300px]">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent z-10"></div>
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center group-hover:scale-105 transition-transform duration-1000"></div>
            
            <div className="absolute bottom-10 left-10 z-20">
              <span className="bg-brand-amber text-slate-900 text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-4 inline-block shadow-lg">
                Premium Package 2026
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                Ramadan Umrah <br/>Global Groups
              </h1>
              <p className="text-emerald-50/70 text-sm max-w-md leading-relaxed hidden sm:block">
                Experience the pinnacle of spirituality with 5-star hotels, luxury transport, and our signature 24/7 on-ground support.
              </p>
            </div>

            <div className="absolute top-6 right-6 z-20 flex gap-2">
              <div className="bg-white/20 backdrop-blur-md p-4 rounded-2xl border border-white/30 text-white text-center min-w-[70px]">
                <div className="text-[10px] opacity-80 uppercase font-black">Days</div>
                <div className="text-2xl font-black">15</div>
              </div>
              <div className="bg-brand-emerald p-4 rounded-2xl text-white text-center min-w-[70px] shadow-lg shadow-brand-emerald/30">
                <div className="text-[10px] opacity-80 uppercase font-black">Starts</div>
                <div className="text-2xl font-black">$1299</div>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="flex-1 bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100 flex flex-col justify-center">
              <h3 className="text-xl font-black text-slate-800 mb-6 flex items-center gap-2">
                Visa Services <ArrowRight size={20} className="text-brand-emerald" />
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { flag: '🇹🇷', name: 'Turkey', bg: 'bg-blue-50', text: 'text-blue-900', border: 'border-blue-100' },
                  { flag: '🇨🇳', name: 'China', bg: 'bg-red-50', text: 'text-red-900', border: 'border-red-100' },
                  { flag: '🇮🇩', name: 'Indonesia', bg: 'bg-emerald-50', text: 'text-emerald-900', border: 'border-emerald-100' },
                  { flag: '🇳🇵', name: 'Nepal', bg: 'bg-amber-50', text: 'text-amber-900', border: 'border-amber-100' },
                ].map((v) => (
                  <div key={v.name} className={`flex items-center gap-3 p-3 ${v.bg} rounded-2xl border ${v.border} hover:scale-105 transition-transform cursor-pointer`}>
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center text-xl grayscale-[0.2]">{v.flag}</div>
                    <span className={`text-[10px] font-black uppercase tracking-widest ${v.text}`}>{v.name}</span>
                  </div>
                ))}
              </div>
              <button className="mt-6 w-full py-4 bg-slate-800 text-white rounded-2xl text-xs font-black tracking-widest uppercase hover:bg-slate-900 transition-colors shadow-lg shadow-slate-200">
                Apply Online
              </button>
            </div>
            
            <div className="h-28 bg-gradient-to-r from-brand-emerald to-teal-500 rounded-[2.5rem] p-6 flex items-center gap-5 text-white shadow-xl shadow-brand-emerald/20">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center text-2xl shadow-inner">📍</div>
              <div>
                <div className="text-[10px] uppercase font-black tracking-widest opacity-80 mb-1">Current Group</div>
                <div className="text-lg font-bold">Madinah City</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Packages Section from theme */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-10">
          <h3 className="text-3xl font-black text-slate-800 tracking-tight">Monthly Packages</h3>
          <div className="flex gap-3">
            <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 bg-white hover:border-brand-emerald transition-colors">←</button>
            <button className="w-10 h-10 rounded-full border border-brand-emerald flex items-center justify-center text-brand-emerald bg-white hover:bg-brand-emerald hover:text-white transition-all shadow-md shadow-emerald-100">→</button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { month: 'October 2026', title: 'Economy Star Umrah', price: '$1,200', img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=400', color: 'text-brand-emerald' },
            { month: 'November 2026', title: 'Premium Turkey Tour', price: '$950', img: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=400', color: 'text-brand-amber' },
          ].map((pkg, i) => (
            <div key={i} className="bg-white p-5 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="w-full h-32 rounded-3xl mb-4 overflow-hidden shadow-inner">
                <img src={pkg.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={pkg.title} />
              </div>
              <div className={`text-[10px] font-black uppercase tracking-[0.2em] mb-2 ${pkg.color}`}>{pkg.month}</div>
              <div className="text-lg font-bold text-slate-800 leading-tight mb-1">{pkg.title}</div>
              <div className="text-sm font-medium text-slate-400">Starting from <span className="text-slate-900 font-bold ml-1">{pkg.price}</span></div>
            </div>
          ))}
          
          <div className="bg-brand-emerald p-5 rounded-[2.5rem] shadow-xl shadow-brand-emerald/20 flex flex-col justify-center">
            <div className="w-full h-32 bg-brand-emerald-dark/40 rounded-3xl mb-4 flex items-center justify-center border-2 border-dashed border-white/20">
               <span className="text-white text-5xl font-black">+</span>
            </div>
            <div className="text-[10px] font-black text-emerald-200 uppercase tracking-[0.2em] mb-2 text-center">December 2026</div>
            <div className="text-lg font-bold text-white text-center">Custom Group Package</div>
            <div className="text-sm font-medium text-emerald-100 mt-1 text-center">Build your own journey</div>
          </div>
        </div>
      </section>

      {/* Media & Gallery from theme */}
      <section className="py-16 max-w-7xl mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 flex flex-col gap-6">
            <h3 className="text-3xl font-black text-slate-800 tracking-tight">Our Travels</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square rounded-[2rem] overflow-hidden shadow-sm border-2 border-white hover:border-brand-emerald transition-all">
                  <img src={`https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=400&sig=${i}`} className="w-full h-full object-cover" alt="Gallery" />
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h3 className="text-3xl font-black text-slate-800 tracking-tight">Travel Vlogs</h3>
            <div className="flex-1 min-h-[250px] bg-slate-900 rounded-[2.5rem] relative overflow-hidden group shadow-2xl">
              <img src="https://images.unsplash.com/photo-1564769662533-4f00a87b4056?q=80&w=600" className="w-full h-full object-cover opacity-60" alt="Vlog" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-all shadow-2xl">
                  <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[22px] border-l-white border-b-[12px] border-b-transparent ml-2"></div>
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-white font-bold text-lg leading-tight mb-3">Group Umrah Highlights 2026</div>
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map((u) => (
                      <div key={u} className="w-7 h-7 rounded-full border-2 border-slate-900 bg-slate-400 flex items-center justify-center text-[10px] font-black text-white">U</div>
                    ))}
                  </div>
                  <span className="text-xs font-bold text-slate-300">+142 Travelers watching</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
