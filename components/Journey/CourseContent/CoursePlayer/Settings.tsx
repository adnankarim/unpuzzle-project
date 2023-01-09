import { FC, useState, useRef, useEffect } from "react";
import Image from "next/image";
import settings from "../../../assets/settings.png";
import SettingItem from "./SettingItem";
import { settingsProps } from "../../journeyTypes";

const settingItemsData = [
  { itemName: "2x", playBackRate: 2 },
  { itemName: "1.5x", playBackRate: 1.5 },
  { itemName: "Normal", playBackRate: 1 },
  { itemName: "0.75x", playBackRate: 0.75 },
  { itemName: "0.5x", playBackRate: 0.5 },
];

const Settings: FC<settingsProps> = ({ videoRef, playBackRate = 1 }) => {
  let [settingsOpen, setSettingsOpen] = useState<boolean>(false);
  let [currentPlayRate, setCurrentPlayRate] = useState<number>(playBackRate);
  // let settingContainerRef = useRef<HTMLDivElement>(null);

  let element = videoRef?.current;

  // useEffect(() => {
  //   let container = settingContainerRef?.current;
  //   console.log(container);
  //   console.log("insise setting useeffect");
  //   let focusOutHandler = (e: Event) => {
  //     console.log("inside focusout event handler");
  //     setSettingsOpen(false);
  //   };
  //   container?.addEventListener("onblur", focusOutHandler);
  //   }, []);

  useEffect(() => {
    if (element) {
      element.playbackRate = currentPlayRate;
      settingsOpen && setSettingsOpen(false);
    }
  }, [currentPlayRate]);

  return (
    <div className="relative">
      {settingsOpen && (
        <div className="flex-col w-[150px]  bg-[#1CABF2]/80 absolute -left-10 -top-[210px] rounded-md">
          {settingItemsData.map((item, index) => {
            return (
              <SettingItem
                key={index}
                {...item}
                currentPlayRate={currentPlayRate}
                onClick={() => {
                  setCurrentPlayRate(item.playBackRate);
                }}
              />
            );
          })}
        </div>
      )}
      <div
        onClick={() => {
          setSettingsOpen((open) => !open);
        }}
      >
        <Image src={settings.src} width={19.4} height={20} alt="settings" />
      </div>
    </div>
  );
};

export default Settings;
