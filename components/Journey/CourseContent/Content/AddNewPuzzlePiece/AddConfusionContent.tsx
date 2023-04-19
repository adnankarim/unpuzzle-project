import  { FC, useState } from "react";
import TitleInput from "../../../../TitleInput";
import AddAnnotationButton from "./AddAnnotationButton";

const AddConfusionContent: FC = () => {
  const [confusionTitle, setConfusionTitle] = useState<string>("");
  const [confusionDescription, setConfusionDescription] = useState<string>("");

  const descriptionChangeHandler: React.ChangeEventHandler<
    HTMLTextAreaElement
  > = (e) => {
    setConfusionDescription(e.target.value);
  };
  return (
    <div className="flex flex-col items-center gap-y-[10px]">
      <TitleInput
        textValue={confusionTitle}
        placeholder="Enter the title of your confusion..."
        setTextValue={setConfusionTitle}
      />
      <textarea
        placeholder="Explain your confusion in detail..."
        className="w-full border-[0.5px] border-black/60 rounded-[5px] py-[15px]
px-[10px] text-base text-black/50 resize-none"
        rows={4}
        cols={50}
        onChange={descriptionChangeHandler}
      ></textarea>
      <AddAnnotationButton
        active={Boolean(confusionTitle) && Boolean(confusionDescription)}
      />
    </div>
  );
};

export default AddConfusionContent;
