import React, { FC, useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import PuzzlePieceSvg from "../../assets/svg/PuzzlePieceSvg";
import Speaker from "./Speaker";
import { allTabData } from "../../Journey/CourseContent/Data";
import PuzzlePieceAnnotation from "../../Journey/CourseContent/CoursePlayer/PuzzlePieceAnnotation";
import playIcon from "../../assets/playIcon.png";
import pauseIcon from "../../assets/pauseIcon.png";
import fullScreen from "../../assets/fullScreen.png";
import youtube from "../../assets/youtube.png";
import { youtubePlayerProps } from "../ConfustionTypes";

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

const YoutubePlayer: FC<youtubePlayerProps> = ({
  url,
  showAnnotaion = false,
  showPuzzlePieces = false,
}) => {
  const [playVideo, setPlayVideo] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [timeLineOver, setTimeLineOver] = useState<boolean>(false);
  const [player, setPlayer] = useState<any>(null);
  const [knobPosition, setKnobPosition] = useState<number>(0);
  const [isVideoPlayed, setIsVideoPlayed] = useState<boolean>(false);

  const playHandler: React.MouseEventHandler<HTMLImageElement> = (event) => {
    if (player) {
      playVideo ? player.pauseVideo() : player.playVideo();
    }
  };

  console.log(isVideoPlayed);

  let videoContainer = useRef<HTMLDivElement>(null);

  const fullScreenHandler: React.MouseEventHandler<HTMLImageElement> = () => {
    if (document.fullscreenEnabled) {
      !document.fullscreenElement
        ? videoContainer?.current
            ?.requestFullscreen()
            .then(() => console.log("Full screen enabled"))
            .catch((err) => console.log(err))
        : document
            .exitFullscreen()
            .then(() => console.log("Full screen disabled"))
            .catch((err) => console.log(err));
    } else {
      alert("Full Screen not supported on this browser");
    }
  };

  const pictureInPictureHandler: React.MouseEventHandler<HTMLDivElement> = (
    event
  ) => {
    if (player) {
      console.log(player.getVideoEmbedCode());
      console.log(player.getOptions());
      // if (document.pictureInPictureEnabled) {
      //   let iframe = player.getIframe().contentWindow;
      //   let video = iframe.document.getElementsByTagName("video")[0];
      //   !document.pictureInPictureElement
      //     ? video
      //         ?.requestPictureInPicture()
      //         .then(() => console.log("Picture in Picture enabled"))
      //         .catch((err: any) => console.log(err))
      //     : document
      //         .exitPictureInPicture()
      //         .then(() => console.log("Picture in Picture disabled"))
      //         .catch((err) => console.log(err));
      // }
    }
  };

  const handleMove = useCallback<React.PointerEventHandler<HTMLDivElement>>(
    (event) => {
      event.preventDefault();
      console.log(event.currentTarget);
      let element = event.currentTarget;
      if (player) {
        console.log("inside handle move");
        const realPosition: number =
          event.clientX - element.getBoundingClientRect().left;
        console.log(element.offsetWidth);
        const perc: number = (realPosition / element.offsetWidth) * 100;
        setKnobPosition(perc);
        player.seekTo((perc * player.getDuration()) / 100);
      }
    },
    [player]
  );

  const handleDown = useCallback<React.PointerEventHandler<HTMLDivElement>>(
    (event) => {
      console.log("handle move added");
      event?.currentTarget?.addEventListener("pointermove", handleMove as any);
      handleMove(event);
    },
    [player]
  );

  const handleUp = useCallback<React.PointerEventHandler<HTMLDivElement>>(
    (event) => {
      console.log("Inside handle up");
      event?.currentTarget?.removeEventListener(
        "pointermove",
        handleMove as any
      );
    },
    [player]
  );

  const onVideoEnd = () => {
    console.log(player);
  };
  useEffect(() => {
    let params = url.split("?");
    let id = new URLSearchParams(params[1]).get("v");
    console.log(id);

    var tag = document.createElement("script");

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    // 3. This function creates an <iframe> (and YouTube player)
    //    after the API code downloads.
    var newPlayer: any;
    window.onYouTubeIframeAPIReady = function () {
      newPlayer = new YT.Player("player", {
        videoId: id,
        playerVars: {
          playsinline: 1,
          controls: 0,
          autoplay: 0,
          iv_load_policy: 0,
        },
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
        },
      });
    };
    const onPlayerStateChange = (event: any) => {
      console.log(event.data);
      switch (event.data) {
        case -1:
          setIsVideoPlayed(true);
          break;
        case 0:
          onVideoEnd();
          break;
        case 1:
          console.log("inside playing state");
          setPlayVideo(true);
          break;
        case 2:
          setPlayVideo(false);
          break;
      }
    };

    // 4. The API will call this function when the video player is ready.
    function onPlayerReady(event: any) {
      // event.target.playVideo();
      console.log(event.target);
      console.log(newPlayer.getDuration());
      // console.log(player.getCurrentTime());
      setPlayer(newPlayer);
      let iframeWindow = event.target.getIframe().contentWindow;
      console.log(iframeWindow);
      console.log(event.target.getIframe());

      //adding class to iframe to make it responsive
      event.target.getIframe().classList.add("video");

      window.addEventListener("message", (event) => {
        if (event.source === iframeWindow) {
          var data = JSON.parse(event.data);

          if (
            data.event === "infoDelivery" &&
            data.info &&
            data.info.currentTime
          ) {
            var time = Math.floor(data.info.currentTime);

            if (time !== currentTime) {
              setKnobPosition((time * 100) / newPlayer.getDuration());
              console.log((time * 100) / newPlayer.getDuration());
              setCurrentTime(time);
              console.log(time);
            }
          }
        }
      });
    }
  }, []);

  {
    /* Youtube Player */
  }
  return (
    <div className="w-full flex flex-col gap-y-2">
      <div className="relative w-full h-0 pb-[56.25%]" ref={videoContainer}>
        <div id="player"></div>

        {isVideoPlayed && (
          <div
            className="flex flex-col gap-y-[3px] justify-center items-center 
     absolute left-0 bottom-0 right-0 w-full px-2"
          >
            <div
              className={`w-full h-[7px] bg-[#BCBDBD] cursor-pointer relative transition-all duration-[50ms]  ease-linear 
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
                className={`h-full bg-[#F9993A] cursor-pointer `}
                style={{
                  width: `${knobPosition}%`,
                }}
              ></div>
              <div
                className={`w-[17px] h-[17px] cursor-pointer transition-transform duration-[150ms] ease-in-out 
              absolute -top-[5px] rounded-[50%] hover:scale-125 
             bg-[#F9993A]  ${timeLineOver ? "scale-[1]" : "scale-0"}`}
                style={{
                  left: `${knobPosition - 1}%`,
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
                          ((data.time + 120 * index) / player.getDuration()) *
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
                    className="transition-all duration-500 delay-1000 ease-in-out"
                    onClick={playHandler}
                  />
                  <Speaker player={player} />
                </div>
                <p className="text-[16px] text-[#FFFFFF]">
                  {getTime((knobPosition * player.getDuration()) / 100) >
                  getTime(player.getDuration())
                    ? getTime(player.getDuration())
                    : getTime((knobPosition * player.getDuration()) / 100)}{" "}
                  / {getTime(player.getDuration())}
                </p>
              </div>
              <div className="flex justify-center items-center gap-x-10">
                <div className="flex items-start gap-x-5">
                  {/* <Settings videoRef={video} /> */}
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
        )}
      </div>
      {showAnnotaion && <PuzzlePieceAnnotation currentTime={currentTime} />}
    </div>
  );
};

export default YoutubePlayer;
