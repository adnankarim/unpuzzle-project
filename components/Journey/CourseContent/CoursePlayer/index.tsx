import { FC, useState } from "react";
import Player from "../../../Player";
import PlayIcon from "../../../assets/svg/PlayIcon";
import { coursePlayerProps } from "../../journeyTypes";

const CoursePlayer: FC<coursePlayerProps> = ({ url, thumbnail }) => {
  let [videoPlayed, setVideoPlayed] = useState(false);

  return (
    <div
      style={{
        backgroundImage: `url(${videoPlayed ? "" : thumbnail})`,
      }}
      className="flex justify-center items-center w-[66.6%] height-[500px] cursor-pointer bg-cover bg-center bg-no-repeat"
    >
      {!videoPlayed && (
        <div onClick={() => setVideoPlayed(true)}>{PlayIcon}</div>
      )}
      {videoPlayed && <Player url={url} play={true} />}
    </div>
  );
};

export default CoursePlayer;
