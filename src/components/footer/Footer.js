import React, { useContext } from "react";
import "./Footer.scss";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const { isDark } = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("Made with ❤️ and ☕ by Zeeshan Shaikh")}
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("© 2024 Zeeshan Shaikh")}
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("🚀 Let's build something amazing together!")}
        </p>
      </div>
    </Fade>
  );
}
