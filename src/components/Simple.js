import React from "react";
import Image from '../images/tech08.png'
import Vector from '../images/Vector.png'
import Vector2 from '../images/Vector2.png'

const Simple = () => {
return(
<div className="my-10">
    <div className="text-8xl font-bold text-white mb-8" >
        <h2>Simple <span className="text-red-500">solutions</span> to <br />
            complex <span className="text-red-500">problems,</span></h2>
    </div>
    <div className="flex justify-between items-start text-white w-full" >
        <div className="mb-4 w-1/3" >
        <p className="my-10" >We  aim at making change to fill gaps with well tailored technical and non-technical interventions in Rwanda and Africa at large.</p>
        <button className="my-10 bg-red-400 px-10 py-4 rounded-tl-full rounded-br-full" >projects</button>
        </div>
        <img src={Image} alt="zero" width="500" />
        <img src={Vector} alt="zero" className="absolute w-[900px] bottom-0"   />
        <img src={Vector2} alt="zero" className="absolute w-[900px] bottom-0"   />
    </div>

</div>
)
};

export default Simple;
