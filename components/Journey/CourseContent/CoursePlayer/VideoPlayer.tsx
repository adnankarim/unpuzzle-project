import { FC, useState, useRef, useEffect, useCallback } from "react";
import Speaker from "./Speaker";
import Settings from "./Settings";
import PuzzlePieceAnnotation from "./PuzzlePieceAnnotation";
import { allTabData } from "../Data";
import Image from "next/image";
import PuzzlePieceSvg from "../../../assets/svg/PuzzlePieceSvg";
import playIcon from "../../../assets/playIcon.png";
import fullScreen from "../../../assets/fullScreen.png";
import youtube from "../../../assets/youtube.png";
import pauseIcon from "../../../assets/pauseIcon.png";
import { videoPlayerProps } from "../../journeyTypes";

let getTime = (d: number) => {
  let h: number = Math.floor(d / 3600);
  let m: number = Math.floor((d % 3600) / 60);
  let s: number = Math.floor((d % 3600) % 60);
  // console.log(h, m, s);
  let hDisplay: string = h > 0 ? h + ":" : "";
  let mDisplay: string = m > 0 ? m + ":" : "00:";
  let sDisplay: string = s > 0 ? (s < 10 ? "0" + s : s + "") : "00";
  return hDisplay + mDisplay + sDisplay;
};

const VideoPlayer: FC<videoPlayerProps> = ({
  url,
  play = false,
  showAnnotaion = true,
  showPuzzlePieces = true,
}) => {
  let [playVideo, setPlayVideo] = useState<boolean>(play);
  let [currentTime, setCurrentTime] = useState<number>(0);
  let [timeLineOver, setTimeLineOver] = useState<boolean>(false);

  let video = useRef<HTMLVideoElement>(null);
  let videoContainer = useRef<HTMLDivElement>(null);

  const playHandler: React.MouseEventHandler<HTMLImageElement> = (event) => {
    setPlayVideo((playVideo) => !playVideo);
  };

  const fullScreenHandler: React.MouseEventHandler<HTMLImageElement> = () => {
    !document.fullscreenElement
      ? videoContainer?.current
          ?.requestFullscreen()
          .then(() => console.log("Full screen enabled"))
          .catch((err) => console.log(err))
      : document
          .exitFullscreen()
          .then(() => console.log("Full screen disabled"))
          .catch((err) => console.log(err));
  };

  const pictureInPictureHandler: React.MouseEventHandler<HTMLDivElement> = (
    event
  ) => {
    !document.pictureInPictureElement
      ? video?.current
          ?.requestPictureInPicture()
          .then(() => console.log("Picture in Picture enabled"))
          .catch((err) => console.log(err))
      : document
          .exitPictureInPicture()
          .then(() => console.log("Picture in Picture disabled"))
          .catch((err) => console.log(err));
  };

  const handleMove = useCallback<React.PointerEventHandler<HTMLDivElement>>(
    (event) => {
      event.preventDefault();
      console.log(event.currentTarget);
      let element = video?.current;
      if (element) {
        console.log("inside handle move");
        const realPosition: number =
          event.clientX - element.getBoundingClientRect().left;
        console.log(element.offsetWidth);
        const perc: number = (realPosition / element.offsetWidth) * 100;
        element.currentTime = (perc * element.duration) / 100;
      }
    },
    []
  );

  const handleDown = useCallback<React.PointerEventHandler<HTMLDivElement>>(
    (event) => {
      console.log("handle move added");
      event?.currentTarget?.addEventListener("pointermove", handleMove as any);
      handleMove(event);
    },
    []
  );

  const handleUp = useCallback<React.PointerEventHandler<HTMLDivElement>>(
    (event) => {
      console.log("Inside handle up");
      event?.currentTarget?.removeEventListener(
        "pointermove",
        handleMove as any
      );
    },
    []
  );

  useEffect(() => {
    let element = video?.current;
    console.log("inside useeffect playvideo");
    playVideo ? element?.play().catch((err) => {}) : element?.pause();

    return () => {
      console.log("inside [playvide] useeffect cleanup");
    };
  }, [playVideo]);

  useEffect(() => {
    let element = video?.current;
    if (element) {
      console.log("inside timeupdate useeffect");
      element.addEventListener("timeupdate", (e) => {
        let { currentTime } = e.target as HTMLVideoElement;
        setCurrentTime(currentTime);
        // console.log(currentTime, duration);
      });
      return () => {
        console.log("useffect [] cleanup");
      };
    }
  }, []);

  return (
    <div className="w-full h-full flex flex-col gap-y-2">
      <div className="w-full h-full relative" ref={videoContainer}>
        <video
          poster="https://s3-alpha-sig.figma.com/img/fbca/5a41/9d268153a0adbcc8fe381a808ee4b7f5?Expires=1670198400&Signature=SBx3ZlIKf5feD1iEWK2BywGpf-YPkntXK8~F3PcEoHP2DvZvtnBPlD~EwhipgS1w6TvpMu7ZtKc4KNByJdycMpXKuUPp6uQL8l1AUBoLh5FyOpDcM~woJhEEWWde514IdW53Qa0NkBPTWSzxv77xubFRUi8fN~7gy~jBmOIhhI~d8VFbiWnVy5L0QN3scmJCGFS2W1sClIiPOCyxeV~kyWwEKqP3wggfNm1boHb-vuxjQmgealVIUrLRuvlOnkdUfBtG6DheoNKhhW3~VQSRmiMoQRyGywLZvAQlIpbQELon1aeP7tbzf1BxgJg2u8FSfjnpJcyiQusqK3UP0QFXPQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          src={url}
          className="w-full h-full"
          ref={video}
          autoPlay={false}
        ></video>
        <div
          className="flex flex-col gap-y-[3px] justify-center items-center 
    absolute left-0 bottom-0 right-0 w-full"
        >
          <div
            className={`w-full h-[7px] bg-[#BCBDBD] relative transition-all duration-[50ms]  ease-linear 
          ${timeLineOver ? "h-[7px]" : "h-[4px]"}`}
            onPointerDown={handleDown}
            onPointerUp={handleUp}
            onPointerLeave={(e) => {
              handleUp(e);
              setTimeLineOver(false);
            }}
            onPointerOver={() => {
              console.log("inside pointer over");
              setTimeLineOver(true);
            }}
          >
            <div
              className={`h-full bg-[#F9993A] `}
              style={{
                width: `${
                  (currentTime / (video?.current?.duration as number)) * 100
                }%`,
              }}
            ></div>
            <div
              className={`w-[17px] h-[17px]  transition-transform duration-[150ms] ease-in-out 
             absolute -top-[5px] rounded-[50%] hover:scale-125 
            bg-[#F9993A]  ${timeLineOver ? "scale-[1]" : "scale-0"}`}
              style={{
                left: `${
                  (currentTime / (video?.current?.duration as number)) * 100 - 1
                }%`,
              }}
              onPointerOver={() => {
                console.log("inside innner pointer over");
              }}
            ></div>
          </div>
          {showPuzzlePieces && (
            <div className="flex justify-center items-center gap-x-[73px] w-full h-[24px] relative">
              {allTabData.map((data, index) => {
                return (
                  <div
                    key={index}
                    className="absolute"
                    style={{
                      left: `${
                        (data.time / (video?.current?.duration as number)) *
                          100 -
                        1
                      }%`,
                    }}
                  >
                    <PuzzlePieceSvg
                      color={`${
                        data.contentType == "puzzle piece"
                          ? "text-[#F9993A]"
                          : "text-[#1CABF2]"
                      }`}
                    />
                  </div>
                );
              })}
            </div>
          )}
          <div className="flex justify-between items-center pt-[10px] pb-5 w-full px-[50px]">
            <div className="flex justify-center items-center gap-x-10">
              <div className="flex justify-center items-center gap-x-5 transition-all delay-1000 linear">
                <Image
                  src={playVideo ? playIcon.src : pauseIcon.src}
                  width={18}
                  height={20}
                  alt="Play Button"
                  onClick={playHandler}
                  className="transition-all duration-500 delay-1000 ease-in-out"
                />

                <Speaker videoRef={video} />
              </div>
              <p className="text-[16px] text-[#FFFFFF]">
                {getTime(currentTime)} /{" "}
                {getTime(video?.current?.duration as number)}
              </p>
            </div>
            <div className="flex justify-center items-center gap-x-10">
              <div className="flex items-start gap-x-5">
                <Settings videoRef={video} />
                <div
                  className="w-6 h-5 border-[2px]  border-white rounded-sm relative"
                  onClick={pictureInPictureHandler}
                >
                  <div className="absolute bg-white w-[10px] rounded-sm h-2 bottom-[2px] right-[2px]"></div>
                </div>
                <Image
                  src={fullScreen.src}
                  width={20}
                  height={20}
                  alt="fullScreen"
                  onClick={fullScreenHandler}
                />
              </div>
              <Image
                src={youtube.src}
                width={24}
                height={16}
                alt="youtubeIcon"
              />
            </div>
          </div>
        </div>
      </div>
      {showAnnotaion && <PuzzlePieceAnnotation currentTime={currentTime} />}
    </div>
  );
};

export default VideoPlayer;
