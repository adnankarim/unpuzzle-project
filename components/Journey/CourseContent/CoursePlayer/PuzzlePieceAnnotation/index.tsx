import { FC } from "react";
import PuzzleTimeStampSlider from "./PuzzleTimeStampSlider";
import { puzzlePieceAnnotationProps } from "../../../journeyTypes";

const PuzzlePieceAnnotation: FC<puzzlePieceAnnotationProps> = ({
  currentTime,
}) => {
  // console.log(currentTime);
  return (
    <div className="w-full bg-[#F5F5F5] p-5 rounded-[10px]">
      <div className="flex flex-col items-start gap-y-[10px]">
        <p className="text-[16px] text-black/60 font-bold">
          Puzzle Piece Annotations
        </p>
        <PuzzleTimeStampSlider currentTime={currentTime} />
      </div>
    </div>
  );
};

export default PuzzlePieceAnnotation;
