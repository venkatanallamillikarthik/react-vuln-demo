import React from "react";
import { createRoot } from "react-dom/client";
import _ from "lodash";
import axios from "axios";

function App() {
  const arr = [1,2,3,4];
  const doubled = _.map(arr, (n) => n * 2); // uses lodash
  return (
    <div>
      <h1>React vuln demo</h1>
      <pre>{JSON.stringify(doubled)}</pre>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
