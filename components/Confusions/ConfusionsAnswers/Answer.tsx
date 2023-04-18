import  { FC } from "react";
import ReactionButton from "./ReactionButton";
import Image from "next/image";
import upVote from "../../assets/upvote.png";
import downVote from "../../assets/downvote.png";
import share from "../../assets/share-answer.png";
import { answerProps } from "../ConfustionTypes";

const Answer: FC<answerProps> = ({
  type = "answer",
  name,
  role,
  timePeriod,
  upVotes,
  downVotes,
  description,
}) => {
  return (
    <div className="flex flex-col gap-y-[40px] items-end">
      <div className="flex justify-between items-end w-full">
        {/* Commentor Info */}
        <div className="flex items-center gap-x-5">
          {/* DP */}
          <div className="w-[70px] h-[70px] bg-[#C4C4C4] rounded-full"></div>
          <div className="flex flex-col items-start gap-y-[5px]">
            {/* Name & Role */}
            <div className="flex items-center justify-center gap-x-[10px]">
              <p className="text-2xl text-black/75">{name}</p>
              {role == "unpuzzler" && type == "question" ? (
                <button
                  className=" bg-[#F9993A] rounded-[5px] text-base
               text-white font-normal w-[97px] h-[36px]"
                >
                  Unpuzzler
                </button>
              ) : (
                <p className="font-normal text-base text-black/60">{role}</p>
              )}
            </div>
            {/* Ansered Time Period */}
            <p className="font-normal text-sm text-black/75">
              Answered {timePeriod}
            </p>
          </div>
        </div>

        {/* Actions Buttons */}
        <div className="flex items-start gap-x-[10px]">
          {/* React Actions */}
          <div className="flex justify-center items-center rounded-[20px] bg-[#F5F5F5]">
            {/* UpVote */}
            <ReactionButton
              icon={
                <Image src={upVote} width={18.02} height={20} alt="Upvote" />
              }
              number={upVotes}
            />
            {/* Vertical Divider */}
            <div className="w-[1px] h-[15px] bg-black/50"></div>
            {/* DownVote */}
            <ReactionButton
              icon={
                <Image
                  src={downVote}
                  width={18.02}
                  height={20}
                  alt="DownVote"
                />
              }
              number={downVotes}
            />
          </div>
          {/* Share */}
          <div className="w-[40px] h-[40px] rounded-full bg-[#F5F5F5] flex justify-center items-center">
            <Image src={share} width={20} height={15.96} alt="Share Answer" />
          </div>
        </div>
      </div>

      {/* Answers Description */}
      <p className="font-normal text-xl text-black/75 max-w-[1150px]">
        {description}
      </p>
    </div>
  );
};

export default Answer;
