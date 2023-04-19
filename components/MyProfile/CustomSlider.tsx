import {
  FC,
  useState,
  useRef,
  useEffect,
  ReactNode,
  ReactElement,
} from "react";
import Slider, { ResponsiveObject } from "react-slick";
import Button from "../Button";
import recentAnnotationSliderIcon from "@/components/assets/svg/recentAnnotationSliderIcon";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface sliderProps {
  dataLength: number;
  children: ReactNode;
  responsive?: ResponsiveObject[];
  buttonLeft?: ReactElement;
  buttonRight?: ReactElement;
  sliderParentClass?: string;
  initialSlidesToShow?: number;
  initialSlidesToScroll?: number;
}

//Default breakpoints for custom slider
const defaultResponsiveValue = [
  {
    breakpoint: 800,
    settings: {
      dots: false,
      speed: 500,
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
    },
  },
  {
    breakpoint: 600,
    settings: {
      dots: false,
      speed: 500,
      infinite: false,
      slidesToShow: 2,
      slidesToScroll: 1,
    },
  },
];

//Default left button for custom slider
const defaultLeftButton = (
  <Button
    bgColor="bg-white"
    textColor="text-black"
    py="py-0"
    px="px-0"
    className={`absolute flex justify-center items-center left-[0.2px] rotate-180 
top-[40%] w-[50px] h-[50px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)] focus:outline-none
rounded-[50%] `}
  >
    {recentAnnotationSliderIcon}
  </Button>
);

//Default right button for custom slider
const defaultRightButton = (
  <Button
    bgColor="bg-white"
    textColor="text-black"
    py="py-0"
    px="px-0"
    className={`absolute flex justify-center items-center right-[0.2px] 
top-[40%] w-[50px] h-[50px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)] focus:outline-none
rounded-[50%] `}
  >
    {recentAnnotationSliderIcon}
  </Button>
);

const CustomSlider: FC<sliderProps> = ({
  dataLength,
  children,
  responsive = defaultResponsiveValue,
  buttonLeft = defaultLeftButton,
  buttonRight = defaultRightButton,
  sliderParentClass = "recent-slider",
  initialSlidesToShow = 4,
  initialSlidesToScroll = 1,
}) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  console.log(currentSlide);

  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    speed: 500,
    infinite: false,
    slidesToShow: initialSlidesToShow,
    slidesToScroll: initialSlidesToScroll,
    responsive,
    className: "gap-x-5",
    beforeChange: (current: number, next: number) => {
      console.log("After Change: ", current, " ", next);
      if (
        next ===
        dataLength - sliderRef.current?.innerSlider?.props?.slidesToShow
      ) {
        setCurrentSlide(dataLength - 1);
      } else {
        setCurrentSlide(next);
      }
    },
    afterChange: (newInd: number) => {
      console.log("After Change: ", newInd);
      let slidesToShow = console.log(sliderRef.current?.props);
    },
    onEdge: () => console.log("inside edge"),
  };

  useEffect(() => {
    console.log(sliderRef.current?.state);
    console.log(window.innerWidth, window.innerHeight);
  }, []);
  //You can give class to your slider wrapper in order to customize slider styling
  return (
    <div className={`w-full  relative ${sliderParentClass}`}>
      <Slider {...settings} ref={sliderRef}>
        {children}
      </Slider>
      <div
        className={`${currentSlide <= 0 ? "hidden" : "block"}`}
        onClick={() => sliderRef.current?.slickPrev()}
      >
        {buttonLeft}
      </div>
      <div
        className={`${currentSlide >= dataLength - 1 ? "hidden" : "block"}`}
        onClick={() => sliderRef.current?.slickNext()}
      >
        {buttonRight}
      </div>
    </div>
  );
};

export default CustomSlider;
