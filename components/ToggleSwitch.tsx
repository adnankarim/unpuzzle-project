import { FC } from "react";
import { toggleSwitchProps } from "@/types/types";

const ToggleSwitch: FC<toggleSwitchProps> = ({ selected, setSelected }) => {
  return (
    <div
      className={`w-[60px] h-[24px] rounded-[17px] px-1 relative flex items-center 
       duration-500 transition-all cursor-pointer  ${
         selected ? "bg-[#36CC7B] justify-start" : "bg-[#BCBDBD] justify-end"
       }`}
      onClick={() => setSelected((selected) => !selected)}
    >
      {selected && (
        <p
          className={`text-white transition-all duration-700 ${
            selected ? "opacity-1" : "opacity-0"
          }`}
        >
          ON
        </p>
      )}
      <div
        className={`w-[16.8px] h-[16.8px] absolute left-1 top-1 rounded-full transition-all
         duration-500 bg-white ${selected && "translate-x-[35px] "}`}
      ></div>
      {!selected && (
        <p
          className={`text-white transition-all duration-700 ${
            !selected ? "opacity-1" : "opacity-0"
          }`}
        >
          OFF
        </p>
      )}
    </div>
  );
};

export default ToggleSwitch;
