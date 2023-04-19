import { FC, useContext } from "react";
import PuzzlePieceSvg from "../../../../assets/svg/PuzzlePieceSvg";
import { puzzlePieceProps } from "../../../journeyTypes";
import { ContentContext } from "../../../journeyContexts/ContentContextProvider";
import { getTime } from "../../../../helperFunctions";

const PuzzlePiece: FC<puzzlePieceProps> = ({
  puzzlePieceColor = "text-[#F9993A]",
  title,
  time,
  contentType,
  children,
  id,
}) => {
  const { currentPieceLoaded, setCurrentPieceLoaded, setCurrentTime } =
    useContext(ContentContext);
  return (
    <div
      className={`flex items-start p-[10px] gap-x-5 cursor-pointer border-2 border-black/0 
      rounded-[5px] hover:border-2 hover:border-[#1CABF2]  
      ${
        currentPieceLoaded == id
          ? "bg-black text-white "
          : "hover:bg-[#F9F9F9] text-black"
      }`}
      onClick={() => {
        setCurrentPieceLoaded(id);
        setCurrentTime(time);
      }}
    >
      <PuzzlePieceSvg color={puzzlePieceColor} />
      <div className="flex flex-col items-start gap-y-[10px]">
        <p
          className={`text-[16px]  leading-[20.8px]
        ${currentPieceLoaded == id ? "text-white" : "text-black"}`}
        >
          {title}
        </p>
        <div className="flex items-center gap-x-5 justify-center">
          <p
            className={`text-sm  
          ${currentPieceLoaded == id ? "text-white/60" : "text-black "}`}
          >
            at <span className="font-bold text-inherit">{getTime(time)}</span>
          </p>
          {children}
        </div>
      </div>
    </div>
  );
};

export default PuzzlePiece;
