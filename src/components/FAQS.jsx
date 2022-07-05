import React, {useState} from "react";

const FAQS = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
    <div className="accordion-item-faq">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? 'x' : '+'}</div>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
    </>
  );
}

export default FAQS;
