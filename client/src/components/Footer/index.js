import React from "react";
import logo from "../../assets/glogo.png";
import Github from "@material-ui/icons/GitHub";
import Mail from "@material-ui/icons/Mail";
import Twitter from "@material-ui/icons/Twitter";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__addr">
          <h1 className="footer__logo">
            <Link to="/">
              <img src={logo} width="270" height="100"></img>
            </Link>
          </h1>
          <h2>Contact</h2>
          <div>
            45.4215° N, 75.6972° W | Ottawa, CA
            <br />
            <a
              className="footer__btn"
              href="mailto:craftical.platform@gmail.com"
            >
              Email Us
            </a>
          </div>
        </div>
        <ul className="footer__nav">
          <li className="nav__item">
            <ul className="nav__ul">
              <li>
                <a
                  target="_blank"
                  href="https://github.com/DACK-OF-ALL-TRADES/craftical"
                >
                  <Github fontSize="large" />
                </a>
              </li>
              <li>
                <a target="_blank" href="mailto:craftical.platform@gmail.com">
                  <Mail fontSize="large" />
                </a>
              </li>
              <li>
                <a target="_blank" href="https://twitter.com/ToddKel69978509">
                  <Twitter fontSize="large" />
                </a>
              </li>
            </ul>
          </li>
          <li className="nav__item nav__item--extra">
            <h2 className="nav__title">Categories</h2>
            <ul className="nav__ul nav__ul--extra">
              <li>
                <Link to="/#">Clothing</Link>
              </li>
              <li>
                <Link to="/#">Jewelry and Fashion Accessories</Link>
              </li>
              <li>
                <Link to="/#">Paintings</Link>
              </li>
              <li>
                <Link to="/#">Sculptures</Link>
              </li>
              <li>
                <Link to="/#">Blankets &#38; Pillows</Link>
              </li>
              <li>
                <Link to="/#">Candles</Link>
              </li>
            </ul>
          </li>
          <li className="nav__item">
            <h2 className="nav__title">Legal</h2>
            <ul className="nav__ul">
              <li>
                <a
                  href="https://github.com/DACK-OF-ALL-TRADES/craftical/blob/main/LICENSE"
                  target="_blank"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://www.termsfeed.com/live/6537dbef-3a17-458d-9b90-763ff9ee6f7a"
                  target="_blank"
                >
                  Terms of Use
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <div className="legal">
          <p>&copy; 2021 Craftical. All rights reserved.</p>
          <div className="legal__links">
            <span>
              Made with <span className="heart">♥</span> from earth.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
