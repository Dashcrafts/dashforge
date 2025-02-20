import VerticalLayout from "@/layouts/Vertical";
import React, { useEffect } from "react";
import Dashboard from "../Dashboard";
import { useLayoutContext } from "@/context/useLayoutContext";
const IconView = () => {
  const { changeMenuSize } = useLayoutContext();
  useEffect(() => {
    changeMenuSize("condensed");
  }, []);
  return (
    <VerticalLayout>
      <Dashboard />
    </VerticalLayout>
  );
};
export default IconView;
