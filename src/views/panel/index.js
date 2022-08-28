import React from "react";
import PanelCard from "./components/PanelCard";
import useUser from "../../hooks/useUser";
import useChannel from "../../hooks/useChannel";

export default function Panel() {
  useUser();
  useChannel();

  return <PanelCard />;
}
