import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import BoxMenu from "../../components/BoxMenu/BoxMenu";
import Abute from "../../components/Abute/Abute";
import BranchPage from "../Branch/BranchPage";

function Home() {
  return (
    <>
      <Header />
      <BoxMenu />
      <Abute />
     <BranchPage/> 
      <Footer />
    </>
  );
}

export default Home;
