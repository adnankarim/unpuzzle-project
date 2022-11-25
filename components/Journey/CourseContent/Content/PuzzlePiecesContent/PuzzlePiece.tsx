import { FC } from "react";
import PuzzlePieceSvg from "../../../../assets/svg/PuzzlePieceSvg";
import { puzzlePieceProps } from "../../journeyTypes";

const PuzzlePiece: FC<puzzlePieceProps> = ({
  puzzlePieceColor = "text-[#F9993A]",
  title,
  time,
  contentType,
  children,
}) => {
  return (
    <div
      className="flex items-start p-[10px] gap-x-5 cursor-pointer border-2 border-black/0 
      rounded-[5px] hover:border-2 hover:border-[#1CABF2] hover:bg-[#F9F9F9]"
    >
      <PuzzlePieceSvg color={puzzlePieceColor} />
      <div className="flex flex-col items-start gap-y-[10px]">
        <p className="text-[16px] text-black leading-[20.8px]">{title}</p>
        <div className="flex items-center gap-x-5 justify-center">
          <p className="text-sm text-black/60">
            at <span className="font-bold text-inherit">{time}</span>
          </p>
          {children}
        </div>
      </div>
    </div>
  );
};

export default PuzzlePiece;
