import { FC } from "react";
import Button from "@/components/Button";
import Rating from "./Rating";

const PuzzleCard: FC = ({}) => {
  return (
    <figure className=" md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-[#E5E5E5]">
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
          <div className="flex flex-row mt-2">
          <div className="text-[#36CC7B] font-bold	text-2xl	 ">$49.99</div>
            <div className="text-[#808080] font-normal	text-lg	 ml-4 line-through">
              $89.99
            </div>
          </div>
        </figcaption>
      </div>
    </figure>
  );
};

export default PuzzleCard;
