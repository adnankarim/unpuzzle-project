import { FC } from "react";
import { tabPanelProps } from "../types/types";

const TabPanel: FC<tabPanelProps> = ({ activeTab, panelValue, children }) => {
  return <>{activeTab == panelValue && children}</>;
};

export default TabPanel;
