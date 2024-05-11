import React from "react";
import SectionHead from "./SectionHead";
import { GiCutDiamond } from "react-icons/gi";
import { values } from "../data";
import Card from "../Ui/Card";
import image from "../images/values.jpg";
const Values = () => {
  return (
    <section className="values">
      <div className="container values_container">
        <div className="image">
          <img src={image} alt="error_value_image" />
        </div>
        <div className="values_content">
          <SectionHead icon={<GiCutDiamond />} title="Values" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            ullam?
          </p>
          <div className="values_cards">
            {values.map(({ ...value }, index) => {
              return (
                <Card key={value.id}>
                  <span className="span_card">{value.icon}</span>
                  <h4>{value.title}</h4>
                  <small>{value.desc}</small>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
