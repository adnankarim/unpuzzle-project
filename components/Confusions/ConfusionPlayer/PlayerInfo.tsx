import React, { FC } from "react";
import Image from "next/image";
import youtubeLogo from "../../assets/youtube-logo.png";
import iInfo from "../../assets/i-info.png";
import starRating from "../../assets/star-rating.png";

const PlayerInfo: FC = () => {
  let ratings: React.ReactNode[] = [];
  for (let i = 0; i < 5; i++) {
    ratings.push(
      <Image src={starRating} width={21} height={20} alt="Ratings" key={i} />
    );
  }

  return (
    <div className="flex flex-col gap-y-[10px]">
      <div className="flex gap-x-10  items-center">
        <Image src={youtubeLogo} width={48} height={20} alt="Youtube-Logo" />
        <Image src={iInfo} width={20} height={20} alt="Info" />
        <div className="flex gap-x-[5px] items-center justify-center">
          <p className="text-base font-semibold text-[#F9993A]">4.6</p>
          {ratings}
          <p className="text-sm text-black/50 font-normal">(135)</p>
        </div>
      </div>
      <p className="text-xl text-black/80 leading-[30px]">
        Unpuzzled by: <span className="font-bold">Mahtab Alam</span>
      </p>
    </div>
  );
};

export default PlayerInfo;
