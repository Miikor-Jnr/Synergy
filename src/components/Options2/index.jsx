import React from "react";
import Bounce from 'react-reveal/Bounce';


export function Options2({image, title, content}) {
    return (
<div className="grid grid-cols-2 gap-x-[74px]" >
            <div className="grid place-items-center">
               <div>
               <h3 className="font-bold text-[40px] text-white">{title}</h3>
                <p className="text-[18px] text-white mt-[24px] text-justify">{content} </p>
               </div>
            </div>
<Bounce right>
<div className="rounded-[85px] grid place-items-center oveflow-hidden relative" style={{transform:'rotate(360deg)'}}>
                <div className="relative bg-[#000709] rounded-[85px]">
                <img src={image} alt="options" />
                </div>
            </div>
</Bounce>
            
        </div>
    )
}