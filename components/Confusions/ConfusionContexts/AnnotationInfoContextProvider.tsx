import  { FC, createContext, ReactNode } from "react";

export const AnnotationInfoContext = createContext<AnnotationInfoContextProps>(
  {} as AnnotationInfoContextProps
);

interface AnnotationInfoContextProps {
  puzzlePiece: any;
  videoUrl: string;
}

interface AnnotationInfoContextProviderProps
  extends AnnotationInfoContextProps {
  children: ReactNode;
}

const AnnotationInfoContextProvider: FC<AnnotationInfoContextProviderProps> = ({
  puzzlePiece,
  children,
  videoUrl,
}) => {
  return (
    <AnnotationInfoContext.Provider value={{ puzzlePiece, videoUrl }}>
      {children}
    </AnnotationInfoContext.Provider>
  );
};

export default AnnotationInfoContextProvider;
