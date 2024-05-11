import React, { useState } from "react";
import SectionHead from "./SectionHead";
import { BsQuestionLg } from "react-icons/bs";
import { faqs } from ".././data";
import Faq from "./Faq";
const Faqs = () => {
  return (
    <section className="faqs">
      <div className="container faqs_container">
        <SectionHead icon={<BsQuestionLg />} title="FAQS" />
        <div className="faqs_values">
          {faqs.map(({ ...faq }, index) => {
            return (
              <Faq key={faq.id} question={faq.question} answer={faq.answer} />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
