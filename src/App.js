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

// CONFIG
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

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', event: 'Wedding', date: '', msg: '' });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);

    const handleMouseMove = (e) => {
      const cursor = document.getElementById('custom-cursor');
      if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const sendWhatsApp = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const message = `Hello AB Clicks,
New Booking Inquiry
Name: ${formData.name}
Phone: ${formData.phone}
Event: ${formData.event}
Date: ${formData.date}
Message: ${formData.msg}`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const menuVariants = {
    closed: { opacity: 0, x: "100%" },
    open: { opacity: 1, x: 0 }
  };

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">

      {/* Cursor */}
      <div id="custom-cursor" className="hidden lg:block fixed w-8 h-8 border border-yellow-400 rounded-full pointer-events-none z-50" />

      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 flex justify-between px-6 py-4 ${scrolled ? 'bg-black/80' : ''}`}>
        <h1 className="font-bold text-xl">AB Clicks</h1>
        <button onClick={() => setIsMenuOpen(true)}>Menu</button>
      </nav>

      {/* Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div variants={menuVariants} initial="closed" animate="open" exit="closed" className="fixed inset-0 bg-black flex flex-col justify-center items-center z-50">
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-5 right-5"><X /></button>
            {['Home','Portfolio','Services','Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="text-3xl m-4">{item}</a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero */}
      <section className="h-screen flex flex-col justify-center items-center text-center">
        <img src={HERO_IMAGE} alt="" className="absolute w-full h-full object-cover opacity-40"/>
        <h1 className="text-5xl font-bold z-10">Capture Memories</h1>
        <button onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}`)} className="z-10 mt-6 bg-white text-black px-6 py-3 rounded-full">Book Now</button>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="p-10 grid md:grid-cols-3 gap-6">
        {INSTAGRAM_WORKS.map((w,i)=>(
          <div key={i} onClick={()=>window.open(w.url)} className="cursor-pointer">
            <img src={w.thumbnail} alt="" className="rounded-xl"/>
            <p>{w.label}</p>
          </div>
        ))}
      </section>

      {/* Services */}
      <section id="services" className="p-10">
        {SERVICES.map(s=>(
          <div key={s.id} className="mb-6">
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </section>

      {/* Contact */}
      <section id="contact" className="p-10">
        <form onSubmit={sendWhatsApp} className="flex flex-col gap-4">
          <input placeholder="Name" value={formData.name} onChange={e=>setFormData({...formData,name:e.target.value})}/>
          <input placeholder="Phone" value={formData.phone} onChange={e=>setFormData({...formData,phone:e.target.value})}/>
          <button type="submit">Send</button>
        </form>
      </section>

      {/* Floating WhatsApp */}
      <motion.a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full">
        <MessageCircle />
      </motion.a>

    </div>
  );
}
