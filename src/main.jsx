import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { StudentProvider } from "./context/Context.jsx";

createRoot(document.getElementById("root")).render(
  <StudentProvider>
    <App />
  </StudentProvider>
);
