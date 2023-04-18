import { FC, useState, createContext } from "react";
import {
  ContentContextProps,
  ContentContextProviderProps,
} from "../journeyTypes";

export let ContentContext = createContext({} as ContentContextProps);

const ContentContextProvider: FC<ContentContextProviderProps> = ({
  children,
}) => {
  let [currentPieceLoaded, setCurrentPieceLoaded] = useState<number | null>(
    null
  );
  let [currentTime, setCurrentTime] = useState<number>(0);

  return (
    <ContentContext.Provider
      value={{
        currentPieceLoaded,
        setCurrentPieceLoaded,
        currentTime,
        setCurrentTime,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export default ContentContextProvider;
