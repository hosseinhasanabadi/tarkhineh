import React from "react";
import "./BoxMenu.css";
import Button from "react-bootstrap/Button";

function BoxMenuCard(props) {
  return (
    <div className="col-6 col-md-4 col-lg-3 d-flex justify-content-center min-card">
      <div className="menu-container">
        <img className="menu-img w-100 h-100" src={props.itemimg} alt="menu item" />
        <div className="menu-overlay"></div>
        <div className="menu-items">
          <Button variant="" className="menu-btn">
            {props.btnTitle}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default BoxMenuCard;
