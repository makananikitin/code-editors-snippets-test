import Prism from "prismjs";
import { listing } from "../test";
import 'prismjs/themes/prism-tomorrow.css'
import { useEffect } from "react";

export const PrismHighlightTest = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  
  return (
    <pre className="language-javascript">
      <code>{listing.substring(0, 92)}</code>
    </pre>
  );
};
