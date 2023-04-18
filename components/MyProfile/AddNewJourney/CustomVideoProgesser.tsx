import { FC } from "react";
import Button from "@/components/Button";
import ProgressBar from "react-customizable-progressbar";
import { getOnlyTime } from "@/components/helperFunctions";
import { customVideoProgesserProps } from "../MyProfileTypes";

const CustomVideoProgesser: FC<customVideoProgesserProps> = ({
  progress,
  onCancel,
  timeout,
  onPreview,
}) => {
  //Function that will give back the remaining time on basis of current progress of uploader
  const getRemainingTime = (progress: number) => {
    return getOnlyTime(
      Math.abs((progress * (timeout / 1000)) / 100 - timeout / 1000)
    );
  };

  return (
    <>
      {/* Progress bar representing current uplaod progress of custom video */}
      <ProgressBar
        progress={progress}
        radius={65}
        steps={100}
        strokeColor="#1CABF2"
        strokeWidth={5}
        trackStrokeWidth={5}
        trackStrokeColor="rgb(0 0 0 / 0.25)"
        className="rcb"
      >
        <div className="flex justify-center items-center top-0 w-full h-full absolute">
          <p className=" text-2xl text-black/80 font-bold leading-[36px]">
            {progress}%
          </p>
        </div>
      </ProgressBar>
      {/* Showing time reamaining for uploading on basis of timout and current progress */}
      <p className="text-sm leading-[21px] text-black/50">
        {`${getRemainingTime(progress)} remaining`}
      </p>
      {/* Info text regarding uploading  */}
      <p className="text-black/80 text-base leading-[24px]">
        {progress == 100 ? "Video uploaded" : "Uploading your video..."}
      </p>
      {/* Buttons for viewing journey & cancelling uploading */}
      {progress == 100 ? (
        <Button
          textColor="text-black/80"
          bgColor="bg-white"
          px="px-[30px]"
          py="py-[10px]"
          rounded="rounded-[5px]"
          className="border-[1px] border-black font-bold"
          onClick={onPreview}
        >
          View Journey
        </Button>
      ) : (
        <Button
          textColor="text-black/80"
          bgColor="bg-white"
          px="px-[30px]"
          py="py-[10px]"
          rounded="rounded-[5px]"
          className="border-[1px] border-black font-bold"
          onClick={onCancel}
        >
          Cancel
        </Button>
      )}
    </>
  );
};

export default CustomVideoProgesser;
