import {useEffect, useState} from 'react';
import IconStar from "./IconStar";

interface Props {
  stars?: number;
}

function Stars({ stars }: Props) {
const [rating, setRating]= useState("0")
  /* This is to round the rating to closest .5 or .0 */
  useEffect(()=>{
    if (stars) {
        setRating((((Math.round((stars * 10) / 5) * 5) / 10) * 20+1.5).toString() + "%");
      }
  },[stars])


  return (
    <div className="flex items-center">
     
      <div className="flex relative">
        <IconStar  colorSvg="#fff" />
        <IconStar colorSvg="#fff"/>
        <IconStar colorSvg="#fff"/>
        <IconStar colorSvg="#fff"/>
        <IconStar colorSvg="#fff"/>
        
        <div
          className={`flex absolute top-0 overflow-hidden`}
         style={{width:stars===0?0.1:rating}}
        >
          <IconStar colorSvg="#F9993A" />
          <IconStar colorSvg="#F9993A" />
          <IconStar colorSvg="#F9993A" />
          <IconStar colorSvg="#F9993A" />
          <IconStar colorSvg="#F9993A" />
           
        </div>
      </div>
    </div>
  );
}

export default Stars;
