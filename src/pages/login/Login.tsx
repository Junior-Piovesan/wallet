import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import validEmail from '../../utils/validInfo';

import { userActionCreator } from '../../redux/actions';

import styles from './login.module.css';
import Logo from '../../components/logo/Logo';

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
    <section className={ styles.containerRoot }>
      <div className={ styles.container }>

        <Logo />

        <form
          onSubmit={ (e) => onSubmit(e) }
          className={ styles.formContainer }
        >
          <input
            className={ styles.input }
            onChange={ handleChange }
            data-testid="email-input"
            placeholder="Email"
            name="email"
            value={ user.email }
            type="text"
          />

          <input
            className={ styles.input }
            onChange={ handleChange }
            data-testid="password-input"
            placeholder="Senha"
            name="senha"
            value={ user.senha }
            type="text"
          />

          <button
            className={ styles.button }
            disabled={ !validEmail(user) }
          >
            Entrar
          </button>
        </form>
      </div>

    </section>

  );
}

export default Login;
