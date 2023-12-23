import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Productlist from "../components/Productlist";

export default function Productpage() {
  const param = useParams();

  const [term, setTerm] = useState(param.term);
  const [list,setlist] = useState();
  const funcdo = async () => {
    console.log(term);
    const  respp = await axios.get(
          "https://pricecheckerbe.onrender.com/getall",
          {
            params: { term:term },
          }
          
        );
        console.log(respp.data);
        setlist(respp.data);
        
      }
      useEffect( () =>{
        funcdo();
            },[])

  return <div><div>{!list && <div><div class="ring">Loading
  <span></span>
</div></div> }</div>{list && <Productlist list = {list} />}<div></div></div>;
}
