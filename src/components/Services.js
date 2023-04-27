import React from "react";
import Image from '../images/Image.png'
const Services = () => {
    return(
        <div className="my-24">
            
            <div className="flex justify-between items-center text-white w-full" >
                <img src={Image} alt="zero" width="400" />
                <div className="mb-4 w-1/2 " >
                    <h2 className="text-5xl my-10 font-semibold" >Website development</h2>
                <p className="my-10" >We  aim at making change to fill gaps with well tailored technical and non-technical interventions in Rwanda and Africa at large.</p>
                <button className="my-10 bg-red-400 px-10 py-4 rounded-tl-lg rounded-br-lg" >Learn more</button>
                </div>

            </div>
        
        </div>
        )
};

export default Services;
