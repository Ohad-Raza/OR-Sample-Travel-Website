import { motion } from 'motion/react';
import { Camera, Play, Users, Globe, ExternalLink } from 'lucide-react';

const Gallery = () => {
  const categories = ['All', 'Umrah 2024', 'Turkey Groups', 'China Business', 'Tour Videos'];
  
  const galleryItems = [
    { title: 'September Umrah Group', type: 'image', size: 'large', url: 'https://images.unsplash.com/photo-1565715707743-043c58365403?q=80&w=800&auto=format&fit=crop' },
    { title: 'Istanbul Cultural Tour', type: 'image', size: 'small', url: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=800&auto=format&fit=crop' },
    { title: 'Canton Fair Business Group', type: 'image', size: 'small', url: 'https://images.unsplash.com/photo-1551820616-e88902525f3c?q=80&w=800&auto=format&fit=crop' },
    { title: 'Madinah Ziyarat Experience', type: 'video', size: 'wide', url: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=1200&auto=format&fit=crop' },
    { title: 'Group Dinner in Bali', type: 'image', size: 'small', url: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop' },
    { title: 'Cave Church Cappadocia', type: 'image', size: 'small', url: 'https://images.unsplash.com/photo-1570737197414-630bc35c5c74?q=80&w=800&auto=format&fit=crop' },
    { title: 'Winter Umrah Vlog', type: 'video', size: 'large', url: 'https://images.unsplash.com/photo-1542640244-7e6726274fd1?q=80&w=800&auto=format&fit=crop' },
  ];

  return (
    <div className="pt-24 pb-24 min-h-screen bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block p-3 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 mb-6"
          >
            <Camera size={32} />
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Our Journey in <span className="text-amber-500 italic">Frames</span></h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Capturing the smiles, spirituality, and discoveries of our global travelers. Every photo tells a story of a dream fulfilled.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat, i) => (
            <button key={i} className={`px-6 py-2 rounded-full text-sm font-bold border transition-all ${i === 0 ? 'bg-amber-600 border-amber-600 text-white' : 'border-white/10 text-zinc-400 hover:border-white/30'}`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative overflow-hidden rounded-3xl group cursor-pointer ${
                item.size === 'large' ? 'md:col-span-2 md:row-span-2' : 
                item.size === 'wide' ? 'md:col-span-2' : 
                'md:col-span-1'
              }`}
            >
              <img src={item.url} className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" alt={item.title} />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
              
              <div className="absolute top-4 right-4 z-10">
                {item.type === 'video' ? (
                  <div className="w-10 h-10 rounded-full bg-amber-600 border-2 border-white flex items-center justify-center text-white">
                    <Play size={16} fill="white" />
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                    <Camera size={16} />
                  </div>
                )}
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                 <p className="text-xl font-bold font-serif mb-1">{item.title}</p>
                 <div className="flex items-center gap-2 text-xs text-amber-500 font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    View Project <ExternalLink size={12} />
                 </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Highlights Section */}
        <section className="mt-32">
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-3xl font-serif font-bold">Video Highlights</h2>
            <div className="h-[1px] bg-white/10 flex-grow"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((v) => (
              <div key={v} className="relative aspect-video rounded-[2.5rem] overflow-hidden group shadow-2xl">
                 <img src={`https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=1200&auto=format&fit=crop`} className="w-full h-full object-cover filter brightness-[0.6]" alt="Video Thumbnail" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-white text-emerald-950 flex items-center justify-center shadow-2xl group-hover:scale-125 transition-transform">
                       <Play size={32} fill="currentColor" />
                    </div>
                 </div>
                 <div className="absolute bottom-10 left-10 text-white">
                    <p className="text-xs uppercase font-black tracking-widest mb-2 text-amber-500">Documentary</p>
                    <h4 className="text-2xl font-serif font-bold">The Journey of Faith 2025</h4>
                 </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="mt-32 py-16 px-12 rounded-[3.5rem] bg-emerald-900 grid grid-cols-2 md:grid-cols-4 gap-8 text-center border border-emerald-800">
           {[
             { label: 'Happy Travelers', val: '50k+' },
             { label: 'Group Tours', val: '800+' },
             { label: 'Destinations', val: '12 countries' },
             { label: 'Visas Approved', val: '120k+' }
           ].map((s, i) => (
             <div key={i}>
               <p className="text-4xl font-serif font-black text-amber-500 mb-2">{s.val}</p>
               <p className="text-xs uppercase font-bold text-emerald-200/60 tracking-[0.2em]">{s.label}</p>
             </div>
           ))}
        </section>
      </div>
    </div>
  );
};

export default Gallery;
