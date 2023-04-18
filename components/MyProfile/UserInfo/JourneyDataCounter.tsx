import  { FC, ReactNode } from "react";
import { journeyDataProps } from "../MyProfileTypes";

const JourneyDataCounter: FC<journeyDataProps> = ({
  title,
  icon,
  dataAmount,
}) => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-y-[15px] w-[224px] h-[103px]
     bg-white rounded-[10px] shadow-[5px_5px_20px_0px_rgba(0,0,0,0.2)]"
    >
      {/* Data Amount */}
      <h1 className="text-[48px] font-bold leading-[100%] text-black">
        {dataAmount}
      </h1>
      {/* Icon & title */}
      <div className="flex justify-center items-center gap-x-[10px]">
        {/* Icon for data */}
        {icon}
        <p className="text-xl font-normal text-center text-black/60 leading-[100%]">
          {title}
        </p>
      </div>
    </div>
  );
};

export default JourneyDataCounter;
