import React from "react";
import "./gallery.css";
import HeaderPage from "../../components/HeaderPage";
import HeaderImage from "../../images/header_bg_3.jpg";
import Gallery_1 from "../../images/gallery1.jpg";
import Gallery_2 from "../../images/gallery2.jpg";
import Gallery_3 from "../../images/gallery3.jpg";
import Gallery_4 from "../../images/gallery4.jpg";
import Gallery_5 from "../../images/gallery5.jpg";
import Gallery_6 from "../../images/gallery6.jpg";
import Gallery_7 from "../../images/gallery7.jpg";
import Gallery_8 from "../../images/gallery8.jpg";
import Gallery_9 from "../../images/gallery9.jpg";
import Gallery_10 from "../../images/gallery10.jpg";
import Gallery_11 from "../../images/gallery11.jpg";
import Gallery_12 from "../../images/gallery12.jpg";
import Gallery_13 from "../../images/gallery13.jpg";
import Gallery_14 from "../../images/gallery14.jpg";
import Gallery_15 from "../../images/gallery15.jpg";

const Gallery = () => {
  return (
    <>
      <HeaderPage title="Our Gallery" image={HeaderImage}>
        Quisquam id tenetur adipisci nesciunt ipsum amet in quibusdam,
        architecto nostrum nobis, est, deserunt odio illum perspiciatis.
      </HeaderPage>
      <section className="gallery">
        <div className="container container_gallery">
          <img src={Gallery_1} alt="Gallery_1" />
          <img src={Gallery_2} alt="Gallery_1" />
          <img src={Gallery_3} alt="Gallery_2" />
          <img src={Gallery_4} alt="Gallery_3" />
          <img src={Gallery_5} alt="Gallery_4" />
          <img src={Gallery_6} alt="Gallery_5" />
          <img src={Gallery_7} alt="Gallery_6" />
          <img src={Gallery_8} alt="Gallery_7" />
          <img src={Gallery_9} alt="Gallery_8" />
          <img src={Gallery_10} alt="Gallery_9" />
          <img src={Gallery_11} alt="Gallery_10" />
          <img src={Gallery_12} alt="Gallery_11" />
          <img src={Gallery_13} alt="Gallery_12" />
          <img src={Gallery_14} alt="Gallery_13" />
          <img src={Gallery_15} alt="Gallery_14" />
        </div>
      </section>
    </>
  );
};

export default Gallery;
