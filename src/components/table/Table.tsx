import { useDispatch, useSelector } from 'react-redux';

import { ReduxState } from '../../types/types';

import deleteIcon from '../../assets/delete.svg';
import editIcon from '../../assets/Editar.svg';
import { actionExpenseDelete } from '../../redux/actions';

function Table() {
  const globalState = useSelector((state:ReduxState) => state.wallet.expenses);
  const dispatch = useDispatch();

  return (

    <section>
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
