import React, { FC } from "react";
import Answer from "./Answer";
import { answersData } from "../ConfustionsData";

const ConfusionsAnswers: FC = () => {
  return (
    <div className="mt-20 max-w-[1240px] flex flex-col gap-y-[60px]">
      <div className="flex gap-x-[26px] items-center">
        <h1 className="text-[30px] text-black/75 font-bold">Answers</h1>
        <div className="flex-1 border-[1px] border-solid border-black/50"></div>
      </div>
      <div className="flex flex-col gap-y-10">
        {/* Confusion Question */}
        <Answer
          type="question"
          name="Mahtab Alam"
          role="unpuzzler"
          timePeriod="4 days ago"
          upVotes={34}
          downVotes={0}
          description="[Confusion Question] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet eu, quis lacus eleifend nunc, egestas dignissim auctor. Vel dolor congue adipiscing vulputate ut dictum iaculis enim ac. Eget vestibulum natoque quis felis cras. Turpis semper id consequat justo a purus?"
        />
        {/* Divider b/w Question & Answers */}
        <div className="w-full border-[1px] border-solid border-black/50"></div>
        {/* Confusion Answers */}
        {answersData.map((answer, index) => {
          return <Answer {...answer} key={index} />;
        })}
      </div>
    </div>
  );
};

export default ConfusionsAnswers;
