import { FC, useContext } from "react";
import PuzzlePiece from "./PuzzlePiecesContent/PuzzlePiece";
import { confusionsData } from "../Data";
import { ContentContext } from "../../journeyContexts/ContentContext";

const ConfusionsContent: FC = () => {
  let { currentPieceLoaded } = useContext(ContentContext);
  return (
    <>
      {confusionsData.map((confusion, index) => {
        return (
          <PuzzlePiece
            key={index}
            puzzlePieceColor="text-[#1CABF2]"
            title={confusion.title}
            time={confusion.time}
            contentType="confustions"
            id={confusion.id}
          >
            <>
              <p
                className={` text-sm font-bold leading-[14px]
                  ${
                    currentPieceLoaded == confusion.id
                      ? "text-white/60"
                      : "text-black/60"
                  }`}
              >
                {confusion.solvedStatus}
              </p>
              <p
                className={` text-sm  leading-[14px]
                  ${
                    currentPieceLoaded == confusion.id
                      ? "text-white/60"
                      : "text-black/60"
                  }`}
              >
                Posted on {confusion.date}
              </p>
            </>
          </PuzzlePiece>
        );
      })}
    </>
  );
};

export default ConfusionsContent;
