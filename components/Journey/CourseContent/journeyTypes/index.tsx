import { ReactNode } from "react";

export interface tabDataProps {
  tabName: string;
  tabValue: number;
}

export interface puzzlePieceProps {
  puzzlePieceColor?: string;
  title: string;
  time: string;
  children: ReactNode;
  contentType: string;
}

export interface puzzlePiecesDataProps
  extends Omit<
    puzzlePieceProps,
    "children" | "contentType" | "puzzlePieceColor"
  > {
  puzzlePieceType: string;
}

export interface confusionsDataProps
  extends Omit<
    puzzlePieceProps,
    "children" | "contentType" | "puzzlePieceColor"
  > {
  solvedStatus: string;
  date: string;
}

