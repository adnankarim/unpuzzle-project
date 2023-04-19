import { FC, useState, useRef } from "react";
import { dropZoneProps } from "@/types/types";

//Default icon for dropzone
const defultDropzoneIcon = (
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
);

const Dropzone: FC<dropZoneProps> = ({
  label = "Choose a file or Drag it here",
  labelColor = "text-black/60",
  setFile,
  validRegexString,
  children,
  width = "w-full",
  height = "h-[128px]",
  className = "",
  icon,
  borderStyle = "border-dashed",
}) => {
  const [dragging, setDragging] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

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
      console.log(e.target.files[0]);
      const regex = new RegExp(validRegexString);
      console.log(regex.test(e.target.files[0].type));
      if (regex.test(e.target.files[0].type)) {
        setFile(e.target.files[0]);
        dragging && setDragging(false);
        error && setError(false);
      } else {
        setError(true);
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
        dragging && setDragging(false);
        error && setError(false);
      } else {
        !error && setError(true);
      }
    } else {
      !error && setError(true);
    }
  };

  return (
    <div
      onClick={dropzoneClickHandler}
      onDrop={onDropHandler}
      onDragOver={(e) => e.preventDefault()}
      onDragEnter={() => setDragging(true)}
      onDragLeave={() => setDragging(false)}
      className={`${className} ${height} ${width} flex flex-col gap-y-[10px] justify-center 
      items-center cursor-pointer border-[1px]  ${borderStyle} ${
        error
          ? "border-[#FF0000]"
          : dragging
          ? "border-[#1CABF2]"
          : "border-black/60"
      } rounded-[5px]`}
    >
      <input onChange={fileChangeHandler} ref={fileRef} type="file" hidden />
      {icon && defultDropzoneIcon}
      {children}
      {label && (
        <p
          className={`text-sm  ${
            error ? "text-[#FF0000]" : dragging ? "text-[#1CABF2]" : labelColor
          }`}
        >
          {label}
        </p>
      )}
    </div>
  );
};

export default Dropzone;
