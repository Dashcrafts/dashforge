import VerticalLayout from "@/layouts/Vertical";
import React, { useEffect } from "react";
import Dashboard from "../Dashboard";
import { useLayoutContext } from "@/context/useLayoutContext";
const FullView = () => {
  const { changeMenuSize } = useLayoutContext();
  useEffect(() => {
    changeMenuSize("full");
  }, []);
  return (
    <VerticalLayout>
      <Dashboard />
    </VerticalLayout>
  );
};
export default FullView;
