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

// actionCreators reducer wallet para adicionar nova despesa
// export const actionAddExpense = (expense:ExpensesType) => {
//   return {
//     type: ADD_EXPENSE,
//     payload: expense,
//   };
// };

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
