import { FC } from "react";
import PuzzleTimeStampSlider from "./PuzzleTimeStampSlider";
import { puzzlePiecesData } from "@/components/Journey/CourseContent/Data";

const PuzzlePieceAnnotation: FC = () => {
  // console.log(currentTime);
  return (
    <div className="w-full bg-[#fff] p-5 rounded-[10px]">
      <div className="flex flex-col items-start gap-y-[10px]">
        <div className="w-full flex gap-x-[40px]  lg:flex-nowrap">
          <div>
            <PuzzleTimeStampSlider data={puzzlePiecesData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PuzzlePieceAnnotation;
