import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import Logo from '../logo/Logo';

import styles from './header.module.css';

import iconMoedas from '../../assets/Moedas.svg';
import iconPerfil from '../../assets/perfil.svg';
import { ExpensesType, ReduxState } from '../../types/types';

const loading = 'Carregando...';

function Header() {
  const globalState = useSelector((state:ReduxState) => state);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  });

  const sumTotalExpenses = () => {
    const expense:ExpensesType[] = globalState.wallet.expenses;

    return expense.reduce((acc, curr) => {
      const moeda = Number(curr.exchangeRates[curr.currency].ask);
      const valueExpense:number = Number(curr.value);
      acc += (moeda * valueExpense);
      return acc;
    }, 0);
  };

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
          {sumTotalExpenses().toFixed(2)}
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
          {isLoading ? loading : globalState.user.email}
        </p>
      </div>
    </header>
  );
}

export default Header;
