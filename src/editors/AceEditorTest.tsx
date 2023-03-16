import AceEditor from "react-ace";
import { listing } from "../test";

import "ace-builds/src-noconflict/mode-typescript";
import "ace-builds/src-noconflict/theme-tomorrow_night";
import "ace-builds/src-noconflict/ext-language_tools";

export const AceEditorTest = () => {
  return (
    <AceEditor
      mode="typescript"
      theme="tomorrow_night"
      name="UNIQUE_ID_OF_DIV"
      height="30vh"
      width="30vw"
      value={listing}
    />
  );
};
