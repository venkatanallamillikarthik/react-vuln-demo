import React from "react";
import { createRoot } from "react-dom/client";

function App() {
  return <div><h1>React vuln demo</h1></div>;
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
