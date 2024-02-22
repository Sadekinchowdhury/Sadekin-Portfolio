import React, { useState } from "react";
import "./PortFolio.css";
import { porjects } from "./projects";

export const PortFolio = () => {
 const [active,setActive]=useState("All")

    const [filteredProjects, setFilteredProjects] = useState(porjects);
    
    const handleCategory = (category) => {
        setActive(category)
      if (category === 'All') {
        setFilteredProjects(porjects);
      } else {
        const filtered =porjects.filter(project => project.category === category);
        setFilteredProjects(filtered);
      }
    };
    
  return (
    <div className="portfolio-container">
      <div className="portfolio-content">
        <div className="portfolio-top">
          <h2>My Works</h2>
          <ul>
            <li className={`${active ==="All"? "active":""}`} onClick={()=>handleCategory("All")}>All</li>
            <li className={`${active ==="front-end"? "active":""}`}  onClick={()=>handleCategory("front-end")}>Reactjs</li>
            <li className={`${active ==="full-stack"? "active":""}`}  onClick={()=>handleCategory("full-stack")}>Full Stack</li>
            <li className={`${active ==="wordpress"? "active":""}`}  onClick={()=>handleCategory("wordpress")}>Wordpress</li>
          </ul>
        </div>
        <div className="portfolio-project">
            {
            filteredProjects?.map(project=>
                <div className="portfolio-card">
                <img src={project?.img} alt="" />
                <div className="card-content">
                  <h5>{project.name}</h5>
                  <p>{project.title}</p>
                </div>
              </div>
            )
            }
        </div>
      </div>
    </div>
  );
};
