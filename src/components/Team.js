import React from "react";
import Image from "../images/john.png";
import Liliane from "../images/liliane.jpg";
import Bonane from "../images/bonane.png";

const Team = () => {
  return <div className="my-24">
<h2 className="text-white text-6xl font-semibold" >Our talents</h2>
    <div className="flex justify-between mt-16 mx-auto">
        <div>
            <img src={Bonane} className="rounded-md" alt="profile" width="250px" />
            <p className="text-red-400 my-2" >Ndayishimye Bonane</p>
            <p className="text-white">Software Engineer</p>
        </div>
        <div>
            <img src={Liliane} alt="profile" className="rounded-md" width="250px"  />
            <p className="text-red-400 my-2" >Gikundiro Liliane</p>
            <p className="text-white">Software Engineer</p>
        </div>
        <div>
            <img src={Image} alt="profile" width="250px" />
            <p className="text-red-400 my-2" >Ndagijimana Philbert</p>
            <p className="text-white">Data Scientist</p>
        </div>
        <div>
            <img src={Image} alt="profile" width="250px" />
            <p className="text-red-400 my-2" >Cyiza Christian Mugabo</p>
            <p className="text-white">Data Scientist</p>
        </div>
    </div>
  </div>
};

export default Team;
