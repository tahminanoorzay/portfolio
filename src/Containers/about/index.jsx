import React from "react";
import { FaUser } from "react-icons/fa";
import PageHeaderContent from "../../Components/pageHeader";
import { Animate } from "react-simple-animate";
import "./style.scss";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";
import MyImg from "../../helper/imeges/my-photo.jpg";

const personalDetails = [
  {
    label: "Name : ",
    value: "TAHMINA NOORZAY",
  },
  {
    label: "Age : ",
    value: "21",
  },
  {
    label: "Gender : ",
    value: "Female",
  },
  {
    label: "Marital Status : ",
    value: "Single",
  },
  {
    label: "Native Language : ",
    value: "Pashto",
  },
  {
    label: "Birth-Date : ",
    value: "19/3/2002",
  },
  {
    label: "Contact No : ",
    value: "+93 704525745",
  },
  {
    label: "Current Location : ",
    value: "Herat , Afghanistan",
  },
  {
    label: "Birth Place : ",
    value: "Pusht-Rood , Farah , AFG",
  },
  {
    label: "Email : ",
    value: "tahminanoorzay1380@gmail.com",
  },
];

const About = () => {
  return (
    <>
      <section id="about" className="about">
        <PageHeaderContent headerText="About Me" icon={<FaUser size={40} />} />
        <div className="about__content">
          <div className="about__content__personalWrapper">
            <Animate
              play
              duration={1.5}
              delay={1}
              start={{
                transform: "translateY(500px)",
              }}
              end={{
                transform: "translateX(0px)",
              }}>
              <img className="myImage" src={MyImg}></img>
              <h3>About Me</h3>
              <ul>
                <li>
                  <p className="border-text">
                    I was borne in 2002, honesty is my most important
                    characteristic which is need for most jobs and relations to
                    have it. In my idea everything is possible in the world and
                    in our life, it’s important what we want and what’s our
                    passion, just have a passion and do it.
                  </p>
                </li>
              </ul>
              <h3 className="personalInformationHeaderText">
                Personal Information
              </h3>
              <ul className="border-text">
                {personalDetails.map((item, index) => {
                  console.log(item);
                  return (
                    <li key={index}>
                      <span className="title">{item.label}</span>
                      <span className="value">{item.value}</span>
                    </li>
                  );
                })}
              </ul>
            </Animate>
          </div>
          <div className="about__content__servicesWrapper">
            <Animate
              play
              duration={1.5}
              delay={1}
              start={{
                transform: "translateY(600px)",
              }}
              end={{
                transform: "translateX(0px)",
              }}>
              <div className="about__content__servicesWrapper__innerContent">
                <div>
                  <FaDev size={60} color="var(--yellow-theme-main-colore)" />
                </div>
                <div>
                  <DiAndroid
                    size={60}
                    color="var(--yellow-theme-main-colore)"
                  />
                </div>
                <div>
                  <DiApple size={60} color="var(--yellow-theme-main-colore)" />
                </div>
                <div>
                  <FaDatabase
                    size={60}
                    color="var(--yellow-theme-main-colore)"
                  />
                </div>
              </div>
            </Animate>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
