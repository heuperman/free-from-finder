import React from "react";
import { render } from "react-dom";
import "./styles.css";
import { Home } from "./Home";

const App = (): JSX.Element => <Home />;

render(<App />, document.getElementById("root"));
