import React, { useState } from "react";
import  Accordion  from "react-bootstrap/Accordion";
import accordionData from "./utils/content";

const FAQS = () => {
  const [isActive, setIsActive] = useState(false);
  console.log(accordionData);


  return (
    <>
      <Accordion>
      {accordionData.map((item, index) => (
       <Accordion.Item eventKey={index}>
       <Accordion.Header className="faq-title">{item.title}</Accordion.Header>
       <Accordion.Body >
       <div dangerouslySetInnerHTML={{ __html: item.content }} />
       </Accordion.Body>
     </Accordion.Item>
      ))}   
      </Accordion>
    </>
  );
};

export default FAQS;
