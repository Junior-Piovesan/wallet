import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import validEmail from './utils/validInfo';

import iconMoney from '../assets/🦆 emoji _money with wings_.svg';

import { USER_INFO_UPDATE, userActionCreator } from '../redux/actions';

const INITIAL_STATE = {
  email: '',
  senha: '',
};

function Login() {
  const [user, setUser] = useState(INITIAL_STATE);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (
    { target: { name, value } }:React.ChangeEvent<HTMLInputElement>,
  ) => {
    setUser({
      ...user,
      [name]: value,
    });
  };

  const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(userActionCreator(user.email));
    navigate('/carteira');
  };

  return (
    <section>
      <div>
        <img src={ iconMoney } alt="Icone de dinheiro" />
        <h1>Trybe Wallete</h1>

      </div>

      <form
        onSubmit={ (e) => onSubmit(e) }
      >
        <label htmlFor="email">
          <input
            onChange={ handleChange }
            data-testid="email-input"
            placeholder="Email"
            name="email"
            value={ user.email }
            type="text"
            id="email"
          />
        </label>

        <label htmlFor="senha">
          <input
            onChange={ handleChange }
            data-testid="password-input"
            placeholder="Senha"
            name="senha"
            value={ user.senha }
            type="text"
            id="senha"
          />

        </label>
        <button
          disabled={ !validEmail(user) }
        >
          Entrar
        </button>
      </form>
    </section>

  );
}

export default Login;
