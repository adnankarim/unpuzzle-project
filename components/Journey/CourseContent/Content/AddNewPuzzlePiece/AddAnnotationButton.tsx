import  { FC, useContext } from "react";
import Button from "../../../../Button";
import { ContentContext } from "../../../journeyContexts/ContentContextProvider";
import { getTime } from "../../../../helperFunctions";

interface addAnnotationButtonProps {
  active: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const AddAnnotationButton: FC<addAnnotationButtonProps> = ({
  active,
  onClick,
}) => {
  const { currentTime, setCurrentTime } = useContext(ContentContext);

  return (
    <Button
      bgColor={active ? "bg-[#1CABF2]" : "bg-black/50"}
      textColor="text-white"
      className="text-base"
      disabled={!active}
      onClick={onClick}
    >
      {`Add Annotation @${getTime(currentTime)}`}
    </Button>
  );
};

export default AddAnnotationButton;
