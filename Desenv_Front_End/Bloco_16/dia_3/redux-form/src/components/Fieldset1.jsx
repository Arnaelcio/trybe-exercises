import React, { Component } from "react";
import { connect } from "react-redux";
import "./Fieldset1.css";
import {
  changeName,
  changeEmail,
  changeCpf,
  changeAddress,
  changeCity,
  changeState,
  changeHouse,
  changeApartment,
} from "../actions/changeFieldsets";

class Fieldset1 extends Component {
changeCheckedBtnHouse(target) {
  const btnHouse = document.getElementsByClassName('input-housing-house')
  const btnAp = document.getElementsByClassName('input-housing-apartment')
  btnHouse[0].checked = true
  btnAp[0].checked = false
  this.props.get_housing_house(target)
}
changeCheckedBtnApartment(target) {
  const btnHouse = document.getElementsByClassName('input-housing-house')
  const btnAp = document.getElementsByClassName('input-housing-apartment')
  btnAp[0].checked = true
  btnHouse[0].checked = false
  this.props.get_housing_apartment(target)
  
}

  render() {
    return (
      <div className='fieldset-one'>
        <fieldset id="data">
          <legend>DADOS:</legend>
          <label htmlFor="name">
            <legend>Nome:</legend>
            <input
              onChange={({ target }) => this.props.get_name(target.value)}
              id="name"
              maxLength="40"
              type="text"
              required="true"
            />
          </label>
          <label htmlFor="email">
            <legend>Email:</legend>
            <input
              onChange={({ target }) => this.props.get_email(target.value)}
              id="email"
              maxLength="50"
              type="text"
              required="true"
            />
          </label>
          <label htmlFor="cpf">
            <legend>CPF:</legend>
            <input
              onChange={({ target }) => this.props.get_cpf(target.value)}
              id="cpf"
              maxLength="11"
              type="text"
              required="true"
            />
          </label>
          <label htmlFor="address">
            <legend>Endereço:</legend>
            <input
              onChange={({ target }) => this.props.get_address(target.value)}
              id="address"
              maxLength="200"
              type="text"
              required="true"
            />
          </label>
          <label htmlFor="city">
            <legend>Cidade:</legend>
            <input
              onChange={({ target }) => this.props.get_city(target.value)}
              id="city"
              maxLength="28"
              type="text"
              required="true"
            />
          </label>
          <label className="states" htmlFor="states">
            <legend>Estado:</legend>
            <select
              onChange={({ target }) => this.props.get_state(target.value)}
              name="brasil-states"
              required="true"
            >
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AP">Amapá</option>
              <option value="AM">Amazonas</option>
              <option value="BA">Bahia</option>
              <option value="CE">Ceará</option>
              <option value="DF">Distrito Federal</option>
              <option value="ES">Espírito Santo</option>
              <option value="GO">Goiás</option>
              <option value="MA">Maranhão</option>
              <option value="MT">Mato Grosso</option>
              <option value="MS">Mato Grosso do Sul</option>
              <option value="MG">Minas Gerais</option>
              <option value="PA">Pará</option>
              <option value="PB">Paraíba</option>
              <option value="PR">Paraná</option>
              <option value="PE">Pernambuco</option>
              <option value="PI">Piauí</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="RN">Rio Grande do Norte</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="RO">Rondônia</option>
              <option value="RR">Roraima</option>
              <option value="SC">Santa Catarina</option>
              <option value="SP">São Paulo</option>
              <option value="SE">Sergipe</option>
              <option value="TO">Tocantins</option>
            </select>
          </label>
          <div className="housing" htmlFor="housing">
            <legend>Habitação:</legend>
            <label className="housing-house" htmlFor="housing-house">
              Casa
            </label>
            <input
              onClick= {({target}) =>this.changeCheckedBtnHouse(target.value)}
              value="Casa"
              className="input-housing-house"
              type="radio"
              id="housing-house"
              required="true"
            />
            <label className="housing-apartment" htmlFor="housing-apartment">
              Apartamento
            </label>
            <input
              onClick={({target})=> this.changeCheckedBtnApartment(target.value)}
              
              value="Apartamento"
              className="input-housing-apartment"
              type="radio"
              id="housing-apartment"
              required="true"
            />
          </div>
        </fieldset>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  Nome: state.change_Name,
  Email: state.change_Email,
  CPF: state.change_Cpf,
  Endereço: state.change_Address,
  Cidade: state.change_City,
  Estado: state.change_State,
  Casa: state.change_House,
  Apartamento: state.change_Apartment,
});
const mapDispatchToProps = (dispatch) => ({
  get_name: (change_Name) => dispatch(changeName(change_Name)),
  get_email: (change_Email) => dispatch(changeEmail(change_Email)),
  get_cpf: (change_Cpf) => dispatch(changeCpf(change_Cpf)),
  get_address: (change_Address) => dispatch(changeAddress(change_Address)),
  get_city: (change_City) => dispatch(changeCity(change_City)),
  get_state: (change_State) => dispatch(changeState(change_State)),
  get_housing_house: (change_House) =>
    dispatch(changeHouse(change_House)),
  get_housing_apartment: (change_Apartment) =>
    dispatch(changeApartment(change_Apartment)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Fieldset1);
