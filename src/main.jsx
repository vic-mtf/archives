import React from "react";
import ReactDOM from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import store from "./redux/store";
import "./styles/index.css";
import App from "./App";
import ConfigAppWrapper from "./utils/ConfigAppWrapper";
import { snackbarComponents } from "./components/ReportComplete";
import { SnackbarProvider } from "notistack";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <ConfigAppWrapper>
        <SnackbarProvider Components={snackbarComponents}>
          <App />
        </SnackbarProvider>
      </ConfigAppWrapper>
    </ReduxProvider>
  </React.StrictMode>
);
