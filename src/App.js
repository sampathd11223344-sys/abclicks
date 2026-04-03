import React from "react";

function App() {
  return (
    <div style={{
      background: "black",
      color: "white",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center"
    }}>
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
        Capture Moments <br /> Create Memories
      </h1>

      <p style={{ color: "#aaa", marginBottom: "30px" }}>
        Cinematic Photography & Videography
      </p>

      <a 
        href="https://wa.me/918919852330" 
        target="_blank" 
        rel="noreferrer"
        style={{
          padding: "12px 30px",
          background: "white",
          color: "black",
          borderRadius: "30px",
          textDecoration: "none",
          fontWeight: "bold"
        }}
      >
        Book Now
      </a>
    </div>
  );
}

export default App;              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
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
