import React, { Component } from "react";
import "./Submit.css";
import store from "../store";

export default class Submit extends Component {
  show() {
    const congrats = document.getElementById("congrat");
    const div = document.getElementById("div");
    // const filedsetTwo = document.querySelector(".fieldset-two");
    if (congrats.className.includes("hidden")) {
      congrats.classList.toggle("show");
      div.classList.toggle("hidden");
    }
    const get = store.getState();
    congrats.innerHTML = `
        <fieldset style='height: 800px'id="data">
       <label style="
    font-weight: bold;">${Object.entries(get)[0][(0, 0)]}</label>
       <div style="align-self: start;margin-left: 30px;margin-bottom: 10px;">${
         Object.entries(get)[0][(0, 1)]
       }</div>
       <label style="
    font-weight: bold;">${Object.entries(get)[1][(0, 0)]}</label>
       <div style="align-self: start;margin-left: 30px;margin-bottom: 10px;">${
         Object.entries(get)[1][(0, 1)]
       }</div>
       <label style="
    font-weight: bold;">${Object.entries(get)[2][(0, 0)]}</label>
       <div style="align-self: start;margin-left: 30px;margin-bottom: 10px;">${
         Object.entries(get)[2][(0, 1)]
       }</div>
       <label style="
    font-weight: bold;">${Object.entries(get)[3][(0, 0)]}</label>
       <div style="align-self: start;margin-left: 30px;margin-bottom: 10px;">${
         Object.entries(get)[3][(0, 1)]
       }</div>
       <label style="
    font-weight: bold;">${Object.entries(get)[4][(0, 0)]}</label>
       <div style="align-self: start;margin-left: 30px;margin-bottom: 10px;">${
         Object.entries(get)[4][(0, 1)]
       }</div>
       <label style="
    font-weight: bold;">${Object.entries(get)[5][(0, 0)]}</label>
       <div style="align-self: start;margin-left: 30px;margin-bottom: 10px;">${
         Object.entries(get)[5][(0, 1)]
       }</div>
       <label style="
    font-weight: bold;">${Object.entries(get)[6][(0, 0)]}</label>
       <div style="align-self: start;margin-left: 30px;margin-bottom: 10px;">${
         Object.entries(get)[6][(0, 1)]
       }</div>
       <label style="
    font-weight: bold;">${Object.entries(get)[7][(0, 0)]}</label>
       <div style="align-self: start;margin-left: 30px;margin-bottom: 10px;">${
         Object.entries(get)[7][(0, 1)]
       }</div>
       <label style="
    font-weight: bold;">${Object.entries(get)[8][(0, 0)]}</label>
       <div style="align-self: start;margin-left: 30px;margin-bottom: 10px;">${
         Object.entries(get)[8][(0, 1)]
       }</div>
       <label style="
    font-weight: bold;">${Object.entries(get)[9][(0, 0)]}</label>
       <div style="align-self: start;margin-left: 30px;margin-bottom: 10px;">${
         Object.entries(get)[9][(0, 1)]
       }</div>
       <label style="
    font-weight: bold;">${Object.entries(get)[10][(0, 0)]}</label>
       <div style="align-self: start;margin-left: 30px;margin-bottom: 10px;">${
         Object.entries(get)[10][(0, 1)]
       }</div>
       </filedset>
   `;
  }
  render() {
    return (
      <div>
        <button onClick={() => this.show()} className="submit">
          Enviar
        </button>
      </div>
    );
  }
}
