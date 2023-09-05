import {
  walletActionFail,
  walletActionStarted,
  walletActionSucess,
} from '../redux/actions';

import { fetchCotacao } from './fetch';

import { Dispatch } from '../types/types';

// thunk action creator
const fetchCurrencies = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(walletActionStarted());
      const data = await fetchCotacao();
      const currenciesList = Object.keys(data).filter((e) => e !== 'USDT');
      dispatch(walletActionSucess(currenciesList));
    } catch (error) {
      dispatch(walletActionFail());
      console.log('erro no fetch');
    }
  };
};

export default fetchCurrencies;
