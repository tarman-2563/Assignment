import React from 'react'

const GridBox = ({element,onClick}) => {

  const isLocked=element>=15;
  const isEven=element%2===0;

  const base="w-[100px] h-[100px] flex justify-center items-center text-[32px] font bold rounded shadow-[2px_2px_0px_black] select-none transition-transform"

  const boxClasses=isLocked ? `${base} bg-red-600 text-white cursor-not-allowed` 
    : isEven 
    ? `${base} bg-[#e0e0e0] text-black cursor-pointer active:scale-95` 
    : `${base} bg-[#1a237e] text-white cursor-pointer active:scale-95`

  return (
    <div>
      <div className={boxClasses} onClick={onClick}>
        {element}
      </div>
    </div>
  )
}

export default GridBox