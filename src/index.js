import "~/config/ReactotronConfig";
import "~/config/StatusBarConfig";

import React from "react";
import { Provider } from "react-redux";
import { View, Text } from "react-native";

import TrackPlayer from "react-native-track-player";

import Routes from "./routes";

import store from "./store";

import Player from "./components/Player";

const App = () => (
  <Provider store={store}>
    <Routes />
    <Player />
  </Provider>
);

export default App;
