import React from "react";

function App() {
  return (
    <div style={{
      background: "black",
      color: "white",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      fontFamily: "sans-serif"
    }}>
      
      <h1 style={{ 
        fontSize: "60px", 
        lineHeight: "1.2",
        marginBottom: "20px"
      }}>
        Capture Moments <br />
        Create Memories
      </h1>

      <p style={{ 
        color: "#aaa", 
        marginBottom: "30px" 
      }}>
        Cinematic Photography & Videography
      </p>

      <a 
        href="https://wa.me/918919852330"
        target="_blank"
        rel="noreferrer"
        style={{
          padding: "14px 35px",
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

export default App;
