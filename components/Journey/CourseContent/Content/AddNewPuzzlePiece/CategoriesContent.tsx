import  { useState, FC } from "react";
import Tab from "../../../../Tab";
import TabPanel from "../../../../TabPanel";
import PuzzlePieceSvg from "../../../../assets/svg/PuzzlePieceSvg";
import AddConfusionContent from "./AddConfusionContent";
import VideoAnnotationContent from "./VideoAnnotationContent";
import AudioAnnotationContent from "./AudioAnnotationContent";
import ImageAnnotationContent from "./ImageAnnotationContent";
import GuideAnnotationContent from "./GuideAnnotationContent";
import TabVideoIcon from "../../../../assets/svg/TabVideoIcon";
import TabAudioIcon from "../../../../assets/svg/TabAudioIcon";
import TabImageIcon from "../../../../assets/svg/TabImageIcon";
import TabGuideIcon from "../../../../assets/svg/TabGuideIcon";

const CategoriesContent: FC = () => {
  const [currentTab, setCurrentTab] = useState<number>(0);
  const [annotationCurrentTab, setAnnotationCurrentTab] = useState(0);
  return (
    <>
      <div className="flex flex-col gap-y-[10px] p-[10px] items-start bg-[#F9F9F9]">
        {/* Text for choosing */}
        <p className="text-base font-normal text-black/60 leading-[100%]">
          Choose one:
        </p>
        {/* Tabs to choose category */}
        <div className="flex items-center gap-x-[30px]">
          <Tab
            activeTab={currentTab}
            tabValue={1}
            setActiveTab={setCurrentTab}
            tabName="Confusion"
            Icon={PuzzlePieceSvg}
            iconOnActiveColor="text-[#1CABF2]"
            iconOnUnactiveColor="text-black/50"
            className="flex gap-x-[10px] items-center"
            onActiveTextColor="text-black"
            onActiveFontWeight="font-normal"
          />
          <Tab
            activeTab={currentTab}
            tabValue={2}
            setActiveTab={setCurrentTab}
            tabName="Annotations"
            Icon={PuzzlePieceSvg}
            iconOnActiveColor="text-[#F9993A]"
            iconOnUnactiveColor="text-black/50"
            className="flex gap-x-[10px] items-center"
            onActiveTextColor="text-black"
            onActiveFontWeight="font-normal"
          />
        </div>
        {/* Tab Panel for Confusion*/}
        <TabPanel activeTab={currentTab} panelValue={1}>
          <AddConfusionContent />
        </TabPanel>
        {/* Tab Panel for Annotations */}
        <TabPanel activeTab={currentTab} panelValue={2}>
          <div className="flex flex-col gap-y-[10px] w-full px-[10px]">
            {/* Text for Selecting type of annotation to add  */}
            <p className="text-black/60 text-base leading-[100%] font-normal bg-[#F9F9F9]">
              Select the type of annotations:
            </p>
            {/* Tabs for adding different types of annotations */}
            <div className="flex flex-wrap gap-y-2 items-center justify-between w-full bg-[#F9F9F9]">
              {/* Video Tab */}
              <Tab
                activeTab={annotationCurrentTab}
                setActiveTab={setAnnotationCurrentTab}
                tabName="Video PP"
                tabValue={1}
                className="flex w-fit gap-x-[10px] items-center"
                borderWidth="border-[0.5px]"
                borderRadius="rounded-[5px]"
                borderColor="border-black/50"
                px="px-[15px]"
                Icon={TabVideoIcon}
                iconOnActiveColor="text-[#1CABF2]"
                iconOnUnactiveColor="text-black/60"
              ></Tab>
              {/* Audio Tab */}
              <Tab
                activeTab={annotationCurrentTab}
                setActiveTab={setAnnotationCurrentTab}
                tabName="Audio PP"
                tabValue={2}
                className="flex gap-x-[10px] items-center"
                borderWidth="border-[0.5px]"
                borderRadius="rounded-[5px]"
                borderColor="border-black/50"
                px="px-[15px]"
                Icon={TabAudioIcon}
                iconOnActiveColor="text-[#1CABF2]"
                iconOnUnactiveColor="text-black/60"
              ></Tab>
              {/* Image Tab */}
              <Tab
                activeTab={annotationCurrentTab}
                setActiveTab={setAnnotationCurrentTab}
                tabName="Image PP"
                tabValue={3}
                className="flex gap-x-[10px] items-center"
                borderWidth="border-[0.5px]"
                borderRadius="rounded-[5px]"
                borderColor="border-black/50"
                px="px-[15px]"
                Icon={TabImageIcon}
                iconOnActiveColor="text-[#1CABF2]"
                iconOnUnactiveColor="text-black/60"
              ></Tab>
              {/* Guide Tab */}
              <Tab
                activeTab={annotationCurrentTab}
                setActiveTab={setAnnotationCurrentTab}
                tabName="Guide PP"
                tabValue={4}
                className="flex gap-x-[10px] items-center"
                borderWidth="border-[0.5px]"
                borderRadius="rounded-[5px]"
                borderColor="border-black/50"
                px="px-[15px]"
                Icon={TabGuideIcon}
                iconOnActiveColor="text-[#1CABF2]"
                iconOnUnactiveColor="text-black/60"
              ></Tab>
            </div>
          </div>
        </TabPanel>
      </div>
      {/* Tab Panels for showing content for adding new annotations on clicking annotation tabs */}
      <TabPanel activeTab={currentTab} panelValue={2}>
        {/* Video Tab Panel */}
        <TabPanel activeTab={annotationCurrentTab} panelValue={1}>
          <VideoAnnotationContent />
        </TabPanel>
        {/* Audio Tab Panel */}
        <TabPanel activeTab={annotationCurrentTab} panelValue={2}>
          <AudioAnnotationContent />
        </TabPanel>
        {/* Image Tab Panel */}
        <TabPanel activeTab={annotationCurrentTab} panelValue={3}>
          <ImageAnnotationContent />
        </TabPanel>
        {/* Guide Tab Panel */}
        <TabPanel activeTab={annotationCurrentTab} panelValue={4}>
          <GuideAnnotationContent />
        </TabPanel>
      </TabPanel>
    </>
  );
};

export default CategoriesContent;
