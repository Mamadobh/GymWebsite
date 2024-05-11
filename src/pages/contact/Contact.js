import React from "react";
import { Link } from "react-router-dom";
import "./contact.css";
import HeaderImage from "../../images/header_bg_2.jpg";
import HeaderPage from "../../components/HeaderPage";
import { IoMdMail } from "react-icons/io";
import { FaFacebookMessenger } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";

const Contact = () => {
  return (
    <>
      <HeaderPage title="Get In Touch" image={HeaderImage}>
        Fruga itaque ducimus, ad amet praesentium suscipit sit, assumenda nihil
        officia totam, animi culpa nobis nemo natus doloremque?
      </HeaderPage>
      <ul className="contact_me">
        <li>
          <Link to="mailto:mohamedbenhafsia2001@gmail.com" target="_blank">
            <IoMdMail />
          </Link>
        </li>
        <li>
          <Link to="https://m.me/Ben Hafsia Moahmed/" target="_blank">
            <FaFacebookMessenger />
          </Link>
        </li>
        <li>
          <Link to="https://wa.me/+21635120043" target="_blank">
            <RiWhatsappFill />
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Contact;
