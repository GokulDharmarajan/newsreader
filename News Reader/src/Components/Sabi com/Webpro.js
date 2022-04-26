import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
// import Websites from "./Websites";

function Webpro(props) {
  return (
    <Col>
      <h2 className="text-center">{props.sabi}</h2>
      <p className="text-center">{props.sabi1}</p>
      <p className="ms-3">{props.sabi2}</p>
      <span className="ms-3">{props.sabi3}</span>
      <h2 className="ms-3">{props.sabi4}</h2>
      <p className="ms-3">{props.sabi5}</p>
      <p>{props.sabi6}</p>
      <Col className="text-center">
        <button type="button" class="btn btn-secondary btn-lg mb-3">
          BUY NOW
        </button>
      </Col>
    </Col>
  );
}

export default Webpro;
