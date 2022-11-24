import { FC } from "react";
import PuzzlePiece from "./PuzzlePiece";
import videoIcon from "../../../../assets/svg/videoIcon";
import imageIcon from "../../../../assets/svg/imageIcon";
import { puzzlePiecesData } from "../../Data";

const PuzzlePiecesContent: FC = () => {
  return (
    <>
      {puzzlePiecesData.map((puzzlePiece, index) => {
        return (
          <PuzzlePiece
            title={puzzlePiece.title}
            time={puzzlePiece.time}
            contentType="puzzle piece"
          >
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
          </PuzzlePiece>
        );
      })}
    </>
  );
};

export default PuzzlePiecesContent;
