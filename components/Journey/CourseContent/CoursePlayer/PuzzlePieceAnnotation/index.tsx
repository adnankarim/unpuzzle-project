import { FC, useState, useContext } from "react";
import PuzzleTimeStampSlider from "./PuzzleTimeStampSlider";
import PuzzlePiecePreview from "./PuzzlePiecePreview";
import Tab from "../../../../Tab";
import TabPanel from "../../../../TabPanel";
import { puzzlePiecesData, allTabData, confusionsData } from "../../Data";
import { ContentContext } from "../../../journeyContexts/ContentContextProvider";

const PuzzlePieceAnnotation: FC = () => {
  const [currentTab, setCurrentTab] = useState(1);

  const { currentTime } = useContext(ContentContext);
  // console.log(currentTime);
  return (
    <div className="w-full bg-[#F5F5F5] p-5 rounded-[10px]">
      <div className="flex flex-col items-start gap-y-[10px]">
        <div className="flex justify-start items-center gap-x-[40px]">
          <Tab
            tabName="All"
            tabValue={1}
            activeTab={currentTab}
            setActiveTab={setCurrentTab}
          />
          <Tab
            tabName="Puzzle Pieces"
            tabValue={2}
            activeTab={currentTab}
            setActiveTab={setCurrentTab}
          />
          <Tab
            tabName="Confusions"
            tabValue={3}
            activeTab={currentTab}
            setActiveTab={setCurrentTab}
          />
        </div>
        <div className="w-full flex gap-x-[40px]  lg:flex-nowrap">
          <div>
            <TabPanel activeTab={currentTab} panelValue={1}>
              <PuzzleTimeStampSlider data={allTabData} />
            </TabPanel>
            <TabPanel activeTab={currentTab} panelValue={2}>
              <PuzzleTimeStampSlider data={puzzlePiecesData} />
            </TabPanel>
            <TabPanel activeTab={currentTab} panelValue={3}>
              <PuzzleTimeStampSlider data={confusionsData} />
            </TabPanel>
          </div>
          <PuzzlePiecePreview />
        </div>
      </div>
    </div>
  );
};

export default PuzzlePieceAnnotation;
