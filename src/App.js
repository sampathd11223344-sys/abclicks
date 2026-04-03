```react
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Instagram, 
  MessageCircle, 
  X, 
  ArrowUpRight, 
  Play,
  Phone,
  ChevronRight,
  Plus,
  ExternalLink,
  ChevronDown
} from 'lucide-react';

// --- CONFIGURATION ---
const WHATSAPP_NUMBER = "918919852330";
const INSTAGRAM_URL = "https://www.instagram.com/ab_clicks_official/";
const HERO_IMAGE = "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80";

// --- DATA ---
const INSTAGRAM_WORKS = [
  { 
    type: 'Video', 
    label: 'Pre-Wedding Story', 
    url: 'https://www.instagram.com/reel/DVOZ3HNk7WU/', 
    thumbnail: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80' 
  },
  { 
    type: 'Video', 
    label: 'Save The Date', 
    url: 'https://www.instagram.com/reel/DReov7mE5PW/', 
    thumbnail: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80' 
  },
  { 
    type: 'Video', 
    label: 'Haldi Rituals', 
    url: 'https://www.instagram.com/reel/DR7Iwmuk1rw/', 
    thumbnail: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80' 
  },
  { 
    type: 'Photo', 
    label: 'Wedding Portrait', 
    url: 'https://www.instagram.com/p/DVig8fok_Vy/', 
    thumbnail: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80' 
  },
  { 
    type: 'Photo', 
    label: 'Traditional Soul', 
    url: 'https://www.instagram.com/p/DVZ_zn8k1jp/', 
    thumbnail: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80' 
  },
  { 
    type: 'Photo', 
    label: 'Candid Joy', 
    url: 'https://www.instagram.com/p/DVDajxLE8AT/', 
    thumbnail: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80' 
  },
];

const SERVICES = [
  { id: '01', title: 'CINEMATIC WEDDINGS', desc: 'A high-end filmic approach to your most sacred rituals. We focus on light, shadow, and deep emotional resonance.' },
  { id: '02', title: 'PRE-WEDDING STORIES', desc: 'Narrative-driven visual storytelling in global locations. Each film is unique to the couple’s journey.' },
  { id: '03', title: 'BIRTHDAYS & EVENTS', desc: 'Vibrant and soulful coverage of your life’s milestones. We capture the joy and energy of every guest.' },
  { id: '04', title: 'LUXURY MATERNITY', desc: 'Graceful documentation of life’s most beautiful transition, handled with care, elegance, and timeless style.' },
];

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', event: 'Wedding', date: '', msg: '' });
  const cursorRef = useRef(null);

  useEffect(() => {
    // Inject Fonts via Link Tag to bypass ESLint Decorator check
    const fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    // String split to avoid @ character being parsed as a decorator
    const atSymbol = '@';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght' + atSymbol + '0,400;0,900;1,400&family=Inter:wght' + atSymbol + '300;400;700;900&display=swap';
    document.head.appendChild(fontLink);

    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top = e.clientY + 'px';
      }
    };
    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', moveCursor);
      if (document.head.contains(fontLink)) document.head.removeChild(fontLink);
    };
  }, []);

  const sendWhatsApp = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const message = `Hello AB Clicks Studio,;*New Booking Inquiry*Name: ${formData.name}WhatsApp: ${formData.phone}Event Type: ${formData.event}Event Date: ${formData.date}Message: ${formData.msg}`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const menuVariants = {
    closed: { opacity: 0, x: "100%" },
    open: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }
  };

  return (
    <div className="bg-black text-white font-sans selection:bg-[#D4AF37] selection:text-black min-h-screen overflow-x-hidden">
      
      {/* PROGRAMMATIC CSS - Ensuring all specific styles are present */}
      <style dangerouslySetInnerHTML={{ __html: `
        body { font-family: 'Inter', sans-serif; cursor: none; background: black; margin: 0; }
        .font-serif { font-family: 'Playfair Display', serif; }
        html { scroll-behavior: smooth; }
        @keyframes subtle-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
        .animate-subtle-zoom { animation: subtle-zoom 20s infinite alternate linear; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #000; }
        ::-webkit-scrollbar-thumb { background: #1a1a1a; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #D4AF37; }
        input[type="date"]::-webkit-calendar-picker-indicator { filter: invert(1); opacity: 0.3; }
      `}} />

      {/* CUSTOM CURSOR */}
      <div 
        ref={cursorRef}
        className="hidden lg:block fixed w-8 h-8 border border-[#D4AF37] rounded-full pointer-events-none z-[999] mix-blend-difference -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out"
      />

      {/* --- NAVIGATION --- */}
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-700 px-8 md:px-16 flex justify-between items-center ${scrolled ? 'py-6 bg-black/90 backdrop-blur-md' : 'py-10 bg-transparent'}`}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-2xl font-black tracking-[0.5em] flex items-center gap-2 uppercase">
          <span>AB</span><span className="font-thin opacity-40">Clicks</span>
        </motion.div>
        
        <div className="flex items-center gap-8 md:gap-12">
          <a href="#contact" className="hidden sm:block text-[10px] tracking-[0.4em] font-bold border-b border-[#D4AF37] pb-1 hover:opacity-50 transition-opacity uppercase">
            Book Inquiry
          </a>
          <button onClick={() => setIsMenuOpen(true)} className="flex flex-col gap-2 group p-2">
            <div className="w-8 h-[1px] bg-white group-hover:w-12 transition-all"></div>
            <div className="w-8 h-[1px] bg-white group-hover:w-6 transition-all self-end"></div>
          </button>
        </div>
      </nav>

      {/* --- OVERLAY MENU --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div variants={menuVariants} initial="closed" animate="open" exit="closed" className="fixed inset-0 z-[200] bg-[#080808] flex flex-col justify-center px-8 md:px-24">
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-12 right-8 md:right-16 text-white hover:rotate-90 transition-transform duration-500">
              <X size={40} strokeWidth={1} />
            </button>
            <div className="flex flex-col gap-6 md:gap-10">
              {['Home', 'Portfolio', 'Services', 'Contact'].map((item, i) => (
                <motion.a
                  key={item} href={`#${item.toLowerCase()}`}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-5xl md:text-8xl font-serif font-light tracking-tighter hover:italic hover:text-[#D4AF37] transition-all uppercase"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- HERO SECTION --- */}
      <section id="home" className="relative h-screen flex flex-col justify-center items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black z-10" />
          <img 
            src={HERO_IMAGE} 
            className="w-full h-full object-cover animate-subtle-zoom" 
            alt="Cinematic Experience" 
          />
        </div>

        <div className="relative z-20 text-center px-6 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <span className="text-[#D4AF37] tracking-[0.6em] text-[10px] md:text-xs uppercase font-bold mb-8 block">
              Budget-friendly • Creative Storytelling • Trusted by Hundreds
            </span>
            <h1 className="text-6xl md:text-[10rem] font-serif leading-[0.85] tracking-tighter mb-12 uppercase">
              Capture <br /> <span className="italic font-light opacity-60 text-[#D4AF37]">Memories.</span>
            </h1>
            
            <p className="text-zinc-400 max-w-xl mx-auto text-sm md:text-lg mb-12 font-light leading-relaxed">
              Premier Photography & Cinematic Videography for Weddings, Birthdays, Pre-Wedding Shoots & Sacred Occasions. Based in India, available globally.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button 
                onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank')}
                className="px-12 py-5 bg-white text-black text-[10px] tracking-[0.3em] font-black uppercase rounded-full hover:bg-[#D4AF37] transition-all"
              >
                Book Now
              </button>
              <a href="#portfolio" className="px-12 py-5 border border-white/20 backdrop-blur-md text-[10px] tracking-[0.3em] font-black uppercase rounded-full hover:bg-white/10 transition-all text-center">
                View Portfolio
              </a>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-12 flex flex-col items-center gap-4 animate-bounce opacity-30">
          <ChevronDown size={30} strokeWidth={1} />
        </div>
      </section>

      {/* --- TRUST BAR --- */}
      <div className="bg-zinc-950 py-8 border-y border-white/5 overflow-hidden whitespace-nowrap">
        <div className="flex gap-20 justify-center items-center opacity-40 uppercase">
          <span className="text-xs tracking-[0.5em] font-bold">100+ Happy Clients</span>
          <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
          <span className="text-xs tracking-[0.5em] font-bold">300+ Shoots Completed</span>
          <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
          <span className="text-xs tracking-[0.5em] font-bold">Cinematic Excellence</span>
        </div>
      </div>

      {/* --- PORTFOLIO --- */}
      <section id="portfolio" className="py-32 px-8 md:px-16 bg-black">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <h2 className="text-5xl md:text-8xl font-serif tracking-tighter leading-none uppercase">Selected <br/><span className="italic text-[#D4AF37]">Works</span></h2>
            <p className="text-zinc-500 max-w-sm text-sm font-light leading-relaxed">
              Explore our latest cinematic reels and portraits. We believe in minimal edits and maximum emotion. Click any card to view full story on Instagram.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {INSTAGRAM_WORKS.map((work, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                onClick={() => window.open(work.url, '_blank')}
                className="group relative aspect-[3/4] bg-zinc-900 rounded-3xl overflow-hidden border border-white/5 cursor-pointer"
              >
                <img 
                  src={work.thumbnail} 
                  alt={work.label} 
                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-xl flex items-center justify-center text-white border border-white/30">
                    {work.type === 'Video' ? <Play size={30} fill="white" /> : <ExternalLink size={30} />}
                  </div>
                </div>
                
                <div className="absolute bottom-8 left-8 z-20">
                  <span className="text-[#D4AF37] text-[10px] tracking-[0.3em] font-black uppercase mb-2 block">{work.type}</span>
                  <h3 className="text-2xl font-serif mb-4 uppercase">{work.label}</h3>
                  <div className="flex items-center gap-2 text-[10px] tracking-[0.2em] font-bold text-white transition-all uppercase">
                    VIEW ON INSTAGRAM <ArrowUpRight size={14} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SERVICES --- */}
      <section id="services" className="py-32 px-8 md:px-16 bg-[#050505] border-y border-white/5">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
              <span className="text-[#D4AF37] tracking-[0.4em] text-[10px] font-bold uppercase mb-6 block">OUR EXPERTISE</span>
              <h2 className="text-5xl md:text-7xl font-serif mb-12 tracking-tighter leading-none uppercase">Crafting <br/> The <span className="italic font-light">Extraordinary</span></h2>
            </div>
            <div className="space-y-0">
              {SERVICES.map((service, i) => (
                <div key={i} className="group border-b border-white/10 py-12 flex justify-between items-start hover:px-4 transition-all duration-500 cursor-default">
                  <div className="flex gap-12">
                    <span className="text-[10px] text-zinc-600 font-bold mt-2">{service.id}</span>
                    <div>
                      <h3 className="text-2xl md:text-4xl font-serif group-hover:text-[#D4AF37] transition-colors uppercase">{service.title}</h3>
                      <p className="text-zinc-500 text-sm mt-4 max-w-xs font-light leading-relaxed">{service.desc}</p>
                    </div>
                  </div>
                  <Plus className="text-zinc-800 group-hover:text-[#D4AF37] group-hover:rotate-90 transition-all" size={30} strokeWidth={1} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT --- */}
      <section id="contact" className="py-32 px-8 md:px-16 bg-black">
        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-24">
          <div>
            <h2 className="text-5xl md:text-8xl font-serif tracking-tighter mb-12 leading-[0.8] uppercase">Estimate <br/> <span className="italic opacity-30 text-[#D4AF37]">Your Film.</span></h2>
            <div className="space-y-10">
              <div className="flex items-center gap-6 group cursor-pointer" onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank')}>
                <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
                  <Phone size={24} strokeWidth={1} />
                </div>
                <div>
                  <p className="text-[10px] tracking-widest text-zinc-600 uppercase mb-1">Direct WhatsApp</p>
                  <p className="text-xl font-light">+91 89198 52330</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group cursor-pointer" onClick={() => window.open(INSTAGRAM_URL, '_blank')}>
                <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
                  <Instagram size={24} strokeWidth={1} />
                </div>
                <div>
                  <p className="text-[10px] tracking-widest text-zinc-600 uppercase mb-1">Social Gallery</p>
                  <p className="text-xl font-light">@ab_clicks_official</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={sendWhatsApp} className="space-y-12 bg-zinc-900/20 p-8 md:p-12 rounded-[2.5rem] border border-white/5">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="relative group">
                <input 
                  type="text" required placeholder=" " 
                  className="peer w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-[#D4AF37] transition-all font-light"
                  value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                />
                <label className="absolute left-0 top-4 text-xs tracking-widest text-zinc-600 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-[#D4AF37] peer-[:not(:placeholder-shown)]:-top-4 uppercase font-black">Full Name</label>
              </div>
              <div className="relative group">
                <input 
                  type="tel" required placeholder=" "
                  className="peer w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-[#D4AF37] transition-all font-light"
                  value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})}
                />
                <label className="absolute left-0 top-4 text-xs tracking-widest text-zinc-600 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-[#D4AF37] peer-[:not(:placeholder-shown)]:-top-4 uppercase font-black">WhatsApp No.</label>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-2">
                <label className="text-[10px] tracking-[0.3em] text-zinc-600 font-black uppercase">Shoot Category</label>
                <select 
                  className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-[#D4AF37] transition-all text-white font-light"
                  value={formData.event} onChange={e => setFormData({...formData, event: e.target.value})}
                >
                  <option className="bg-zinc-900" value="Wedding">Wedding</option>
                  <option className="bg-zinc-900" value="Pre-Wedding">Pre-Wedding</option>
                  <option className="bg-zinc-900" value="Birthday">Birthday</option>
                  <option className="bg-zinc-900" value="Event">Special Occasion</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] tracking-[0.3em] text-zinc-600 font-black uppercase">Event Date</label>
                <input 
                  type="date" required
                  className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-[#D4AF37] transition-all text-white font-light"
                  value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})}
                />
              </div>
            </div>

            <button type="submit" className="group flex items-center gap-6 text-[10px] tracking-[0.5em] font-black uppercase hover:text-[#D4AF37] transition-all">
              Send Estimate Request <ChevronRight className="group-hover:translate-x-4 transition-transform text-[#D4AF37]" />
            </button>
          </form>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-24 px-8 md:px-16 border-t border-white/5 bg-black">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-16">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-black tracking-[0.5em] mb-4 uppercase">AB<span className="font-thin opacity-30">Clicks</span></h3>
            <p className="text-zinc-600 text-[10px] tracking-[0.4em] uppercase">Trusted by 100+ Happy Clients Globally.</p>
          </div>
          
          <div className="flex gap-10">
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full border border-white/5 flex items-center justify-center hover:border-[#D4AF37] transition-all text-zinc-500 hover:text-[#D4AF37]">
              <Instagram size={24} strokeWidth={1} />
            </a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full border border-white/5 flex items-center justify-center hover:border-[#D4AF37] transition-all text-zinc-500 hover:text-[#D4AF37]">
              <MessageCircle size={24} strokeWidth={1} />
            </a>
          </div>

          <div className="text-[10px] tracking-widest text-zinc-800 text-right uppercase font-black leading-relaxed">
            &copy; {new Date().getFullYear()} AB CLICKS STUDIO. <br/> LEGACY THROUGH LENSES.
          </div>
        </div>
      </footer>

      {/* --- WHATSAPP FAB --- */}
      <motion.a 
        href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer"
        initial={{ scale: 0 }} animate={{ scale: 1 }} whileHover={{ scale: 1.1 }}
        className="fixed bottom-10 right-10 z-[150] w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl text-white shadow-green-500/20"
      >
        <MessageCircle size={28} />
      </motion.a>

    </div>
  );
};

export default App;

```
