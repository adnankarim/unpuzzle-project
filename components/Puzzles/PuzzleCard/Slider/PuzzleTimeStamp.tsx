import { FC, useState, useEffect, useContext } from "react";
import PuzzlePieceIconPanel from "./PuzzlePieceIconPanel";
import VideoTimeStamp from "@/components/assets/svg/VideoTimeStamp";
import ImageTimeStamp from "@/components/assets/svg/ImageTimeStamp";
import AudioTimeStamp from "@/components/assets/svg/AudioTimeStamp";
import ActivePointer from "@/components/assets/svg/ActivePointer";
import { PuzzleTimeStampProps } from "@/components/Journey/journeyTypes";
import { getTime } from "@/components/helperFunctions";
import { ContentContext } from "@/components/Journey/journeyContexts/ContentContextProvider";

const PuzzleTimeStamp: FC<PuzzleTimeStampProps> = ({
  puzzlePieceType,
  time,
  slider,
  index,
  setCurrentIndex,
  currentIndex,
  id,
}) => {

  let [isVisited, setIsVisited] = useState<boolean>(false);

  const { currentPieceLoaded, setCurrentPieceLoaded, setCurrentTime } =
    useContext(ContentContext);

  let isActive = id == currentPieceLoaded;
 
  return (
    <div
      className="flex flex-col items-center gap-y-[1px]"
      onClick={() => {
        setCurrentPieceLoaded(id);
        setCurrentTime(time);
      }}
    >
      <div
        className={`flex flex-col justify-center items-center 
    gap-y-[10px] p-[10px] pb-[5px] rounded-[10px] w-[59px] ${
      isActive
        ? "bg-[#F9F9F9]"
        : (isVisited && "bg-[#F9F9F9]") ||
          "bg-[#F9F9F9]"
    }`}
      >
        <PuzzlePieceIconPanel
          Icon={VideoTimeStamp}
          puzzlePieceType={puzzlePieceType}
          isActive={isActive}
          type="video"
          isVisited={isVisited}
        />
        <PuzzlePieceIconPanel
          Icon={ImageTimeStamp}
          puzzlePieceType={puzzlePieceType}
          isActive={isActive}
          type="image"
          isVisited={isVisited}
        />
        <PuzzlePieceIconPanel
          Icon={AudioTimeStamp}
          puzzlePieceType={puzzlePieceType}
          isActive={isActive}
          type="audio"
          isVisited={isVisited}
        />
        <p
          className={`text-[16px] ${
            isActive || isVisited ? "text-white" : "text-black/80"
          }`}
        >
          {getTime(time)}
        </p>
      </div>
    </div>
  );
};

export default PuzzleTimeStamp;
