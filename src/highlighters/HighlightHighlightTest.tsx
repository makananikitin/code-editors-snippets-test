import Highlight from "react-highlight";
import 'highlight.js/styles/github-dark.css';
import { listing } from "../test";

export const HighlightHighlightTest = () => {
  return (
    <Highlight className="js">
      {listing.substring(0, 92)}
    </Highlight>
  );
};
