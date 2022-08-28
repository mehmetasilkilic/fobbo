import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Provider } from "react-redux";

import Layout from "./Layout";

import { store } from "./src/store/store";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <Layout />
      </Provider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
