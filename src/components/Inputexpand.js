import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Inputexpand() {
    const [click, setclick] =useState(0);
    const [term, setTerm] =useState("");
   
    const funcChange = (event) => {
        setTerm(event.target.value);
      };
      const goto = () => {
        window.location.replace(`/${term}/productpage`);
      };
    function inputappear(){
        if(click === 0 ){
          var myElement = document.getElementById("ie");
          myElement.classList.remove("expandsearch"); // Remove the old class
          myElement.classList.add("expandsearch1");
          setclick(1);
          return 0;
        } 
        if(click ===1){
          var myElement = document.getElementById("ie");
          myElement.classList.remove("expandsearch1"); // Remove the old class
          myElement.classList.add("expandsearch2");
          setclick(0);
          return 0;
        }
         }
    const link=()=>{
      
        window.location.replace(`/`);
     
    }
  return (

      <div className="header2">
        <div onClick={link}className="homebuttons">Home</div>
        <div className="searchbt" onClick={inputappear}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
          </svg>
        </div>
        <input
          id="ie"
          className="expandsearch"
          value={term}
          onChange={funcChange}
        />
        {
          <div
            className="senddd"
            style={{
              opacity: term ? 1 : 0,
              transition: "opacity 0.8s ease",
              cursor: "pointer",
            }}
          >
          
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24" 
                onClick={goto}
              >
                <path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z" />
              </svg>{" "}
        
          </div>

        }
      </div>
   
  );
}
