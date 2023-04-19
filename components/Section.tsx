import  { FC } from "react";
import { sectionProps } from "@/types/types";

const Section: FC<sectionProps> = ({ children, className }) => {
  return <div className={`max-w-[1280px] m-auto ${className}`}>{children}</div>;
};

export default Section;
