import { FC } from "react";
import CustomSlider from "../CustomSlider";
import Button from "../../Button";
import RecentAnnotationCard from "./RecentAnnotationCard";
import { puzzlePieceData } from "../MyProfileData";

const RecentAnnotations: FC = () => {
  return (
    <div className="flex flex-col items-start gap-y-10 w-full mt-[120px]">
      <div className="flex justify-between w-full">
        {/* Section Title */}
        <h1 className="text-[30px] font-bold text-black/80 leading-[45px]">
          Recent Annotations
        </h1>
        {/* Button to view all recent annotations */}
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
      {/* Slider for recent annotation cards */}
      <CustomSlider dataLength={puzzlePieceData.length}>
        {puzzlePieceData.map((props) => (
          <RecentAnnotationCard {...props} key={props.id} />
        ))}
      </CustomSlider>
    </div>
  );
};

export default RecentAnnotations;
