import { FC } from "react";
import { puzzlePieceSvgProps } from "./svgTypes";

const VideoIcon: FC<puzzlePieceSvgProps> = ({ color }) => {
  return (
    <svg
      className={`fill-current ${color}`}
      width="15"
      height="10"
      viewBox="0 0 15 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.9734 1.5001C11.9734 0.727998 11.3455 0.100098 10.5734 0.100098H2.17344C1.40134 0.100098 0.773438 0.727998 0.773438 1.5001V8.5001C0.773438 9.2722 1.40134 9.9001 2.17344 9.9001H10.5734C11.3455 9.9001 11.9734 9.2722 11.9734 8.5001V6.167L14.7734 8.5001V1.5001L11.9734 3.8332V1.5001Z"
        fillOpacity="0.6"
      />
    </svg>
  );
};
export default VideoIcon;
