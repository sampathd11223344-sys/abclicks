import React, { useState, useEffect } from 'react';
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

const INSTAGRAM_WORKS = [
  { type: 'Video', label: 'Pre-Wedding Story', url: 'https://www.instagram.com/reel/DVOZ3HNk7WU/', thumbnail: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80' },
  { type: 'Video', label: 'Save The Date', url: 'https://www.instagram.com/reel/DReov7mE5PW/', thumbnail: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80' },
  { type: 'Video', label: 'Haldi Rituals', url: 'https://www.instagram.com/reel/DR7Iwmuk1rw/', thumbnail: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80' },
  { type: 'Photo', label: 'Wedding Portrait', url: 'https://www.instagram.com/p/DVig8fok_Vy/', thumbnail: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80' },
  { type: 'Photo', label: 'Traditional Soul', url: 'https://www.instagram.com/p/DVZ_zn8k1jp/', thumbnail: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80' },
  { type: 'Photo', label: 'Candid Joy', url: 'https://www.instagram.com/p/DVDajxLE8AT/', thumbnail: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80' },
];

const SERVICES = [
  { id: '01', title: 'CINEMATIC WEDDINGS', desc: 'A high-end filmic approach to your most sacred rituals.' },
  { id: '02', title: 'PRE-WEDDING STORIES', desc: 'Narrative-driven visual storytelling in global locations.' },
  { id: '03', title: 'BIRTHDAYS & EVENTS', desc: 'Vibrant and soulful coverage of your life’s milestones.' },
  { id: '04', title: 'LUXURY MATERNITY', desc: 'Graceful documentation of life’s most beautiful transition.' },
];

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', event: 'Wedding', date: '', msg: '' });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sendWhatsApp = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const message = `Hello AB Clicks,
New Booking Inquiry
Name: ${formData.name}
Phone: ${formData.phone}
Event Type: ${formData.event}
Event Date: ${formData.date}
Message: ${formData.msg}`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const menuVariants = {
    closed: { opacity: 0, x: "100%" },
    open: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="bg-black text-white font-sans min-h-screen overflow-x-hidden">

      {/* --- NAVIGATION --- */}
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-700 px-8 md:px-16 flex justify-between items-center ${scrolled ? 'py-6 bg-black/90 backdrop-blur-md' : 'py-10 bg-transparent'}`}>
        <div className="text-2xl font-black tracking-[0.5em]">AB Clicks</div>
        <button onClick={() => setIsMenuOpen(true)}>Menu</button>
      </nav>

      {/* --- MENU --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div variants={menuVariants} initial="closed" animate="open" exit="closed" className="fixed inset-0 bg-black z-[200] flex flex-col justify-center items-center">
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-10 right-10">
              <X size={40} />
            </button>
            {['Home','Portfolio','Services','Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={()=>setIsMenuOpen(false)} className="text-5xl mb-6">
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- HERO --- */}
      <section className="h-screen flex flex-col justify-center items-center text-center">
        <h1 className="text-6xl font-serif mb-8">CAPTURE MEMORIES</h1>
        <button onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}`)} className="bg-white text-black px-8 py-4 rounded-full">
          Book Now
        </button>
      </section>

      {/* --- PORTFOLIO --- */}
      <section id="portfolio" className="py-32 px-8">
        <h2 className="text-5xl mb-12">Portfolio</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {INSTAGRAM_WORKS.map((work, idx) => (
            <div key={idx} onClick={() => window.open(work.url)} className="cursor-pointer">
              <img src={work.thumbnail} alt="" className="w-full h-[300px] object-cover rounded-xl"/>
              <h3 className="mt-4">{work.label}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* --- SERVICES --- */}
      <section id="services" className="py-32 px-8 bg-[#050505]">
        <h2 className="text-5xl mb-12">Services</h2>
        {SERVICES.map(s => (
          <div key={s.id} className="mb-6">
            <h3>{s.title}</h3>
            <p className="text-zinc-500">{s.desc}</p>
          </div>
        ))}
      </section>

      {/* --- CONTACT --- */}
      <section id="contact" className="py-32 px-8">
        <h2 className="text-5xl mb-12">Contact</h2>
        <form onSubmit={sendWhatsApp} className="flex flex-col gap-6 max-w-md">
          <input placeholder="Name" required onChange={e=>setFormData({...formData,name:e.target.value})}/>
          <input placeholder="Phone" required onChange={e=>setFormData({...formData,phone:e.target.value})}/>
          <button type="submit" className="bg-white text-black py-3">Send</button>
        </form>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-16 text-center text-zinc-500">
        © {new Date().getFullYear()} AB CLICKS STUDIO. All rights reserved.
      </footer>

    </div>
  );
};

export default App;
