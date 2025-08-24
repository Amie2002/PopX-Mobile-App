import React from "react";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: "375px",
        height: "812px",
        backgroundColor: "#F7F8F9",
        borderRadius: "16px",
        padding: "20px",
        fontFamily: "Rubik, sans-serif"
      }}
    >
      <h1 style={{ fontSize: "28px", fontWeight: "500", marginTop: "549px" }}>
        Welcome to PopX
      </h1>

      <p
        style={{
          fontSize: "18px",
          lineHeight: "26px",
          opacity: 0.6,
          marginBottom: "30px"
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>

      {/* Create Account button */} 
      <button
        onClick={() => navigate("/signup")}
        style={{
          width: "335px",
          height: "46px",
          backgroundColor: "#6C25FF",
          color: "#FFFFFF",
          fontSize: "16px",
          fontWeight: "500",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          marginBottom: "15px"
        }}
      >
        Create Account
      </button>
      {/* Login button */} 
      <button
        onClick={() => navigate("/login")}
        style={{
          width: "335px",
          height: "46px",
          backgroundColor: "#6C25FF4B",
          color: "#1D2226",
          fontSize: "16px",
          fontWeight: "500",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}
      >
        Already Registered? Login
      </button>
    </div>
  );
}

export default Landing;

/*
import React from "react";

function Landing() {
  return <h1>Hello PopX</h1>;
}

export default Landing;
*/