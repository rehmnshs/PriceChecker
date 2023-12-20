import React from "react";

export default function CardShow({ content, image }) {
  const price = content.split("[]")[0];
  
  /*<div>{content.split(":")[1]}</div>
  <div></div>*/
  //{content.split(":")[1].slice(0,25)}..

  return (
  <> { image &&
      <a href={content.split("?")[1]}  target="_blank" rel="noopener noreferrer" id="ahref"><div className="boxx"> 
        <div className="imgbox" >
  <div className="upperlayer">{price.includes("₹")? price:"₹"+ price}</div>   <img src={image} className="imginside" /><div className="detes">{content.split("?")[0].split("[]")[1].slice(0,45)}...</div>
        </div>

      </div></a>}
   </>
  );
}
