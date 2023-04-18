import  { FC, ReactNode, useState } from "react";

interface ReactionButtonProps {
  icon: ReactNode;
  number: number;
}

const ReactionButton: FC<ReactionButtonProps> = ({
  icon,
  number,
}) => {
  const [currentNumber, setCurrentNumber] = useState<number>(number);
  const [onceReacted, setOnceReacted] = useState<boolean>(false);

  const onClickHandler: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    if (!onceReacted) {
      setCurrentNumber((number) => ++number);
      setOnceReacted(true);
    } else {
      setCurrentNumber((number) => --number);
      setOnceReacted(false);
    }
  };

  return (
    <button
      className="flex items-center justify-center gap-x-[10px] w-[88.02px] h-[40px]"
      onClick={onClickHandler}
    >
      {icon}
      <p className="font-normal text-base text-black/60">{currentNumber}</p>
    </button>
  );
};

export default ReactionButton;
