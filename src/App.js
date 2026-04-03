import React from "react";

const WHATSAPP_NUMBER = "918919852330";

function App() {
  return (
    <div style={{ background: "black", color: "white", fontFamily: "sans-serif" }}>

      {/* NAVBAR */}
      <nav style={{
        position: "fixed",
        top: 0,
        width: "100%",
        padding: "20px",
        display: "flex",
        justifyContent: "space-between",
        background: "rgba(0,0,0,0.7)"
      }}>
        <h2>AB Clicks</h2>
        <div style={{ display: "flex", gap: "20px" }}>
          <a href="#services" style={{ color: "white" }}>Services</a>
          <a href="#portfolio" style={{ color: "white" }}>Portfolio</a>
          <a href="#contact" style={{ color: "white" }}>Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        paddingTop: "80px"
      }}>
        <h1 style={{ fontSize: "60px", lineHeight: "1.2" }}>
          Capture Moments <br />
          Create Memories
        </h1>

        <p style={{ color: "#aaa", marginTop: "20px" }}>
          Cinematic Photography & Videography
        </p>

        <a 
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noreferrer"
          style={{
            marginTop: "30px",
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
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: "60px", textAlign: "center" }}>
        <h2>Services</h2>
        <p>Wedding • Pre-Wedding • Birthdays • Maternity</p>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" style={{ padding: "60px", textAlign: "center" }}>
        <h2>Portfolio</h2>
        <p>Instagram works coming soon...</p>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "60px", textAlign: "center" }}>
        <h2>Contact</h2>
        <p>WhatsApp: +91 89198 52330</p>
      </section>

    </div>
  );
}

export default App;
