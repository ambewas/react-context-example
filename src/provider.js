import React from "react";
import { Provider } from "./context";

const ContextProvider = ({ children }) => (
  <Provider value={"hello world"}>{children}</Provider>
);

export default ContextProvider;
