import "~/config/ReactotronConfig";
import "~/config/StatusBarConfig";

import React from "react";
import { Provider } from "react-redux";
import { View } from "react-native";

import Routes from "./routes";

import store from "./store";

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
