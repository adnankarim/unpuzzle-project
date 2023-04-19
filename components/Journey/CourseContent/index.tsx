import { FC } from "react";
import CourseHeader from "./CourseHeader";
import CoursePlayer from "./CoursePlayer";
import Content from "./Content";
import ContentContextProvider from "../journeyContexts/ContentContextProvider";

const CourseContent: FC = () => {
  return (
    <ContentContextProvider>
      <div className="">
        <CourseHeader />
        <div className="flex w-full">
          <CoursePlayer
            url="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4"
            thumbnail="https://picsum.photos/200/300"
          />
          <Content />
        </div>
      </div>
    </ContentContextProvider>
  );
};

export default CourseContent;
