import React, { useState, FC, useEffect } from "react";
import Dropzone from "../../../../Dropzone";
import FilePreview from "../../../../FilePreview";
import AddAnnotationButton from "./AddAnnotationButton";
import TitleInput from "../../../../TitleInput";

const AudioAnnotationContent: FC = () => {
  const [audioRecorder, setAudioRecorder] = useState<MediaRecorder | null>(
    null
  );
  const [file, setFile] = useState<File | null>(null);
  const [isAudioRecording, setIsAudioRecording] = useState<boolean>(false);
  const [textValue, setTextValue] = useState<string>("");
  console.log(audioRecorder);

  //Function for created recorder when user first time click start audio
  //then it will show popup to take microphone permissions & then create recorder
  const createRecorder = async () => {
    let stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: false,
    });

    setAudioRecorder(new MediaRecorder(stream));
  };

  const onClickHandler: React.MouseEventHandler<
    HTMLButtonElement
  > = async () => {
    console.log("inside click handler");
    try {
      if (!audioRecorder) {
        createRecorder();
        return;
      }

      audioRecorder.state == "inactive"
        ? audioRecorder.start()
        : audioRecorder.stop();
    } catch (err: any) {
      console.log("inside catch");
      console.log(err.message);
    }
  };

  console.log("File : ", file);

  useEffect(() => {
    console.log("inside useffect");

    //storing chunks there because we can not access the updated value of chunks when
    //we add chunks in state as this useffect will only be called only two times.
    let chunks: Blob[] = [];

    if (audioRecorder) {
      //registering ondataavailable event will be fired for current scenario when audio is stopped.
      audioRecorder.ondataavailable = (e) => {
        console.log("inside recorder ondataavailable");
        console.log(e.data);
        chunks = [e.data];
      };

      //regestring error event for audio player when any error occurs
      audioRecorder.onerror = (e) => {
        console.log("inside recorder on error");
        console.log(e.error.message);
      };

      //registering onstart event for audioplayer, will be fired when we start playing audio.
      audioRecorder.onstart = (e) => {
        setIsAudioRecording(true);
      };

      //registering onstop event for audioplayer, when audio player is stoped then it will be fired
      //onstop we will create file from chunks array in our case chunks array will contain only one blob.
      audioRecorder.onstop = (e) => {
        console.log("inside recorder onstop");

        setIsAudioRecording(false);
        console.log(chunks);

        let blob = new Blob(chunks);
        console.log(blob);
        let url = URL.createObjectURL(blob);
        console.log(url);

        const myFile = new File(chunks, `recording.${audioRecorder.mimeType}`, {
          type: audioRecorder.mimeType,
        });
        setFile(myFile);
        console.log(myFile);

        let audio = document.getElementById("audio") as HTMLAudioElement;
        if (audio) {
          audio.src = url;
          audio.onloadeddata = () => {
            console.log("inside audio onloadeddata");
            audio.play();
          };
        }
      };
      audioRecorder.start();
    }
  }, [audioRecorder]);

  return (
    <div className="flex flex-col items-center gap-y-[10px]">
      {/* title for audio annotation */}
      <TitleInput
        placeholder="Enter the title of the image annotations..."
        textValue={textValue}
        setTextValue={setTextValue}
      />
      {!file ? (
        <>
          {/* Recorder for recording audio */}
          <div
            className="flex flex-col gap-y-[10px] justify-center items-center w-full h-[104px]
       border-[0.5px] border-black/60 rounded-[5px]"
          >
            <button
              className={`w-[60px] h-[60px] rounded-[40px] border-[1px]
         border-[#1CABF2] flex justify-center items-center
         ${isAudioRecording ? "bg-[#1CABF2]" : ""} `}
              onClick={onClickHandler}
            >
              <svg
                width="30"
                height="40"
                viewBox="0 0 30 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.9997 25C19.1917 25 22.589 21.6429 22.589 17.5V7.5C22.589 3.35714 19.1917 0 14.9997 0C10.8078 0 7.41043 3.35714 7.41043 7.5V17.5C7.41043 21.6429 10.8078 25 14.9997 25ZM29.7319 17.4107C29.7319 17.2143 29.5711 17.0536 29.3747 17.0536H26.6961C26.4997 17.0536 26.339 17.2143 26.339 17.4107C26.339 23.6741 21.2631 28.75 14.9997 28.75C8.73633 28.75 3.66043 23.6741 3.66043 17.4107C3.66043 17.2143 3.49972 17.0536 3.30329 17.0536H0.624721C0.428292 17.0536 0.267578 17.2143 0.267578 17.4107C0.267578 24.942 5.91936 31.1562 13.214 32.0357V36.6071H6.7274C6.11579 36.6071 5.62472 37.2455 5.62472 38.0357V39.6429C5.62472 39.8393 5.74972 40 5.90151 40H24.0979C24.2497 40 24.3747 39.8393 24.3747 39.6429V38.0357C24.3747 37.2455 23.8836 36.6071 23.272 36.6071H16.6069V32.058C23.9863 31.2545 29.7319 25.0045 29.7319 17.4107Z"
                  fill={isAudioRecording ? "white" : "black"}
                  fill-opacity="0.5"
                />
              </svg>
            </button>
            {/* info text for adding audio will be displayed when audio is not playing */}
            {!isAudioRecording && (
              <p className="text-sm text-black/50">
                Click the button to record the audio
              </p>
            )}
          </div>
          {/* Audio Dropzone */}
          <Dropzone setFile={setFile} validRegexString="audio//*" />
        </>
      ) : (
        <FilePreview file={file} setFile={setFile} />
      )}
      {/* audio tag for playing the recorded audio */}
      <audio id="audio"></audio>
      <AddAnnotationButton active={Boolean(file)} />
    </div>
  );
};

export default AudioAnnotationContent;
