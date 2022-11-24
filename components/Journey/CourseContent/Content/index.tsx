import { FC } from "react";
import ContentTabs from "./ContentTabs";

const Content: FC = () => {
  return (
    <div className="flex flex-col p-5 gap-y-5 w-[33.6%] h-[500px]">
      <p className="text-black text-2xl font-bold">Puzzle Content</p>
      <ContentTabs />
    </div>
  );
};

export default Content;
