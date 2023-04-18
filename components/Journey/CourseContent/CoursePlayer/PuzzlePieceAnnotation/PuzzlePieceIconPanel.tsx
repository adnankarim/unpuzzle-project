import {  FC } from "react";
import { PuzzlePieceIconPanel } from "../../../journeyTypes";

const PuzzlePieceIconPanel: FC<PuzzlePieceIconPanel> = ({
  Icon,
  puzzlePieceType,
  type,
  isActive,
  isVisited,
}) => {
  return puzzlePieceType == type ? (
    <Icon color={isActive || isVisited ? "text-white" : "text-[#D9D9D9]"} />
  ) : null;
};

export default PuzzlePieceIconPanel;
