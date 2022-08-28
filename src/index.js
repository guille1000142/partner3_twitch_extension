import * as React from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes, HashRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Layout from "./components/Layout";
import Panel from "./views/panel";
import Donation from "./views/donation";
import Prediction from "./views/prediction";
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("hi");
root.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Panel />} />
        <Route path="donation" element={<Donation />} />
        <Route path="prediction" element={<Prediction />} />
      </Route>
      {/* <Route path="/config" element={<Layout />} />
        <Route path="*" element={<Navigate replace to="/" />} /> */}
    </Routes>
  </HashRouter>
);

reportWebVitals();
