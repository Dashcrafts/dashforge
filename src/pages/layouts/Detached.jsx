import { useLayoutContext } from "@/context/useLayoutContext";
import { useEffect } from "react";
import Dashboard from "../Dashboard";
import VerticalLayout from "@/layouts/Vertical";
const Detached = () => {
  const { changeLayoutMode } = useLayoutContext();
  useEffect(() => {
    changeLayoutMode("detached");
  }, []);
  return (
    <>
      <VerticalLayout>
        <Dashboard />
      </VerticalLayout>
    </>
  );
};
export default Detached;
