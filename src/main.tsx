import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "bootstrap";
import "./globals.css";
import PhosphorIconsLoader from "./helper/PhosphorIconsLoader.tsx";

createRoot(document.getElementById("root")!).render(
  <>
    <PhosphorIconsLoader />
    <App />
  </>
);
