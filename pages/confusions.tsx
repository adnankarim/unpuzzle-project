import React from "react";
import { NextPage } from "next";
import Section from "../components/Section";
import ConfusionDetails from "../components/Confusions/ConfusionDetails";
import ConfusionPlayer from "../components/Confusions/ConfusionPlayer";
import ConfusionsAnswers from "../components/Confusions/ConfusionsAnswers";

const Confusions: NextPage = () => {
  return (
    <Section className="mt-[83px]">
      <div className="flex w-full gap-x-10">
        {/* Confusion Details & Player */}
        <div className="max-w-[1240px] flex flex-col gap-y-[89.5px]">
          {/* Confusion Details Section */}
          <ConfusionDetails />
          {/* Confusion Player & player/confusion details Section */}
          <ConfusionPlayer />
        </div>

        {/* Advertisement types cards */}
      </div>
      {/* Comments/Answers Section */}
      <ConfusionsAnswers />
    </Section>
  );
};

export default Confusions;
