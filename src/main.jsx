import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import store from "./redux/store";
import "./styles/index.css";
import App from "./App";
import ConfigAppProvider from "./components/ConfigAppProvider";
import NoticeStackProvider from "./components/NoticeStackProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <ReduxProvider store={store}>
      <ConfigAppProvider>
        <NoticeStackProvider>
          <App />
        </NoticeStackProvider>
      </ConfigAppProvider>
    </ReduxProvider>
  </StrictMode>
);
