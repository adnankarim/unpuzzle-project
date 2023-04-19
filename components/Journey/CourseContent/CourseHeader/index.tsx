import { FC, useState } from "react";
import Image from "next/image";
import CourseHeaderStar from "../../../assets/svg/CourseHeadeStar";
import ToggleSwitch from "../../../ToggleSwitch";
import Button from "../../../Button";
import upLogo from "../../../assets/up-logo.png";
import upLogo1 from "../../../assets/up-logo1.png";
import share from "../../../assets/share.png";

const index: FC = () => {
  let [selected, setSelected] = useState<boolean>(false);
  return (
    <div className="flex justify-between w-full bg-black/70 items-center py-[20px] px-[40px]">
      <div className="flex justify-center items-center gap-x-[40px]">
        <Image src={upLogo.src} width="50" height="50" alt="unpuzzule-logo" />
        <div className="flex flex-col gap-y-[5px] items-start">
          <p className="text-2xl text-white font-bold leading-[36px]">
            Solving Basic Equations in Easy & Time Efficient way
          </p>
          <div className="flex justify-center gap-x-[10px] items-center">
            <p className="text-white font-normal text-[16px]">Course Name</p>
            <p className="w-[2.44px] h-[2.48px] bg-white rounded-[50%]"></p>
            <p className="text-white font-normal text-[16px]">
              Instructor: @mahtabalam
            </p>
            <div className="flex justify-center items-center gap-x-[5px]">
              {CourseHeaderStar}
              <p className="text-[#F9993A] text-[16px]">
                4.9<span className="text-[16px] text-white ml-1">(209)</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-x-[40px] justify-center items-center">
        <Image src={upLogo1.src} width="50" height="50" alt="unpuzzule-logo" />
        <div className="flex justify-center items-center gap-x-[10px]">
          <p className="text-white text-2xl font-bold">Unpuzzle Mode</p>
          <ToggleSwitch selected={selected} setSelected={setSelected} />
        </div>
        <Button
          textColor="text-white"
          bgColor="inherit"
          className="flex justify-center items-center border-[1px] border-white gap-x-[20px]"
          px="px-[10px]"
          py="py-[5px]"
        >
          Share
          <Image src={share.src} width="19" height="20" alt="share" />
        </Button>
      </div>
    </div>
  );
};

export default index;
