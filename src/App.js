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

// --- CONFIGURATION (Using standard strings to avoid build errors) ---
const WHATSAPP_NUMBER = '918919852330';
const INSTAGRAM_URL = 'https://www.instagram.com/ab_clicks_official/';
const HERO_IMAGE = 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80';

const INSTAGRAM_WORKS = [
  { type: 'Video', label: 'Pre-Wedding Story', url: 'https://www.instagram.com/reel/DVOZ3HNk7WU/', thumbnail: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80' },
  { type: 'Video', label: 'Save The Date', url: 'https://www.instagram.com/reel/DReov7mE5PW/', thumbnail: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80' },
  { type: 'Video', label: 'Haldi Rituals', url: 'https://www.instagram.com/reel/DR7Iwmuk1rw/', thumbnail: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80' },
  { type: 'Photo', label: 'Wedding Portrait', url: 'https://www.instagram.com/p/DVig8fok_Vy/', thumbnail: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80' },
  { type: 'Photo', label: 'Traditional Soul', url: 'https://www.instagram.com/p/DVZ_zn8k1jp/', thumbnail: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80' },
  { type: 'Photo', label: 'Candid Joy', url: 'https://www.instagram.com/p/DVDajxLE8AT/', thumbnail: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80' }
];

const SERVICES = [
  { id: '01', title: 'CINEMATIC WEDDINGS', desc: 'A high-end filmic approach to your most sacred rituals.' },
  { id: '02', title: 'PRE-WEDDING STORIES', desc: 'Narrative-driven visual storytelling in global locations.' },
  { id: '03', title: 'BIRTHDAYS & EVENTS', desc: 'Vibrant and soulful coverage of your life’s milestones.' },
  { id: '04', title: 'LUXURY MATERNITY', desc: 'Graceful documentation of life’s most beautiful transition.' }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', event: 'Wedding', date: '', msg: '' });
  const cursorRef = useRef(null);

  useEffect(() => {
    // 1. Inject External Resources
    const fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,900;1,400&family=Inter:wght@300;400;700;900&display=swap';
    document.head.appendChild(fontLink);

    // 2. Inject CSS programmatically to avoid ESLint parsing errors in JSX
    const styleTag = document.createElement('style');
    styleTag.innerHTML = 'body { font-family: "Inter", sans-serif; cursor: none; background: black; margin: 0; } .font-serif { font-family: "Playfair Display", serif; } html { scroll-behavior: smooth; } @keyframes subtle-zoom { from { transform: scale(1); } to { transform: scale(1.1); } } .animate-subtle-zoom { animation: subtle-zoom 20s infinite alternate linear; } ::-webkit-scrollbar { width: 5px; } ::-webkit-scrollbar-track { background: #000; } ::-webkit-scrollbar-thumb { background: #1a1a1a; border-radius: 10px; } ::-webkit-scrollbar-thumb:hover { background: #D4AF37; } input[type="date"]::-webkit-calendar-picker-indicator { filter: invert(1); opacity: 0.3; }';
    document.head.appendChild(styleTag);

    // 3. Scroll and Cursor Listeners
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top = e.clientY + 'px';
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', moveCursor);
      if (document.head.contains(fontLink)) document.head.removeChild(fontLink);
      if (document.head.contains(styleTag)) document.head.removeChild(styleTag);
    };
  }, []);

  const sendWhatsApp = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    const message = 'Hello AB Clicks,\n*New Booking Inquiry*\nName: ' + formData.name + '\nPhone: ' + formData.phone + '\nEvent: ' + formData.event + '\nDate: ' + formData.date;
    window.open('https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(message), '_blank');
  };

  return (
    <div className="bg-black text-white font-sans selection:bg-[#D4AF37] selection:text-black min-h-screen overflow-x-hidden">
      
      {/* Visual Cursor Element */}
      <div ref={cursorRef} className="hidden lg:block fixed w-8 h-8 border border-[#D4AF37] rounded-full pointer-events-none z-[999] mix-blend-difference -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out" />

      {/* Navigation */}
      <nav className={'fixed top-0 w-full z-[100] transition-all duration-700 px-8 md:px-16 flex justify-between items-center ' + (scrolled ? 'py-6 bg-black/90 backdrop-blur-md' : 'py-10 bg-transparent')}>
        <div className="text-2xl font-black tracking-[0.5em] flex items-center gap-2 uppercase">
          <span>AB</span><span className="font-thin opacity-40">Clicks</span>
        </div>
        <div className="flex items-center gap-8 md:gap-12">
          <a href="#contact" className="hidden sm:block text-[10px] tracking-[0.4em] font-bold border-b border-[#D4AF37] pb-1 hover:opacity-50 transition-opacity uppercase">Book Inquiry</a>
          <button onClick={() => setIsMenuOpen(true)} className="flex flex-col gap-2 group p-2">
            <div className="w-8 h-[1px] bg-white group-hover:w-12 transition-all"></div>
            <div className="w-8 h-[1px] bg-white group-hover:w-6 transition-all self-end"></div>
          </button>
        </div>
      </nav>

      {/* Overlay Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{ opacity: 0, x: '100%' }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: '100%' }} transition={{ duration: 0.6 }} className="fixed inset-0 z-[200] bg-[#080808] flex flex-col justify-center px-8 md:px-24">
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-12 right-8 md:right-16 text-white hover:rotate-90 transition-transform duration-500">
              <X size={40} strokeWidth={1} />
            </button>
            <div className="flex flex-col gap-6 md:gap-10">
              {['Home', 'Portfolio', 'Services', 'Contact'].map((item) => (
                <a key={item} href={'#' + item.toLowerCase()} onClick={() => setIsMenuOpen(false)} className="text-5xl md:text-8xl font-serif font-light tracking-tighter hover:italic hover:text-[#D4AF37] transition-all uppercase">{item}</a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex flex-col justify-center items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img src={HERO_IMAGE} className="w-full h-full object-cover animate-subtle-zoom" alt="Hero" />
        </div>
        <div className="relative z-20 text-center px-6 max-w-5xl">
          <span className="text-[#D4AF37] tracking-[0.6em] text-[10px] uppercase font-bold mb-8 block">Creative Storytelling</span>
          <h1 className="text-6xl md:text-[9rem] font-serif leading-[0.85] tracking-tighter mb-12 uppercase">Capture <br /><span className="italic font-light opacity-60 text-[#D4AF37]">Memories.</span></h1>
          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8">
            <button onClick={() => window.open('https://wa.me/' + WHATSAPP_NUMBER, '_blank')} className="px-12 py-5 bg-white text-black text-[10px] tracking-[0.3em] font-black uppercase rounded-full hover:bg-[#D4AF37] transition-all">Book Now</button>
            <a href="#portfolio" className="px-12 py-5 border border-white/20 backdrop-blur-md text-[10px] tracking-[0.3em] font-black uppercase rounded-full hover:bg-white/10 transition-all text-center">View Works</a>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section id="portfolio" className="py-32 px-8 md:px-16 bg-black">
        <div className="max-w-screen-2xl mx-auto">
          <h2 className="text-5xl md:text-8xl font-serif tracking-tighter leading-none uppercase mb-24">Latest <br/><span className="italic text-[#D4AF37]">Stories</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {INSTAGRAM_WORKS.map((work, idx) => (
              <div key={idx} onClick={() => window.open(work.url, '_blank')} className="group relative aspect-[3/4] bg-zinc-900 rounded-3xl overflow-hidden border border-white/5 cursor-pointer">
                <img src={work.thumbnail} alt={work.label} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                <div className="absolute bottom-8 left-8 z-20">
                  <span className="text-[#D4AF37] text-[10px] tracking-[0.3em] font-black uppercase mb-2 block">{work.type}</span>
                  <h3 className="text-2xl font-serif uppercase">{work.label}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-8 md:px-16 bg-[#050505]">
        <div className="max-w-screen-2xl mx-auto grid lg:grid-cols-2 gap-24">
          <h2 className="text-5xl md:text-7xl font-serif tracking-tighter leading-none uppercase">Our <br/> <span className="italic font-light">Expertise</span></h2>
          <div className="divide-y divide-white/10">
            {SERVICES.map((s) => (
              <div key={s.id} className="py-12 group flex justify-between items-center hover:px-4 transition-all duration-500">
                <div>
                  <h3 className="text-2xl md:text-4xl font-serif group-hover:text-[#D4AF37] uppercase">{s.title}</h3>
                  <p className="text-zinc-500 text-sm mt-4 max-w-xs">{s.desc}</p>
                </div>
                <Plus className="text-zinc-800 group-hover:text-[#D4AF37] group-hover:rotate-90 transition-all" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-32 px-8 md:px-16 bg-black">
        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-24">
          <div>
            <h2 className="text-5xl md:text-8xl font-serif tracking-tighter mb-12 leading-[0.8] uppercase">Let's <br/> <span className="italic opacity-30 text-[#D4AF37]">Connect.</span></h2>
            <div className="space-y-10">
              <div onClick={() => window.open('https://wa.me/' + WHATSAPP_NUMBER, '_blank')} className="flex items-center gap-6 group cursor-pointer">
                <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all"><Phone size={24} /></div>
                <div><p className="text-[10px] tracking-widest text-zinc-600 uppercase">WhatsApp</p><p className="text-xl font-light">+91 89198 52330</p></div>
              </div>
            </div>
          </div>

          <form onSubmit={sendWhatsApp} className="space-y-12 bg-zinc-900/20 p-8 md:p-12 rounded-[2.5rem] border border-white/5">
            <input type="text" required placeholder="Full Name" className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-[#D4AF37] uppercase text-xs" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
            <input type="tel" required placeholder="WhatsApp Number" className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-[#D4AF37] uppercase text-xs" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
            <select className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-[#D4AF37] text-white text-xs uppercase" value={formData.event} onChange={e => setFormData({...formData, event: e.target.value})}>
              <option value="Wedding">Wedding</option><option value="Pre-Wedding">Pre-Wedding</option><option value="Birthday">Birthday</option>
            </select>
            <input type="date" required className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-[#D4AF37] text-white text-xs" value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} />
            <button type="submit" className="flex items-center gap-6 text-[10px] tracking-[0.5em] font-black uppercase hover:text-[#D4AF37] transition-all">Send Inquiry <ChevronRight size={16} /></button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-8 md:px-16 border-t border-white/5 text-center">
        <h3 className="text-2xl font-black tracking-[0.5em] mb-4 uppercase">AB<span className="font-thin opacity-30">Clicks</span></h3>
        <p className="text-[10px] tracking-widest text-zinc-800 uppercase font-black">© 2024 AB CLICKS STUDIO.</p>
      </footer>

      {/* Floating Action Button */}
      <a href={'https://wa.me/' + WHATSAPP_NUMBER} target="_blank" rel="noreferrer" className="fixed bottom-10 right-10 z-[150] w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-2xl">
        <MessageCircle size={28} />
      </a>
    </div>
  );
}

```
