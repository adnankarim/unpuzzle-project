import { NextPage, GetServerSideProps, NextPageContext } from "next";
import Section from "@/components/Section";
import ConfusionDetails from "@/components/Confusions/ConfusionDetails";
import ConfusionPlayer from "@/components/Confusions/ConfusionPlayer";
import ConfusionsAnswers from "@/components/Confusions/ConfusionsAnswers";
import AnnotationInfoContextProvider from "@/components/Confusions/ConfusionContexts/AnnotationInfoContextProvider";

export const getServerSideProps: GetServerSideProps = async (context) => {
  let { params, query } = context;

  //Getting id from url params then we will fetch that puzzle piece
  //We should also make request and the find the url for that journey as well
  return {
    props: {
      puzzlePiece: {
        id: 1,
        title: "Check this alternate way to solve it in this pdf.",
        time: 14.6,
        puzzlePieceType: "video",
        contentType: "puzzle piece",
      },
      videoURL: "http://clips.vorwaerts-gmbh.de/VfE_html5.mp4",
      params: params,
      query: query,
    },
  };
};

interface pageProps {
  puzzlePiece: any;
  videoURL: string;
  params: any;
  query: NextPageContext["query"];
}

const Confusions: NextPage<pageProps> = ({
  puzzlePiece,
  videoURL,
  params,
  query,
}) => {
  console.log(puzzlePiece);
  console.log(params);
  console.log(query);
  return (
    <Section className="mt-[83px]">
      <AnnotationInfoContextProvider
        puzzlePiece={puzzlePiece}
        videoUrl={videoURL}
      >
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
      </AnnotationInfoContextProvider>
    </Section>
  );
};

export default Confusions;
