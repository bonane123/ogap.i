import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Error = () => {
  return (
<>
    <Navbar/>
  <div className="bg-sky-950 w-full h-full p-10 font-Roboto">
  <div className="flex flex-col justify-center items-center py-20 text-white" >
    <h2 className="text-4xl py-10" >An error occured!</h2>
    <p className="text-xl" >Could not find this page!</p>
  </div>
  </div>
  <Footer/>
</>
  )
};

export default Error;
