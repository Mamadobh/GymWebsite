import React from "react";
import "./plans.css";
import HeaderPage from "../../components/HeaderPage";
import HeaderImage from "../../images/header_bg_4.jpg";

import { links, plans } from "../../data";
import Card from "../../Ui/Card";
const Plans = () => {
  return (
    <>
      <HeaderPage title="Membership Plans" image={HeaderImage}>
        Assumenda perspiciatis asperiores deserunt quisquam, sit iusto
        consectetur vero similique aliquam.
      </HeaderPage>
      <section className="plans">
        <div className="container container_palns">
          <div className="plans_card">
            {plans.map(({ id, name, desc, price, features }, index) => {
              return (
                <Card key={id}>
                  <h3>{name}</h3>
                  <small>{desc}</small>
                  <h1>{price}</h1>
                  <h4>Features</h4>
                  <ul className="features">
                    {features.map(({ feature, available }, index) => {
                      if (available) {
                        return (
                          <li key={index} className="avaible_feature">
                            {feature}
                          </li>
                        );
                      } else {
                        return (
                          <li
                            key={index}
                            className="not_avaible_feature"
                            disabled>
                            {feature}
                          </li>
                        );
                      }
                    })}
                  </ul>
                  <button className="btn lg"> Choose Plan</button>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Plans;
