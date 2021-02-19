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
  RESET_STATE
} from "./index";

export const changeName = (change_Name) => ({ type: CHANGE_NAME, change_Name });
export const changeEmail = (change_Email) => ({
  type: CHANGE_EMAIL,
  change_Email,
});
export const changeCpf = (change_Cpf) => ({ type: CHANGE_CPF, change_Cpf });
export const changeAddress = (change_Address) => ({
  type: CHANGE_ADDRESS,
  change_Address,
});
export const changeCity = (change_City) => ({ type: CHANGE_CITY, change_City });
export const changeState = (change_State) => ({
  type: CHANGE_STATE,
  change_State,
});
export const changeHouse = (change_House ) => ({
  type: CHANGE_HOUSE,
  change_House,
});
export const changeApartment = (change_Apartment) => ({
  type: CHANGE_APARTMENT,
  change_Apartment,
});
export const changeSummary = (change_Summary) => ({
  type: CHANGE_SUMMARY,
  change_Summary,
});
export const changeRole = (change_Role) => ({ type: CHANGE_ROLE, change_Role });
export const changeDescription = (change_Description) => ({
  type: CHANGE_DESCRIPTION,
  change_Description,
});
export const resetState = (reset_State) => ({
  type: RESET_STATE,
  reset_State,
  
});
