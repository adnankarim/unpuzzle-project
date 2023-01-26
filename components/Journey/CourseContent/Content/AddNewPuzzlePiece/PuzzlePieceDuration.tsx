import React, { FC } from "react";

const PuzzlePieceDuration: FC = () => {
  return (
    <div className="flex flex-col p-[10px] gap-y-[5px] items-start bg-[#F9F9F9]">
      <p className="text-xl text-black/60 font-bold leading-[100%]">
        Add a Puzzle Piece at <span className="text-[#F9993A]">02:30</span>
      </p>
      <button className="text-sm text-[#1CABF2] font-normal underline decoration-[#1CABF2]">
        Edit timestamp
      </button>
    </div>
  );
};

export default PuzzlePieceDuration;
