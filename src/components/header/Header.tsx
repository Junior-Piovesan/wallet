import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import Logo from '../logo/Logo';

import styles from './header.module.css';

import iconMoedas from '../../assets/Moedas.svg';
import iconPerfil from '../../assets/perfil.svg';

type GlobalState = {
  user: {
    email:string
  }
};

const loading = 'Carregando...';

function Header() {
  const globalState = useSelector((state:GlobalState) => state.user.email);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  });
  return (

    <header className={ styles.container }>
      <Logo />

      <div className={ styles.expensesBox }>
        <img
          className={ styles.expensesImage }
          src={ iconMoedas }
          alt="icone de moedas"
        />

        <p
          className={ styles.totalExpenses }
        >
          Total de despesas:
        </p>
        <p
          className={ styles.totalExpensesValue }
          data-testid="total-field"
        >
          {isLoading ? loading : '0'}
        </p>
        <p
          className={ styles.totalExpensesCurrency }
          data-testid="header-currency-field"
        >
          {isLoading ? '' : 'BRL'}
        </p>
      </div>

      <div className={ styles.userBox }>
        <img
          className={ styles.userImage }
          src={ iconPerfil }
          alt="icone de perfil"
        />
        <p
          className={ styles.userEmail }
          data-testid="email-field"
        >
          {isLoading ? loading : globalState}
        </p>
      </div>
    </header>
  );
}

export default Header;
