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
