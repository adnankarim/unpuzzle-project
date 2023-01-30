import React, { FC, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { EditorState } from "draft-js";
import { convertToHTML } from "draft-convert";
import DOMPurify from "isomorphic-dompurify";
import AddAnnotationButton from "./AddAnnotationButton";

const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const createMarkup = (html: string) => {
  return { __html: DOMPurify.sanitize(html) };
};

const GuideAnnotationContent: FC = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const [convertedContent, setConvertedContent] = useState<null | string>(null);

  useEffect(() => {
    const currentContent = editorState.getCurrentContent();
    console.log(editorState);
    let html = convertToHTML(currentContent);
    console.log(html);
    setConvertedContent(html);
  }, [editorState]);

  return (
    <div className="flex flex-col items-center gap-y-[10px]">
      <div>
        <Editor
          editorState={editorState}
          onEditorStateChange={setEditorState}
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          toolbarClassName="toolbar-class"
        />
      </div>
      <div
        className="mt-1 p-1"
        dangerouslySetInnerHTML={createMarkup(convertedContent as string)}
      ></div>
      <AddAnnotationButton active={Boolean(convertToHTML)} />
    </div>
  );
};

export default GuideAnnotationContent;
