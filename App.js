import { StatusBar } from "expo-status-bar";
import React from "react";
import Main from "./components/Main";
//components for redux
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";

//creating the variable to configure the store
const store = ConfigureStore();

export default function App() {
  return (
    //wrapping the main component with the redux provider component
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
