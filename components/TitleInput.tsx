import React, { FC } from "react";
import { titleInputProps } from "../types/types";

const TitleInput: FC<titleInputProps> = ({
  placeholder,
  textValue,
  setTextValue,
  className,
}) => {
  const onChangeHanlder: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setTextValue(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder={placeholder}
      className={`w-full border-[0.5px] border-black/60 rounded-[5px] py-[15px]
px-[10px] text-base text-black/50 ${className}`}
      value={textValue}
      onChange={onChangeHanlder}
    ></input>
  );
};

export default TitleInput;
