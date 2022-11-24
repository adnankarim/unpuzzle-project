import { FC } from "react";
import PuzzlePiece from "./PuzzlePiecesContent/PuzzlePiece";
import { confustionsData } from "../Data";

const ConfusionsContent: FC = () => {
  return (
    <>
      {confustionsData.map((confusion, index) => {
        return (
          <PuzzlePiece
            puzzlePieceColor="text-[#1CABF2]"
            title={confusion.title}
            time={confusion.time}
            contentType="confustions"
          >
            <>
              <p className="text-black/60 font-bold text-sm leading-[14px]">
                {confusion.solvedStatus}
              </p>
              <p className="text-black/60  text-sm leading-[14px]">
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
