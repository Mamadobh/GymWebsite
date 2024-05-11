import React from "react";
import "./trainers.css";
import HeaderPage from "../../components/HeaderPage";
import HeaderPageImage from "../../images/header_bg_5.jpg";
import { trainers } from "../../data";
import Card from "../../Ui/Card";
import { Link } from "react-router-dom";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialLinkedin } from "react-icons/ti";
import { GrFacebookOption } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
const Trainers = () => {
  return (
    <>
      <HeaderPage title="Our Trainers" image={HeaderPageImage}>
        Facilis, iusto numquam unde laboriosam expedita qui exercitationem?
        Dicta vero accusantium est aut molestiae fugit doloremque suscipit quod.
      </HeaderPage>
      <section className="trainers">
        <div className="container trainers_container">
          {trainers.map(({ id, image, name, job, socials }, index) => {
            return (
              <Card key={id}>
                <div className="image">
                  <img src={image} alt={`trainer_${id}_image `} />
                </div>
                <h3>{name}</h3>
                <span>{job}</span>
                <div className="socails_media">
                  <Link to={socials[0]} target="_blank">
                    <SlSocialInstagram />
                  </Link>
                  <Link to={socials[1]} target="_blank">
                    <FaTwitter />
                  </Link>
                  <Link to={socials[2]} target="_blank">
                    <GrFacebookOption />
                  </Link>
                  <Link to={socials[3]} target="_blank">
                    <TiSocialLinkedin />
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Trainers;
