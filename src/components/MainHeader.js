import React from "react";
import { Link } from "react-router-dom";
import image from "../images/main_header.png";

const MainHeader = () => {
  return (
    <header className="Main_header">
      <div className="container container_main_header">
        <div className="text_content">
          <h4>#100DaysOFWorkOut</h4>
          <h1>Join The Legends Of The Fitness World</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed
            metus at est sodales placerat. Donec non ligula eu nulla congue
            dictum.
          </p>
          <Link className="btn lg" to="\plans">
            Get Started{" "}
          </Link>
        </div>

        <div className="man_image">
          <div className="cercle_man">
          </div>
            <div className="man_photo">
              <img src={image} alt="" />
            </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
