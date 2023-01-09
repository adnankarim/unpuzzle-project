import { FC, useState, createContext, ReactNode } from "react";
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

  return (
    <ContentContext.Provider
      value={{ currentPieceLoaded, setCurrentPieceLoaded }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export default ContentContextProvider;
