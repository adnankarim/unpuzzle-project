import { NextPage, GetServerSideProps, NextPageContext } from "next";
import Section from "@/components/Section";
import PuzzleCard from "@/components/Puzzles/PuzzleCard"; 

interface pageProps {
  puzzlePiece: any;
  videoURL: string;
  params: any;
  query: NextPageContext["query"];
}

const Puzzles: NextPage<pageProps> = ({
  puzzlePiece,
  videoURL,
  params,
  query,
}) => {
  console.log(puzzlePiece);
  console.log(params);
  console.log(query);
  return (
    <Section className="sm:mt-[80px]  lg:mt-[80px] ">
     <div>
     <PuzzleCard/>
     </div>
    </Section>
  );
};

export default Puzzles;
