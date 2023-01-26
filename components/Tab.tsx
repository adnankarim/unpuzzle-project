import { FC } from "react";
import Button from "./Button";
import { tabProps } from "../types/types";

const Tab: FC<tabProps> = ({
  tabName,
  activeTab,
  tabValue,
  setActiveTab,
  Icon,
  iconOnActiveColor,
  iconOnUnactiveColor,
  className,
  px = "px-0",
  py = "py-[10px]",
  textColor = "text-black/60",
  borderWidth = "border-b-2",
  borderColor = "border-black/0",
  borderRadius = "rounded-none",
  onActiveTextColor = "text-[#1CABF2]",
  onActiveFontWeight = "font-bold",
  onActiverBorderColor = "border-[#1CABF2]",
  onHoverBorderColor = "hover:border-black/40",
  onHoverTextColor = "hover:text-black",
  buttonActiveBorderColor = "active:border-[#1CABF2]/40",
  buttonActiveTextColor = "active:text-black",
}) => {
  let isActive = activeTab == tabValue;
  return (
    <Button
      bgColor="bg-inherit"
      rounded={borderRadius}
      textSize="text-[16px]"
      textColor={`${isActive ? onActiveTextColor : textColor}`}
      px={px}
      py={py}
      className={`box-border ${borderWidth}  ${
        isActive
          ? `${onActiverBorderColor} ${onActiveFontWeight}`
          : `${borderColor} ${onHoverBorderColor} ${onHoverTextColor} ${buttonActiveTextColor} ${buttonActiveBorderColor}`
      } ${className} `}
      onClick={() => {
        setActiveTab(tabValue);
      }}
    >
      {Icon && (
        <Icon color={`${isActive ? iconOnActiveColor : iconOnUnactiveColor}`} />
      )}
      {tabName}
    </Button>
  );
};

export default Tab;
