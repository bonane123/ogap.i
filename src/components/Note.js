import React, { useEffect, useState } from "react";
import { HiArrowLongLeft, HiArrowLongRight } from 'react-icons/hi2';
import {RiDoubleQuotesR, RiDoubleQuotesL} from 'react-icons/ri';
import noteData from "../data/noteData";
import Image from "../images/tech06.png"
import Profile from "../images/john.png"

const Note = () => {
    const [activeButtonIndex, setActiveButtonIndex] = useState(0);
  const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    let intervalId;

    if (!buttonClicked) {
      intervalId = setInterval(() => {
        setActiveButtonIndex((activeButtonIndex + 1) % noteData.length);
      }, 3000);
    }

    return () => clearInterval(intervalId);
  }, [activeButtonIndex, buttonClicked]);

  const handleClickLeft = () => {
    setButtonClicked(true);
    setActiveButtonIndex(activeButtonIndex === 0 ? noteData.length - 1 : activeButtonIndex - 1);
  };

  const handleClickRight = () => {
    setButtonClicked(true);
    setActiveButtonIndex((activeButtonIndex + 1) % noteData.length);
  };
  return (
<div className="my-24">
{noteData.map((obj, index) => {
        return (
          <div key={obj.id} className={index === activeButtonIndex ? 'flex justify-between items-center text-white w-full' : 'hidden'}>
            <div className="mb-4 w-1/2 ">
                
            <RiDoubleQuotesL className="text-red-400 text-6xl" />
              <h2 className="text-5xl my-10 font-semibold">{obj.describe}</h2>
              <RiDoubleQuotesR className="text-red-400 text-6xl"/>
              <div className="flex justify-start items-center" >
            <img src={Profile} alt="profile" width="40px" height="40px" className="rounded-full mr-2" />
              <p className="my-10 text-red-400">{obj.name}</p>
              </div>
            </div>
            <img src={Image} alt="zero" width="400" height="400" />
          </div>
        );
      })}
      <div className="flex justify-start">
        <HiArrowLongLeft className='text-red-400 text-2xl mr-4 bg-slate-600 cursor-pointer rounded-full' onClick={handleClickLeft} />
        <HiArrowLongRight className='text-red-400 text-2xl bg-slate-600 cursor-pointer rounded-full' onClick={handleClickRight} />
      </div>
</div>
  )
};

export default Note;
