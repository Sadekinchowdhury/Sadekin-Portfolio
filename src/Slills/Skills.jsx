import React, { useEffect, useState } from "react";
import "./Skills.css";
export const Skills = () => {

  let [value, setValue] = useState(0);
  let [jsvalue, setJsvalue] = useState(0);
  let [cssvalue, setCssvalue] = useState(0);
  let [reactvalue, setReactvalue] = useState(0);
 
 
  // experienct percentage
  let progressBar = (progressValue, progressEndValue, speed, setValue) => {
    useEffect(() => {
      const progressInterval = setInterval(() => {
        let progress = progressValue++;
        setValue(progress);
        if (progress > progressEndValue) {
          clearInterval(progressInterval);
        }
      }, speed);
    }, [progressEndValue, speed]);
  };
  progressBar(value, 90, 100, setValue);
  progressBar(cssvalue, 80, 100, setCssvalue);
  progressBar(jsvalue, 81, 100, setJsvalue);
  progressBar(reactvalue, 75, 100, setReactvalue);
 
  // skills active menue
  const [skillname, setSkillname] = useState("front-end");
  const skillNamehover = (name) => {
    setSkillname(name);
  };

  return (
   <div className="skills-main-container">
     <div className="skills-container">
      <div className="skills-top">
        <h2>My Skills</h2>
        <span></span>
      </div>
      <div className="skills-category">
        <div
          style={{
            background: `conic-gradient(#93d234 ${value * 3.6}deg, #abb1a2 ${
              value * 3.6
            }deg)`,
          }}
          className="skill-progress"
        >
          <h3>
            {value}
            <span>%</span>
          </h3>
          <h4>Html</h4>
        </div>
        <div
          style={{
            background: `conic-gradient(#991ec0 ${cssvalue * 3.6}deg, #abb1a2 ${
              cssvalue * 3.6
            }deg)`,
          }}
          className="skill-progress"
        >
          <h3>
            {cssvalue}
            <span>%</span>
          </h3>
          <h4>Css</h4>
        </div>
        <div
         style={{
          background: `conic-gradient(#991ec0 ${jsvalue * 3.6}deg, #abb1a2 ${
            jsvalue * 3.6
          }deg)`,
        }}
        className="skill-progress">
          <h3>
            <span>{jsvalue}%</span>
          </h3>
          <h4>Javascript</h4>
        </div>
        <div
         style={{
          background: `conic-gradient(#991ec0 ${reactvalue * 3.6}deg, #abb1a2 ${
            reactvalue * 3.6
          }deg)`,
        }}
        className="skill-progress">
          <h3>
            <span>{reactvalue}%</span>
          </h3>
          <h4>Reactjs</h4>
        </div>
      </div>

      <div className="skills">
        <ul className="skills-name">
          <li onClick={() => skillNamehover("front-end")}>
            <h4 className={`${skillname === "front-end" ? "active" : ""}`}>
              Front End
            </h4>
          </li>
          <li onClick={() => skillNamehover("back-end")}>
            <h4 className={`${skillname === "back-end" ? "active" : ""}`}>
              Back End
            </h4>
          </li>
          <li onClick={() => skillNamehover("git-control")}>
            <h4 className={`${skillname === "git-control" ? "active" : ""}`}>
              Git Control
            </h4>
          </li>
        </ul>
      
          <div className={`front-end ${skillname === "front-end" ? "active-tab":'deactive-tab'}`}>
            <ul>
              <li>
              <img src="https://i.postimg.cc/KvPcKj07/html5-icon-15-removebg-preview.png" alt="" />
                <p>Html</p>
              </li>
              <li>
              <img src="https://i.postimg.cc/FFZ5fVNF/logo-css-3-1536.png" alt="" />
                <p>Css</p>
              </li>
              <li>
              <img src="https://i.postimg.cc/44qkJGZ6/30317862-removebg-preview.png" alt="" />
                <p>TailWind Css</p>
              </li>
              <li>
              <img src="https://i.postimg.cc/LXpRkxQg/images-2.png" alt="" />
                <p>Javascript</p>
              </li>
              <li>
              <img src="https://i.postimg.cc/PfLPqtGK/React-Logo-SVG-svg.png" alt="" />
                <p>ReactJs</p>
              </li>
              <li>
              <img src="https://i.postimg.cc/VLK7YBX3/pngimg-com-wordpress-PNG26-removebg-preview.png" alt="" />
                <p>Wordpress</p>
              </li>
            </ul>
          </div>
        
          <div className={`back-end ${skillname === "back-end" ? "active-tab" : "deactive-tab"}`}>
            <ul>
            <li>
              <img src="https://i.postimg.cc/t44fwsZX/1-v2vdf-Kq-D4-Mtm-TSg-NP0o5cg-removebg-preview.png" alt="" />
                <p>NodeJs</p>
              </li>
            <li>
              <img src="https://i.postimg.cc/fyqwsqZ8/kisspng-web-development-node-js-socket-io-javascript-netwo-modernization-5adab8112c3fa5-529349611524.png" alt="" />
                <p>ExpressJs</p>
              </li>
            <li>
              <img src="https://i.postimg.cc/pXCGxPzq/download-7-removebg-preview.png" alt="" />
                <p>MongoDb</p>
              </li>
            </ul>
          </div>
  
          <div className={`git-control ${skillname === "git-control" ? "active-tab" : "deactive-tab"
            }`}>
            <ul>
            <li>
              <img src="https://i.postimg.cc/wTV69vx1/git-gui-icon-2048x2048-t4poesa1.png" alt="" />
                <p>Git</p>
              </li>
            <li>
              <img src="https://i.postimg.cc/139LBrQt/download-9-removebg-preview.png" alt="" />
                <p>GitHub</p>
              </li>
            </ul>
          </div>
     
      </div>
    </div>
   </div>
  );
};
