import React from "react";
import { HireMeButton } from "../Button/commonButton";
import "./about.css";

export const About = () => {
  return (
    <div id="about-us" className="about-me-container">
      <div className="about-me">
        <div className="about-container">
          <div className="about-img">
            <img src="https://i.postimg.cc/gjytNH8y/Untitled-design-4.png" alt="" />
          </div>
          <div className="about-content">
            <span>About Me</span>
            <h2>My Advantage</h2>
            <p>
              Hi there, I'm Sadekin Chowdhury, a seasoned MERN stack and
              WordPress developer with 1.5 years of hands-on experience.
              Currently, I'm a ReactJS developer at Microters, where I
              specialize in ReactJS, NextJS, JavaScript, NodeJS, and WordPress
              to craft dynamic web solutions.
              <br />
              <br />I thrive on real-time projects, evident in my dedicated work
              at Microters, where I ensure precision and efficiency in every
              task. I'm eager to bring my expertise and passion to your team,
              contributing to your organization's success. Let's chat about how
              I can help!
            </p>
             <HireMeButton/>
          </div>
        </div>
      </div>
    </div>
  );
};
