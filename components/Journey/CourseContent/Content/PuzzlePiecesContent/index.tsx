import { FC, useContext } from "react";
import PuzzlePiece from "./PuzzlePiece";
import VideoIcon from "../../../../assets/svg/VideoIcon";
import ImageIcon from "../../../../assets/svg/ImageIcon";
import { puzzlePiecesData } from "../../Data";
import { ContentContext } from "../../../journeyContexts/ContentContextProvider";

const PuzzlePiecesContent: FC = () => {
  let { currentPieceLoaded } = useContext(ContentContext);

  return (
    <>
      {puzzlePiecesData.map((puzzlePiece, index) => {
        return (
          <PuzzlePiece
            key={index}
            title={puzzlePiece.title}
            time={puzzlePiece.time}
            contentType="puzzle piece"
            id={puzzlePiece.id}
          >
            <div className="flex gap-x-[5px] justify-center items-center">
              {puzzlePiece.puzzlePieceType == "video" ? (
                <>
                  <VideoIcon
                    color={`${
                      currentPieceLoaded == puzzlePiece.id
                        ? "text-white"
                        : "text-black"
                    }`}
                  />
                  <p
                    className={` text-sm leading-[14px]
                  ${
                    currentPieceLoaded == puzzlePiece.id
                      ? "text-white/60"
                      : "text-black/60"
                  }`}
                  >
                    Video Puzzle Piece
                  </p>
                </>
              ) : (
                <>
                  <ImageIcon
                    color={`${
                      currentPieceLoaded == puzzlePiece.id
                        ? "text-white"
                        : "text-black"
                    }`}
                  />
                  <p
                    className={` text-sm leading-[14px]
                  ${
                    currentPieceLoaded == puzzlePiece.id
                      ? "text-white/60"
                      : "text-black/60"
                  }`}
                  >
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
