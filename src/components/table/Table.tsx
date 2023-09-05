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
      {/* {globalState.length > 0 ? ( */}
      <table className={ styles.table }>
        <thead>
          <tr>
            <th className={ styles.tableHead }>
              Descrição
            </th>
            <th className={ styles.tableHead }>Tag</th>
            <th className={ styles.tableHead }>Método de pagamento</th>
            <th className={ styles.tableHead }>Valor</th>
            <th className={ styles.tableHead }>Moeda</th>
            <th className={ styles.tableHead }>Câmbio utilizado</th>
            <th className={ styles.tableHead }>Valor convertido</th>
            <th className={ styles.tableHead }>Moeda de conversão</th>
            <th className={ styles.tableHeadEditarExcluir }>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {globalState
            .map(({
              id,
              value,
              currency,
              method,
              tag,
              description,
              exchangeRates,
            }, index) => (

              <tr
                key={ `${id} ${index}` }
              >
                <td className={ styles.tableInfoDescription }>{description}</td>
                <td className={ styles.tableInfo }>{tag}</td>
                <td className={ styles.tableInfo }>{method}</td>
                <td className={ styles.tableInfo }>{Number(value).toFixed(2)}</td>
                <td className={ styles.tableInfo }>{exchangeRates[currency].name}</td>
                <td
                  className={ styles.tableInfo }
                >
                  {Number(exchangeRates[currency].ask).toFixed(2) }

                </td>
                <td className={ styles.tableInfo }>
                  {(Number(value) * Number(exchangeRates[currency].ask)).toFixed(2)}
                </td>
                <td className={ styles.tableInfo }>Real</td>
                <td className={ styles.tableInfoEditarExcluir }>
                  <button
                    onClick={ () => {
                      AddExpenseEdit(id);
                      dispatch(actionUpadteFormEdit(true));
                    } }
                    className={ styles.btn }
                    data-testid="edit-btn"
                  >
                    <img
                      className={ styles.imageEdit }
                      src={ editIcon }
                      alt="icone para editar despesa"
                    />
                  </button>

                  <button
                    onClick={ () => dispatch(actionExpenseDelete(id)) }
                    data-testid="delete-btn"
                    className={ styles.btn }
                  >
                    <img
                      className={ styles.imageDelete }
                      src={ deleteIcon }
                      alt="icone para excluir despesa"
                    />
                  </button>

                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {/* // ) : (
      //   <h2 className={ styles.notExpenses }>Você não tem despesas!</h2>
      // )} */}

    </section>
  );
}

export default Table;
