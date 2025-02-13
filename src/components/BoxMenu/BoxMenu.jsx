import React from "react";
import {Boxmenudata} from "../../../public/Boxmenudata";
import BoxMenuCard from "./BoxMenuCard";
import BtnWhite from './../btn/BtnWhite/BtnWhite';
function BoxMenu() {
  return (
    <div className="box-menu">
      <h1 className="menu-title justify-content-center d-flex ">منوی رستوران</h1>
      <div className="container">
      <div className="row justify-content-center divmap">

        {Boxmenudata.map((item) => (
            <BoxMenuCard itemimg={item.img} btnTitle={item.btnTitle}/>
       
        ))}
        </div>
      </div>
    </div>
  );
}

export default BoxMenu;
