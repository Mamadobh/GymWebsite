import React from "react";

const SectionHead = ({ icon, title, className }) => {
  return (
    <div className={`section_head  ${className}`}>
          <span className="span_section_head">{icon}</span>
      <h2>{title}</h2>
    </div>
  );
};

export default SectionHead;
