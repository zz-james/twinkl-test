import React, { Fragment } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import Piece from "./Piece";

import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <Fragment>
        <Piece />
      </Fragment>
    </Provider>
  );
};

render(<App />, document.getElementById("root"));
