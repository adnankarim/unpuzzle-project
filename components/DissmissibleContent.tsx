import React, { useState, FC } from "react";
import { dissmissibleContentProps } from "../types/types";

const DissmissibleContent: FC<dissmissibleContentProps> = ({
  content,
  className = "",
  buttonLeftMargin = "ml-[1px]",
}) => {
  const [dissmissed, setDissmissed] = useState<boolean>(true);
  return dissmissed ? (
    <div>
      <p
        className={`font-normal text-base leading-[130%] text-[#F9993A] ${className}`}
      >
        {content}
        <span className={`${buttonLeftMargin}`}>
          <button
            className="underline text-base text-black"
            onClick={() => {
              console.log("inside dismissed click handler");
              setDissmissed(false);
            }}
          >
            Dissmiss
          </button>
        </span>
      </p>
    </div>
  ) : null;
};

export default DissmissibleContent;
