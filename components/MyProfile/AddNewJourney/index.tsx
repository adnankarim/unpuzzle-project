import { FC, useState } from "react";
import Button from "../../Button";
import CustomVideoUploader from "./CustomVideoUploader";
import YoutubeVideoUploader from "./YoutubeVideoUploader";

const closeIcon = (
  <svg
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 0.5C3.54286 0.5 0 4.04286 0 8.5C0 12.9571 3.54286 16.5 8 16.5C12.4571 16.5 16 12.9571 16 8.5C16 4.04286 12.4571 0.5 8 0.5ZM8 15.3571C4.22857 15.3571 1.14286 12.2714 1.14286 8.5C1.14286 4.72857 4.22857 1.64286 8 1.64286C11.7714 1.64286 14.8571 4.72857 14.8571 8.5C14.8571 12.2714 11.7714 15.3571 8 15.3571Z"
      fill="black"
      fill-opacity="0.6"
    />
    <path
      d="M11.0857 12.5L8 9.41429L4.91429 12.5L4 11.5857L7.08571 8.5L4 5.41429L4.91429 4.5L8 7.58571L11.0857 4.5L12 5.41429L8.91429 8.5L12 11.5857L11.0857 12.5Z"
      fill="black"
      fill-opacity="0.6"
    />
  </svg>
);

const AddNewJourney: FC = () => {
  const [creatingJourney, setCreatingJourney] = useState<boolean>(false);
  const [journeyFileUplading, setJourneyFileUploading] =
    useState<boolean>(false);

  return (
    <div
      className="w-full mt-[150px] py-[45px] px-[50px] 
    border-[1px] border-[#1CABF2] rounded-[10px] relative"
    >
      {/* Button to add a new journey */}
      {!creatingJourney ? (
        <Button
          textColor="text-black/80"
          bgColor="bg-white"
          px="px-5"
          py="py-5"
          textSize="text-xl"
          rounded="rounded-[10px]"
          className="leading-[100%] border-[1px] border-[#000000]"
          onClick={() => {
            setCreatingJourney(true);
          }}
        >
          Create Puzzle Journey
        </Button>
      ) : (
        <>
          {" "}
          {/* Button for closing adding journey section */}
          <Button
            bgColor="bg-white"
            textColor="text-black/60"
            textSize="text-base"
            rounded="rounded-[40px]"
            className="flex gap-x-[5px] justify-center items-center 
          border-[1px] border-black/60 absolute top-[10px] right-[10px]"
            py="py-[3px]"
            px="px-[5px]"
            onClick={() => {
              setCreatingJourney(false);
              journeyFileUplading && setJourneyFileUploading(false);
            }}
          >
            {closeIcon}
            Close
          </Button>
          <div
            className="flex flex-col w-full justify-center items-center 
    gap-y-5 py-[5px]"
          >
            <YoutubeVideoUploader
              journeyFileUploading={journeyFileUplading}
              setJourneyFileUploading={setJourneyFileUploading}
            />
            <CustomVideoUploader
              journeyFileUploading={journeyFileUplading}
              setJourneyFileUploading={setJourneyFileUploading}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default AddNewJourney;
