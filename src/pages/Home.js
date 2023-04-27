import React from "react";
import Footer from "../components/Footer";
import Simple from "../components/Simple";
import Services from "../components/Services";
import Team from "../components/Team";
import Note from "../components/Note";
import Schedule from "../components/Schedule";

const Home = () => {
return (
<>
    <div className="w-full bg-sky-950">
        <div className=" w-10/12 mx-auto h-full p-10 font-Roboto">
            <Simple />
            <Services/>
            <Team/>
            <Note/>
            <Schedule/>
        </div>
    </div>
    <Footer />
</>

)
};

export default Home;
