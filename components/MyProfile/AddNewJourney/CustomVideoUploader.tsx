import { FC, useState, useEffect } from "react";
import axios from "axios";
import Button from "@/components/Button";
import Dropzone from "@/components/Dropzone";
import CustomVideoProgesser from "./CustomVideoProgesser";
import NewJourneyPreviewer from "./NewJourneyPreviewer";
import { customVideoUploaderProps } from "../MyProfileTypes";

// Timeout for post request, used for calculating remaining time
const timeout = 2000;

//axios video uploader post request controller will be used for cancelling request
let controller = new AbortController();

const CustomVideoUploader: FC<customVideoUploaderProps> = ({
  journeyFileUploading,
  setJourneyFileUploading,
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [videoUploading, setVideoUploading] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

  // Uploader function that will be called on uploading journey video
  const onUploadHandler: React.MouseEventHandler<HTMLButtonElement> = async (
    e
  ) => {
    e.stopPropagation();
    setJourneyFileUploading(true);
    setVideoUploading(true);

    // Config options for axios upload post request
    const options = {
      onUploadProgress: (progressEvent: any) => {
        const { loaded, total } = progressEvent;
        if (total) {
          const progressPercent = (loaded / total) * 100;
          console.log(progressPercent);
          console.log(
            Math.abs((progress * (timeout / 1000)) / 100 - timeout / 1000)
          );
          setProgress(progressPercent);
        }
      },
      timeout,
      signal: controller.signal,
    };

    // Data for uploading to post request
    const data = {
      id: 1,
      userId: 1,
      title: "hello world",
      body: "hello world body",
    };

    try {
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        data,
        options
      );
      console.log(res?.data);
    } catch (err: any) {
      console.log(err.message);
      if (axios.isCancel(err)) {
        controller = new AbortController();
        alert("Request Cancelled " + err?.message);
      } else {
        alert(err.message);
      }
    }
  };

  //Function that will execute on cancelling the uploading
  const uploadCancelHandler = () => {
    controller.abort();
    setVideoUploading(false);
    setJourneyFileUploading(false);
  };

  //Function that will execute on previewing the journey added
  const previewHandler = () => {
    setVideoUploading(false);
  };

  //useeffect which will make the file & progress null when fileUploading is cancelled
  useEffect(() => {
    if (!journeyFileUploading && file) {
      file && setFile(null);
      progress !== 0 && setProgress(0);
    }
  }, [journeyFileUploading]);

  console.log(file);

  return (
    <>
      {/* layout for showing adding custom video when video is not uploaded */}
      {!journeyFileUploading && (
        <>
          <p className="text-2xl leading-[100%] text-black">or</p>
          <p className="text-[40px] leading-[100%] text-black/80 font-normal">
            Upload your own video
          </p>
          <Dropzone
            setFile={setFile}
            validRegexString="video//*"
            label="Choose a video file or Drop it here"
            width="w-[800px]"
            height="h-[200px]"
            className="py-[15px] px-[10px]"
            icon
          >
            {file && (
              <Button
                textColor="text-black/80"
                bgColor="bg-white"
                py="py-[10px]"
                px="px-5"
                textSize="text-sm"
                rounded="rounded-[5px]"
                className="border-[1px] border-black/80 leading-[100%]"
                onClick={onUploadHandler}
              >
                Upload Video
              </Button>
            )}
          </Dropzone>
        </>
      )}
      {/* Layout for when video is uploaded it will unmount the above UI and will display current upload progress */}
      {videoUploading && journeyFileUploading && (
        <CustomVideoProgesser
          progress={progress}
          timeout={timeout}
          onCancel={uploadCancelHandler}
          onPreview={previewHandler}
        />
      )}
      {/* Layout for previewing added journey */}
      {journeyFileUploading && !videoUploading && (
        <NewJourneyPreviewer file={file} />
      )}
    </>
  );
};

export default CustomVideoUploader;
