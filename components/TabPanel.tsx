import React, { FC, useRef, useEffect } from "react";
import { tabPanelProps } from "../types/types";

const TabPanel: FC<tabPanelProps> = ({ activeTab, panelValue, children }) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const isActive = activeTab == panelValue;
  useEffect(() => {
    let panel = panelRef.current;
    if (panel && isActive) {
      panel.scrollIntoView({
        block: "start",
        inline: "end",
        behavior: "smooth",
      });
    }
  }, [activeTab]);

  return (
    <div ref={panelRef} className="scroll-m-3">
      <div className={`${!isActive && "hidden"}`}>{children}</div>
    </div>
  );
};

export default TabPanel;
