import { FC, useContext } from "react";
import { allTabData } from "../Data";
import PuzzlePiece from "./PuzzlePiecesContent/PuzzlePiece";
import VideoIcon from "../../../assets/svg/VideoIcon";
import ImageIcon from "../../../assets/svg/ImageIcon";
import { ContentContext } from "../../journeyContexts/ContentContext";

const AllContent: FC = () => {
  let { currentPieceLoaded } = useContext(ContentContext);

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
            id={puzzlePiece.id}
          >
            {puzzlePiece.contentType == "puzzle piece" ? (
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
            ) : (
              <>
                <p
                  className={` text-sm font-bold leading-[14px]
                  ${
                    currentPieceLoaded == puzzlePiece.id
                      ? "text-white/60"
                      : "text-black/60"
                  }`}
                >
                  {puzzlePiece.solvedStatus}
                </p>
                <p
                  className={` text-sm  leading-[14px]
                  ${
                    currentPieceLoaded == puzzlePiece.id
                      ? "text-white/60"
                      : "text-black/60"
                  }`}
                >
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
