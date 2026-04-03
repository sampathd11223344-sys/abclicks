import React from "react";

const WHATSAPP_NUMBER = "918919852330";

function App() {
  return (
    <div style={{ background: "#000", color: "#fff", fontFamily: "sans-serif" }}>

      {/* NAVBAR */}
      <nav style={nav}>
        <h2 style={{ letterSpacing: "3px" }}>AB CLICKS</h2>
        <div style={{ display: "flex", gap: "25px" }}>
          <a href="#services" style={link}>Services</a>
          <a href="#portfolio" style={link}>Portfolio</a>
          <a href="#contact" style={link}>Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={hero}>
        <div style={overlay}></div>

        <div style={heroContent}>
          <h1 style={heroTitle}>
            Capture <span style={{ color: "#D4AF37" }}>Moments</span><br />
            Create <span style={{ opacity: 0.7 }}>Memories</span>
          </h1>

          <p style={heroText}>
            Cinematic Photography & Videography for Weddings & Events
          </p>

          <a href={`https://wa.me/${WHATSAPP_NUMBER}`} style={btn}>
            Book Now
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={section}>
        <h2 style={title}>Our Services</h2>

        <div style={grid}>
          {["Wedding", "Pre-Wedding", "Events", "Maternity"].map((item, i) => (
            <div key={i} style={card} className="card">
              {item}
            </div>
          ))}
        </div>
      </section>

{/* --- LATEST STORIES --- */}
<section style={{ padding: "80px 20px", background: "#000" }}>

  <h2 style={{
    fontSize: "28px",
    letterSpacing: "2px",
    marginBottom: "30px"
  }}>
    LATEST <span style={{ color: "#D4AF37", fontStyle: "italic" }}>STORIES</span>
  </h2>

  <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

    {[
      {
        title: "Pre-Wedding Story",
        url: "https://www.instagram.com/reel/DVOZ3HNk7WU/",
        img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622"
      },
      {
        title: "Save The Date",
        url: "https://www.instagram.com/reel/DReov7mE5PW/",
        img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed"
      },
      {
        title: "Haldi Rituals",
        url: "https://www.instagram.com/reel/DR7Iwmuk1rw/",
        img: "https://images.unsplash.com/photo-1583939003579-730e3918a45a"
      },
      {
        title: "Wedding Portrait",
        url: "https://www.instagram.com/p/DVig8fok_Vy/",
        img: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc"
      },
      {
        title: "Traditional Soul",
        url: "https://www.instagram.com/p/DVZ_zn8k1jp/",
        img: "https://images.unsplash.com/photo-1520854221256-17451cc331bf"
      },
      {
        title: "Candid Joy",
        url: "https://www.instagram.com/p/DVDajxLE8AT/",
        img: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3"
      }
    ].map((item, i) => (

      <div key={i}
        onClick={() => window.open(item.url, "_blank")}
        style={{
          height: "260px",
          borderRadius: "20px",
          overflow: "hidden",
          position: "relative",
          cursor: "pointer"
        }}
      >

        <img
          src={item.img}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "grayscale(100%)"
          }}
        />

        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.9), transparent)"
        }} />

        <div style={{
          position: "absolute",
          bottom: "20px",
          left: "20px"
        }}>
          <p style={{ fontSize: "12px", color: "#D4AF37" }}>2026</p>
          <h3 style={{ fontSize: "20px" }}>{item.title}</h3>
        </div>

      </div>

    ))}

  </div>
</section>

      {/* CONTACT */}
      <section id="contact" style={section}>
        <h2 style={title}>Contact</h2>

        <p style={{ marginBottom: "20px" }}>📞 8919852330</p>

        <a href={`https://wa.me/${WHATSAPP_NUMBER}`} style={btn}>
          Chat on WhatsApp
        </a>
      </section>

      {/* FOOTER */}
      <footer style={footer}>
        © 2026 AB Clicks. All rights reserved.
      </footer>

      {/* CSS HOVER EFFECTS */}
      <style>{`
        .card:hover {
          transform: translateY(-10px);
          border-color: #D4AF37;
          transition: 0.3s;
        }

        img {
          transition: 0.5s;
        }

        img:hover {
          transform: scale(1.1);
        }
      `}</style>

    </div>
  );
}

/* STYLES */

const nav = {
  position: "fixed",
  top: 0,
  width: "100%",
  padding: "20px 40px",
  display: "flex",
  justifyContent: "space-between",
  background: "rgba(0,0,0,0.6)",
  backdropFilter: "blur(10px)",
  zIndex: 100
};

const link = {
  color: "#fff",
  textDecoration: "none",
  fontSize: "14px"
};

const hero = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  position: "relative",
  backgroundImage: "url('https://images.unsplash.com/photo-1519741497674-611481863552')",
  backgroundSize: "cover",
  backgroundPosition: "center"
};

const overlay = {
  position: "absolute",
  inset: 0,
  background: "rgba(0,0,0,0.7)"
};

const heroContent = {
  position: "relative",
  zIndex: 2
};

const heroTitle = {
  fontSize: "65px",
  lineHeight: "1.2"
};

const heroText = {
  color: "#aaa",
  marginTop: "20px"
};

const btn = {
  marginTop: "30px",
  padding: "14px 35px",
  background: "#D4AF37",
  color: "#000",
  borderRadius: "30px",
  textDecoration: "none",
  fontWeight: "bold",
  display: "inline-block"
};

const section = {
  padding: "100px 20px",
  textAlign: "center"
};

const title = {
  fontSize: "32px",
  marginBottom: "40px"
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "20px"
};

const card = {
  padding: "40px",
  border: "1px solid #333",
  borderRadius: "10px"
};

//const imgCard = {
  //overflow: "hidden",
 // borderRadius: "10px"
//};

//const imgStyle = {
 // width: "100%",
//  height: "250px",
 // objectFit: "cover"
//};

const footer = {
  padding: "30px",
  textAlign: "center",
  borderTop: "1px solid #222"
};

export default App;
