import { FC, useState, useEffect, useContext } from "react";
import PuzzlePieceIconPanel from "./PuzzlePieceIconPanel";
import VideoTimeStamp from "../../../../assets/svg/VideoTimeStamp";
import ImageTimeStamp from "../../../../assets/svg/ImageTimeStamp";
import AudioTimeStamp from "../../../../assets/svg/AudioTimeStamp";
import ActivePointer from "../../../../assets/svg/ActivePointer";
import { PuzzleTimeStampProps } from "../../../journeyTypes";
import { getTime } from "../../../../helperFunctions";
import { ContentContext } from "../../../journeyContexts/ContentContextProvider";

const PuzzleTimeStamp: FC<PuzzleTimeStampProps> = ({
  puzzlePieceType,
  time,
  slider,
  index,
  setCurrentIndex,
  currentIndex,
  id,
}) => {
  // Boolean(currentIndex == index);
  // let [isActive, setIsActive] = useState<boolean>(false);
  let [isVisited, setIsVisited] = useState<boolean>(false);

  const { currentPieceLoaded, setCurrentPieceLoaded, setCurrentTime } =
    useContext(ContentContext);

  let isActive = id == currentPieceLoaded;
  // console.log(currentTime);

  // useEffect(() => {
  //   if (Math.floor(currentTime) == Math.floor(time)) {
  //     setCurrentIndex(index);
  //     //  !isVisited && setIsVisited(true)
  //   }
  //   // if (Boolean(Math.floor(currentTime) == Math.floor(time))) {
  //   //   if (!isActive) {
  //   //     setIsActive(true);
  //   //     slider.current?.slickGoTo(index);
  //   //   }
  //   //   !isVisited && setIsVisited(true);
  //   // } else {
  //   //   isActive && setIsActive(false);
  //   // }
  // }, [currentTime]);

  return (
    <div
      className="flex flex-col items-center gap-y-[1px]"
      onClick={() => {
        setCurrentPieceLoaded(id);
        setCurrentTime(time);
      }}
    >
      <ActivePointer opacity={isActive ? "opacity-100" : "opacity-0"} />
      <div
        className={`flex flex-col justify-center items-center 
    gap-y-[10px] p-[10px] pb-[5px] rounded-[10px] w-[59px] ${
      isActive
        ? "bg-[#1CABF2]"
        : (isVisited && "bg-[#F9993A]") ||
          "bg-white border-[1px] border-[#D9D9D9]"
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
