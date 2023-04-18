import { FC } from "react";
import PlayerInfo from "./PlayerInfo";
import Player from "../../Player";

const PlayerDetails: FC = () => {
  return (
    <div className="flex flex-col w-full gap-y-5">
      <Player url="https://www.youtube.com/watch?v=LSxrHHR1ApM" />
      {/* Video & Uploader Info */}
      <PlayerInfo />
    </div>
  );
};

export default PlayerDetails;
