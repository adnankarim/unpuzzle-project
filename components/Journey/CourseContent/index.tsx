import { FC } from "react";
import CourseHeader from "./CourseHeader";
import CoursePlayer from "./CoursePlayer";
import Content from "./Content";

const CourseContent: FC = () => {
  return (
    <div className="">
      <CourseHeader />
      <div className="flex w-full">
        <CoursePlayer
          url="https://www.youtube.com/watch?v=2NKNjeB0WVs"
          thumbnail="https://s3-alpha-sig.figma.com/img/fbca/5a41/9d268153a0adbcc8fe381a808ee4b7f5?Expires=1670198400&Signature=SBx3ZlIKf5feD1iEWK2BywGpf-YPkntXK8~F3PcEoHP2DvZvtnBPlD~EwhipgS1w6TvpMu7ZtKc4KNByJdycMpXKuUPp6uQL8l1AUBoLh5FyOpDcM~woJhEEWWde514IdW53Qa0NkBPTWSzxv77xubFRUi8fN~7gy~jBmOIhhI~d8VFbiWnVy5L0QN3scmJCGFS2W1sClIiPOCyxeV~kyWwEKqP3wggfNm1boHb-vuxjQmgealVIUrLRuvlOnkdUfBtG6DheoNKhhW3~VQSRmiMoQRyGywLZvAQlIpbQELon1aeP7tbzf1BxgJg2u8FSfjnpJcyiQusqK3UP0QFXPQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        />
        <Content />
      </div>
    </div>
  );
};

export default CourseContent;
