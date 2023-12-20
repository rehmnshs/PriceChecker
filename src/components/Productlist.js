import React, { useState } from "react";
import CardList from "./CardList";
import { Link, useParams } from "react-router-dom";
import Inputexpand from "./Inputexpand";

export default function Productlist({ list }) {
  let params = useParams();
  params = params.term;
  const [click, setclick] =useState(0);
function changeClass(){
  const el = document.getElementById("filt");
  if(click === 0 ){
    el.classList.remove("filter");
    el.classList.add("filter1");
    setclick(1);
    return 0;
  } 
  if(click ===1){
    el.classList.remove("filter1");
    el.classList.add("filter");
    setclick(0);
    return 0;
  }

}
  return (
    <div>
      <div className="header">
        <Inputexpand />
      </div>
      <div className="main4">
        <div className="sidebar"></div>
        <div>
          <div className="header1"><div>Showing results for "{params}"</div></div>

          <div>
            <CardList lists={list} />
          </div>
        </div>
      </div>
    </div>
  );
}
