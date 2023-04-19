import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import CustomSlider from "../CustomSlider";
import youtubeLogo from "../../assets/youtube-logo.png";
import Button from "@/components/Button";
import PuzzlePieceIconPreview from "@/components/PuzzlePieceIconPreview";
import JourneyAnnSliderButtonIcon from "@/components/assets/svg/JourneyAnnSliderButtonIcon";
import JourneyAnnAudioIcon from "@/components/assets/svg/JourneyAnnAudioIcon";
import JourneyAnnMcqIcon from "@/components/assets/svg/JourneyAnnMcqIcon";
import JourneyAnnGuideIcon from "@/components/assets/svg/JourneyAnnGuideIcon";
import VideoTimeStamp from "@/components/assets/svg/VideoTimeStamp";
import ImageTimeStamp from "@/components/assets/svg/ImageTimeStamp";
import { getTime } from "@/components/helperFunctions";
import { journeyProps } from "../MyProfileTypes";

const leftSliderButton = (
  <Button
    bgColor="bg-white"
    textColor="text-black"
    py="py-0"
    px="px-0"
    className={`absolute flex justify-center items-center rotate-180 left-[10px] 
top-[10%] w-[18px] h-[54px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.4)] focus:outline-none
rounded-[3px] `}
  >
    {JourneyAnnSliderButtonIcon}
  </Button>
);

const rightSliderButton = (
  <Button
    bgColor="bg-white"
    textColor="text-black"
    py="py-0"
    px="px-0"
    className={`absolute flex justify-center items-center right-[10px]
top-[10%] w-[18px] h-[54px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)] focus:outline-none
rounded-[3px] `}
  >
    {JourneyAnnSliderButtonIcon}
  </Button>
);

const RecentJorneyCard: FC<journeyProps> = ({
  id,
  thumbnail,
  title,
  type,
  annotations,
}) => {
  return (
    <Link href={`/journey/${id}`}>
      <div
        className="flex flex-col items-start gap-y-[10px] border-[1px]
       border-black/20 w-[305px]
      rounded-[5px]"
      >
        {/* Thumbnail for journey */}
        <img src={thumbnail} className="w-full h-[190px] object-cover" />
        {/* Journey Details */}
        <div className="w-full flex flex-col items-start p-[10px] gap-y-[10px]">
          {/* Journey title */}
          <h1 className="text-base font-bold text-black/80 leading-[120%]">
            {title}
          </h1>
          {/* Journey type either youtube or custom */}
          {type == "youtube" ? (
            <div className="flex items-center justify-center gap-x-[10px]">
              <Image
                src={youtubeLogo}
                width={36}
                height={15}
                alt="youtubeLogo"
              />
              <p className="text-sm leading-[120%]">Puzzle Journey</p>
            </div>
          ) : (
            <p>Custom Puzzle journey</p>
          )}
          <div className="w-full flex flex-col gap-y-[10px]">
            <p className="text-sm text-black/60 leading-[100%]">
              Annotated Puzzle Pieces:
            </p>
            {/* Slider for journey Annotations */}
            <CustomSlider
              dataLength={annotations?.length as number}
              responsive={[]}
              buttonLeft={leftSliderButton}
              buttonRight={rightSliderButton}
              sliderParentClass="recent-journey-card-slider"
            >
              {annotations?.map(({ id, time, puzzlePieceType }) => {
                return (
                  <div
                    className="flex-col p-[10px] px-[0px] w-[53px] justify-center 
              items-center gap-y-[5px] rounded-[5px] bg-[#F9F9F9]"
                    key={id}
                  >
                    <PuzzlePieceIconPreview
                      type={puzzlePieceType}
                      showLabel={false}
                      audioIcon={JourneyAnnAudioIcon}
                      guideIcon={JourneyAnnGuideIcon}
                      mcqIcon={JourneyAnnMcqIcon}
                      videoIcon={VideoTimeStamp}
                      imageIcon={ImageTimeStamp}
                      iconColor="text-black/50"
                    />
                    <p className="text-xs leading-[18px] text-black">
                      {getTime(time)}
                    </p>
                  </div>
                );
              })}
            </CustomSlider>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecentJorneyCard;
