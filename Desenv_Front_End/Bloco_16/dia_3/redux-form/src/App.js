import React from "react";
import { Provider } from "react-redux";
import Fieldset1 from "./components/Fieldset1";
import Fieldset2 from "./components/Fieldset2";
import Submit from "./components/Submit";
import Clear from "./components/Clear";
import store from "./store";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <h1>Simpou formi usin Riáquiti riduquis : D</h1>
        <div id="congrat" className="hidden"></div>
        <div id="div">
          <Fieldset1 />
          <Fieldset2 />
        </div>
        <Submit />
        <Clear />
      </Provider>
    </div>
  );
}

export default App;
