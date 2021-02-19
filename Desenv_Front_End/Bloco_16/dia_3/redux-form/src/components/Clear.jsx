import React, { Component } from "react";
import { connect } from 'react-redux'
import "./Clear.css";

import "./Fieldset1.css";
import { resetState } from "../actions/changeFieldsets";

class Clear extends Component {
  clear() {
    const congrats = document.getElementById("congrat");
    const div = document.getElementById("div");
    // const filedsetTwo = document.querySelector(".fieldset-two");
    if (congrats.className.includes("hidden")) {
      congrats.classList.toggle("show");
      div.classList.toggle("hidden");
    }
    this.props.reset_state()
  }
  render() {
    return (
      <div>
        <button onClick={() => this.clear()} className="clear">
          Limpar
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
    reset: state.reset_State,
  })

  const mapDispatchToProps = (dispatch) => ({
    reset_state:(reset_State) => dispatch(resetState(reset_State))
  });
  export default connect(mapStateToProps, mapDispatchToProps )(Clear);
  