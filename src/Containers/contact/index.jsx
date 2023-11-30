import React from "react";
import { FaPhone } from "react-icons/fa";
import PageHeaderContent from "../../Components/pageHeader";
import { Animate } from "react-simple-animate";
import "./style.scss";
import Footer from "./footer";
import { useRef } from "react";
import emailjs from "emailjs-com";
import MyMapComponent from "./map";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zgeziu3",
        "template_7vhpnor",
        form.current,
        "S1tOyvTV0-AAGRgU6"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <section id="contact" className="contact">
        <PageHeaderContent
          headerText="Contact Me"
          icon={<FaPhone size={40} />}
        />
        <div className="contact__content">
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(-200px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}>
            <h3 className="contact__content__header-text">Let's Talk</h3>
          </Animate>
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(200px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}>
            <form ref={form} onSubmit={sendEmail}>
              <div className="contact__content__form">
                <div className="contact__content__form__controlswrapper">
                  <div>
                    <input name="name" className="inputName" type={"text"} />
                    <label required htmlFor="name" className="nameLabel">
                      Name
                    </label>
                  </div>
                  <div>
                    <input
                      required
                      name="email"
                      className="inputEmail"
                      type={"text"}
                    />
                    <label htmlFor="email" className="emailLabel">
                      Email
                    </label>
                  </div>
                  <div>
                    <textarea
                      required
                      name="description"
                      className="inputdescription"
                      type={"text"}
                      rows={5}
                    />
                    <label htmlFor="description" className="descriptionLabel">
                      Description
                    </label>
                  </div>
                </div>
                <button type="submit">Submit</button>
              </div>
            </form>
          </Animate>
        </div>
        <MyMapComponent />
        <Footer />
      </section>
    </>
  );
};

export default Contact;
