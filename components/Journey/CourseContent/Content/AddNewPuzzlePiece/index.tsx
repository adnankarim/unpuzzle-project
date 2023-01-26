import React, { FC } from "react";
import DissmissibleContent from "../../../../DissmissibleContent";
import AddPuzzlePiece from "./AddPuzzlePiece";

const AddNewPuzzlePiece: FC = () => {
  return (
    <div className="flex flex-col gap-y-5">
      {/* Dissmissible text for adding new puzzle piece */}
      <DissmissibleContent content="Create your own puzzle journey and earn from it! Start adding annotations now." />
      {/* Content for adding new puzzle piece */}
      <AddPuzzlePiece />
    </div>
  );
};

export default AddNewPuzzlePiece;
