import { FC, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { allTabData } from "@/components/Journey/CourseContent/Data";
import currentPlayIcon from "@/components/assets/currentPlayIcon.png";
import { getTime } from "@/components/helperFunctions";
import { ContentContext } from "@/components/Journey/journeyContexts/ContentContextProvider";

const PuzzlePiecePreview: FC = () => {
  const { currentPieceLoaded } = useContext(ContentContext);

  let currentPuzzlePiece = allTabData.find(
    ({ id }) => id == currentPieceLoaded
  );

  const router = useRouter();
  console.log(router.asPath);
  console.log(router.query);
  return (
    <div>
      
        <Link href={`${router.asPath}/confusions/${currentPieceLoaded}`}>
          <div className="w-full flex justify-center gap-x-[10px]">
            <div className="flex flex-col items-start gap-y-[5px] w-[350px]">
              <p className="text-[16px] text-black/50">{`Unpuzzle ${getTime(
                currentPuzzlePiece?.time as number
              )}`}</p>
              <p className="text-black/80 text-[16px] leading-[19.2px]">
                {currentPuzzlePiece?.title as string}
              </p>
            </div>
            <div
              className="w-[151px] h-[91px] flex justify-center items-center 
      bg-[#C4C4C4] 
      rounded-[5px]"
            >
              <Image
                src={currentPlayIcon.src}
                width={45}
                height={45}
                alt="Play Icon"
              />
            </div>
          </div>
        </Link>
 
    </div>
  );
};

export default PuzzlePiecePreview;
