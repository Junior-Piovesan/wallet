// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ActionType, InitialStateWallet } from '../../types/types';

import {
  CURRENCIES_UPDATE_STARTED,
  CURRENCIES_UPDATE_SUCESS,
  CURRENCIES_UPDATE_FAIL,
  // ADD_EXPENSE,
  QUOTATION_UPDATE_STARTED,
  QUOTATION_UPDATE_SUCESS,
  QUOTATION_UPDATE_FAIL,
  DELETE_EXPENSE,
  UPDATE_EXPENSE,
  UPADATE_FORM_EDIT,
  ADD_EXPENSE_EDIT,
} from '../actions';

export const INITIAL_STATE_EXPENSE_EDIT = {
  id: 0,
  value: '',
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
  exchangeRates: {},
};

const INITIAL_STATE:InitialStateWallet = {
  isFetching: false,
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
  edit: false,
  expenseEdit: INITIAL_STATE_EXPENSE_EDIT,
};

const walletReducer = (state = INITIAL_STATE, action:ActionType) => {
  switch (action.type) {
    case CURRENCIES_UPDATE_STARTED || QUOTATION_UPDATE_STARTED:
      return {
        ...state,
        isFetching: true,
      };
    case CURRENCIES_UPDATE_SUCESS:
      return {
        ...state,
        isFetching: false,
        currencies: action.payload,
      };
    case CURRENCIES_UPDATE_FAIL || QUOTATION_UPDATE_FAIL:
      return {
        ...state,
        isFetching: false,
      };
    case QUOTATION_UPDATE_SUCESS:
      return {
        ...state,
        isFetching: false,
        expenses: [...state.expenses, action.payload],
      };

    case DELETE_EXPENSE: {
      const newExpenseList = state.expenses.filter((exp) => exp.id !== action.payload);
      return {
        ...state,
        expenses: newExpenseList,
      };
    }
    case UPDATE_EXPENSE:
      return {
        ...state,
        expenses: action.payload,
      };
    case UPADATE_FORM_EDIT:
      return {
        ...state,
        edit: action.payload,
      };
    case ADD_EXPENSE_EDIT:
      return {
        ...state,
        expenseEdit: action.payload,
      };
    default:
      return state;
  }
};

export default walletReducer;
