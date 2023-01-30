import { FC, useState } from "react";
import Tab from "../../../Tab";
import TabPanel from "../../../TabPanel";
import PuzzlePiecesContent from "./PuzzlePiecesContent";
import ConfusionsContent from "./ConfusionsContent";
import AllContent from "./AllContent";
import AddNewPuzzlePiece from "./AddNewPuzzlePiece";
import { tabsData } from "../Data";

const ContentTabs: FC = () => {
  let [activeTab, setActiveTab] = useState<number>(1);
  return (
    <div
      className="flex flex-col gap-y-5
     p-[10px] border-[0.5px] border-black/50 rounded-[10px] w-full h-full"
    >
      <div className="flex justify-start items-center gap-x-[40px] border-b-[1px] border-b-black/20">
        {tabsData.map((tabData, index) => {
          return (
            <Tab
              {...tabData}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              key={index}
            />
          );
        })}
      </div>
      <div className="flex justify-start gap-y-[18px] overflow-auto scroll-smooth snap-start">
        <TabPanel panelValue={1} activeTab={activeTab}>
          <AllContent />
        </TabPanel>
        <TabPanel panelValue={2} activeTab={activeTab}>
          {/* <PuzzlePiecesContent /> */}
          <AddNewPuzzlePiece />
        </TabPanel>
        <TabPanel panelValue={3} activeTab={activeTab}>
          <ConfusionsContent />
        </TabPanel>
      </div>
    </div>
  );
};

export default ContentTabs;
