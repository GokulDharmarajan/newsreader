import React from "react";
import "../Sabi com/Mark.css";
import bootstrap from "bootstrap";
import { Container, Row, Col, Button } from "react-bootstrap";
import Markting from "../../Pages/Sabi pages/Markting";
import { Link } from "react-router-dom";

function Firstbox(props) {
  return (
    <div>
      <h2 className="text-center pt-4">{props.name}</h2>
      <p>{props.name1}</p>
      <span className="mt-5 text-center">{props.name2}</span>
      <p></p>
      <span>{props.name3}</span>
      <h1>{props.name4}</h1>
      <p>{props.name5}</p>
      <p className="text-center">
        <Button variant="secondary">{props.name6}</Button>{" "}
      </p>
      <p>{props.name7}</p>
      <h4 className="mx-auto">{props.name8} </h4>
      <i className="fas fa-check"></i>
      <span className="ms-3">{props.name9}</span>
      <p></p>
      <i className="fas fa-check"></i>
      <span className="ms-3">{props.name10}</span>
      <p></p>
      <i className="fas fa-check"></i>
      <span className="ms-3">{props.name11}</span>
      <p></p>
      <i className="fas fa-check"></i>
      <span className="ms-3">{props.name12}</span>
      <p></p>
      <i className="fas fa-check"></i>
      <span className="ms-3">{props.name13}</span>
      <p></p>
      <Link to="#" className="mark">
        {props.name14}
      </Link>
      <hr></hr>

      <span className="ms-2 pb-3"> {props.name15}</span>
    </div>
  );
}

export default Firstbox;
