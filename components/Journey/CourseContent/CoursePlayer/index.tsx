import { FC, useState, useEffect } from "react";
import ReactPlayer from "react-player";
import PlayIcon from "../../../assets/svg/PlayIcon";

interface coursePlayerProps {
  url: string;
  thumbnail: string;
}

const CoursePlayer: FC<coursePlayerProps> = ({ url, thumbnail }) => {
  let [hasWindow, setHasWindow] = useState(false);
  let [videoPlayed, setVideoPlayed] = useState(false);

  useEffect(() => {
    typeof window !== undefined && setHasWindow(true);
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${videoPlayed ? "" : thumbnail})`,
      }}
      className="flex justify-center items-center w-[66.6%] h-[500px]   cursor-pointer bg-cover bg-center bg-no-repeat"
    >
      {!videoPlayed && (
        <div onClick={() => setVideoPlayed(true)}>{PlayIcon}</div>
      )}
      {hasWindow && videoPlayed && (
        <ReactPlayer
          url={url}
          width="100%"
          height="100%"
          controls={true}
          playing={true}
          loop
          style={{ objectFit: "cover", padding: 0 }}
        />
      )}
    </div>
  );
};

export default CoursePlayer;
