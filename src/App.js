import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import data from "./components/backup/Data"
import AboutUs from "./components/About/AboutUs";
import Routed from "./components/Routes/Routes";


function App(){
    const {productItems} = data


  return(
    <>
    <Router>
       <AboutUs/>
       <Routed productItems={productItems}/>
    </Router>
   
    </>

  )
}
export default App