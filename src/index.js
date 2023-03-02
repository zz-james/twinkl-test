import React, { Fragment } from "react";
import { render } from "react-dom";
import Piece from "./Piece";

const App = () => {
  return (
    <Fragment>
      <Piece />
    </Fragment>
  );
};

render(<App />, document.getElementById("root"));
