import { FC } from "react";
import RecentJourneyCard from "./RecentJourneyCard";
import Button from "@/components/Button";
import { journeyData } from "../MyProfileData";
import CustomSlider from "../CustomSlider";

const RecentPuzzleJourneys: FC = () => {
  return (
    <div className="flex flex-col gap-y-10 mt-[120px]">
      <div className="flex justify-between w-full">
        <h1 className="text-3xl text-black/80 font-bold leading-[45px] ">
          Recent Puzzle Journeys
        </h1>
        <Button
          textColor="text-[#1CABF2]"
          bgColor="bg-none"
          className="underline"
          textSize="text-base font-normal"
          px="px-0"
          py="py-0"
        >
          View All
        </Button>
      </div>
      <CustomSlider
        dataLength={journeyData.length}
        sliderParentClass="recent-journey-slider"
      >
        {journeyData.map((journeyProps) => {
          return <RecentJourneyCard {...journeyProps} key={journeyProps.id} />;
        })}
      </CustomSlider>
    </div>
  );
};

export default RecentPuzzleJourneys;
