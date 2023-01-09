import { FC, useState, useRef, useEffect } from "react";
import { puzzlePiecesData } from "../../Data";
import PuzzleTimeStamp from "./PuzzleTimeStamp";
import PuzzlePiecePreview from "./PuzzlePiecePreview";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { puzzleTimeStampSliderProps } from "../../../journeyTypes";

let newpuzzlePiecesData = [...puzzlePiecesData, ...puzzlePiecesData];

const settings = {
  dots: false,
  speed: 500,
  infinite: false,
  slidesToShow: 8,
  slidesToScroll: 8,
  beforeChange: (current: number, next: number) => console.log(current, next),
};

const PuzzleTimeStampSlider: FC<puzzleTimeStampSliderProps> = ({
  currentTime,
}) => {
  let [preview, setPreview] = useState<number>(1);
  let [slidesToShow, setSlidesToShow] = useState<number>(8);
  let [currentIndex, setCurrentIndex] = useState<number | null>(0);

  const SliderRef = useRef<Slider>(null);

  // useEffect(() => {
  //   slidesToShow * preview - 1 < newpuzzlePiecesData.length &&
  //     Math.floor(currentTime) ==
  //       Math.floor(newpuzzlePiecesData[slidesToShow * preview - 1].time) &&
  //     setPreview((preview) => preview + 1);
  // }, [currentTime]);

  useEffect(() => {
    console.log("inside preview useeffect");
    console.log(preview);
    console.log(puzzlePiecesData);
    SliderRef.current?.slickGoTo(slidesToShow * preview - slidesToShow);
  }, [preview]);

  useEffect(() => {
    let closest: number = newpuzzlePiecesData
      .sort((a, b) => {
        return Math.floor(a.time) - Math.floor(b.time);
      })
      .reduce((closestIndex, puzzlePiece, index) => {
        // console.log(Math.floor(puzzlePiece.time) - Math.floor(currentTime));
        console.log(
          Math.floor(newpuzzlePiecesData[closestIndex].time) -
            Math.floor(currentTime)
        );

        if (
          Math.floor(puzzlePiece.time) ==
            Math.floor(newpuzzlePiecesData[closestIndex].time) &&
          Math.floor(currentTime) <= Math.floor(puzzlePiece.time)
        ) {
          return closestIndex;
        }

        return Math.abs(
          Math.floor(puzzlePiece.time) - Math.floor(currentTime)
        ) <=
          Math.abs(
            Math.floor(newpuzzlePiecesData[closestIndex].time) -
              Math.floor(currentTime)
          )
          ? index
          : closestIndex;
      }, 0);
    console.log(closest);
    let newPreview = Math.ceil((closest + 1) / slidesToShow);
    console.log(newPreview);
    console.log(
      Math.floor(newpuzzlePiecesData[closest].time) !== Math.floor(currentTime)
    );
    if (
      Math.floor(newpuzzlePiecesData[closest].time) !== Math.floor(currentTime)
    ) {
      if (
        Math.floor(currentTime) >
          Math.floor(newpuzzlePiecesData[closest].time) &&
        closest + 1 == slidesToShow * newPreview
      ) {
        console.log((closest + 1) % slidesToShow == 0);
        console.log(slidesToShow * newPreview);
        console.log(slidesToShow * newPreview <= newpuzzlePiecesData.length);
        console.log(newpuzzlePiecesData.length);
        if (slidesToShow * newPreview < newpuzzlePiecesData.length) {
          preview !== newPreview + 1 && setPreview(newPreview + 1);
        } else {
          preview !== newPreview && setPreview(newPreview);
        }
      } else {
        console.log("inside else");
        preview !== newPreview && setPreview(newPreview);
      }
      setCurrentIndex(null);
    } else {
      console.log("inside outer index");
      preview !== newPreview && setPreview(newPreview);
      setCurrentIndex(closest);
    }
  }, [currentTime]);

  // console.log(preview);
  return (
    <div className="w-full flex gap-x-[40px]">
      <div className="w-[580px] border-2 bg-white pb-[10px] pt-[2px]">
        <Slider {...settings} ref={SliderRef}>
          {newpuzzlePiecesData
            .sort((a, b) => {
              return Math.floor(a.time) - Math.floor(b.time);
            })
            .map(({ puzzlePieceType, time }, index) => {
              return (
                <PuzzleTimeStamp
                  key={index}
                  puzzlePieceType={puzzlePieceType}
                  time={time}
                  currentTime={currentTime}
                  slider={SliderRef}
                  index={index}
                  setCurrentIndex={setCurrentIndex}
                  currentIndex={currentIndex}
                />
              );
            })}
        </Slider>
      </div>
      <PuzzlePiecePreview index={currentIndex} />
    </div>
  );
};

export default PuzzleTimeStampSlider;
