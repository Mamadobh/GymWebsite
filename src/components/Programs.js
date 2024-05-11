import React from "react";
import { FaCrown } from "react-icons/fa";
import SectionHead from "./SectionHead";
import { programs } from "../data";
import { Link } from "react-router-dom";
import Card from "../Ui/Card";
import { AiFillCaretRight } from 'react-icons/ai';
const Programs = () => {
  return (
    <section className="programs">
      <div className="container programs_container">
        <SectionHead icon={<FaCrown />} title="Our Programs" />

        <div className="programs_details">
          {programs.map(({ ...program }, index) => {
            return (
              <Card className="program_card" key={program.id}>
                <span className="span_card">{program.icon}</span>
                <h4>{program.title}</h4>
                <small>{program.info}</small>
                <Link to={program.path} className="btn sm">
                  Leran More <AiFillCaretRight className="Leran_More_icon"/>
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Programs;
