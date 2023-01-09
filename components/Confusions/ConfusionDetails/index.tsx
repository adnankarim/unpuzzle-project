import React, { FC } from "react";

const ConfusionDetails: FC = () => {
  return (
    <div className="flex flex-col gap-y-5">
      <h1 className="text-black/75 text-[45px] font-bold leading-[58.5px]">
        Confused at 02:45
      </h1>
      <p className="text-black/75 text-[30px] font-bold leading-[39px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet eu,
        quis lacus eleifend nunc, egestas dignissim auctor. Vel dolor congue
        adipiscing vulputate ut dictum iaculis enim ac. Eget vestibulum natoque
        quis felis cras. Turpis semper id consequat justo a purus?
      </p>
      <div className="flex justify-between items-center w-full">
        <div className="flex gap-x-[10px] justify-center items-center">
          <div className="w-10 h-10 rounded-full bg-[#C4C4C4]"></div>
          <p className="text-base text-black/75 font-bold leading-[20.8px]">
            Sameen Mahmud
          </p>
        </div>
        <p className="text-base font-normal leading-[20.8px] text-black/75">
          6th April, 2022
        </p>
      </div>
    </div>
  );
};

export default ConfusionDetails;
