import  { FC } from "react";
import Button from "../../Button";

const PersonalInfo: FC = () => {
  return (
    <div className="flex gap-x-5 items-start">
      {/* Profile Picture */}
      <div className="w-[150px] h-[150px] rounded-[50%] bg-[#C4C4C4]"></div>
      {/* Personal Details */}
      <div className="flex flex-col gap-y-5 items-start">
        {/* Name */}
        <h1 className="text-[32px] font-bold text-black/80 leading-[100%]">
          Jake Harper
        </h1>
        {/* Total journeys */}
        <p className="text-xl leading-[100%]">
          <span className="text-black/60 mx-[2px]">Unpuzzling</span>
          <span className="text-black font-bold mx-[2px]">7</span>
          <span className="text-black mx-[2px]">puzzle journeys</span>
        </p>
        {/* Total Annotations */}
        <p className="text-xl leading-[100%]">
          <span className="text-black/60 mx-[2px]">Added</span>
          <span className="text-black font-bold mx-[2px]">35</span>
          <span className="text-black mx-[2px]">Annotations</span>
        </p>
        {/* Buttons for editing details */}
        <div className="flex gap-x-5 items-start">
          {/* Edit profile button */}
          <Button
            bgColor="bg-white"
            textColor="text-black/60"
            className="border-[1px] border-black/60 leading-[100%]"
            px="px-[14px]"
          >
            Edit Profile
          </Button>
          {/* Settings button  */}
          <Button
            bgColor="bg-white"
            textColor="text-black/60 "
            className="border-[1px] border-black/60 leading-[100%]"
            px="px-[22px]"
          >
            Settings
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
