import { FC } from "react";
import Image from "next/image";
import youtubeLogo from "@/components/assets/youtubeBigLogo.png";
import Button from "@/components/Button";
import Rating from "./Rating";
import Carousel from "@/components/Puzzles/PuzzleCard/Slider";

const PuzzleCard: FC = ({}) => {
  return (
    <figure className=" md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-[#FFF] border-[rgba(0,0,0,0.5)]">
      <img
        className="shadow rounded	m-4 w-30  h-30 md:w-[46%] md:h-auto "
        src="https://loremflickr.com/640/360"
      />
      <div className="pt-4 md:p-4 text-center max-w-full md:text-left space-y-4">
        <p className="text-lg font-medium truncate font-patua">
          How I Find Influencers That Make Me $14K A Week.
        </p>

        <figcaption>
          <div className="flex flex-row">
            <div className="text-[#36CC7B] font-bold	text-2xl	 ">$49.99</div>
            <div className="text-[#808080] font-normal	text-lg	 ml-4 line-through">
              $89.99
            </div>
          </div>
          <div className="mt-2">
            <Rating rating={4.5} reviews={4} />
          </div>
          <div className="flex flex-row mt-4">
          <Image src={youtubeLogo} width={70} height={20} alt="Youtube-Logo" />
          <div className="text-black	text-lg	font-bold ml-2">
          Puzzle Piece
            </div>
          </div>
          <div className="flex flex-row mt-4">
          <div className="text-black	text-lg	font-normal">
          Unpuzzler:
            </div>
          <div className="text-black	text-lg	font-bold ml-2">
          Mahtab Alam
            </div>
          </div>
          <div className="flex flex-row mt-4">
          <div className="text-black	text-lg	font-normal truncate">
          Last Update on july 07, 2021
            </div>
        
          </div>
          <div>

            <Carousel width={40} height={60} images={["33","#33","5555"]}/>
          </div>
          <div>
          <Button
          textColor="text-[#fff]"
          bgColor="bg-[#1CABF2]"
          px="px-[60px]"
          py="py-[10px]"
          rounded="rounded-[5px]"
          className="font-medium	"
          
        >
           Add to Cart
        </Button>
            </div>
        </figcaption>
      </div>
    </figure>
  );
};

export default PuzzleCard;
