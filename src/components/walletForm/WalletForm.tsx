import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState, ChangeEvent } from 'react';

import { Dispatch, ExpensesType, ReduxState } from '../../types/types';

import fetchCurrencies from '../../utils/fetchCurrencies';

const INITIAL_STATE = {
  id: 0,
  value: '',
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
  // exchangeRates: {},
};

type HandleType = ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;

function WalletForm() {
  const [expense, setExpense] = useState<ExpensesType>(INITIAL_STATE);

  const curries = useSelector((state:ReduxState) => state.wallet);
  const dispatch: Dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrencies());
  }, []);

  const handleChange = ({
    target: { value, name } }:HandleType) => {
    const newExpense = {
      ...expense,
      [name]: value,
    };
    setExpense(newExpense);
    return console.log(value);
  };

  return (

    <form onSubmit={ (e) => e.preventDefault() }>

      <div>

        <label htmlFor="description">
          Descrição da despesa
          <input
            onChange={ handleChange }
            data-testid="description-input"
            type="text"
            id="description"
            name="description"
          />
        </label>

        <label htmlFor="tag">
          Categoria da despesa
          <select
            onChange={ handleChange }
            data-testid="tag-input"
            name="tag"
            id="tag"
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
            type="number"
            id="value"
            name="value"
          />
        </label>

        <label htmlFor="method">
          Metodo de pagamento
          <select
            onChange={ handleChange }
            data-testid="method-input"
            name="method"
            id="method"
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
          >
            { curries.currencies.map((currency, index) => (
              <option key={ index } value={ currency }>{currency}</option>
            ))}
          </select>
        </label>

      </div>

      <button>
        Adicionar despesa

      </button>

    </form>

  );
}

export default WalletForm;
