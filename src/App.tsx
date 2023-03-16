import "./App.css";
import { AceEditorTest } from "./editors/AceEditorTest";
import { CodeMirrorEditorTest } from "./editors/CodeMirrorEditorTest";
import { MonakoEditorTest } from "./editors/MonakoEditorTest";
import { HighlightHighlightTest } from "./highlighters/HighlightHighlightTest";
import { PrismHighlightTest } from "./highlighters/PrismHighlightTest";

function App() {
  return (
    <div className="app">
      <h1>Editors</h1>
      <div className="app-content">
        <div className="app-col">
          <h2>
            <a
              href="https://www.npmjs.com/package/monaco-editor"
              target="_blank"
              rel="noreferrer"
            >
              Monako Editor
            </a>
          </h2>
          <MonakoEditorTest />
        </div>
        <div className="app-col">
          <h2>
            <a
              href="https://www.npmjs.com/package/react-ace"
              target="_blank"
              rel="noreferrer"
            >
              Ace
            </a>
          </h2>
          <AceEditorTest />
        </div>
        <div className="app-col">
          <h2>
            <a
              href="https://www.npmjs.com/package/react-ace"
              target="_blank"
              rel="noreferrer"
            >
              Code Mirror
            </a>
          </h2>
          <CodeMirrorEditorTest />
        </div>
      </div>
      <p>
        <a
          href="https://css-tricks.com/creating-an-editable-textarea-that-supports-syntax-highlighted-code/"
          target="_blank"
          rel="noreferrer"
        >
          Alterantive way
        </a>
      </p>
      <h1>Highlighters</h1>
      <div className="app-content">
        <div className="app-col">
          <h2>
            <a
              href="https://www.npmjs.com/package/prismjs"
              target="_blank"
              rel="noreferrer"
            >
              Prism JS
            </a>
          </h2>
          <PrismHighlightTest />
        </div>
        <div className="app-col">
          <h2>
            <a
              href="https://www.npmjs.com/package/highlight.js"
              target="_blank"
              rel="noreferrer"
            >
              Highlight JS
            </a>
          </h2>
          <HighlightHighlightTest />
        </div>
      </div>
      <p>
        <a
          href="https://openbase.com/categories/js/best-vanilla-javascript-syntax-highlighting-libraries?vs=prismjs%2Chighlight.js%2Crainbow-code"
          target="_blank"
          rel="noreferrer"
        >
          TOP 3
        </a>
      </p>
    </div>
  );
}

export default App;
