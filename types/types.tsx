import { ReactNode, ComponentType } from "react";

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
  disabled?: boolean;
}

export interface tabProps {
  tabName: React.ReactNode;
  activeTab: number;
  tabValue: number;
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
  Icon?: ComponentType<{ color: string }>;
  iconOnActiveColor?: string;
  iconOnUnactiveColor?: string;
  className?: string;
  px?: string;
  py?: string;
  textColor?: string;
  borderWidth?: string;
  borderColor?: string;
  borderRadius?: string;
  onActiveTextColor?: string;
  onActiveFontWeight?: string;
  onActiverBorderColor?: string;
  onHoverBorderColor?: string;
  onHoverTextColor?: string;
  buttonActiveBorderColor?: string;
  buttonActiveTextColor?: string;
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

export interface dissmissibleContentProps {
  content: string;
  className?: string;
  buttonLeftMargin?: string;
}
