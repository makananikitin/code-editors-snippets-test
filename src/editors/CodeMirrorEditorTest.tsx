import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { listing } from "../test";

export const CodeMirrorEditorTest = () => {
  return (
    <CodeMirror
      theme="dark"
      value={listing}
      height="30vh"
      width="30vw"
      extensions={[javascript({ jsx: true })]}
    />
  );
};
