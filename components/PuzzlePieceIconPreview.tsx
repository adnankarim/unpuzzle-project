import { FC } from "react";
import TabVideoIcon from "./assets/svg/TabVideoIcon";
import TabAudioIcon from "./assets/svg/TabAudioIcon";
import TabImageIcon from "./assets/svg/TabImageIcon";
import TabGuideIcon from "./assets/svg/TabGuideIcon";
import {
  puzzlePieceIconPreviewProps,
  annotationIconType,
} from "../types/types";

const PuzzlePieceIconPreview: FC<puzzlePieceIconPreviewProps> = ({
  type,
  videoIcon = TabVideoIcon,
  audioIcon = TabAudioIcon,
  imageIcon = TabImageIcon,
  guideIcon = TabGuideIcon,
  mcqIcon,
  showLabel,
  iconColor = "text-black/60",
}) => {
  let Icon: annotationIconType | null = null;
  let label: string | null = null;
  switch (type) {
    case "video":
      Icon = videoIcon;
      label = "Video Annotation";
      break;
    case "audio":
      Icon = audioIcon;
      label = "Audio Annotation";
      break;
    case "image":
      Icon = imageIcon;
      label = "Image Annotation";
      break;
    case "guide":
      Icon = guideIcon;
      label = "Guide Annotation";
      break;
    case "mcq":
      Icon = mcqIcon as annotationIconType;
      label = "Guide Annotation";
      break;
    default:
      Icon = null;
      label = null;
  }

  return (
    <>
      {Icon && <Icon color={iconColor} />}
      {showLabel && (
        <p className="text-sm leading-[100%] text-black/60">{label}</p>
      )}
    </>
  );
};

export default PuzzlePieceIconPreview;
