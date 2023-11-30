import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import PageHeaderContent from "../../Components/pageHeader";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { data } from "./utils";
import "./style.scss";
import { MdWork } from "react-icons/md";

const Resume = () => {
  console.log(data.experience);
  return (
    <>
      <section id="resume" className="resume">
        <PageHeaderContent
          headerText="My Resumes"
          icon={<FaGraduationCap size={40} />}
        />
        <div className="timeline">
          <div className="timeline__education">
            <h3 className="timeline__education__header-text">Education</h3>
            <VerticalTimeline
              // layout={"1-cloumn"}
              lineColor="var(--yellow-theme-main-colore)">
              {data.education.map((item, i) => {
                return (
                  <VerticalTimelineElement
                    key={i}
                    className="timeline__education__vertical-timeline-element"
                    contentStyle={{
                      background: "none",
                      color: "var(--yellow-theme-sub-text-color)",
                      border: "1.5px solid var(--yellow-theme-main-colore)",
                    }}
                    data="2020 - present"
                    icon={<MdWork />}
                    iconStyle={{
                      background: "#1818118",
                      color: "var(--yellow-theme-main-colore)",
                    }}>
                    <div className="vertical-timeline-element-title-wrapper">
                      <h3>{item.title}</h3>
                      <h4>{item.subTitile}</h4>
                    </div>
                    <p className="vertical-timeline-element-title-wrapper-description">
                      {item.description}
                    </p>
                    <p className="vertical-timeline-element-time-wrapper">
                      {item.time}
                    </p>
                  </VerticalTimelineElement>
                );
              })}
            </VerticalTimeline>
          </div>
          <div className="timeline__experience">
            <h3 className="timeline__experience__header-text">Experience</h3>
            <VerticalTimeline
              // layout={"1-cloumn"}
              lineColor="var(--yellow-theme-main-colore)">
              {data.experience.map((item, i) => {
                return (
                  <VerticalTimelineElement
                    key={i}
                    className="timeline__experience__vertical-timeline-element"
                    contentStyle={{
                      background: "none",
                      color: "var(--yellow-theme-sub-text-color)",
                      border: "1.5px solid var(--yellow-theme-main-colore)",
                    }}
                    data="2020 - present"
                    icon={<MdWork />}
                    iconStyle={{
                      background: "#1818118",
                      color: "var(--yellow-theme-main-colore)",
                    }}>
                    <div className="vertical-timeline-element-title-wrapper">
                      <h3>{item.title}</h3>
                      <h4>{item.subTitile}</h4>
                    </div>
                    <p className="vertical-timeline-element-title-wrapper-description">
                      {item.description}
                    </p>
                    <p className="vertical-timeline-element-time-wrapper">
                      {item.time}
                    </p>
                  </VerticalTimelineElement>
                );
              })}
            </VerticalTimeline>
            <br />
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
