import { useLayoutContext } from "@/context/useLayoutContext";
import VerticalLayout from "@/layouts/Vertical";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "../Dashboard";
const DarkMode = () => {
  const navigation = useNavigate();
  const { changeTheme } = useLayoutContext();
  useEffect(() => {
    changeTheme("dark");
    navigation("/dark-mode");
  }, [navigation]);
  return (
    <>
      <VerticalLayout>
        <Dashboard />
      </VerticalLayout>
    </>
  );
};
export default DarkMode;
