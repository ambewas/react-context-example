import React from "react";
import { Consumer } from "./context";

const ContextConsumer = () => (
  <Consumer>{value => <div>{value}</div>}</Consumer>
);

export default ContextConsumer;
