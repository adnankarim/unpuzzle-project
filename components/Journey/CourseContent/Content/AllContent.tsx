import { FC } from "react";
import { allTabData } from "../Data";
import PuzzlePiece from "./PuzzlePiecesContent/PuzzlePiece";
import videoIcon from "../../../assets/svg/videoIcon";
import imageIcon from "../../../assets/svg/imageIcon";

const AllContent: FC = () => {
  return (
    <>
      {allTabData.map((puzzlePiece, index) => {
        return (
          <PuzzlePiece
            key={index}
            puzzlePieceColor={`${
              puzzlePiece.contentType == "puzzle piece"
                ? "text-[#F9993A]"
                : "text-[#1CABF2]"
            }`}
            title={puzzlePiece.title}
            time={puzzlePiece.time}
            contentType={puzzlePiece.contentType}
          >
            {puzzlePiece.contentType == "puzzle piece" ? (
              <div className="flex gap-x-[5px] justify-center items-center">
                {puzzlePiece.puzzlePieceType == "video" ? (
                  <>
                    {videoIcon}
                    <p className="text-black/60 text-sm leading-[14px]">
                      Video Puzzle Piece
                    </p>
                  </>
                ) : (
                  <>
                    {imageIcon}
                    <p className="text-black/60 text-sm leading-[14px]">
                      Image Puzzle Piece
                    </p>
                  </>
                )}
              </div>
            ) : (
              <>
                <p className="text-black/60 font-bold text-sm leading-[14px]">
                  {puzzlePiece.solvedStatus}
                </p>
                <p className="text-black/60  text-sm leading-[14px]">
                  Posted on {puzzlePiece.date}
                </p>
              </>
            )}
          </PuzzlePiece>
        );
      })}
    </>
  );
};

export default AllContent;
