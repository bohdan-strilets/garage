import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import Layout from "./components/Layout/Layout.tsx";
import "./styles/index.css";

const root = document.getElementById("root") as HTMLDivElement;
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <App />
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
);
