import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../images/logo.png";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialLinkedin } from "react-icons/ti";
import { GrFacebookOption } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { links } from "../data";

const Footer = () => {
  return (
    <div>
      <section className="footer">
        <div className="container container_footer">
          <div className="information">
            <div className="gym_info">
              <Link to="/" className="logo">
                <img src={Logo} alt="Nav Logo" />
              </Link>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
                in quaerat facilis mollitia veniam consequuntur debitis optio
                aspernatur autem officiis.
              </p>
              <ul className="social_media">
                <li>
                  <Link to=" https://www.linkedin.com/in" target="_blank">
                    <TiSocialLinkedin className="icon_media" />
                  </Link>
                </li>
                <li>
                  <Link to="https://www.facebook.com" target="_blank">
                    <GrFacebookOption className="icon_media" />
                  </Link>
                </li>
                <li>
                  <Link to="https://twitter.com/" target="_blank">
                    <FaTwitter className="icon_media" />
                  </Link>
                </li>
                <li>
                  <Link to="https://www.instagram.com" target="_blank">
                    <SlSocialInstagram className="icon_media" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="permalinks">
              <h4>Permalinks</h4>
              <ul className="menu">
                {links.map((link, index) => {
                  return (
                    <li key={index}>
                      <NavLink to={link.path}>{link.name}</NavLink>{" "}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="insights">
              <h4>Insights</h4>
              <ul className="content">
                <li>
                  <Link to="/s">Blog</Link>{" "}
                </li>
                <li>
                  <Link to="/s">Case Studies</Link>
                </li>
                <li>
                  <Link to="/s">Events</Link>
                </li>
                <li>
                  <Link to="/s">Communities</Link>
                </li>
                <li>
                  <Link to="/s">FAQs</Link>
                </li>
              </ul>
            </div>
            <div className="contact">
              <h4>Get In Touch</h4>
              <ul>
                <li><Link to="/contact">Contact US</Link> </li>
                <li><Link to="/s">Support</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>2022 PMG TUTORIALS &copy; All Rights Reserved</p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
