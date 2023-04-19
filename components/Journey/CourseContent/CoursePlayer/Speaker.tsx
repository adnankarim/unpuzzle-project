import { FC, useState, useEffect } from "react";
import Image from "next/image";
import highVol from "../../../assets/highVol.png";
import { speakerProps } from "../../journeyTypes";

const Speaker: FC<speakerProps> = ({
  videoRef,
  defaultVolume = 1,
  defaultMute = false,
}) => {
  let [hover, setHover] = useState<boolean>(false);
  let [volume, setVolume] = useState<number>(defaultVolume);
  let [mute, setMute] = useState<boolean>(defaultMute);

  let volumeChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    let element = videoRef.current;
    if (element) {
      console.log(event.target.value, parseFloat(event.target.value));
      setVolume(parseFloat(event.target.value));
    }
  };

  const muteChangeHandler: React.MouseEventHandler<HTMLImageElement> = (
    event
  ) => {
    setMute((mute) => !mute);
  };

  useEffect(() => {
    let element = videoRef.current;
    if (element) {
      element.volume = !mute ? volume : 0;
    }
  }, [volume, mute]);

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
          max={1}
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
