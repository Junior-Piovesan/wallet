import { ExpensesType } from '../../types/types';

// actions do reducer user
export const USER_INFO_UPDATE = 'USER_INFO_UPDATE';

export const userActionCreator = (userInfo:string) => {
  return {
    type: USER_INFO_UPDATE,
    payload: userInfo,
  };
};

// actions do reducer wallet
export const CURRENCIES_UPDATE_STARTED = 'CURRENCIES_UPDATE_STARTED';

export const CURRENCIES_UPDATE_SUCESS = 'CURRENCIES_UPDATE_SUCESS';

export const CURRENCIES_UPDATE_FAIL = 'CURRENCIES_UPDATE_FAIL';

// actions do fetch quotation
export const QUOTATION_UPDATE_STARTED = 'QUOTATION_UPDATE_STARTED';

export const QUOTATION_UPDATE_SUCESS = 'QUOTATION_UPDATE_SUCESS';

export const QUOTATION_UPDATE_FAIL = 'QUOTATION_UPDATE_FAIL';

// action para deletar despesa
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const UPDATE_EXPENSE = 'UPDATE_EXPENSE';

// action para mudar o formulario de editar
export const UPADATE_FORM_EDIT = 'UPADATE_FORM_EDIT';

// action para pegar a despesa a ser editada e adicionar no estado global
export const ADD_EXPENSE_EDIT = 'ADD_EXPENSE_EDIT';

// action adicionar nova despesa
// export const ADD_EXPENSE = 'ADD_EXPENSE';

// actionCreators reducer wallet para buscar currencies
export const walletActionStarted = () => {
  return {
    type: CURRENCIES_UPDATE_STARTED,
  };
};

export const walletActionSucess = (currencies:string []) => {
  return {
    type: CURRENCIES_UPDATE_SUCESS,
    payload: currencies,
  };
};

export const walletActionFail = () => {
  return {
    type: CURRENCIES_UPDATE_FAIL,
  };
};

// actionsCreators para buscar a cotação no momento de adicionar nova despesa
export const actionGetQuotationStart = () => {
  return {
    type: QUOTATION_UPDATE_STARTED,
  };
};

export const actionGetQuotationSucess = (expense: ExpensesType, quotation:object) => {
  return {
    type: QUOTATION_UPDATE_SUCESS,
    payload: { ...expense, exchangeRates: quotation },
  };
};

export const actionGetQuotationFail = () => {
  return {
    type: QUOTATION_UPDATE_FAIL,
  };
};

// action creator para excluir uma despesa
export const actionExpenseDelete = (id:number) => {
  return {
    type: DELETE_EXPENSE,
    payload: id,

  };
};

// action creator para excluir uma despesa
export const actionUpdateExpense = (expenseList:ExpensesType[]) => {
  return {
    type: UPDATE_EXPENSE,
    payload: expenseList,

  };
};

// actionCreator para mudar o formulario de editar
export const actionUpadteFormEdit = (isEdit:boolean) => {
  return {
    type: UPADATE_FORM_EDIT,
    payload: isEdit,
  };
};

// actionCreator para pegar a despesa a ser editada e adicionar no estado global
export const actionAddExpenseEdit = (expense:ExpensesType) => {
  return {
    type: ADD_EXPENSE_EDIT,
    payload: expense,
  };
};
