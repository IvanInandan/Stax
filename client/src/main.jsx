import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";

// Import Mantine UI
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Router>
      <MantineProvider
        theme={{ primaryColor: "teal" }}
        defaultColorScheme="dark"
      >
        <App />
      </MantineProvider>
    </Router>
  </Provider>
);
