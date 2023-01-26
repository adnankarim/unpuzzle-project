import React, { FC, useState } from "react";
import Button from "../../../../Button";
import Dropzone from "../../../../Dropzone";
import FilePreview from "../../../../FilePreview";

const VideoAnnotationContent: FC = () => {
  const [file, setFile] = useState<File | null>(null);

  console.log(file);
  console.log(Boolean(file));

  return (
    <div className="flex flex-col items-center gap-y-[10px]">
      {/* title for video annotation */}
      <input
        type="text"
        placeholder="Enter the title of the video annotations..."
        className="w-full border-[0.5px] border-black/60 rounded-[5px] py-[15px]
        px-[10px] text-base text-black/50"
      ></input>
      {/* DropZone for adding video */}
      {!file ? (
        <Dropzone setFile={setFile} validRegexString="video//*" />
      ) : (
        // added file layout
        <FilePreview file={file} setFile={setFile} />
      )}

      <Button
        bgColor={file ? "bg-[#1CABF2]" : "bg-black/50"}
        textColor="text-white"
        className="text-base"
        disabled={!Boolean(file)}
      >
        Add Annotation @02:30
      </Button>
    </div>
  );
};

export default VideoAnnotationContent;
