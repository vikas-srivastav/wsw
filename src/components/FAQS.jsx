import React from "react";
import  Accordion  from "react-bootstrap/Accordion";
import accordionData from "./utils/content";

const FAQS = () => {
  return (
    <>
      <Accordion>
      {accordionData.map((item, index) => (
       <Accordion.Item eventKey={index}>
       <Accordion.Header className="faq-title">
       <div dangerouslySetInnerHTML={{ __html: item.title }} />
       </Accordion.Header>
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
