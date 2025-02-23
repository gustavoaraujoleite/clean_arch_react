import React from "react";
import ReactDOM from "react-dom/client";
import { Login } from "@/presentation/pages";

if (typeof document !== "undefined") {
  const rootElement = document.getElementById("main");

  if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(<Login />);
  }
}
