import React, {useState} from "react";
import { Accordion } from "react-bootstrap";

const FAQS = ({ id, title, content }) => {
  const [isActive, setIsActive] = useState(false);
  
  return (
    <>
    

    <Accordion>
  <Accordion.Item eventKey={id}>
    <Accordion.Header>{title}</Accordion.Header>
    <Accordion.Body>
    {content}
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
    </>
  );
}

export default FAQS;
