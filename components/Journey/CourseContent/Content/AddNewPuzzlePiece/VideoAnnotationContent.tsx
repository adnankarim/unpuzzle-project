import React, { FC, useState } from "react";
import AddAnnotationButton from "./AddAnnotationButton";
import Dropzone from "../../../../Dropzone";
import FilePreview from "../../../../FilePreview";
import TitleInput from "../../../../TitleInput";

const VideoAnnotationContent: FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [textValue, setTextValue] = useState<string>("");

  console.log(file);
  console.log(Boolean(file));

  return (
    <div className="flex flex-col items-center gap-y-[10px]">
      {/* title for video annotation */}
      <TitleInput
        placeholder="Enter the title of the image annotations..."
        textValue={textValue}
        setTextValue={setTextValue}
      />
      {/* DropZone for adding video */}
      {!file ? (
        <Dropzone setFile={setFile} validRegexString="video//*" />
      ) : (
        // added file layout
        <FilePreview file={file} setFile={setFile} />
      )}

      <AddAnnotationButton active={Boolean(file)} />
    </div>
  );
};

export default VideoAnnotationContent;
