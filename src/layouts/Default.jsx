import { useEffect, Suspense } from "react";

// utils
import { changeHTMLAttribute } from "../utils";
import { useLayoutContext } from "@/context/useLayoutContext";
const loading = () => <div />;
const DefaultLayout = (props) => {
  const { theme } = useLayoutContext();
  useEffect(() => {
    changeHTMLAttribute("data-bs-theme", theme);
  }, [theme]);

  // get the child view which we would like to render
  const children = props["children"] || null;
  return (
    <>
      <Suspense fallback={loading()}>{children}</Suspense>
    </>
  );
};
export default DefaultLayout;
