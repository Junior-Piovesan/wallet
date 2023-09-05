import { useDispatch, useSelector } from 'react-redux';
import { useState, FormEvent, useEffect } from 'react';

import { Dispatch, ExpensesType, ReduxState, HandleType } from '../../types/types';

import { getQuotationAddExpense } from '../../utils/fetchQuotation';
import expensesValidation from '../../utils/expenseValidation';

import styles from './walletForm.module.css';
import Form from '../form/Form';
import { actionUpadteFormEdit, actionUpdateExpense } from '../../redux/actions';

export const INITIAL_STATE = {
  id: 0,
  value: '',
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
  exchangeRates: {},
};

function WalletForm() {
  const [expenseWallet, setExpense] = useState<ExpensesType>(INITIAL_STATE);
  const [expenseEdit, setExpenseEdit] = useState<ExpensesType>(INITIAL_STATE);

  const walletState = useSelector((state:ReduxState) => state.wallet);
  const dispatch: Dispatch = useDispatch();

  useEffect(() => {
    setExpenseEdit(walletState.expenseEdit);
  }, [walletState.expenseEdit]);

  const handleChangeWallet = ({
    target: { value, name } }:HandleType) => {
    const newExpense = {
      ...expenseWallet,
      id: walletState.expenses.length,
      [name]: value,
    };
    setExpense(newExpense);
  };

  const onSubmitWallet = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (expensesValidation(expenseWallet)) {
      dispatch(getQuotationAddExpense(expenseWallet));
      setExpense(INITIAL_STATE);
    }
  };

  const onSubmitEdit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (expensesValidation(expenseEdit)) {
      const expenseList = walletState.expenses.filter((exp) => exp.id !== expenseEdit.id);
      const newExpenseList = [...expenseList, expenseEdit].sort((a, b) => a.id - b.id);
      dispatch(actionUpdateExpense(newExpenseList));
      setExpenseEdit(INITIAL_STATE);
      dispatch(actionUpadteFormEdit(false));
    }
  };

  const handleChangeEdit = ({
    target: { value, name } }:HandleType) => {
    const newExpense = {
      ...expenseEdit,
      id: expenseEdit.id,
      [name]: value,
    };
    setExpenseEdit(newExpense);
  };

  return (
    <section className={ styles.container }>
      {!walletState.edit ? (
        <Form
          onSubmit={ onSubmitWallet }
          handleChange={ handleChangeWallet }
          expense={ expenseWallet }
          styles={ styles }
        />
      ) : (
        <Form
          onSubmit={ onSubmitEdit }
          handleChange={ handleChangeEdit }
          expense={ expenseEdit }
          styles={ styles }
        />
      )}
    </section>

  );
}

export default WalletForm;
