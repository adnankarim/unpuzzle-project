import { FC } from "react";
import { puzzlePieceSvgProps } from "./svgTypes";

const VideoTimeStamp: FC<puzzlePieceSvgProps> = ({ color }) => {
  return (
    <svg
      className={`fill-current ${color}`}
      width="37"
      height="26"
      viewBox="0 0 37 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M29.1735 4.07143C29.1735 2.10179 27.5778 0.5 25.6158 0.5H4.26961C2.30754 0.5 0.711914 2.10179 0.711914 4.07143V21.9286C0.711914 23.8982 2.30754 25.5 4.26961 25.5H25.6158C27.5778 25.5 29.1735 23.8982 29.1735 21.9286V15.9768L36.2888 21.9286V4.07143L29.1735 10.0232V4.07143Z" />
    </svg>
  );
};

export default VideoTimeStamp;
