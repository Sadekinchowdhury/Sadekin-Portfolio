import React from "react";
import { Devider } from "../Devider/Devider";
import './Experience.css';

export const Experience = () => {
  return (
    <div className="experience-container">
      <div className="experience">
        <div className="experience-top">
          <h2>Experience</h2>
          <Devider/>
        <p>Embark on a visual journey showcasing my diverse expertise and impactful experiences.</p></div>
        <ul>
          <li className="date">2023-2024</li>
          <li className="log">
            <img
              src="https://i.postimg.cc/GmqFWmJx/main-thumb-2268786246-200-hhdfnilwsncdpsqwvafenkfytlkeybom.jpg"
              alt=""
            />
          </li>
          <li className="position">Reactjs Developer
          <span>Cumilla,Bangladesh</span>
          </li>
          <li className="link">
           <a href="">Go to Website</a>
          </li>
        </ul>
        <ul>
          <li className="date">2022-2023</li>
          <li className="log">
            <img
              src="https://i.postimg.cc/25b5QnmJ/cw-Nz-Mdvqm-CV.webp"
              alt=""
            />
          </li>
          <li className="position">Team Code Warriors
          <span>Dhaka,Bangladesh</span>
          </li>
          <li className="link">
           <a href="">Go to Website</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
