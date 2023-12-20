import React, { useState } from "react";

import { Link } from "react-router-dom";
import Carousel from "./Carousel";
import Carousell from "./Carousel";


export default function Navbar() {
  const [term, setTerm] = useState("");
  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  const link = term + "/productpage";
  return (
    <>
      {" "}
      <div className="nav1">
        <div style={{display:"flex"}}><h5>Price</h5><h5 style={{color:"red"}}>Checker</h5></div>
        <div></div>
      </div>
      <div className="name1">
        {" "}
        <div className="nav11">
          {" "}
          <p style={{ fontSize: "small", color:"red", opacity:"0.8"}}>smart shopping starts here {"->"}</p>
          <h1>
            Unleash the Power of{" "}
           <h1 style={{ color: "red", margin: "0" }}>PriceChecker</h1>  
          </h1>
          <p style={{margin:"5px 0px 0px 0px", fontSize: "small" }}>buy something idk</p>
          <div className="seachbox">
          <input
              placeholder="Enter product name"
              onChange={handleChange}
              style={{
                width: "50vh",
                outline: "0",
                border: "none",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            />

            <Link to={link} className="btw">
              <button className="button">Search</button>
            </Link>
          </div>

        </div>
        <div className="img1">
          <section>
           <Carousell />
          </section>
          
        </div>
        
      </div>
      <section></section>
    </>
  );
}
