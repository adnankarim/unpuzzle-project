import React, { FC } from "react";
import VideoPlayer from "./Journey/CourseContent/CoursePlayer/VideoPlayer";
import YoutubePlayer from "./Confusions/ConfusionPlayer/YoutubePlayer";
import { playerProps } from "../types/types";

const Player: FC<playerProps> = (props) => {
  let { url } = props;
  return url.includes("https://www.youtube.com/") ? (
    <YoutubePlayer {...props} />
  ) : (
    <VideoPlayer {...props} />
  );
};

export default Player;
