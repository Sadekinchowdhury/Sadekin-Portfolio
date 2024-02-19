import React, { useEffect, useState } from "react";
import "./Skills.css";
export const Skills = () => {

  let [value, setValue] = useState(0);
  let [values, setValues] = useState(0);

  let progressBar =(progressValue,progressEndValue,speed,setValue)=>{

    useEffect(() => {
      const progressInterval = setInterval(() => {
        let progress = progressValue++;
        setValue(progress);
        if (progress > progressEndValue) {
          clearInterval(progressInterval);
        }
      }, speed);
    }, [progressEndValue, speed]);
  }
progressBar(value,70,200,setValue)
progressBar(values,90,200,setValues)


  return (
    <div className="skills-container">
     <div className="skills-top">
     <h2>My Skills</h2>
      <span></span>
     </div>
      <div className="skills-category">
        <div 
         style={{
            background: `conic-gradient(#93d234 ${value * 3.6}deg, #abb1a2 ${value * 3.6}deg)`,
          }}
        className="skill-progress">
          <h3>
            {value}
            <span>%</span>
          </h3>
          <h4>Javascript</h4>
        </div>
        <div 
         style={{
            background: `conic-gradient(#991ec0 ${values * 3.6}deg, #abb1a2 ${values * 3.6}deg)`,
          }}
        className="skill-progress">
          <h3>
             {values}<span>%</span>
          </h3>
          <h4>Javascript</h4>
        </div>
        <div className="skill-progress">
          <h3>
            70<span>%</span>
          </h3>
          <h4>Javascript</h4>
        </div>
        <div className="skill-progress">
          <h3>
            70<span>%</span>
          </h3>
          <h4>Javascript</h4>
        </div>
      </div>
      <div className="skill-percentage"></div>
    </div>
  );
};
