import React, { FC, useRef } from "react";

interface dropZoneProps {
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
  validRegexString: string;
}

const Dropzone: FC<dropZoneProps> = ({ setFile, validRegexString }) => {
  let fileRef = useRef<HTMLInputElement>(null);

  //dropzone click handler that triggers input file change handler
  const dropzoneClickHandler: React.MouseEventHandler<HTMLDivElement> = () => {
    fileRef.current?.click();
  };

  //Onchnage handler for file input only accepts file according to regexString
  const fileChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log("Inside File Change Handler");
    if (e.target.files && e.target.files.length > 0) {
      console.log(e.target.files);
      const regex = new RegExp(validRegexString);
      console.log(regex.test(e.target.files[0].type));
      if (regex.test(e.target.files[0].type)) {
        setFile(e.target.files[0]);
      }
    }
  };

  //Drop Handler for filechange only accepts file according to regexString
  const onDropHandler: React.DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    console.log(file);
    if (file) {
      console.log(file.type);
      // regex for testing video file extensions
      const regex = new RegExp(validRegexString);
      console.log(regex.test(file.type));
      if (regex.test(file.type)) {
        setFile(file);
      }
    }
  };

  return (
    <div
      onClick={dropzoneClickHandler}
      onDrop={onDropHandler}
      onDragOver={(e) => e.preventDefault()}
      className="w-full h-[128px] flex flex-col gap-y-[10px] justify-center items-center cursor-pointer border-[1px] border-dashed border-black/60 rounded-[5px]"
    >
      <input onChange={fileChangeHandler} ref={fileRef} type="file" hidden />
      <svg
        width="32"
        height="26"
        viewBox="0 0 32 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.4 17.7734H17.6V8.22798H22.4L16 0.273438L9.6 8.22798H14.4V17.7734Z"
          fill="black"
          fill-opacity="0.5"
        />
        <path
          d="M28.8 22.5462H3.2V11.4098H0V22.5462C0 24.3009 1.4352 25.728 3.2 25.728H28.8C30.5648 25.728 32 24.3009 32 22.5462V11.4098H28.8V22.5462Z"
          fill="black"
          fill-opacity="0.5"
        />
      </svg>
      <p className="text-sm text-black/50">Choose a file or Drag it here</p>
    </div>
  );
};

export default Dropzone;
