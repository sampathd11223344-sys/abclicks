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
  ExternalLink,
  ChevronDown
} from 'lucide-react';

// --- CONFIGURATION ---
const WHATSAPP_NUMBER = "918919852330";
const INSTAGRAM_HANDLE = "ab_clicks_officials";
const INSTAGRAM_PROFILE = `https://www.instagram.com/${INSTAGRAM_HANDLE}/`;
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20AB%20Clicks,%20I'm%20interested%20in%20booking%20a%20shoot!`;

const PORTFOLIO_DATA = [
  { id: 1, type: 'Video', label: 'Pre-Wedding Story', url: 'https://www.instagram.com/reel/DVOZ3HNk7WU/', thumb: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000' },
  { id: 2, type: 'Video', label: 'Save The Date', url: 'https://www.instagram.com/reel/DReov7mE5PW/', thumb: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1000' },
  { id: 3, type: 'Video', label: 'Haldi Rituals', url: 'https://www.instagram.com/reel/DR7Iwmuk1rw/', thumb: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1000' },
  { id: 4, type: 'Video', label: 'Haldi Celebration', url: 'https://www.instagram.com/reel/DSKgVIeCHeN/', thumb: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1000' },
  { id: 5, type: 'Photo', label: 'Wedding Portrait', url: 'https://www.instagram.com/p/DVig8fok_Vy/', thumb: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1000' },
  { id: 6, type: 'Photo', label: 'Natural Grace', url: 'https://www.instagram.com/p/DVZ_zn8k1jp/', thumb: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1000' },
  { id: 7, type: 'Photo', label: 'Candid Joy', url: 'https://www.instagram.com/p/DVDajxLE8AT/', thumb: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1000' },
  { id: 8, type: 'Photo', label: 'Golden Hour', url: 'https://www.instagram.com/p/DRgiVIIk8qV/', thumb: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1000' }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openWhatsApp = () => {
    window.open(WHATSAPP_URL, '_blank');
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
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-10 right-10 hover:rotate-90 transition-transform p-4 text-white">
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
               <a href={INSTAGRAM_PROFILE} target="_blank" rel="noreferrer" className="text-[#D4AF37] font-bold tracking-widest text-xs uppercase">Instagram</a>
               <button onClick={openWhatsApp} className="text-[#D4AF37] font-bold tracking-widest text-xs uppercase text-left">WhatsApp</button>
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
              onClick={openWhatsApp} 
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
        <div className="text-center">
          <div className="text-4xl md:text-5xl font-serif text-[#D4AF37] mb-2">100+</div>
          <div className="text-[9px] tracking-[0.4em] uppercase text-zinc-500 font-bold">Happy Clients</div>
        </div>
        <div className="text-center">
          <div className="text-4xl md:text-5xl font-serif text-[#D4AF37] mb-2">300+</div>
          <div className="text-[9px] tracking-[0.4em] uppercase text-zinc-500 font-bold">Shoots Done</div>
        </div>
        <div className="text-center">
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
          <a href={INSTAGRAM_PROFILE} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">
            Follow @{INSTAGRAM_HANDLE} <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PORTFOLIO_DATA.map((work) => (
            <motion.div 
              whileHover={{ y: -15 }} 
              key={work.id} 
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

              <div className="absolute bottom-8 left-8 right-8 text-white">
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

      {/* --- CONTACT SECTION (SIMPLIFIED) --- */}
      <section id="contact" className="py-32 px-6 md:px-16 bg-[#050505] border-t border-white/5 text-center">
        <div className="max-w-screen-xl mx-auto">
          <span className="text-[#D4AF37] text-[10px] font-bold tracking-[0.5em] uppercase mb-6 block">Ready for your shoot?</span>
          <h2 className="text-5xl md:text-8xl font-serif tracking-tighter mb-12 leading-[0.9] uppercase">Connect <br/><span className="italic opacity-30 lowercase">With Us.</span></h2>
          
          <div className="flex flex-col md:flex-row justify-center gap-12 mt-16">
            <div 
              onClick={openWhatsApp}
              className="flex flex-col items-center gap-6 group cursor-pointer"
            >
              <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
                <MessageCircle size={32} strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-[10px] uppercase text-zinc-500 font-bold tracking-widest mb-1">WhatsApp Business</p>
                <p className="text-2xl font-light tracking-tighter">+91 89198 52330</p>
              </div>
            </div>

            <div 
              onClick={() => window.open(INSTAGRAM_PROFILE, '_blank')}
              className="flex flex-col items-center gap-6 group cursor-pointer"
            >
              <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
                <Instagram size={32} strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-[10px] uppercase text-zinc-500 font-bold tracking-widest mb-1">Official Instagram</p>
                <p className="text-2xl font-light tracking-tighter">@{INSTAGRAM_HANDLE}</p>
              </div>
            </div>

            <div 
              onClick={() => window.open(`tel:+${WHATSAPP_NUMBER}`)}
              className="flex flex-col items-center gap-6 group cursor-pointer"
            >
              <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
                <Phone size={32} strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-[10px] uppercase text-zinc-500 font-bold tracking-widest mb-1">Direct Call</p>
                <p className="text-2xl font-light tracking-tighter">Enquire Now</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-24 text-center bg-black border-t border-white/5">
        <div className="flex flex-col items-center justify-center gap-4 mb-12 text-white">
           <h3 className="text-3xl font-black tracking-[0.6em] uppercase">AB<span className="font-thin opacity-30">Clicks</span></h3>
           <div className="h-px w-20 bg-[#D4AF37] opacity-50"></div>
        </div>
        <p className="text-zinc-600 text-[10px] tracking-[0.4em] uppercase mb-12 max-w-sm mx-auto leading-loose">
           Professional Photography & Cinematic Films • Established 2024
        </p>
        <div className="flex justify-center gap-10 text-white">
          <Instagram onClick={() => window.open(INSTAGRAM_PROFILE, '_blank')} className="cursor-pointer hover:text-[#D4AF37] transition-all transform hover:scale-110" />
          <div onClick={openWhatsApp} className="cursor-pointer hover:text-[#D4AF37] transition-all transform hover:scale-110">
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
        onClick={openWhatsApp} 
        className="fixed bottom-10 right-10 z-[150] w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_20px_50px_rgba(37,211,102,0.3)] text-white"
      >
        <MessageCircle size={32} />
      </motion.button>

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,900;1,400&family=Inter:wght@300;400;700;900&display=swap');
        
        html { scroll-behavior: smooth; }
        body { font-family: 'Inter', sans-serif; background: black; -webkit-font-smoothing: antialiased; margin: 0; }
        .font-serif { font-family: 'Playfair Display', serif; }
        
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #000; }
        ::-webkit-scrollbar-thumb { background: #D4AF37; border-radius: 10px; }
        
        ::selection { background: #D4AF37; color: black; }
        .backdrop-blur-xl { backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px); }
      `}} />
    </div>
  );
}

```
      <div className="bg-[#050505] py-16 border-y border-white/5 flex flex-wrap justify-center gap-12 md:gap-32">
        <div className="text-center">
          <div className="text-4xl md:text-5xl font-serif text-[#D4AF37] mb-2">100+</div>
          <div className="text-[9px] tracking-[0.4em] uppercase text-zinc-500 font-bold">Happy Clients</div>
        </div>
        <div className="text-center">
          <div className="text-4xl md:text-5xl font-serif text-[#D4AF37] mb-2">300+</div>
          <div className="text-[9px] tracking-[0.4em] uppercase text-zinc-500 font-bold">Shoots Done</div>
        </div>
        <div className="text-center">
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
          <a href={INSTAGRAM_PROFILE} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">
            Follow @{INSTAGRAM_HANDLE} <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PORTFOLIO_DATA.map((work) => (
            <motion.div 
              whileHover={{ y: -15 }} 
              key={work.id} 
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

              <div className="absolute bottom-8 left-8 right-8 text-white">
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

      {/* --- CONTACT SECTION (SIMPLIFIED) --- */}
      <section id="contact" className="py-32 px-6 md:px-16 bg-[#050505] border-t border-white/5 text-center">
        <div className="max-w-screen-xl mx-auto">
          <span className="text-[#D4AF37] text-[10px] font-bold tracking-[0.5em] uppercase mb-6 block">Ready for your shoot?</span>
          <h2 className="text-5xl md:text-8xl font-serif tracking-tighter mb-12 leading-[0.9] uppercase">Connect <br/><span className="italic opacity-30 lowercase">With Us.</span></h2>
          
          <div className="flex flex-col md:flex-row justify-center gap-12 mt-16">
            <div 
              onClick={openWhatsApp}
              className="flex flex-col items-center gap-6 group cursor-pointer"
            >
              <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
                <MessageCircle size={32} strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-[10px] uppercase text-zinc-500 font-bold tracking-widest mb-1">WhatsApp Business</p>
                <p className="text-2xl font-light tracking-tighter">+91 89198 52330</p>
              </div>
            </div>

            <div 
              onClick={() => window.open(INSTAGRAM_PROFILE, '_blank')}
              className="flex flex-col items-center gap-6 group cursor-pointer"
            >
              <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
                <Instagram size={32} strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-[10px] uppercase text-zinc-500 font-bold tracking-widest mb-1">Official Instagram</p>
                <p className="text-2xl font-light tracking-tighter">@{INSTAGRAM_HANDLE}</p>
              </div>
            </div>

            <div 
              onClick={() => window.open(`tel:+${WHATSAPP_NUMBER}`)}
              className="flex flex-col items-center gap-6 group cursor-pointer"
            >
              <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
                <Phone size={32} strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-[10px] uppercase text-zinc-500 font-bold tracking-widest mb-1">Direct Call</p>
                <p className="text-2xl font-light tracking-tighter">Enquire Now</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-24 text-center bg-black border-t border-white/5">
        <div className="flex flex-col items-center justify-center gap-4 mb-12 text-white">
           <h3 className="text-3xl font-black tracking-[0.6em] uppercase">AB<span className="font-thin opacity-30">Clicks</span></h3>
           <div className="h-px w-20 bg-[#D4AF37] opacity-50"></div>
        </div>
        <p className="text-zinc-600 text-[10px] tracking-[0.4em] uppercase mb-12 max-w-sm mx-auto leading-loose">
           Professional Photography & Cinematic Films • Established 2024
        </p>
        <div className="flex justify-center gap-10 text-white">
          <Instagram onClick={() => window.open(INSTAGRAM_PROFILE, '_blank')} className="cursor-pointer hover:text-[#D4AF37] transition-all transform hover:scale-110" />
          <div onClick={openWhatsApp} className="cursor-pointer hover:text-[#D4AF37] transition-all transform hover:scale-110">
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
        onClick={openWhatsApp} 
        className="fixed bottom-10 right-10 z-[150] w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_20px_50px_rgba(37,211,102,0.3)] text-white"
      >
        <MessageCircle size={32} />
      </motion.button>

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,900;1,400&family=Inter:wght@300;400;700;900&display=swap');
        
        html { scroll-behavior: smooth; }
        body { font-family: 'Inter', sans-serif; background: black; -webkit-font-smoothing: antialiased; margin: 0; }
        .font-serif { font-family: 'Playfair Display', serif; }
        
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #000; }
        ::-webkit-scrollbar-thumb { background: #D4AF37; border-radius: 10px; }
        
        ::selection { background: #D4AF37; color: black; }
        .backdrop-blur-xl { backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px); }
      `}} />
    </div>
  );
}

```
