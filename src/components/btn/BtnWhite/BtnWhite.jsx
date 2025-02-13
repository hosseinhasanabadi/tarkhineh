import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router";
import "./BtnWhite.css";
function BtnWhite(props) {
  return (
    <Button id="white-btn">
      <Link to={props.btnLink} className="text-decoration-none text-light ">
        <span className="btn-title">{props.btnTitle}</span>{" "}
      </Link>
    </Button>
  );
}

export default BtnWhite;
