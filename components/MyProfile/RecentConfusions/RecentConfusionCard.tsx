import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import playButton from "@/components/assets/recentConfPlayButtton.png";
import { confusionsDataProps } from "@/components/Journey/journeyTypes";
import Button from "@/components/Button";
import { getTime } from "@/components/helperFunctions";

const RecentConfusionCard: FC<confusionsDataProps> = ({
  id,
  title,
  solvedStatus,
  time,
}) => {
  const myLoader = ({ src }: { src: string }) => src;
  return (
    <div
      className="flex flex-col justify-start items-start gap-y-[10px] 
    w-[305px]  border-[1px] border-black/20 rounded-[5px]"
    >
      {/* Wrapper for video info container */}
      <div
        className="w-full h-[190px] relative rounded-t-[5px]"
        style={{
          background:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(https://s3-alpha-sig.figma.com/img/4af1/38ca/4aba8b469d06cd57f665720ec883e6f1?Expires=1676851200&Signature=CwChEhftwmdZd0Osb5XrjvI5zvMLB4rajRxyVQPi3XJnK05x6MxNXbE-i7-LpVdFV-3uCyvde7U2IKjBXfH4jKpvMXt9FuIOdviG0wsMBYI91PNXL4bti2JT9~nOQPyL5rbs0Wp4llQeaJzP08M1iuA5powMSxE8B-hF9uCXcE0yD9VXFfsUPC~mTignEhSR59PtBwdEgdDkWjH5MlkvHZ1HX88aAtQLVlij-b4ufVnfRmhAY4REH2kpqCd6gLl5tzZTqOqCkljIezTNYUPtU4iE0Qhp4MdKHlVPzNxeZlUE4VUSm-paXw9kzAQsine1ZeegjQiBrC5dkvyzUtisEQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)",
          backgroundPosition: "center",
          backgroundSize: "380px",
        }}
      >
        {/* Thumbnail for journey */}
        {/* <Image
          alt="Confusion Card"
          src="https://s3-alpha-sig.figma.com/img/4af1/38ca/4aba8b469d06cd57f665720ec883e6f1?Expires=1676851200&Signature=CwChEhftwmdZd0Osb5XrjvI5zvMLB4rajRxyVQPi3XJnK05x6MxNXbE-i7-LpVdFV-3uCyvde7U2IKjBXfH4jKpvMXt9FuIOdviG0wsMBYI91PNXL4bti2JT9~nOQPyL5rbs0Wp4llQeaJzP08M1iuA5powMSxE8B-hF9uCXcE0yD9VXFfsUPC~mTignEhSR59PtBwdEgdDkWjH5MlkvHZ1HX88aAtQLVlij-b4ufVnfRmhAY4REH2kpqCd6gLl5tzZTqOqCkljIezTNYUPtU4iE0Qhp4MdKHlVPzNxeZlUE4VUSm-paXw9kzAQsine1ZeegjQiBrC5dkvyzUtisEQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          quality={100}
          fill
          // loader={myLoader}
          style={{
            objectFit: "cover",
          }}
        /> */}
        {/* Video for confusion play Button */}
        <div
          className="w-[60.36px] cursor-pointer h-[60px] absolute top-[65px] left-[122px]
           bg-black rounded-[50%] flex justify-center items-center"
        >
          <Image
            src={playButton}
            alt="play-button"
            style={{ marginLeft: "6px" }}
          />
        </div>
        {/* Puzzle solve status */}
        <p
          className="absolute right-[10px] top-[10px] py-[5px] px-[10px] 
          bg-[#F2F2F2] border-[0.5px] border-black/10 rounded-[32px] text-xs
           leading-[100%] font-normal text-black"
        >
          {solvedStatus}
        </p>
      </div>
      {/* Confusion Details */}
      <div className="flex flex-col items-start gap-y-[10px] p-[10px]">
        {/* Confusion time with user name */}
        <p className="text-sm text-black/70 leading-[100%]">
          UserOne is confused at{" "}
          <span className="ml-[2px] font-bold">{getTime(time)}</span>
        </p>
        {/* Confusion title */}
        <h1 className="text-base font-bold text-black/80 leading-[130%]">
          {title}
        </h1>
        {/* Journey/Course name */}
        <p className="text-base text-black/80 leading-[24px] font-normal">
          [Course Name] How I find Influencers that make me $14k a week
        </p>
        {/* View button for viewing confusion */}
        <Link href={`/journey/1/confusions/${id}`} style={{ width: "100%" }}>
          <Button
            bgColor="bg-white"
            textColor="text-black/60"
            textSize="text-base"
            rounded="rounded-[5px]"
            className="w-full border-[1px] border-black/60 
        text-center font-bold"
          >
            View
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default RecentConfusionCard;
