// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { AnyAction } from 'redux';
import { InitialStateWallet } from '../../types/types';

const INITIAL_STATE:InitialStateWallet = {
  isFetching: false,
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

const walletReducer = (state = INITIAL_STATE, action:AnyAction) => state;

export default walletReducer;
