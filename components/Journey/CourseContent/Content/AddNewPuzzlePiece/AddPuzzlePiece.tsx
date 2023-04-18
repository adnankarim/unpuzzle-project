import { FC } from "react";
import PuzzlePieceDuration from "./PuzzlePieceDuration";
import CategoriesContent from "./CategoriesContent";

const AddPuzzlePiece: FC = () => {
  return (
    <div
      className="flex flex-col p-[10px] gap-y-[10px] border-[1px]
     border-black/50 rounded-[5px]"
    >
      {/* Showing current duration for new puzzle piece being added & can edit duration as well */}
      <PuzzlePieceDuration />
      {/* Choosing categories for adding new puzzle to & then displaying content for adding piece */}
      <CategoriesContent />
    </div>
  );
};

export default AddPuzzlePiece;
