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

      {/* PORTFOLIO */}
      <section id="portfolio" style={section}>
        <h2 style={title}>Portfolio</h2>

        <div style={grid}>
          {[
            "https://images.unsplash.com/photo-1519741497674-611481863552",
            "https://images.unsplash.com/photo-1511285560929-80b456fea0bc",
            "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3"
          ].map((img, i) => (
            <div key={i} style={imgCard}>
              <img src={img} alt="" style={imgStyle} />
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

const imgCard = {
  overflow: "hidden",
  borderRadius: "10px"
};

const imgStyle = {
  width: "100%",
  height: "250px",
  objectFit: "cover"
};

const footer = {
  padding: "30px",
  textAlign: "center",
  borderTop: "1px solid #222"
};

export default App;
