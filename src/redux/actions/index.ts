// Coloque aqui suas actions
export const USER_INFO_UPDATE = 'USER_INFO_UPDATE';

export const userActionCreator = (userInfo:string) => {
  return {
    type: USER_INFO_UPDATE,
    payload: userInfo,
  };
};
