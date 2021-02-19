import React, { Component } from "react";
import { connect } from "react-redux";
import "./Fieldset2.css";
import {
  changeSummary,
  changeRole,
  changeDescription,
} from "../actions/changeFieldsets";

class Fieldset2 extends Component {
  render() {
    return (
      <div className='fieldset-two'>
        <fieldset id="summary">
          <legend>EXPERIÊNCIA:</legend>
          <label htmlFor="resume-summary">
            <legend>Resumo:</legend>
            <textarea
              onChange={({ target }) => this.props.get_summary(target.value)}
              id="resume-summary"
              maxLength="1000"
              type="text"
              required="true"
            />
          </label>
          <label htmlFor="role">
            <legend>Cargo:</legend>
            <input
              onChange={({ target }) => this.props.get_role(target.value)}
              id="role"
              maxLength="40"
              type="text"
              required="true"
            />
          </label>
          <label htmlFor="job-description">
            <legend>Descrição do Cargo:</legend>
            <input
              onChange={({ target }) =>
                this.props.get_description(target.value)
              }
              id="job-description"
              maxLength="500"
              type="text"
              required="true"
            />
          </label>
        </fieldset>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  Resumo: state.change_Summary,
  Cargo: state.change_Role,
  Descrição: state.change_Description,
});
const mapDispatchToProps = (dispatch) => ({
  get_summary: (change_Summary) => dispatch(changeSummary(change_Summary)),
  get_role: (change_Role) => dispatch(changeRole(change_Role)),
  get_description: (change_Description) =>
    dispatch(changeDescription(change_Description)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Fieldset2);
