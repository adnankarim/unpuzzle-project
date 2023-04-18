import  { FC } from "react";
import PersonalInfo from "./PersonalInfo";
import JourneysInfo from "./JourneysInfo";

const UserInfo: FC = () => {
  return (
    <div className="flex items-start gap-x-[118px] w-full mt-[84px]">
      {/* Personal info name, profile settings,etc */}
      <PersonalInfo />
      {/* User's journey, annotation, confusion data */}
      <JourneysInfo />
    </div>
  );
};

export default UserInfo;
