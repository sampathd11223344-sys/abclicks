import React from "react";

const WHATSAPP_NUMBER = "918919852330";

function App() {
  return (
    <div style={{ 
      background: "black", 
      color: "white", 
      fontFamily: "sans-serif",
      scrollBehavior: "smooth"
    }}>

      {/* NAVBAR */}
      <nav style={{
        position: "fixed",
        top: 0,
        width: "100%",
        padding: "20px 40px",
        display: "flex",
        justifyContent: "space-between",
        background: "rgba(0,0,0,0.6)",
        backdropFilter: "blur(10px)",
        zIndex: 100
      }}>
        <h2 style={{ letterSpacing: "2px" }}>AB CLICKS</h2>
        <div style={{ display: "flex", gap: "25px" }}>
          <a href="#services" style={linkStyle}>Services</a>
          <a href="#portfolio" style={linkStyle}>Portfolio</a>
          <a href="#contact" style={linkStyle}>Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={heroStyle}>
        <div style={overlay}></div>

        <div style={heroContent}>
          <h1 style={heroTitle}>
            Capture <span style={{ color: "#D4AF37" }}>Moments</span> <br />
            Create Memories
          </h1>

          <p style={{ color: "#aaa", marginTop: "20px" }}>
            Cinematic Photography & Videography
          </p>

          <a 
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noreferrer"
            style={buttonStyle}
          >
            Book Now
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={sectionStyle}>
        <h2 style={sectionTitle}>Our Services</h2>
        <div style={grid}>
          {["Wedding", "Pre-Wedding", "Birthdays", "Maternity"].map((item, i) => (
            <div key={i} style={card}>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" style={sectionStyle}>
        <h2 style={sectionTitle}>Portfolio</h2>
        <p style={{ color: "#888" }}>Your Instagram works will appear here</p>
      </section>

      {/* CONTACT */}
      <section id="contact" style={sectionStyle}>
        <h2 style={sectionTitle}>Contact</h2>
        <p>📞 8919852330</p>

        <a 
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noreferrer"
          style={buttonStyle}
        >
          Chat on WhatsApp
        </a>
      </section>

    </div>
  );
}

/* STYLES */

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "14px"
};

const heroStyle = {
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
  background: "rgba(0,0,0,0.6)"
};

const heroContent = {
  position: "relative",
  zIndex: 2
};

const heroTitle = {
  fontSize: "60px",
  lineHeight: "1.2"
};

const buttonStyle = {
  marginTop: "30px",
  padding: "12px 30px",
  background: "#D4AF37",
  color: "black",
  borderRadius: "30px",
  textDecoration: "none",
  fontWeight: "bold",
  display: "inline-block"
};

const sectionStyle = {
  padding: "80px 20px",
  textAlign: "center"
};

const sectionTitle = {
  fontSize: "32px",
  marginBottom: "30px"
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
  gap: "20px"
};

const card = {
  padding: "30px",
  border: "1px solid #333",
  borderRadius: "10px",
  transition: "0.3s"
};

export default App;
