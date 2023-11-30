import { Route } from "react-router-dom";
import React from "react";
import "./style.css";
import { FaLaptopCode } from "react-icons/fa";
import { projects } from "./data";
import { useState } from "react";
import Items from "./items";
import PageHeaderContent from "../../Components/pageHeader";

const Projects = () => {
  const [projectItems, setMenuItems] = useState(projects);

  return (
    <>
      <div>
        <section id="projects" className="project section">
          <PageHeaderContent
            headerText="My Projects"
            icon={<FaLaptopCode size={40} />}
          />
          <div className="container">
            <br />
            <div className="project-container  ">
              <div>
                <Items projectItems={projectItems} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Projects;
