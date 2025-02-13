import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router";
import "./BtnGreen.css";
function BtnGreen(props) {
  return (
    <Button id="green-btn">
      <Link to={props.btnLink} className="text-decoration-none text-light ">
        <span className="btn-title">{props.btnTitle}</span>{" "}
      </Link>
    </Button>
  );
}

export default BtnGreen;
