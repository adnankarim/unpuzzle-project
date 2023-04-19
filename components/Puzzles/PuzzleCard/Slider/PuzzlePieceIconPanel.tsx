import {  FC } from "react";
import { PuzzlePieceIconPanel } from "@/components/Journey/journeyTypes";

const PuzzlePieceIconPanel: FC<PuzzlePieceIconPanel> = ({
  Icon,
  puzzlePieceType,
  type,
  isActive,
  isVisited,
}) => {
  return puzzlePieceType == type ? (
    <Icon color={isActive || isVisited ? "text-[rgba(0,0,0,0.5)]" : "text-[rgba(0,0,0,0.5)]"} />
  ) : null;
};

export default PuzzlePieceIconPanel;
