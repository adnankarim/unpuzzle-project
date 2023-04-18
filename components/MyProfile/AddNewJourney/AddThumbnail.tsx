import { FC, useState, useEffect } from "react";
import Dropzone from "@/components/Dropzone";
import { newJourneyDropIcon } from "@/components/assets/svg/newJourneyDropIcon";
import FrameImagePicker from "./FrameImagePicker";

interface addThumbnailProps {
  setImageFile: React.Dispatch<React.SetStateAction<File | null>>;
  videoRef: React.RefObject<HTMLVideoElement>;
}

const AddThumbnail: FC<addThumbnailProps> = ({ setImageFile, videoRef }) => {
  const [frameImages, setFrameImages] = useState<Array<string>>([]);
  console.log(frameImages);

  useEffect(() => {
    let video = videoRef.current;
    const canvas = document.createElement("canvas");
    canvas.width = 195;
    canvas.height = 120;
    const ctx = canvas.getContext("2d");
    const dataUrls: Array<string> = [];

    videoRef.current?.addEventListener("loadeddata", () => {
      console.log("inside loadmetadata");
      const duration = video?.duration;
      const fps = 30;
      const interval = 1000 / fps;
      let currentTime = 0;
      let captureInterval = setInterval(() => {
        if (video && ctx && duration) {
          // Draw the current video frame onto the canvas
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          // Extract the image data from the canvas and do something with it
          // const imageData = canvas.toDataURL("image/png");
          canvas.toBlob((blob) => {
            let imageData = URL.createObjectURL(blob as Blob);
            console.log(imageData);
            dataUrls.push(imageData);
          });
          // Advance to the next frame
          currentTime += 0.5;
          video.currentTime = currentTime;
          // Stop capturing frames when we reach the end of the video
          if (currentTime >= duration) {
            console.log("inside clear interval");
            clearInterval(captureInterval);
            setFrameImages(dataUrls);
          }
        }
      }, interval);
    });
    video?.pause();
  }, []);

  return (
    <div className="flex gap-x-5 w-full">
      {/* Dropzone for adding thumnail form pc */}
      <Dropzone
        setFile={setImageFile}
        validRegexString="image//*"
        label="Upload Thumbnail"
        labelColor="text-black/80"
        className="bg-[#D9D9D9]"
        width="w-[195px]"
        height="h-[119.75px]"
        borderStyle="border-solid"
      >
        {newJourneyDropIcon}
      </Dropzone>

      {/* Divider */}
      <div className="flex flex-col gap-y-[2px] items-center">
        <div className="border-l-[1px] border-black/50 flex-1"></div>
        <p className="text-sm leading-[100%] text-black/80">or</p>
        <div className="border-l-[1px] border-black/50 flex-1"></div>
      </div>

      {/* Thumnails selectors from video frames */}
      {frameImages.length > 0 &&
        frameImages.map((imgSrc, index) => {
          console.log(imgSrc);
          return <FrameImagePicker imgSrc={imgSrc} key={index} />;
        })}
    </div>
  );
};

export default AddThumbnail;
