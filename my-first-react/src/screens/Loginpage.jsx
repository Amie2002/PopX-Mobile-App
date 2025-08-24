import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("All fields are compulsory!");
      return;
    }
    console.log("Logged in with:", email);
    navigate("/profile"); 
  };

  return (
    <div
      style={{
        background: "#F7F8F9",
        width: "375px",
        height: "812px",
        padding: "40px 20px",
        //fontFamily: "Rubik, sans-serif",
      }}
    >
      <h2
        style={{
          fontSize: "28px",
          fontWeight: 500,
          color: "#1D2226",
          marginBottom: "10px",
          fontFamily: "Rubik, Medium",
        }}
      >
        Signin to your PopX account
      </h2>

      <p
        style={{
          fontSize: "18px",
          lineHeight: "26px",
          color: "#1D2226",
          opacity: 0.6,
          marginBottom: "30px",
          fontFamily: "Rubik, Regular",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              fontSize: "13px",
              color: "#6C25FF",
              display: "block",
              marginBottom: "5px",
              fontFamily: "Rubik, Regular",
            }}
          >
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: "100%",
              height: "40px",
              border: "1px solid #CBCBCB",
              borderRadius: "6px",
              padding: "10px",
              fontSize: "14px",
              color: "#1D2226",
              fontFamily: "Rubik, Regular",
            }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              fontSize: "13px",
              color: "#6C25FF",
              display: "block",
              marginBottom: "5px",
              fontFamily: "Rubik, Regular",
            }}
          >
            Password
          </label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: "100%",
              height: "40px",
              border: "1px solid #CBCBCB",
              borderRadius: "6px",
              padding: "10px",
              fontSize: "14px",
              color: "#1D2226",
              fontFamily: "Rubik, Regular",
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            height: "46px",
            background: "#CBCBCB",
            borderRadius: "6px",
            border: "none",
            color: "#FFFFFF",
            fontSize: "16px",
            fontWeight: 500,
            cursor: "pointer",
            fontFamily: "Rubik, Regular",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;