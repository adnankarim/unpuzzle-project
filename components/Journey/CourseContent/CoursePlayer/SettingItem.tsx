import { FC } from "react";
import { settingItemProps } from "../../journeyTypes";

const SettingItem: FC<settingItemProps> = ({
  itemName,
  onClick,
  playBackRate,
  currentPlayRate,
}) => {
  return (
    <div
      className={`text-[16px]  text-[#FFFFFF] hover:bg-[#F9993A] py-2 pl-3
       rounded-md ${currentPlayRate == playBackRate ? "bg-[#F9993A]" : ""}`}
      onClick={onClick}
    >
      {itemName}
    </div>
  );
};

export default SettingItem;
