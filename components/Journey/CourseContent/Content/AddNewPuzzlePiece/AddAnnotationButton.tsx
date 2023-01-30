import React, { FC } from "react";
import Button from "../../../../Button";

interface addAnnotationButtonProps {
  active: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const AddAnnotationButton: FC<addAnnotationButtonProps> = ({
  active,
  onClick,
}) => {
  return (
    <Button
      bgColor={active ? "bg-[#1CABF2]" : "bg-black/50"}
      textColor="text-white"
      className="text-base"
      disabled={!active}
      onClick={onClick}
    >
      Add Annotation @02:30
    </Button>
  );
};

export default AddAnnotationButton;
