import { ReactNode } from "react";
import { puzzlePiecesDataProps } from "@/components/Journey/journeyTypes";
import { confusionsDataProps } from "@/components/Journey/journeyTypes";

export interface journeyDataProps {
  title: string;
  icon: ReactNode;
  dataAmount: number;
}

export interface journeyProps {
  id: number;
  thumbnail: string;
  title: string;
  type: "youtube" | "custom";
  annotations?: Array<puzzlePiecesDataProps>;
  confusions?: Array<confusionsDataProps>;
}

//it will be extended by other components present inside creating journey component
export interface journeyFileUploadingProps {
  journeyFileUploading: boolean;
  setJourneyFileUploading: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface customVideoUploaderProps extends journeyFileUploadingProps {}
export interface youtubeVideoUploaderProps extends journeyFileUploadingProps {}

export interface customVideoProgesserProps {
  progress: number;
  timeout: number;
  onCancel: React.MouseEventHandler<HTMLButtonElement>;
  onPreview: React.MouseEventHandler<HTMLButtonElement>;
}
