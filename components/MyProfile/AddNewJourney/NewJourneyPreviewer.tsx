import { FC, useState, useRef, useEffect } from "react";
import Image from "next/image";
import playButton from "../../assets/recentConfPlayButtton.png";
import AddThumbnail from "./AddThumbnail";

interface newJourneyPreviewerProps {
  file: File | null;
}

const NewJourneyPreviewer: FC<newJourneyPreviewerProps> = ({ file }) => {
  const [title, setTitle] = useState<string>("");
  const [imageFile, setImageFile] = useState<File | null>(null);

  console.log(file);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="flex items-start gap-x-10 w-full">
      <video
        className="hidden"
        src={URL.createObjectURL(file as Blob)}
        ref={videoRef}
      ></video>
      {/* Layout for adding title and thumbnail */}
      <div className="flex flex-col gap-y-5 items-start">
        {/* Title for new journey added */}
        <div className="flex flex-col items-start w-[840px] gap-y-[10px]">
          {/* Title label */}
          <h1 className="text-xl leading-[100%] text-black">
            Title of the Puzzle Journey
          </h1>
          {/* Title input */}
          <input
            type="text"
            className="p-[10px] w-full border-[1px] border-black/50 
            rounded-[5px] text-base leading-[100%] text-black/50"
            placeholder="Type the title of the puzzle journey video here..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>
        {/* Layout for adding thumnail to newly added journey */}
        <AddThumbnail setImageFile={setImageFile} videoRef={videoRef} />
      </div>
      {/* Layout for showing the uplaoded video info */}
      <div className="flex flex-col items-start rounded-[5px] w-[360px]">
        {/* Video with thumbnail */}
        <div
          className="flex justify-center items-center
           rounded-tr-[5px] 
      rounded-tl-[5px] bg-[#D9D9D9] w-full h-[220px]"
        >
          {/* Play button */}
          <div
            className="w-[60.36px] cursor-pointer h-[60px]
           bg-black rounded-[50%] flex justify-center items-center"
          >
            <Image
              src={playButton}
              alt="play-button"
              style={{ marginLeft: "6px" }}
            />
          </div>
        </div>
        {/* Video Details */}
        <div className="flex flex-col items-start p-5 gap-y-[10px]">
          {/* File name */}
          <p className="text-base text-black leading-[100%]">
            File Name: <span className="text-black/80">{file?.name}</span>
          </p>
          {/* File size */}
          <p className="text-base text-black leading-[100%]">
            File size: <span className="text-black/80">{file?.size}</span>
          </p>
          {/* Video duration */}
          <p className="text-base text-black leading-[100%]">
            Duration: <span className="text-black/80">00:16:25</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewJourneyPreviewer;
