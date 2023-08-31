// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { AnyAction } from 'redux';
import { ActionType, InitialStateWallet } from '../../types/types';

import {
  CURRENCIES_UPDATE_STARTED,
  CURRENCIES_UPDATE_SUCESS,
  CURRENCIES_UPDATE_FAIL,
} from '../actions';

const INITIAL_STATE:InitialStateWallet = {
  isFetching: false,
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

const walletReducer = (state = INITIAL_STATE, action:ActionType) => {
  switch (action.type) {
    case CURRENCIES_UPDATE_STARTED:
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
    case CURRENCIES_UPDATE_FAIL:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default walletReducer;
