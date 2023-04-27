import React from "react";
import Footer from "../components/Footer";
import Simple from "../components/Simple";
import Services from "../components/Services";

const Home = () => {
return (
<>
    <div className="w-full bg-sky-950">
        <div className=" w-10/12 mx-auto h-full p-10 font-Roboto">
            <Simple />
            <Services/>
        </div>
    </div>
    <Footer />
</>

)
};

export default Home;
