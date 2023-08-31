// Coloque aqui suas actions do reducer user
export const USER_INFO_UPDATE = 'USER_INFO_UPDATE';

export const userActionCreator = (userInfo:string) => {
  return {
    type: USER_INFO_UPDATE,
    payload: userInfo,
  };
};

// Coloque aqui suas actions do reducer wallet
export const CURRENCIES_UPDATE = 'CURRENCIES_UPDATE';

export const walletActionThunk = (currenciesInfo) => {

}