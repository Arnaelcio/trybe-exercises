import {
  CHANGE_NAME,
  CHANGE_EMAIL,
  CHANGE_CPF,
  CHANGE_ADDRESS,
  CHANGE_CITY,
  CHANGE_STATE,
  CHANGE_HOUSE,
  CHANGE_APARTMENT,
  CHANGE_SUMMARY,
  CHANGE_ROLE,
  CHANGE_DESCRIPTION,
  RESET_STATE,
} from "../actions/index";

const INITIAL_STATE = {
  Nome: "",
  Email: "",
  CPF: "",
  Endereço: "",
  Cidade: "",
  Estado: "",
  Casa: '',
  Apartamento: '',
  Resumo: "",
  Cargo: "",
  Descrição: "",
  reset:''
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_NAME:
      return { ...state, Nome: action.change_Name };
    case CHANGE_EMAIL:
      return { ...state, Email: action.change_Email };
    case CHANGE_CPF:
      return { ...state, CPF: action.change_Cpf };
    case CHANGE_ADDRESS:
      return { ...state, Endereço: action.change_Address };
    case CHANGE_CITY:
      return { ...state, Cidade: action.change_City };
    case CHANGE_STATE:
      return { ...state, Estado: action.change_State };
    case CHANGE_HOUSE:
      return { ...state, Casa: action.change_House, Apartamento:'' };
      case CHANGE_APARTMENT:
        return { ...state, Apartamento: action.change_Apartment, Casa: '' };
    case CHANGE_SUMMARY:
      return { ...state, Resumo: action.change_Summary };
    case CHANGE_ROLE:
      return { ...state, Cargo: action.change_Role };
    case CHANGE_DESCRIPTION:
      return { ...state, Descrição: action.change_Description };
      case RESET_STATE:
        return { ...state = INITIAL_STATE };
    default:
      return state;
  }
}
