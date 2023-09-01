import {
  walletActionFail,
  walletActionStarted,
  walletActionSucess,
} from '../redux/actions';
import { Dispatch,
  // ReduxState,
} from '../types/types';

// type GetState = () => ReduxState;

// thunk action creator
const fetchCurrencies = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(walletActionStarted());
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();
      const currenciesList = Object.keys(data).filter((e) => e !== 'USDT');
      // const currenciesList = Object.values(data);
      dispatch(walletActionSucess(currenciesList));
    } catch (error) {
      dispatch(walletActionFail());
      console.log('erro no fetch');
    }
  };
};

export default fetchCurrencies;
