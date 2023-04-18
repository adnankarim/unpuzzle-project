import { ReactNode } from "react";

export interface youtubePlayerProps {
  url: string;
  showAnnotaion?: boolean;
  showPuzzlePieces?: boolean;
}

export interface speakerProps {
  player: any;
  defaultVolume?: number;
}

export interface answerProps {
  type?: "answer" | "question";
  name: string;
  role: string;
  timePeriod: string;
  upVotes: number;
  downVotes: number;
  description: string;
}

export interface ReactionButtonProps {
  icon: ReactNode;
  number: number;
}
