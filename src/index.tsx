import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import "./index.css";
import AppRoutes from "Routes/routes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);
