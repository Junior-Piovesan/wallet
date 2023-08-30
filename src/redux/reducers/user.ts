import { USER_INFO_UPDATE } from '../actions';

const InitialStateUser = {
  email: '',
};

type ActionType = {
  type:string
  payload:string
};

// Esse reducer será responsável por tratar as informações da pessoa usuária
const userReducer = (state = InitialStateUser, action:ActionType) => {
  switch (action.type) {
    case USER_INFO_UPDATE:
      return {
        ...state,
        email: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
