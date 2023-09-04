import { useDispatch, useSelector } from 'react-redux';
import { ExpensesType, ReduxState } from '../../types/types';
import deleteIcon from '../../assets/delete.svg';
import editIcon from '../../assets/Editar.svg';
import { actionAddExpenseEdit,
  actionExpenseDelete,
  actionUpadteFormEdit } from '../../redux/actions';

import styles from './table.module.css';

function Table() {
  const globalState = useSelector((state:ReduxState) => state.wallet.expenses);
  const dispatch = useDispatch();

  const AddExpenseEdit = (id:number) => {
    const expenseEdit = globalState.find((exp) => exp.id === id) as ExpensesType;
    dispatch(actionAddExpenseEdit(expenseEdit));
  };

  return (

    <section className={ styles.tableContainer }>
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {globalState
            .map(({ id, value, currency, method, tag, description, exchangeRates }) => (

              <tr
                key={ id }
              >
                <td>{description}</td>
                <td>{tag}</td>
                <td>{method}</td>
                <td>{Number(value).toFixed(2)}</td>
                <td>{exchangeRates[currency].name}</td>
                <td>{Number(exchangeRates[currency].ask).toFixed(2) }</td>
                <td>
                  {(Number(value) * Number(exchangeRates[currency].ask)).toFixed(2)}
                </td>
                <td>Real</td>
                <td>
                  <button
                    onClick={ () => {
                      AddExpenseEdit(id);
                      dispatch(actionUpadteFormEdit(true));
                    } }
                    data-testid="edit-btn"
                  >
                    <img src={ editIcon } alt="icone para editar despesa" />
                  </button>

                  <button
                    onClick={ () => dispatch(actionExpenseDelete(id)) }
                    data-testid="delete-btn"
                  >
                    <img src={ deleteIcon } alt="icone para excluir despesa" />
                  </button>

                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </section>
  );
}

export default Table;
