import { FC } from "react";
import Button from "@/components/Button";
import RecentConfusionCard from "./RecentConfusionCard";
import { confusionsData } from "../MyProfileData";
import CustomSlider from "../CustomSlider";

const RecentConfusions: FC = () => {
  return (
    <div className="flex flex-col gap-y-10 mt-[120px] mb-[120px]">
      <div className="flex justify-between w-full">
        <h1 className="text-3xl text-black/80 font-bold leading-[45px] ">
          Recent Confusions
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
        dataLength={confusionsData.length}
        sliderParentClass="recent-journey-slider"
      >
        {confusionsData.map((props) => (
          <RecentConfusionCard key={props.id} {...props} />
        ))}
      </CustomSlider>
    </div>
  );
};

export default RecentConfusions;
