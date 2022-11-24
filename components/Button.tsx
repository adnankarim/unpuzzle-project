import { FC } from "react";
import { buttonProps } from "../types/types";

const Button: FC<buttonProps> = ({
  className = "",
  children,
  px = "px-3",
  py = "py-2",
  rounded = "rounded-[5px]",
  textColor,
  bgColor,
  textSize = "text-[18px]",
  onClick,
}) => {
  return (
    <button
      className={`${className} 
   ${px} ${py} ${bgColor} ${rounded} ${textColor} ${textSize} ${rounded}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
