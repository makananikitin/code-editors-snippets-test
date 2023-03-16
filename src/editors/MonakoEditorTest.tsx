import Editor from "@monaco-editor/react";
import { listing } from "../test";

export const MonakoEditorTest = () => {
  return (
    <Editor theme="vs-dark" height="30vh" width="30vw" defaultLanguage="typescript" defaultValue={listing} />
  );
};
