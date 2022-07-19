import React from "react";
import Accordion from "react-bootstrap/Accordion";
import accordionData from "../../components/utils/content";

const FAQS = () => {
  return (
    <>
      <Accordion className="px-md-5 py-md-5">
        {accordionData.map((item, index) => (
          <Accordion.Item eventKey={index} className="mx-md-5 my-3">
            <Accordion.Header className="faq-title">
              <div dangerouslySetInnerHTML={{ __html: item.title }} />
            </Accordion.Header>
            <Accordion.Body className="light-txt">
              <p dangerouslySetInnerHTML={{ __html: item.content }} />
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </>
  );
};

export default FAQS;
