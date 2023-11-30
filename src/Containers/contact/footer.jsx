import React from "react";
import "./footer.scss";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div class="bottom-container">
      <a
        class="footer-link"
        href="https://instagram.com/tahmina_noorzay?igshid=OGQ5ZDc2ODk2ZA==">
        <FaInstagram />
      </a>
      <a
        class="footer-link"
        href="https://twitter.com/tahmina_noorzay?t=d51vymR3N3X0Du4BdC16CA&s=09">
        <FaTwitter />
      </a>
      <a
        class="footer-link"
        href="https://www.facebook.com/tahminaNoorzay?mibextid=LQQJ4d">
        <FaFacebook />
      </a>
      <a class="footer-link" href="https://github.com/tahminanoorzay">
        <FaGithub />
      </a>
      <p class="copy-right">
        <FaCopyright /> by Tahmina Noorzay 2023
      </p>
    </div>
  );
};

export default Footer;
