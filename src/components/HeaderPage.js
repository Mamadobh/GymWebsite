import React from "react";

const HeaderPage = ({ title, image, className, children }) => {
  return (
    <div className={`header_page ${className}`}>
      <div className="header_container">
        <div className="header_container_bg">
          <img src={image} alt="Header background" />
        </div>
        <div className="header_content">
          <h2>{title}</h2>
          <p>{children}</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderPage;
{
}
