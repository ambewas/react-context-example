import React from "react";
import { Provider } from "./context";

const ContextProvider = ({ children }) => <Provider>{children}</Provider>;

// const ContextProvider = ({ children }) => (
//   <Provider value={"hello"}>{children}</Provider>
// );
export default ContextProvider;
