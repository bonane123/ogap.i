import React, { useEffect, useState } from 'react';
import dataSlider from '../data/dataSlider';
import { HiArrowLongLeft, HiArrowLongRight } from 'react-icons/hi2';

export default function Slider() {
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);
  const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    let intervalId;

    if (!buttonClicked) {
      intervalId = setInterval(() => {
        setActiveButtonIndex((activeButtonIndex + 1) % dataSlider.length);
      }, 3000);
    }

    return () => clearInterval(intervalId);
  }, [activeButtonIndex, buttonClicked]);

  const handleClickLeft = () => {
    setButtonClicked(true);
    setActiveButtonIndex(activeButtonIndex === 0 ? dataSlider.length - 1 : activeButtonIndex - 1);
  };

  const handleClickRight = () => {
    setButtonClicked(true);
    setActiveButtonIndex((activeButtonIndex + 1) % dataSlider.length);
  };

  return (
    <div className="my-24">
      {dataSlider.map((obj, index) => {
        return (
          <div key={obj.id} className={index === activeButtonIndex ? 'flex justify-between items-center text-white w-full' : 'hidden'}>
            <img src={obj.picture} alt="zero" width="400" height="400" />
            <div className="mb-4 w-1/2 ">
              <h2 className="text-5xl my-10 font-semibold">{obj.title}</h2>
              <p className="my-10">{obj.subTitle}</p>
              <button className="my-10 bg-red-400 px-10 py-4 rounded-tl-lg rounded-br-lg">{obj.btnInfo}</button>
            </div>
          </div>
        );
      })}
      <div className="flex justify-center">
        <HiArrowLongLeft className='text-red-400 text-2xl mr-4 bg-slate-600 cursor-pointer rounded-full' onClick={handleClickLeft} />
        <HiArrowLongRight className='text-red-400 text-2xl bg-slate-600 cursor-pointer rounded-full' onClick={handleClickRight} />
      </div>
    </div>
  );
}
