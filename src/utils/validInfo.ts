type UserInfoType = {
  email:string,
  senha:string
};

const validEmail = (userInfo: UserInfoType) => {
  const emailRegex: RegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(userInfo.email) && userInfo.senha.length >= 6;
};

export default validEmail;
