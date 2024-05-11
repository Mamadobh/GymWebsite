import React, { useState } from "react";
import SectionHead from "./SectionHead";
import { GoQuote } from "react-icons/go";
import { testimonials } from "../data";
import Card from "../Ui/Card";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";

const Testimonials = () => {
  const [isActive, setIsActive] = useState(0);
  const previousTestomonial = () => {
    setIsActive((pv) => pv - 1);
    if (isActive  === 0) {
      setIsActive(testimonials.length-1);
    }
  };
  const nextTestimonial = () => {
    setIsActive((pv) => pv + 1);
    if (isActive + 1 === testimonials.length) {
      setIsActive(0);
    }
  };
  return (
    <section className="testimonials">
      <div className="container container_testimonials">
        <SectionHead icon={<GoQuote />} title={`Testimonials`} />
        <Card>
          <img className="avatar" src={testimonials[isActive].avatar} alt={testimonials[isActive].name}></img>
          <q className="quote">{testimonials[isActive].quote} </q>
          <h5 className="name">{testimonials[isActive].name}</h5>
          <span className="job">{testimonials[isActive].job}</span>
        </Card>
        <div className="navigation">
          <button className="before" onClick={previousTestomonial}>
            <MdNavigateBefore className="navigation_icon" />
          </button>
          <button className="next" onClick={nextTestimonial}>
            <MdNavigateNext className="navigation_icon" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
