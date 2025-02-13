import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {useRoutes} from "react-router";
import routes from "./routes";
import Header from "./components/Header/Header";
import Footer from  './components/Footer/Footer'
function App() {
  const router = useRoutes(routes);
  return(
     <>
  
  {router}
  </>
    );
}

export default App;
