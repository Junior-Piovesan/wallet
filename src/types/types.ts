import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

export type ExpensesType = {
  id:number,
  value:string,
  currency:string,
  method:string,
  tag: string,
  description:string,
  // exchangeRates:object
};

export type ActionType = {
  type: string,
  payload:string[] | boolean | string
};

export type InitialStateWallet = {
  isFetching:boolean,
  currencies: string[],
  expenses: ExpensesType[],
  editor: boolean,
  idToEdit: number,
};

export type ReduxState = {
  user: {
    email:string
  },
  wallet:{
    isFetching:boolean,
    currencies: string[],
    expenses: ExpensesType[],
    editor: boolean,
    idToEdit: number,
  }
};

export type Dispatch = ThunkDispatch<ReduxState, null, AnyAction>;
