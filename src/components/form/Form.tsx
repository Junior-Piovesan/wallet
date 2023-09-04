import { useSelector, useDispatch } from 'react-redux';
import { useEffect, FormEvent } from 'react';

import fetchCurrencies from '../../utils/fetchCurrencies';
import expensesValidation from '../../utils/expenseValidation';

import { Dispatch, ExpensesType, HandleType, ReduxState } from '../../types/types';
import { actionUpadteFormEdit } from '../../redux/actions';

type PropsType = {
  onSubmit: (event:FormEvent<HTMLFormElement>) => void
  handleChange: (event:HandleType) => void
  expense: ExpensesType
  styles: CSSModuleClasses
};

export default function Form(
  { onSubmit, handleChange, expense, styles }:PropsType,
) {
  const curries = useSelector((state:ReduxState) => state.wallet);

  const dispatch:Dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrencies());
  }, []);

  return (
    <form
      onSubmit={ (event) => {
        onSubmit(event);
      } }
      className={ styles.containerForm }
    >
      <div className={ styles.containerFormDiv }>

        <label
          htmlFor="description"
          className={ styles.labelDescription }
        >
          Descrição da despesa
          <input
            className={ styles.inputDescription }
            onChange={ handleChange }
            data-testid="description-input"
            type="text"
            id="description"
            name="description"
            value={ expense.description }
          />
        </label>

        <label
          htmlFor="tag"
          className={ styles.labelTag }
        >
          Categoria da despesa
          <select
            className={ styles.selectTag }
            onChange={ handleChange }
            data-testid="tag-input"
            name="tag"
            id="tag"
            value={ expense.tag }
          >
            <option
              className={ styles.option }
              value="Alimentação"
            >
              Alimentação
            </option>
            <option
              className={ styles.option }
              value="Lazer"
            >
              Lazer
            </option>
            <option
              className={ styles.option }
              value="Trabalho"
            >
              Trabalho
            </option>
            <option
              className={ styles.option }
              value="Transporte"
            >
              Transporte
            </option>
            <option
              className={ styles.option }
              value="Saúde"
            >
              Saúde
            </option>
          </select>
        </label>

        <label
          className={ styles.labelValue }
          htmlFor="value"
        >
          Valor
          <input
            className={ styles.inputValue }
            onChange={ handleChange }
            data-testid="value-input"
            type="text"
            id="value"
            name="value"
            value={ expense.value > '0' ? expense.value : '' }
          />
        </label>

        <label
          className={ styles.labelMethod }
          htmlFor="method"
        >
          Metodo de pagamento
          <select
            className={ styles.selectMethod }
            onChange={ handleChange }
            data-testid="method-input"
            name="method"
            id="method"
            value={ expense.method }
          >
            <option
              className={ styles.option }
              value="Dinheiro"
            >
              Dinheiro
            </option>
            <option
              className={ styles.option }
              value="Cartão de crédito"
            >
              Cartão de crédito
            </option>
            <option
              className={ styles.option }
              value="Cartão de débito"
            >
              Cartão de débito
            </option>
          </select>
        </label>

        <label
          className={ styles.labelCurrency }
          htmlFor="currency"
        >
          Moeda
          <select
            className={ styles.selectCurrency }
            onChange={ handleChange }
            data-testid="currency-input"
            name="currency"
            id="currency"
            value={ expense.currency }
          >
            { curries.currencies.map((currency, index) => (
              <option
                className={ styles.option }
                key={ index }
                value={ currency }
              >
                {currency}
              </option>
            ))}
          </select>
        </label>

      </div>
      {curries.edit ? (
        <button
          className={ styles.button }
          disabled={ !expensesValidation(expense) }
        >
          Editar despesa
        </button>
      ) : (
        <button
          className={ styles.button }
          disabled={ !expensesValidation(expense) }
        >
          Adicionar despesa
        </button>
      ) }

    </form>
  );
}
