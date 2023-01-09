import { FC, useState, useEffect } from "react";
import Image from "next/image";
import highVol from "../../assets/highVol.png";
import { speakerProps } from "../ConfustionTypes";

const Speaker: FC<speakerProps> = ({ player, defaultVolume = 60 }) => {
  let [hover, setHover] = useState<boolean>(false);
  let [volume, setVolume] = useState<number>(defaultVolume);

  let volumeChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setVolume(parseFloat(event.target.value));
  };

  const muteChangeHandler: React.MouseEventHandler<HTMLImageElement> = (
    event
  ) => {
    console.log(player.isMuted);
    player.isMuted() ? player.unMute() : player.mute();
  };

  useEffect(() => {
    player.setVolume(volume);
  }, [volume]);

  return (
    <div
      className="flex gap-x-2 items-center"
      onMouseEnter={(event) => {
        setHover(true);
      }}
      onMouseLeave={(event) => {
        setHover(false);
      }}
    >
      <Image
        src={highVol.src}
        width={22.9}
        height={20}
        alt="higVol"
        onClick={muteChangeHandler}
      />
      {hover && (
        <input
          type="range"
          value={volume}
          min={0}
          max={100}
          step="any"
          className=" transition-all delay-100 ease-linear appearance-none h-2 w-[115px] hover:bg-[#F9993A] bg-[#F9993A]/70
           cursor-pointer rounded-lg text-black"
          onChange={volumeChangeHandler}
        />
      )}
    </div>
  );
};

export default Speaker;
