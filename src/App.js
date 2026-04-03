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
  ChevronRight,
  Camera,
  Film
} from 'lucide-react';

// --- CONFIGURATION ---
const WHATSAPP_NUMBER = "918919852330";
const INSTAGRAM_HANDLE = "ab_clicks_officials";
const INSTAGRAM_PROFILE = `https://www.instagram.com/${INSTAGRAM_HANDLE}/`;

const PORTFOLIO_DATA = [
  { type: 'Video', label: 'Pre-Wedding Story', url: 'https://www.instagram.com/reel/DVOZ3HNk7WU/', thumb: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000' },
  { type: 'Video', label: 'Save The Date', url: 'https://www.instagram.com/reel/DReov7mE5PW/', thumb: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1000' },
  { type: 'Video', label: 'Haldi Rituals', url: 'https://www.instagram.com/reel/DR7Iwmuk1rw/', thumb: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1000' },
  { type: 'Video', label: 'Haldi Celebration', url: 'https://www.instagram.com/reel/DSKgVIeCHeN/', thumb: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1000' },
  { type: 'Photo', label: 'Wedding Portrait', url: 'https://www.instagram.com/p/DVig8fok_Vy/', thumb: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1000' },
  { type: 'Photo', label: 'Natural Grace', url: 'https://www.instagram.com/p/DVZ_zn8k1jp/', thumb: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1000' },
  { type: 'Photo', label: 'Candid Joy', url: 'https://www.instagram.com/p/DVDajxLE8AT/', thumb: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1000' },
  { type: 'Photo', label: 'Golden Hour', url: 'https://www.instagram.com/p/DRgiVIIk8qV/', thumb: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1000' }
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
    const message = `*AB Clicks Booking Inquiry*\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Event:* ${formData.event}\n*Date:* ${formData.date}\n*Note:* ${formData.msg}`;
    handleWhatsAppAction(message);
  };

  return (
    <div className="bg-black text-white font-sans selection:bg-[#D4AF37] selection:text-black min-h-screen">
      
      {/* --- HEADER --- */}
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-700 px-6 md:px-16 flex justify-between items-center ${scrolled ? 'py-5 bg-black/90 backdrop-blur-xl border-b border-white/10' : 'py-10'}`}>
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="text-2xl font-black tracking-[0.4em] uppercase group">
            AB<span className="font-thin opacity-40 group-hover:opacity-100 transition-opacity">Clicks</span>
          </div>
        </div>
        
        <button onClick={() => setIsMenuOpen(true)} className="flex flex-col gap-2 group p-2">
          <div className="w-8 h-[1px] bg-white group-hover:w-12 transition-all"></div>
          <div className="w-8 h-[1px] bg-white group-hover:w-6 transition-all self-end"></div>
        </button>
      </nav>

      {/* --- FULLSCREEN MENU --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }} 
            animate={{ x: 0 }} 
            exit={{ x: '100%' }} 
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }} 
            className="fixed inset-0 z-[200] bg-[#0A0A0A] flex flex-col justify-center px-10 md:px-24"
          >
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-10 right-10 hover:rotate-90 transition-transform p-4">
              <X size={40} strokeWidth={1} />
            </button>
            <div className="flex flex-col gap-8">
              {['Home', 'Portfolio', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setIsMenuOpen(false)} 
                  className="text-6xl md:text-9xl font-serif font-light hover:text-[#D4AF37] transition-colors leading-none"
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="mt-20 flex gap-8">
               <a href={INSTAGRAM_PROFILE} target="_blank" className="text-[#D4AF37] font-bold tracking-widest text-xs uppercase">Instagram</a>
               <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" className="text-[#D4AF37] font-bold tracking-widest text-xs uppercase">WhatsApp</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- HERO --- */}
      <section id="home" className="relative h-screen flex items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black z-10" />
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: 'alternate' }}
            src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2000" 
            className="w-full h-full object-cover grayscale opacity-40" 
            alt="hero" 
          />
        </div>
        <div className="relative z-20 max-w-5xl">
          <motion.span 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="text-[#D4AF37] tracking-[0.5em] text-[10px] md:text-xs font-bold uppercase mb-6 block"
          >
            Budget-friendly • Creative • Trusted
          </motion.span>
          <motion.h1 
            initial={{ y: 50, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.2, duration: 0.8 }} 
            className="text-5xl md:text-[10rem] font-serif leading-[0.85] tracking-tighter mb-10 uppercase"
          >
            Capture <br/> <span className="italic font-light opacity-50">Memories.</span>
          </motion.h1>
          <p className="text-zinc-400 max-w-xl mx-auto mb-12 text-sm md:text-lg font-light uppercase tracking-[0.3em] leading-loose">
            Photography & Videography for Weddings, <br /> Birthdays & Occasions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button 
              onClick={() => handleWhatsAppAction()} 
              className="px-12 py-5 bg-white text-black font-black uppercase text-[10px] tracking-widest rounded-full hover:bg-[#D4AF37] transition-all shadow-xl"
            >
              Start Booking
            </button>
            <a 
              href="#portfolio" 
              className="px-12 py-5 border border-white/20 backdrop-blur-md font-black uppercase text-[10px] tracking-widest rounded-full hover:bg-white/10 transition-all"
            >
              View Portfolio
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 animate-bounce opacity-20"><ChevronDown size={30} /></div>
      </section>

      {/* --- STATS --- */}
      <div className="bg-[#050505] py-16 border-y border-white/5 flex flex-wrap justify-center gap-12 md:gap-32">
        <div className="text-center group">
          <div className="text-4xl md:text-5xl font-serif text-[#D4AF37] mb-2">100+</div>
          <div className="text-[9px] tracking-[0.4em] uppercase text-zinc-500 font-bold">Happy Clients</div>
        </div>
        <div className="text-center group">
          <div className="text-4xl md:text-5xl font-serif text-[#D4AF37] mb-2">300+</div>
          <div className="text-[9px] tracking-[0.4em] uppercase text-zinc-500 font-bold">Shoots Done</div>
        </div>
        <div className="text-center group">
          <div className="text-4xl md:text-5xl font-serif text-[#D4AF37] mb-2">5/5</div>
          <div className="text-[9px] tracking-[0.4em] uppercase text-zinc-500 font-bold">Client Rating</div>
        </div>
      </div>

      {/* --- PORTFOLIO --- */}
      <section id="portfolio" className="py-32 px-6 md:px-16 max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <span className="text-[#D4AF37] text-[10px] font-bold tracking-[0.5em] uppercase mb-4 block">Selected Works</span>
            <h2 className="text-5xl md:text-8xl font-serif tracking-tighter uppercase leading-none">Latest <br/><span className="italic text-[#D4AF37]">Stories</span></h2>
          </div>
          <a href={INSTAGRAM_PROFILE} target="_blank" className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">
            Follow @{INSTAGRAM_HANDLE} <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PORTFOLIO_DATA.map((work, i) => (
            <motion.div 
              whileHover={{ y: -15 }} 
              key={i} 
              onClick={() => window.open(work.url, '_blank')} 
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer border border-white/5 bg-zinc-900 shadow-2xl"
            >
              <img src={work.thumb} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" alt="thumb" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center shadow-2xl">
                  {work.type === 'Video' ? <Play size={24} fill="currentColor" /> : <ExternalLink size={24} />}
                </div>
              </div>

              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center gap-2 mb-2">
                   <div className="w-4 h-px bg-[#D4AF37]"></div>
                   <span className="text-[#D4AF37] text-[9px] font-bold tracking-widest uppercase">{work.type}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-serif leading-tight">{work.label}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- CONTACT & ESTIMATE --- */}
      <section id="contact" className="py-32 px-6 md:px-16 bg-[#050505] border-t border-white/5">
        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-24">
          <div>
            <span className="text-[#D4AF37] text-[10px] font-bold tracking-[0.5em] uppercase mb-6 block">Get In Touch</span>
            <h2 className="text-5xl md:text-8xl font-serif tracking-tighter mb-12 leading-[0.9]">GET AN <br/><span className="italic opacity-30 lowercase">Estimate.</span></h2>
            
            <div className="space-y-8">
              <div className="flex items-center gap-8 group cursor-pointer" onClick={() => handleWhatsAppAction()}>
                <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
                  <Phone size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[10px] uppercase text-zinc-500 font-bold tracking-widest mb-1">WhatsApp Business</p>
                  <p className="text-2xl font-light tracking-tighter">+91 89198 52330</p>
                </div>
              </div>

              <div className="flex items-center gap-8 group cursor-pointer" onClick={() => window.open(INSTAGRAM_PROFILE, '_blank')}>
                <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
                  <Instagram size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[10px] uppercase text-zinc-500 font-bold tracking-widest mb-1">Official Instagram</p>
                  <p className="text-2xl font-light tracking-tighter">@{INSTAGRAM_HANDLE}</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-10 bg-zinc-900/20 p-10 md:p-14 rounded-[3rem] border border-white/5 backdrop-blur-sm shadow-2xl">
            <div className="space-y-1">
               <label className="text-[9px] font-bold uppercase tracking-[0.3em] text-zinc-500 ml-1">Full Name</label>
               <input type="text" required placeholder="John Doe" className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-[#D4AF37] transition-all font-light text-lg tracking-tight" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
            </div>
            
            <div className="space-y-1">
               <label className="text-[9px] font-bold uppercase tracking-[0.3em] text-zinc-500 ml-1">WhatsApp Number</label>
               <input type="tel" required placeholder="+91 XXXX XXX XXX" className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-[#D4AF37] transition-all font-light text-lg tracking-tight" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
            </div>

            <div className="grid grid-cols-2 gap-12">
              <div className="space-y-1">
                <label className="text-[9px] font-bold uppercase tracking-[0.3em] text-zinc-500 ml-1">Event Type</label>
                <select className="w-full bg-transparent border-b border-white/10 py-4 outline-none text-lg font-light tracking-tight appearance-none" value={formData.event} onChange={e => setFormData({...formData, event: e.target.value})}>
                  <option value="Wedding">Wedding</option>
                  <option value="Pre-Wedding">Pre-Wedding</option>
                  <option value="Birthday">Birthday</option>
                  <option value="Special Occasion">Special Occasion</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-[9px] font-bold uppercase tracking-[0.3em] text-zinc-500 ml-1">Event Date</label>
                <input type="date" className="w-full bg-transparent border-b border-white/10 py-4 outline-none text-lg font-light tracking-tight" value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} />
              </div>
            </div>

            <button type="submit" className="w-full bg-[#D4AF37] text-black font-black py-6 rounded-full text-xs tracking-[0.3em] uppercase hover:scale-105 hover:bg-white transition-all shadow-2xl">
              Send Inquiry
            </button>
          </form>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-24 text-center bg-black">
        <div className="flex flex-col items-center justify-center gap-4 mb-12">
           <h3 className="text-3xl font-black tracking-[0.6em] uppercase">AB<span className="font-thin opacity-30">Clicks</span></h3>
           <div className="h-px w-20 bg-[#D4AF37] opacity-50"></div>
        </div>
        <p className="text-zinc-600 text-[10px] tracking-[0.4em] uppercase mb-12 max-w-sm mx-auto leading-loose">
           Professional Photography & Cinematic Films • Established 2024
        </p>
        <div className="flex justify-center gap-10">
          <Instagram onClick={() => window.open(INSTAGRAM_PROFILE, '_blank')} className="cursor-pointer hover:text-[#D4AF37] transition-all transform hover:scale-110" />
          <div onClick={() => handleWhatsAppAction()} className="cursor-pointer hover:text-[#D4AF37] transition-all transform hover:scale-110">
            <MessageCircle />
          </div>
        </div>
        <p className="mt-20 text-[8px] font-black uppercase tracking-[0.5em] text-zinc-800 italic">
           Legacy Through Lenses • Crafted for Excellence
        </p>
      </footer>

      {/* --- FAB --- */}
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => handleWhatsAppAction()} 
        className="fixed bottom-10 right-10 z-[150] w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_20px_50px_rgba(37,211,102,0.3)] text-white"
      >
        <MessageCircle size={32} />
      </motion.button>

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,900;1,400&family=Inter:wght@300;400;700;900&display=swap');
        
        :root { scroll-behavior: smooth; }
        body { font-family: 'Inter', sans-serif; background: black; -webkit-font-smoothing: antialiased; }
        .font-serif { font-family: 'Playfair Display', serif; }
        
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #000; }
        ::-webkit-scrollbar-thumb { background: #D4AF37; border-radius: 10px; }
        
        input[type="date"]::-webkit-calendar-picker-indicator { filter: invert(1); opacity: 0.3; cursor: pointer; }
        
        ::selection { background: #D4AF37; color: black; }
        .backdrop-blur-xl { backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px); }
      `}} />
    </div>
  );
}

```
