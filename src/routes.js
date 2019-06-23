import { createAppContainer, createStackNavigator } from "react-navigation";

import Main from "./pages/Main";
import Podcasts from "./pages/Podcasts";

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      Podcasts
    },
    {
      defaultNavigationOptions: {
        header: null
      }
    }
  )
);

export default Routes;
