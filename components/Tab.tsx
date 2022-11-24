import { FC } from "react";
import Button from "./Button";
import { tabProps } from "../types/types";

const Tab: FC<tabProps> = ({ tabName, activeTab, tabValue, setActiveTab }) => {
  return (
    <Button
      bgColor="bg-inherit"
      rounded="rounded-none"
      textSize="text-[16px]"
      textColor={`${
        activeTab == tabValue ? "text-[#1CABF2]" : "text-black/60"
      }`}
      px="px-0"
      py="py-[10px]"
      className={`box-border border-b-2 ${
        activeTab == tabValue
          ? "border-[#1CABF2] font-bold"
          : "border-black/0 hover:border-black/40 hover:text-black active:text-black active:border-[#1CABF2]/40"
      } `}
      onClick={() => {
        setActiveTab(tabValue);
      }}
    >
      {tabName}
    </Button>
  );
};

export default Tab;
