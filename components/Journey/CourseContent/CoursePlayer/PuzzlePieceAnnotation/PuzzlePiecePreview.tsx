import { FC } from "react";
import Image from "next/image";
import { puzzlePiecesData } from "../../Data";
import currentPlayIcon from "../../../../assets/currentPlayIcon.png";
import { puzzlePiecePreviewProps } from "../../../journeyTypes";

let getTime = (d: number) => {
  let h: number = Math.floor(d / 3600);
  let m: number = Math.floor((d % 3600) / 60);
  let s: number = Math.floor((d % 3600) % 60);
  // console.log(h, m, s);
  let hDisplay: string = h > 0 ? h + ":" : "";
  let mDisplay: string = m > 0 ? m + ":" : "00:";
  let sDisplay: string = s > 0 ? (s < 10 ? "0" + s : s + "") : "00";
  return hDisplay + mDisplay + sDisplay;
};

let newpuzzlePiecesData = [...puzzlePiecesData, ...puzzlePiecesData];

const PuzzlePiecePreview: FC<puzzlePiecePreviewProps> = ({ index }) => {
  console.log(index);
  let currentPuzzlePiece = index
    ? newpuzzlePiecesData.sort((a, b) => {
        return Math.floor(a.time) - Math.floor(b.time);
      })[index]
    : null;

  return (
    <div className="w-[511px] flex justify-center gap-x-[10px]">
      {index ? (
        <>
          <div className="flex flex-col items-start gap-y-[5px] w-[350px]">
            <p className="text-[16px] text-black/50">{`Unpuzzle ${getTime(
              currentPuzzlePiece?.time as number
            )}`}</p>
            <p className="text-black/80 text-[16px] leading-[19.2px] ">
              {currentPuzzlePiece?.title as string}
            </p>
          </div>
          <div
            className="w-[151px] h-[91px] flex justify-center items-center 
      bg-[#C4C4C4] 
      rounded-[5px]"
          >
            <Image
              src={currentPlayIcon.src}
              width={45}
              height={45}
              alt="Play Icon"
            />
          </div>
        </>
      ) : (
        "Please Select Puzzle Piece"
      )}
    </div>
  );
};

export default PuzzlePiecePreview;
