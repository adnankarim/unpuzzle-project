import { ReactNode } from "react";

export interface toggleSwitchProps {
  selected: boolean;
  setSelected: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface buttonProps extends React.DOMAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  px?: string;
  py?: string;
  rounded?: string;
  textColor: string;
  bgColor: string;
  textSize?: string;
}

export interface tabProps {
  tabName: string;
  activeTab: number;
  tabValue: number;
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
}

export interface tabPanelProps {
  activeTab: number;
  panelValue: number;
  children: ReactNode;
}

export interface sectionProps {
  children: ReactNode;
  className?: string;
}

export interface playerProps {
  url: string;
  showAnnotaion?: boolean;
  showPuzzlePieces?: boolean;
  play?: boolean; //for videoplayer
}
