import React, { useState } from "react";
import { GrSubtract } from "react-icons/gr";
import { AiOutlinePlus } from "react-icons/ai";

const Faq = ({ question, answer, className }) => {
  const [removeAnswer, setRemoveAnswer] = useState(true);
  return (
    <div
      className={`faq_card ${className} ${removeAnswer ? "decrease_faq" : ""}`}>
      <h4>{question}</h4>
      <p className={`${removeAnswer ? "remove_answer" : ""}`}> {answer} </p>
      <span
        onClick={() => {
          setRemoveAnswer((pv) => setRemoveAnswer(!removeAnswer));
        }}>
        {!removeAnswer ? <GrSubtract /> : <AiOutlinePlus />}
      </span>
    </div>
  );
};

export default Faq;
