import React from "react";
import HeaderPage from "../../components/HeaderPage";
import "./about.css";
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about2.jpg";
import MissionImage from "../../images/about3.jpg";

const About = () => {
  return (
    <>
      <HeaderPage title="About Us" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
        accusantium adipisci laborum labore ad doloribus expedita id corrupti
        inventore nostrum!
      </HeaderPage>
      <section className="story about">
        <div className="container story_container">
          <div className="image">
            <img src={StoryImage} alt="story_image" />
          </div>
          <div className="story_content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
              fugit ad neque quo, quas eius quam at sunt quod in atque nulla
              minus nam impedit tempore consectetur esse quibusdam voluptatum
              optio nemo! Aperiam veritatis delectus commodi. Minima tempora
              voluptates natus.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laboriosam harum corrupti quas voluptate, perferendis consectetur
              veritatis veniam, ratione, distinctio iste dignissimos alias ipsum
              minima consequuntur?
            </p>
            <p>
              Perferendis consectetur veritatis veniam, ratione, distinctio iste
              dignissimos alias ipsum minima consequuntur?
            </p>
          </div>
        </div>
      </section>
      <section className="vision about">
        <div className="container vision_container">
          <div className="vision_content ">
            <h1>Our vision</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
              fugit ad neque quo, quas eius quam at sunt quod in atque nulla
              minus nam impedit tempore consectetur esse quibusdam voluptatum
              optio nemo! Aperiam veritatis delectus commodi. Minima tempora
              voluptates natus.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laboriosam harum corrupti quas voluptate, perferendis consectetur
              veritatis veniam, ratione, distinctio iste dignissimos alias ipsum
              minima consequuntur?
            </p>
          </div>
          <div className="image">
            <img src={VisionImage} alt="vision_image" />
          </div>
        </div>
      </section>
      <section className="mission about">
        <div className="container mission_container">
          <div className="image">
            <img src={MissionImage} alt="mission_image" />
          </div>
          <div className="vision_content">
            <h1>Our mission</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
              fugit ad neque quo, quas eius quam at sunt quod in atque nulla
              minus nam impedit tempore consectetur esse quibusdam voluptatum
              optio nemo! Aperiam veritatis delectus commodi. Minima tempora
              voluptates natus.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laboriosam harum corrupti quas voluptate, perferendis consectetur
              veritatis veniam, ratione, distinctio iste dignissimos alias ipsum
              minima consequuntur?
            </p>
            <p>
              Perferendis consectetur veritatis veniam, ratione, distinctio iste
              dignissimos alias ipsum minima consequuntur?
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
