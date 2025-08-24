import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    password: "",
    company: "",
    agency: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/profile"); 
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Create your PopX account</h2>
      <form onSubmit={handleSubmit}>

        {/* Full Name */}
        <label style={styles.label}>Full Name<span 
          style={styles.required}>*</span>
        </label>
        <input
            type="text"
            name="fullName"
            placeholder="Mary Doe"
            value={formData.fullName}
            onChange={handleChange}
            style={styles.input}
            required
        />

        {/* Phone Number */}
        <label style={styles.label}>Phone number
          <span style={styles.required}>*</span>
        </label>
        <input
          type="text"
          name="phone"
          placeholder="9876543210"
          value={formData.phone}
          onChange={handleChange}
          style={styles.input}
          required
        />

        {/* Password */}
        <label style={styles.label}>Password
          <span style={styles.required}>*</span>
        </label>
        <input
          type="password"
          name="password"
          placeholder="••••••••"
          value={formData.password}
          onChange={handleChange}
          style={styles.input}
          required
        />

        {/* Company */}
        <label style={{ ...styles.label}}>Company name</label>
        <input
          type="text"
          name="company"
          placeholder="Company XYZ"
          value={formData.company}
          onChange={handleChange}
          style={styles.input}
        />

        {/* Agency Section */}
        <p style={styles.agencyText}>Are you an Agency?
          <span style={styles.required}>*</span>
        </p>
        <div style={styles.radioGroup}>
          <label style={styles.radioLabel}>
            <input
              type="radio"
              name="agency"
              value="yes"
              checked={formData.agency === "yes"}
              onChange={handleChange}
              style={styles.radio}
              required
            />
            Yes
          </label>
          <label style={styles.radioLabel}>
            <input
              type="radio"
              name="agency"
              value="no"
              checked={formData.agency === "no"}
              onChange={handleChange}
              style={styles.radio}
              required
            />
            No
          </label>
        </div>

        {/* Submit */}
        <button type="submit" style={styles.button}>
          Create Account
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    width: "375px",
    height: "812px",
    background: "#F7F8F9",
    padding: "20px",
  },
  title: {
    fontSize: "36px",
    fontWeight: "500",
    color: "#1D2226",
    marginBottom: "40px",
    fontFamily: "Rubik, Medium",
  },
  required: {
    color: "#DD4A3D",
    marginLeft: "2px",
    fontFamily: "Rubik, Regular",
  },
  label: {
    display: "block",
    fontSize: "13px",
    marginBottom: "5px",
    color: "#6C25FF",
    fontFamily: "Rubik, Regular",
  },
  input: {
    width: "335px",
    height: "40px",
    border: "1px solid #CBCBCB",
    borderRadius: "6px",
    marginBottom: "20px",
    padding: "8px",
    fontSize: "14px",
  },
  agencyText: {
    fontSize: "13px",
    marginBottom: "10px",
    fontFamily: "Rubik, Regular",
  },
  radioGroup: {
    display: "flex",
    gap: "40px",
    marginBottom: "30px",
  },
  radioLabel: {
    fontSize: "14px",
    color: "#1D2226",
    display: "flex",
    alignItems: "center",
    gap: "5px",
    fontFamily: "Rubik, Regular",
  },
  radio: {
    accentColor: "#642AF5", 
  },
  button: {
    width: "335px",
    height: "46px",
    background: "#6C25FF",
    border: "none",
    borderRadius: "6px",
    color: "#FFFFFF",
    fontSize: "16px",
    fontWeight: "500",
    cursor: "pointer",
    fontFamily: "Rubik, Medium",
  },
};
