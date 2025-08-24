import React from "react";
import profilePic from "../assets/Ellipse 114@2x.png";
import changePic from "../assets/Group 1585@2x.png";

export default function ProfilePage() {
  return (
    <div style={styles.container}>
      {/* Top Bar */}
      <div style={styles.topBar}></div>

      {/* Account Settings Text */}
      <h2 style={styles.accountSettings}>Account Settings</h2>

      {/* Profile Picture */}
      <div style={styles.profilePicContainer}>
        <img
          src={profilePic}
          alt="Profile"
          style={styles.profilePic}
        />
        {/* Mini Pic for changing */}
        <img
          src={changePic}
          alt="Change Pic"
          style={styles.miniPic}
        />
      </div>

      {/* Name & Email */}
      <div style={styles.userInfo}>
        <h3 style={styles.name}>Mary Doe</h3>
        <p style={styles.email}>Mary@Gmail.Com</p>
      </div>

      {/* Description */}
      <p style={styles.description}>
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
        Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </p>

      {/* Dashed Line */}
      <div style={styles.dashedLine}></div>
    </div>
  );
}

const styles = {
  container: {
    width: "375px",
    minHeight: "812px",
    background: "#F7F8F9",
    position: "relative",
  },
  topBar: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "375px",
    height: "68px",
    background: "#FFFFFF",
    boxShadow: "0px 3px 6px #00000007",
    opacity: 1,
  },
  accountSettings: {
    position: "absolute",
    top: "27px",
    left: "15px",
    fontSize: "18px",
    fontWeight: 400,
    lineHeight: "21px",
    color: "#1D2226",
    textTransform: "capitalize",
    opacity: 1,
    fontFamily: "Rubik, Regular",
  },
  profilePicContainer: {
    position: "absolute",
    top: "98px",
    left: "20px",
  },
  profilePic: {
    width: "76px",
    height: "76px",
    borderRadius: "50%",
    background: "transparent url('img/Ellipse 114.png') no-repeat center center",
  },
  miniPic: {
    position: "absolute",
    top: "49px", 
    left: "59px", 
    width: "21px",
    height: "23px",
    background: "transparent url('img/Group 1585.png') no-repeat center center",
  },
  userInfo: {
    position: "absolute",
    top: "98px",
    left: "116px",
    fontFamily: "Rubik, Regular",
  },
  name: {
    fontSize: "15px",
    fontWeight: 500,
    lineHeight: "19px",
    color: "#1D2226",
    textTransform: "capitalize",
    margin: 0,
    fontFamily: "Rubik, Medium",
  },
  email: {
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "19px",
    color: "#1D2226",
    margin: "4px 0 0 0",
    textTransform: "capitalize",
    fontFamily: "Rubik, Regular",
  },
  description: {
    position: "absolute",
    top: "204px",
    left: "20px",
    width: "337px",
    fontSize: "14px",
    lineHeight: "22px",
    color: "#1D2226",
    textAlign: "left",
    fontWeight: 400,
    textTransform: "capitalize",
    fontFamily: "Rubik, Regular",
  },
  dashedLine: {
    position: "absolute",
    top: "287px",
    left: 0,
    width: "375px",
    borderTop: "1px dashed #CBCBCB",
    opacity: 1,
  },
};
