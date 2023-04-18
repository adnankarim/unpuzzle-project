import { FC } from "react";
import PuzzlePieceIconPreview from "../../PuzzlePieceIconPreview";
import { puzzlePiecesDataProps } from "../../Journey/journeyTypes";
import { getTime } from "../../helperFunctions";

// Card through which each annotation wil be displayed
const RecentAnnotationCard: FC<puzzlePiecesDataProps> = ({
  id,
  puzzlePieceType,
  time,
  title,
}) => {
  return (
    <div
      className="flex flex-col items-start gap-y-5 w-[280px] h-[328px]
       bg-[#FFFFFF] border-[1px] border-black/20 rounded-[5px]"
    >
      {/* Thumbnail for annotation */}
      <img
        src="https://s3-alpha-sig.figma.com/img/f6bf/c7f5/908032af42548e4854fafb93ef1317b5?Expires=1676246400&Signature=QO6Kjl-A8qD8v2vdvEFJqIwOOnXy5lV4L6nmoObghMBNW8VYms~FasCo2p58zVluDcgTJ55aqk0ky1ZYWidZLAO1Owkqc71~drCpB96nkHS22O43tIFtaKO9t3x7svYO-spP6exs5kmOW2DluQITYSxQNl0r13HoOjEYzGXJRbV3cnJhdwsnt2WgOA8oCdo8PWk-FntJ~dBOwAyW28DbsqRJsCskRgClA64JDiC3b61UzXuJP31EVEixttY-H2HmL92HQ67mIxI2lTxyHg1uZjrXaZPV4ILCJCfY-r-2wEcjmiVF7tOzAzaYYwaOni-6X6KFsvM8W-JqLDoSVvvr4w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        className="w-full h-[157px] object-cover"
      />
      {/* Annotation details */}
      <div className="flex flex-col items-start p-[10px] gap-y-5">
        <div className="flex gap-x-[10px] items-center">
          {/* Puzzle piecetType with icon & label */}
          <div className="flex justify-center items-center gap-x-[5px]">
            <PuzzlePieceIconPreview type="video" />
          </div>
          {/* Time of annotation */}
          <p className="text-sm text-black/60 leading-[100%]">
            <span className="">at</span>
            <span className="font-bold ml-[3px]">{getTime(time)}</span>
          </p>
        </div>
        {/* Annotation Title */}
        <p className="text-sm text-black/80 font-bold leading-[120%]">
          Are you getting stuck with Auto layout? This Video will help you.
        </p>
        {/* Jorney title and annotation author */}
        <div className="flex flex-col items-start gap-y-[10px]">
          <p className="text-sm leading-[130%] font-normal text-black">
            Figma in 40 Minutes
          </p>
          {/* Annotation Author */}
          <p className="text-sm text-black/60 leading-[120%]">
            <span className="">Annotate by </span>
            <span className="font-bold ml-[3px]">Mahtab Alam</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecentAnnotationCard;
