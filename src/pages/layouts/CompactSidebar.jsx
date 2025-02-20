import VerticalLayout from "@/layouts/Vertical";
import React, { useEffect } from "react";
import Dashboard from "../Dashboard";
import { useLayoutContext } from "@/context/useLayoutContext";
const CompactSidebar = () => {
  const { changeMenuSize } = useLayoutContext();
  useEffect(() => {
    changeMenuSize("compact");
  }, []);
  return (
    <VerticalLayout>
      <Dashboard />
    </VerticalLayout>
  );
};
export default CompactSidebar;
