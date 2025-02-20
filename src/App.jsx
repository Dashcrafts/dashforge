import React from "react";
import AllRoutes from "./routes/Routes";
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

// styles
import "jsvectormap";
import "jsvectormap/dist/css/jsvectormap.min.css";
import "./assets/scss/app.scss";
import "./assets/scss/icons.scss";
import AppProvidersWrapper from "./components/AppProvidersWrapper";
import configureFakeBackend from "./helpers/fake-backend";

// configure fake backend
configureFakeBackend();
function App() {
  return (
    <>
      <React.Fragment>
        <AppProvidersWrapper>
          <AllRoutes />
        </AppProvidersWrapper>
      </React.Fragment>
    </>
  );
}
export default App;
