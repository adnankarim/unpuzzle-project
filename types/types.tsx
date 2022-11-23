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
