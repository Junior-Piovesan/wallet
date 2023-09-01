import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState, ChangeEvent, FormEvent } from 'react';

import { Dispatch, ExpensesType, ReduxState } from '../../types/types';

import fetchCurrencies from '../../utils/fetchCurrencies';
import getQuotationAddExpense from '../../utils/fetchQuotation';
// import { actionAddExpense } from '../../redux/actions';

const INITIAL_STATE = {
  id: 0,
  value: '',
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
  exchangeRates: {},
};

type HandleType = ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;

function WalletForm() {
  const [expense, setExpense] = useState<ExpensesType>(INITIAL_STATE);

  const curries = useSelector((state:ReduxState) => state.wallet);
  const walletState = useSelector((state:ReduxState) => state.wallet.expenses);
  const dispatch: Dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrencies());
  }, []);

  const handleChange = ({
    target: { value, name } }:HandleType) => {
    const newExpense = {
      ...expense,
      id: walletState.length,
      [name]: value,
    };
    setExpense(newExpense);
  };

  const expensesValidation = () => {
    const valuesExpense = Object.values(expense);
    return valuesExpense.every((e) => e !== '');
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (expensesValidation()) {
      // dispatch(actionAddExpense(expense));
      dispatch(getQuotationAddExpense(expense));
      setExpense(INITIAL_STATE);
    }
  };

  return (

    <form onSubmit={ (event) => onSubmit(event) }>

      <div>

        <label htmlFor="description">
          Descrição da despesa
          <input
            onChange={ handleChange }
            data-testid="description-input"
            type="text"
            id="description"
            name="description"
            value={ expense.description }
          />
        </label>

        <label htmlFor="tag">
          Categoria da despesa
          <select
            onChange={ handleChange }
            data-testid="tag-input"
            name="tag"
            id="tag"
            value={ expense.tag }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>

        <label htmlFor="value">
          Valor
          <input
            onChange={ handleChange }
            data-testid="value-input"
            type="text"
            id="value"
            name="value"
            value={ expense.value > '0' ? expense.value : '' }
          />
        </label>

        <label htmlFor="method">
          Metodo de pagamento
          <select
            onChange={ handleChange }
            data-testid="method-input"
            name="method"
            id="method"
            value={ expense.method }

          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="currency">
          Moeda
          <select
            onChange={ handleChange }
            data-testid="currency-input"
            name="currency"
            id="currency"
            value={ expense.currency }
          >
            { curries.currencies.map((currency, index) => (
              <option key={ index } value={ currency }>{currency}</option>
            ))}
          </select>
        </label>

      </div>

      <button
        disabled={ !expensesValidation() }
      >
        Adicionar despesa

      </button>

    </form>

  );
}

export default WalletForm;
