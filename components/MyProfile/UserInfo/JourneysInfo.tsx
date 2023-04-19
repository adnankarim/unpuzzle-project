import  { FC } from "react";
import Image from "next/image";
import JourneyDataCounter from "./JourneyDataCounter";
import PuzzlePieceSvg from "../../assets/svg/PuzzlePieceSvg";
import puzzleCounterIcon from "../../assets/svg/puzzleCounterIcon";
import youtubeLogo from "../../assets/youtube-logo.png";
import Button from "../../Button";

const JourneysInfo: FC = () => {
  return (
    <div className="flex flex-col gap-y-5">
      {/* Journeys Data, dynamically we need to get data and show them like below */}
      <div className="flex items-start gap-x-5">
        {/* Total puzzle journeys added */}
        <JourneyDataCounter
          dataAmount={0o3}
          icon={puzzleCounterIcon}
          title="Puzzle journeys"
        />
        {/* Total confusions added */}
        <JourneyDataCounter
          dataAmount={21}
          icon={<PuzzlePieceSvg color="text-[#1CABF2]" />}
          title="Confusion Added"
        />
        {/* Total confusions solved */}
        <JourneyDataCounter
          dataAmount={46}
          icon={<PuzzlePieceSvg color="text-[#F9993A]" />}
          title="Confusion Solved"
        />
      </div>
      {/* Current journey playing */}
      <div
        className="flex justify-between items-center py-[15px] px-5 
      rounded-[10px] bg-[#F5F5F5]"
      >
        {/* Current playing journey info */}
        <div className="flex flex-col items-start gap-y-[10px] max-w-[276px]">
          {/* Journey Title */}
          <h1 className="text-base text-black font-bold leading-[120%]">
            Learn HTML/CSS before mastering Shopify Development
          </h1>
          {/* Journey type, dynamically we need to determine type and render ui accordingly */}
          <div className="flex justify-center items-center gap-x-[5px]">
            <Image
              src={youtubeLogo}
              width="36"
              height="15"
              alt="youtube-logo"
            />
            <p className="text-sm leading-[120%] font-normal text-black">
              Puzzle Journey
            </p>
          </div>
        </div>
        {/* Button for taking back to journey */}
        <Button
          textColor="text-white"
          bgColor="bg-[#F9993A]"
          textSize="text-[16px]"
          className="font-[600] leading-6 whitespace-nowrap"
          py="py-[10px]"
          px="px-[16px]"
        >
          Go back to your learning journey
        </Button>
      </div>
    </div>
  );
};

export default JourneysInfo;
