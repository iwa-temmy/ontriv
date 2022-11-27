import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { NavProvider } from "./utils/context";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import configureStore from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

const configuredStore = configureStore();

ReactDOM.render(
  <Provider store={configuredStore.store}>
    <PersistGate loading={null} persistor={configuredStore.persistor}>
      <NavProvider>
        <App />
      </NavProvider>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
