import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import { Router } from "./app/components/Router"; // Importe o seu Router
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <Router>
    <App />
  </Router>
);