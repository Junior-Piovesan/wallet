import { Dispatch, ExpensesType } from '../types/types';

import {
  actionGetQuotationStart,
  actionGetQuotationSucess,
  actionGetQuotationFail,
} from '../redux/actions';
import { fetchCotacao } from './fetch';

export const getQuotationAddExpense = (expense:ExpensesType) => {
  return async (dispatch:Dispatch) => {
    try {
      dispatch(actionGetQuotationStart());

      // const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      // const data = await response.json();
      const data = await fetchCotacao();

      dispatch(actionGetQuotationSucess(expense, data));
    } catch (error) {
      dispatch(actionGetQuotationFail());
      console.log('erro ao buscar a cotação');
    }
  };
};

// export default getQuotationAddExpense;
