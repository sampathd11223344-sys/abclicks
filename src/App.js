```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ABclicks | Capture Moments. Create Memories.</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Playfair+Display:ital,wght@0,700;1,700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Inter', sans-serif;
            background-color: #0a0a0a;
            color: #ffffff;
            scroll-behavior: smooth;
        }
        .serif {
            font-family: 'Playfair Display', serif;
        }
        .hero-gradient {
            background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop');
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
        }
        .glass-card {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .animate-fade-in {
            animation: fadeIn 1.2s ease-out forwards;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .whatsapp-btn {
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            z-index: 50;
            transition: transform 0.3s ease;
        }
        .whatsapp-btn:hover {
            transform: scale(1.1);
        }
        .scroll-indicator {
            animation: bounce 2s infinite;
        }
        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
            40% {transform: translateY(-10px);}
            60% {transform: translateY(-5px);}
        }
    </style>
</head>
<body class="overflow-x-hidden">

    <!-- Floating WhatsApp Button -->
    <a href="https://wa.me/918919852330?text=Hi ABclicks! I'm interested in booking a shoot." target="_blank" class="whatsapp-btn bg-green-500 text-white p-4 rounded-full shadow-2xl flex items-center justify-center">
        <i class="fab fa-whatsapp text-3xl"></i>
    </a>

    <!-- Header/Nav -->
    <nav class="fixed w-full z-40 transition-all duration-300 px-6 py-4 flex justify-between items-center bg-black/50 backdrop-blur-md border-b border-white/10">
        <div class="text-2xl font-bold tracking-tighter serif">AB<span class="text-yellow-500 italic">clicks</span></div>
        <div class="hidden md:flex space-x-8 text-sm uppercase tracking-widest font-medium">
            <a href="#home" class="hover:text-yellow-500 transition">Home</a>
            <a href="#portfolio" class="hover:text-yellow-500 transition">Portfolio</a>
            <a href="#about" class="hover:text-yellow-500 transition">About</a>
            <a href="#contact" class="hover:text-yellow-500 transition">Contact</a>
        </div>
        <a href="https://wa.me/918919852330" class="bg-yellow-500 text-black px-6 py-2 rounded-full font-bold text-sm hover:bg-yellow-400 transition">BOOK NOW</a>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero-gradient h-screen w-full flex flex-col items-center justify-center text-center px-4">
        <div class="max-w-4xl animate-fade-in">
            <p class="text-yellow-500 tracking-[0.3em] uppercase text-sm mb-4 font-semibold">Budget-friendly | Creative storytelling | Trusted</p>
            <h1 class="text-5xl md:text-8xl font-bold serif leading-tight mb-6">Capture Moments.<br>Create <span class="italic text-yellow-500">Memories.</span></h1>
            <p class="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 font-light">
                Professional Photography & Cinematic Videography for Weddings, Birthdays, Pre-Wedding Shoots & Special Occasions.
            </p>
            
            <div class="flex flex-col md:flex-row items-center justify-center gap-4">
                <a href="https://wa.me/918919852330" class="w-full md:w-auto bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-yellow-500 hover:text-black transition-all duration-300 flex items-center justify-center group">
                    Book Now <i class="fas fa-arrow-right ml-2 group-hover:translate-x-2 transition-transform"></i>
                </a>
                <a href="#portfolio" class="w-full md:w-auto border border-white/30 backdrop-blur-sm px-10 py-4 rounded-full font-bold hover:bg-white hover:text-black transition-all duration-300">
                    View Portfolio
                </a>
            </div>
        </div>

        <!-- Scroll Indicator -->
        <div class="absolute bottom-10 left-1/2 -translate-x-1/2 scroll-indicator">
            <div class="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
                <div class="w-1 h-2 bg-yellow-500 rounded-full"></div>
            </div>
        </div>
    </section>

    <!-- Stats Section -->
    <section class="py-20 px-6 bg-[#0f0f0f]">
        <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
            <div class="glass-card p-10 rounded-3xl flex items-center space-x-6">
                <div class="text-5xl font-bold text-yellow-500 serif">100+</div>
                <div class="text-gray-400 uppercase tracking-widest text-sm">Happy Clients <br>Served</div>
            </div>
            <div class="glass-card p-10 rounded-3xl flex items-center space-x-6">
                <div class="text-5xl font-bold text-yellow-500 serif">300+</div>
                <div class="text-gray-400 uppercase tracking-widest text-sm">Shoots <br>Completed</div>
            </div>
        </div>
    </section>

    <!-- Portfolio Grid -->
    <section id="portfolio" class="py-24 px-6 bg-[#0a0a0a]">
        <div class="max-w-7xl mx-auto">
            <div class="flex justify-between items-end mb-16">
                <div>
                    <h2 class="text-4xl md:text-5xl font-bold serif mb-4">Our Featured <span class="italic text-yellow-500">Works</span></h2>
                    <p class="text-gray-400">Glimpses of the beautiful stories we've captured.</p>
                </div>
            </div>

            <!-- Categories -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                <!-- Pre-Wedding -->
                <div class="group relative overflow-hidden rounded-2xl aspect-[9/16] md:aspect-auto md:h-[500px]">
                    <img src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1974&auto=format&fit=crop" alt="Pre-wedding" class="w-full h-full object-cover transition duration-700 group-hover:scale-110">
                    <div class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80"></div>
                    <div class="absolute bottom-0 left-0 p-8 w-full">
                        <span class="text-yellow-500 text-xs font-bold tracking-widest uppercase">Cinematic</span>
                        <h3 class="text-2xl font-bold mb-4">Pre-Wedding Stories</h3>
                        <a href="https://www.instagram.com/reel/DVOZ3HNk7WU/?igsh=MWYxYTRrcWQ1anZqYg==" target="_blank" class="inline-flex items-center text-sm font-bold border-b border-yellow-500 pb-1 hover:text-yellow-500 transition">WATCH VIDEO <i class="fab fa-instagram ml-2"></i></a>
                    </div>
                </div>

                <!-- Save the Date -->
                <div class="group relative overflow-hidden rounded-2xl aspect-[9/16] md:aspect-auto md:h-[500px]">
                    <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop" alt="Save the date" class="w-full h-full object-cover transition duration-700 group-hover:scale-110">
                    <div class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80"></div>
                    <div class="absolute bottom-0 left-0 p-8 w-full">
                        <span class="text-yellow-500 text-xs font-bold tracking-widest uppercase">Teasers</span>
                        <h3 class="text-2xl font-bold mb-4">Save The Date</h3>
                        <a href="https://www.instagram.com/reel/DReov7mE5PW/?igsh=MWU2dnlndHZ4MHdueA==" target="_blank" class="inline-flex items-center text-sm font-bold border-b border-yellow-500 pb-1 hover:text-yellow-500 transition">WATCH VIDEO <i class="fab fa-instagram ml-2"></i></a>
                    </div>
                </div>

                <!-- Haldi -->
                <div class="group relative overflow-hidden rounded-2xl aspect-[9/16] md:aspect-auto md:h-[500px]">
                    <img src="https://images.unsplash.com/photo-1595062584113-47ba193521CB?q=80&w=2076&auto=format&fit=crop" alt="Haldi" class="w-full h-full object-cover transition duration-700 group-hover:scale-110">
                    <div class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80"></div>
                    <div class="absolute bottom-0 left-0 p-8 w-full">
                        <span class="text-yellow-500 text-xs font-bold tracking-widest uppercase">Traditional</span>
                        <h3 class="text-2xl font-bold mb-4">Haldi Moments</h3>
                        <div class="flex gap-4">
                            <a href="https://www.instagram.com/reel/DR7Iwmuk1rw/?igsh=NnlybDk3amtkdnhy" target="_blank" class="text-sm font-bold border-b border-yellow-500 pb-1 hover:text-yellow-500 transition">LINK 1</a>
                            <a href="https://www.instagram.com/reel/DSKgVIeCHeN/?igsh=dmU0emR1ZHNsbDdt" target="_blank" class="text-sm font-bold border-b border-yellow-500 pb-1 hover:text-yellow-500 transition">LINK 2</a>
                        </div>
                    </div>
                </div>

            </div>

            <!-- Photos Grid -->
            <div class="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
                <a href="https://www.instagram.com/p/DVig8fok_Vy/?img_index=1&igsh=MW84eGt0ZzNtcDZuOA==" target="_blank" class="overflow-hidden rounded-xl h-64 block group">
                    <img src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1974&auto=format&fit=crop" class="w-full h-full object-cover group-hover:scale-105 transition" alt="Portfolio Photo">
                </a>
                <a href="https://www.instagram.com/p/DVZ_zn8k1jp/?img_index=2&igsh=Z295YWZpNng2b283" target="_blank" class="overflow-hidden rounded-xl h-64 block group">
                    <img src="https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=2070&auto=format&fit=crop" class="w-full h-full object-cover group-hover:scale-105 transition" alt="Portfolio Photo">
                </a>
                <a href="https://www.instagram.com/p/DVDajxLE8AT/?img_index=1&igsh=MXZ6bXRsZmdiN3JyNQ==" target="_blank" class="overflow-hidden rounded-xl h-64 block group">
                    <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop" class="w-full h-full object-cover group-hover:scale-105 transition" alt="Portfolio Photo">
                </a>
                <a href="https://www.instagram.com/p/DRgiVIIk8qV/?igsh=MW0wZ2FvZnViZnVpNQ==" target="_blank" class="overflow-hidden rounded-xl h-64 block group">
                    <img src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2070&auto=format&fit=crop" class="w-full h-full object-cover group-hover:scale-105 transition" alt="Portfolio Photo">
                </a>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section id="about" class="py-24 px-6 bg-[#0f0f0f]">
        <div class="max-w-6xl mx-auto">
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-bold serif mb-6 uppercase tracking-tight">Expertise in <span class="text-yellow-500 italic">Every Frame</span></h2>
                <div class="w-20 h-1 bg-yellow-500 mx-auto"></div>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                <div class="p-8">
                    <div class="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-rings-wedding text-yellow-500 text-2xl"></i>
                    </div>
                    <h4 class="text-xl font-bold mb-4">Weddings</h4>
                    <p class="text-gray-400 text-sm leading-relaxed">Capturing the sacred bonds and grand celebrations with a cinematic eye for detail.</p>
                </div>
                <div class="p-8">
                    <div class="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-birthday-cake text-yellow-500 text-2xl"></i>
                    </div>
                    <h4 class="text-xl font-bold mb-4">Events</h4>
                    <p class="text-gray-400 text-sm leading-relaxed">Birthdays, anniversaries, or corporate events—we make every moment look professional.</p>
                </div>
                <div class="p-8">
                    <div class="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-video text-yellow-500 text-2xl"></i>
                    </div>
                    <h4 class="text-xl font-bold mb-4">Pre-Wedding</h4>
                    <p class="text-gray-400 text-sm leading-relaxed">Stylized outdoor shoots and creative storytelling that reflects your unique love story.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer id="contact" class="py-20 px-6 bg-black border-t border-white/10">
        <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
            <div>
                <div class="text-3xl font-bold tracking-tighter serif mb-6 uppercase">AB<span class="text-yellow-500 italic">clicks</span></div>
                <p class="text-gray-400 mb-8 max-w-sm">
                    Providing high-end photography and videography services at budget-friendly rates. We are based in India and available for travel.
                </p>
                <div class="flex space-x-4">
                    <a href="https://www.instagram.com/abclicks_photography/" target="_blank" class="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-black transition"><i class="fab fa-instagram"></i></a>
                    <a href="https://wa.me/918919852330" class="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-black transition"><i class="fab fa-whatsapp"></i></a>
                    <a href="#" class="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-black transition"><i class="fab fa-facebook-f"></i></a>
                </div>
            </div>

            <div>
                <h5 class="text-lg font-bold mb-6">Quick Links</h5>
                <ul class="space-y-4 text-gray-400">
                    <li><a href="#home" class="hover:text-yellow-500 transition">Home</a></li>
                    <li><a href="#portfolio" class="hover:text-yellow-500 transition">Our Portfolio</a></li>
                    <li><a href="#about" class="hover:text-yellow-500 transition">Our Services</a></li>
                    <li><a href="https://wa.me/918919852330" class="hover:text-yellow-500 transition">Book Consult</a></li>
                </ul>
            </div>

            <div>
                <h5 class="text-lg font-bold mb-6">Contact Us</h5>
                <ul class="space-y-4 text-gray-400">
                    <li class="flex items-center">
                        <i class="fas fa-phone-alt text-yellow-500 mr-4"></i>
                        +91 89198 52330
                    </li>
                    <li class="flex items-center">
                        <i class="fas fa-envelope text-yellow-500 mr-4"></i>
                        hello@abclicks.com
                    </li>
                    <li class="flex items-center">
                        <i class="fas fa-map-marker-alt text-yellow-500 mr-4"></i>
                        Available for Travel India
                    </li>
                </ul>
                <div class="mt-8">
                    <a href="https://wa.me/918919852330" class="inline-block bg-yellow-500 text-black px-8 py-3 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white transition">Get a Quote</a>
                </div>
            </div>
        </div>
        
        <div class="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 text-center text-gray-500 text-xs tracking-widest">
            © 2024 ABCLICKS PHOTOGRAPHY. ALL RIGHTS RESERVED.
        </div>
    </footer>

    <script>
        // Navbar background shift on scroll
        window.addEventListener('scroll', function() {
            const nav = document.querySelector('nav');
            if (window.scrollY > 50) {
                nav.classList.add('bg-black/90', 'py-2');
                nav.classList.remove('bg-black/50', 'py-4');
            } else {
                nav.classList.remove('bg-black/90', 'py-2');
                nav.classList.add('bg-black/50', 'py-4');
            }
        });

        // Simple smooth scroll implementation for Safari
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    </script>
</body>
</html>

```
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
