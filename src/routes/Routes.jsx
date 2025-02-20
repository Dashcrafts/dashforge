import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

// All layouts containers
import DefaultLayout from "../layouts/Default";
import HorizontalLayout from "../layouts/Horizontal";
import VerticalLayout from "../layouts/Vertical";
import { useAuthContext } from "@/context/useAuthContext";
import { useLayoutContext } from "@/context/useLayoutContext";
import { authProtectedFlattenRoutes, publicProtectedFlattenRoutes } from ".";
const AllRoutes = (props) => {
  const { isAuthenticated } = useAuthContext();
  const { orientation } = useLayoutContext();
  const getLayout = () => {
    let layoutCls = VerticalLayout;
    switch (orientation) {
      case "horizontal":
        layoutCls = HorizontalLayout;
        break;
      default:
        layoutCls = VerticalLayout;
        break;
    }
    return layoutCls;
  };
  let GotLayout = getLayout();
  return (
    <React.Fragment>
      <Routes>
        <Route>
          {publicProtectedFlattenRoutes.map((route, idx) => (
            <Route
              path={route.path}
              element={
                <DefaultLayout {...props}>{route.element}</DefaultLayout>
              }
              key={idx}
            />
          ))}
          ;
        </Route>

        <Route>
          {authProtectedFlattenRoutes.map((route, idx) => (
            <Route
              path={route.path}
              element={
                !isAuthenticated ? (
                  <Navigate
                    to={{
                      pathname: "/auth/login",
                      search: "next=" + route.path,
                    }}
                  />
                ) : (
                  <GotLayout {...props}>{route.element}</GotLayout>
                )
              }
              key={idx}
            />
          ))}
          ;
        </Route>
      </Routes>
    </React.Fragment>
  );
};
export default AllRoutes;
