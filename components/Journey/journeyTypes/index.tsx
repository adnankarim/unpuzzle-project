import { ComponentType, ReactNode } from "react";
import Slider from "react-slick";

export interface tabDataProps {
  tabName: string;
  tabValue: number;
}

export interface puzzlePieceProps {
  id: number;
  puzzlePieceColor?: string;
  title: string;
  time: number;
  children: ReactNode;
  contentType: string;
}

export interface puzzlePiecesDataProps
  extends Omit<puzzlePieceProps, "children" | "puzzlePieceColor"> {
  puzzlePieceType: string;
}

export interface confusionsDataProps
  extends Omit<puzzlePieceProps, "children" | "puzzlePieceColor"> {
  solvedStatus: string;
  date: string;
}

// export type allDataProps = puzzlePiecesDataProps | confusionsDataProps;

export interface ContentContextProviderProps {
  children: ReactNode;
}

export interface ContentContextProps {
  currentPieceLoaded: number | null;
  setCurrentPieceLoaded: React.Dispatch<React.SetStateAction<number | null>>;
}

export interface coursePlayerProps {
  url: string;
  thumbnail: string;
}

export interface settingsProps {
  videoRef: React.RefObject<HTMLVideoElement>;
  playBackRate?: number;
}

export interface settingItemProps extends React.DOMAttributes<HTMLElement> {
  itemName: string;
  playBackRate: number;
  currentPlayRate: number;
}

export interface speakerProps {
  videoRef: React.RefObject<HTMLVideoElement>;
  defaultVolume?: number;
  defaultMute?: boolean;
}

export interface videoPlayerProps {
  url: string;
  play?: boolean;
  showAnnotaion?: boolean;
  showPuzzlePieces?: boolean;
}

export interface puzzlePieceAnnotationProps {
  currentTime: number;
}

export interface puzzleTimeStampSliderProps
  extends puzzlePieceAnnotationProps {}

export interface PuzzleTimeStampProps extends puzzlePieceAnnotationProps {
  puzzlePieceType: string;
  time: number;
  slider: React.RefObject<Slider>;
  index: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number | null>>;
  currentIndex: number | null;
}

export interface PuzzlePieceIconPanel {
  Icon: ComponentType<{ color?: string }>;
  puzzlePieceType: string;
  type: string;
  isActive: boolean;
  isVisited: boolean;
}

export interface puzzlePiecePreviewProps {
  index: number | null;
}
