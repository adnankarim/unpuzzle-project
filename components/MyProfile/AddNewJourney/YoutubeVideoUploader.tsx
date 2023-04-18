import { FC, useState, useEffect } from "react";
import Image from "next/image";
import youtubeLogo from "@/components/assets/youtubeBigLogo.png";

interface youtubeVideoUploaderProps {
  journeyFileUploading: boolean;
  setJourneyFileUploading: React.Dispatch<React.SetStateAction<boolean>>;
}

const YoutubeVideoUploader: FC<youtubeVideoUploaderProps> = ({
  journeyFileUploading,
  setJourneyFileUploading,
}) => {
  const [urlUploading, setUrlUploading] = useState<boolean>(false);
  const [videoUrl, setVideoUrl] = useState<string>("");

  //useeffect which will make the videoURL null when url uploading is cancelled
  useEffect(() => {
    if (!journeyFileUploading && videoUrl) videoUrl && setVideoUrl("");
  }, [journeyFileUploading]);

  return (
    <>
      {!journeyFileUploading && (
        <>
          {/* Layout for adding youtube journey */}
          <p className="text-[40px] leading-[100%] text-black/80 font-normal">
            Annotate a{" "}
            <Image
              src={youtubeLogo}
              width={96}
              height={40}
              alt="youtube-logo"
              quality={100}
              style={{ display: "inline-block" }}
            />{" "}
            Video
          </p>
          {/* Input for adding youtube url for creating youtube journey */}
          <input
            className="w-[800px] py-[15px] px-[10px] text-base
         text-black/60 text-center border-[1px] border-black/40 rounded-[5px]"
            placeholder="Paste youtube video link here and press enter"
            type="text"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
          ></input>
        </>
      )}
      {urlUploading && journeyFileUploading ? (
        <div className="">Youtube Url Uploading</div>
      ) : null}
    </>
  );
};

export default YoutubeVideoUploader;
