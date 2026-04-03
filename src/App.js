```react
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Instagram, 
  MessageCircle, 
  X, 
  ArrowUpRight, 
  Play,
  Phone,
  Plus,
  ExternalLink,
  ChevronDown,
  ChevronRight
} from 'lucide-react';

// --- CONFIGURATION ---
const WHATSAPP_NUMBER = "918919852330";
const INSTAGRAM_PROFILE = "https://www.instagram.com/ab_clicks_official/";

const PORTFOLIO_DATA = [
  { type: 'Video', label: 'Pre-Wedding Story', url: 'https://www.instagram.com/reel/DVOZ3HNk7WU/', thumb: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000' },
  { type: 'Video', label: 'Save The Date', url: 'https://www.instagram.com/reel/DReov7mE5PW/', thumb: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1000' },
  { type: 'Video', label: 'Haldi Rituals', url: 'https://www.instagram.com/reel/DR7Iwmuk1rw/', thumb: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1000' },
  { type: 'Photo', label: 'Wedding Portrait', url: 'https://www.instagram.com/p/DVig8fok_Vy/', thumb: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1000' },
  { type: 'Photo', label: 'Traditional Soul', url: 'https://www.instagram.com/p/DVZ_zn8k1jp/', thumb: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1000' },
  { type: 'Photo', label: 'Candid Joy', url: 'https://www.instagram.com/p/DVDajxLE8AT/', thumb: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1000' }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', event: 'Wedding', date: '', msg: '' });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppAction = (customMsg = "") => {
    const text = customMsg || `Hello AB Clicks, I'm interested in booking a shoot!`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const message = `*AB Clicks Booking*\nName: ${formData.name}\nPhone: ${formData.phone}\nEvent: ${formData.event}\nDate: ${formData.date}\nNote: ${formData.msg}`;
    handleWhatsAppAction(message);
  };

  return (
    <div className="bg-black text-white font-sans selection:bg-[#D4AF37] selection:text-black min-h-screen">
      
      {/* --- HEADER --- */}
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-700 px-6 md:px-16 flex justify-between items-center ${scrolled ? 'py-5 bg-black/90 backdrop-blur-xl border-b border-white/10' : 'py-10'}`}>
        <div className="text-2xl font-black tracking-[0.4em] uppercase">AB<span className="font-thin opacity-40">Clicks</span></div>
        <button onClick={() => setIsMenuOpen(true)} className="flex flex-col gap-2 group p-2">
          <div className="w-8 h-[1px] bg-white group-hover:w-12 transition-all"></div>
          <div className="w-8 h-[1px] bg-white group-hover:w-6 transition-all self-end"></div>
        </button>
      </nav>

      {/* --- FULLSCREEN MENU --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }} className="fixed inset-0 z-[200] bg-[#0A0A0A] flex flex-col justify-center px-10 md:px-24">
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-10 right-10 hover:rotate-90 transition-transform"><X size={40} strokeWidth={1} /></button>
            <div className="flex flex-col gap-8">
              {['Home', 'Portfolio', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="text-6xl md:text-9xl font-serif font-light hover:text-[#D4AF37] transition-colors">{item}</a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- HERO --- */}
      <section id="home" className="relative h-screen flex items-center justify-center text-center px-6">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2000" className="w-full h-full object-cover grayscale opacity-50" alt="hero" />
        </div>
        <div className="relative z-20 max-w-5xl">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[#D4AF37] tracking-[0.5em] text-xs font-bold uppercase mb-6 block">Budget-friendly • Creative • Trusted</motion.span>
          <motion.h1 initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="text-6xl md:text-[10rem] font-serif leading-[0.85] tracking-tighter mb-10 uppercase">Capture <br/> <span className="italic font-light opacity-50">Memories.</span></motion.h1>
          <p className="text-zinc-400 max-w-xl mx-auto mb-12 text-sm md:text-lg font-light uppercase tracking-widest">Photography & Videography for Weddings, Birthdays & Occasions.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button onClick={() => handleWhatsAppAction()} className="px-12 py-5 bg-white text-black font-black uppercase text-[10px] tracking-widest rounded-full hover:bg-[#D4AF37] transition-all">Book Now</button>
            <a href="#portfolio" className="px-12 py-5 border border-white/20 backdrop-blur-md font-black uppercase text-[10px] tracking-widest rounded-full hover:bg-white/10 transition-all">View Portfolio</a>
          </div>
        </div>
        <div className="absolute bottom-10 animate-bounce opacity-20"><ChevronDown size={30} /></div>
      </section>

      {/* --- STATS --- */}
      <div className="bg-zinc-950 py-10 border-y border-white/5 flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale">
        <div className="text-center"><div className="text-3xl font-serif">100+</div><div className="text-[10px] tracking-widest uppercase">Happy Clients</div></div>
        <div className="text-center"><div className="text-3xl font-serif">300+</div><div className="text-[10px] tracking-widest uppercase">Shoots Done</div></div>
      </div>

      {/* --- PORTFOLIO --- */}
      <section id="portfolio" className="py-32 px-6 md:px-16 max-w-screen-2xl mx-auto">
        <div className="flex justify-between items-end mb-20">
          <h2 className="text-5xl md:text-8xl font-serif tracking-tighter uppercase leading-none">Latest <br/><span className="italic text-[#D4AF37]">Stories</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.map((work, i) => (
            <motion.div whileHover={{ y: -10 }} key={i} onClick={() => window.open(work.url, '_blank')} className="group relative aspect-[3/4] rounded-3xl overflow-hidden cursor-pointer border border-white/10">
              <img src={work.thumb} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="thumb" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20"><ExternalLink size={24} /></div>
              </div>
              <div className="absolute bottom-8 left-8">
                <span className="text-[#D4AF37] text-[10px] font-bold tracking-widest uppercase">{work.type}</span>
                <h3 className="text-2xl font-serif">{work.label}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- CONTACT --- */}
      <section id="contact" className="py-32 px-6 md:px-16 bg-[#080808]">
        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-5xl md:text-8xl font-serif tracking-tighter mb-10 leading-none">GET AN <br/><span className="italic opacity-30">ESTIMATE.</span></h2>
            <div className="flex items-center gap-6 mb-8 group cursor-pointer" onClick={() => handleWhatsAppAction()}>
              <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all"><Phone size={24} /></div>
              <div><p className="text-[10px] uppercase text-zinc-500 font-bold">WhatsApp</p><p className="text-xl">+91 89198 52330</p></div>
            </div>
            <div className="flex items-center gap-6 group cursor-pointer" onClick={() => window.open(INSTAGRAM_PROFILE, '_blank')}>
              <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all"><Instagram size={24} /></div>
              <div><p className="text-[10px] uppercase text-zinc-500 font-bold">Instagram</p><p className="text-xl">@ab_clicks_official</p></div>
            </div>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-8 bg-zinc-900/30 p-8 md:p-12 rounded-[2.5rem] border border-white/5">
            <input type="text" required placeholder="FULL NAME" className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-[#D4AF37] transition-all font-light text-xs tracking-widest" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
            <input type="tel" required placeholder="WHATSAPP NUMBER" className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-[#D4AF37] transition-all font-light text-xs tracking-widest" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
            <div className="grid grid-cols-2 gap-8">
              <select className="bg-transparent border-b border-white/20 py-4 outline-none text-xs text-zinc-500" value={formData.event} onChange={e => setFormData({...formData, event: e.target.value})}>
                <option value="Wedding">Wedding</option><option value="Pre-Wedding">Pre-Wedding</option><option value="Birthday">Birthday</option><option value="Event">Event</option>
              </select>
              <input type="date" className="bg-transparent border-b border-white/20 py-4 outline-none text-xs text-zinc-500" value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} />
            </div>
            <button type="submit" className="w-full bg-[#D4AF37] text-black font-black py-5 rounded-full text-[10px] tracking-widest uppercase hover:scale-105 transition-all">Send Inquiry</button>
          </form>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-20 text-center border-t border-white/5">
        <h3 className="text-2xl font-black tracking-[0.5em] mb-4">AB<span className="font-thin opacity-30 uppercase">Clicks</span></h3>
        <p className="text-zinc-600 text-[10px] tracking-[0.3em] uppercase mb-10">Legacy Through Lenses • {new Date().getFullYear()}</p>
        <div className="flex justify-center gap-6">
          <Instagram onClick={() => window.open(INSTAGRAM_PROFILE, '_blank')} className="cursor-pointer hover:text-[#D4AF37] transition-colors" />
          <MessageCircle onClick={() => handleWhatsAppAction()} className="cursor-pointer hover:text-[#D4AF37] transition-colors" />
        </div>
      </footer>

      {/* --- FAB --- */}
      <button onClick={() => handleWhatsAppAction()} className="fixed bottom-10 right-10 z-[150] w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all text-white"><MessageCircle size={28} /></button>

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,900;1,400&family=Inter:wght@300;400;700;900&display=swap');
        body { font-family: 'Inter', sans-serif; scroll-behavior: smooth; background: black; }
        .font-serif { font-family: 'Playfair Display', serif; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #000; }
        ::-webkit-scrollbar-thumb { background: #1a1a1a; border-radius: 10px; }
        input[type="date"]::-webkit-calendar-picker-indicator { filter: invert(1); opacity: 0.3; }
      `}} />
    </div>
  );
}


```
