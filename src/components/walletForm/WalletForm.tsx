import getCurrencies from '../../utils/getCurrencies';

function WalletForm() {
  console.log(getCurrencies());

  return (

    <form onSubmit={ (e) => e.preventDefault() }>

      <div>

        <label htmlFor="descricao">
          Descrição da despesa
          <input
            data-testid="description-input"
            type="text"
            id="descricao"
          />
        </label>

        <label htmlFor="categoria">
          Categoria da despesa
          <select
            data-testid="tag-input"
            name="categoria"
            id="categoria"
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>

        <label htmlFor="valor">
          Valor
          <input
            data-testid="value-input"
            type="number"
          />
        </label>

        <label htmlFor="metodo">
          Metodo de pagamento
          <select
            data-testid="method-input"
            name="metodo"
            id="metodo"
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="currency">
          Moeda
          <select
            data-testid="currency-input"
            name="currency"
            id="currency"
          >
            {}
          </select>
        </label>

      </div>

      <button>Adicionar despesa</button>

    </form>

  );
}

export default WalletForm;
