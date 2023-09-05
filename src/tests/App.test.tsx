import { expect, vi } from 'vitest';
import { getByRole, screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';

import { renderWithRouterAndRedux } from './helpers/renderWith';

import mockData from './helpers/mockData';

import * as APIModule from '../utils/fetch';

import App from '../App';

beforeEach(() => {
  vi.spyOn(APIModule, 'fetchCotacao').mockResolvedValue(mockData);
});

afterEach(() => {
  vi.spyOn(APIModule, 'fetchCotacao').mockClear();
});

const EMAIL_INPUT = 'email-input';
const PASSWORD_INPUT = 'password-input';
const EMAIL_TEST = 'teste@teste.com';

describe('Verificando se a aplicação funciona como esperado', () => {
  it('Verifica ao entrar renderiza um formulário com email e senha ', () => {
    renderWithRouterAndRedux(<App />);

    const inputEmail = screen.getByTestId(EMAIL_INPUT);
    const inputSenha = screen.getByTestId(PASSWORD_INPUT);
    const btn = screen.getByRole('button', { name: 'Entrar' });

    expect(inputEmail).toBeInTheDocument();
    expect(inputSenha).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    // expect(btnDisabled).toHaveAttribute('disabled', 'true');
  });
  it('Verifica se ao clicar prencher o formulário de usuario e clicar no botão a pessoa é redirecionada para carteira', async () => {
    const { store } = renderWithRouterAndRedux(<App />);

    const inputEmail = screen.getByTestId(EMAIL_INPUT);
    const inputSenha = screen.getByTestId(PASSWORD_INPUT);
    const btn = screen.getByRole('button', { name: 'Entrar' });

    await userEvent.type(inputEmail, EMAIL_TEST);
    await userEvent.type(inputSenha, '123456');

    await userEvent.click(btn);

    const user = store.getState().user.email;

    expect(user).toBe(EMAIL_TEST);
    expect(APIModule.fetchCotacao).toHaveBeenCalled();
    expect(APIModule.fetchCotacao).toHaveBeenCalledTimes(1);

    const inputDescription = screen.getByTestId('description-input');
    const inputValue = screen.getByTestId('value-input');

    expect(inputDescription).toBeInTheDocument();
    expect(inputValue).toBeInTheDocument();

    const globalState = store.getState();
    const currencies = Object.keys(mockData)
      .filter((curr) => curr !== 'USDT');

    expect(globalState.wallet.currencies).toHaveLength(15);
    expect(globalState.wallet.currencies).toEqual(currencies);
  });
  it('Verifica se caso não tenha despesas renderiza uma mensagem  ', async () => {
    const { store } = renderWithRouterAndRedux(<App />);
    const inputEmail = screen.getByTestId(EMAIL_INPUT);
    const inputSenha = screen.getByTestId(PASSWORD_INPUT);
    const btn = screen.getByRole('button', { name: 'Entrar' });

    await userEvent.type(inputEmail, EMAIL_TEST);
    await userEvent.type(inputSenha, '123456');
    await userEvent.click(btn);

    const globalStore = store.getState().wallet.expenses;

    // const title = screen.getByRole('heading', { level: 2 });

    expect(globalStore).toHaveLength(0);
    // expect(title).toHaveTextContent('Você não tem despesas!');
  });

  it('Verifica se ao adicionar uma nova despesa ela é renderizada na tabela e se é possivel editar ', async () => {
    // const fetch = vi.spyOn(global, 'fetch').mockResolvedValue(mockData);
    const { debug } = renderWithRouterAndRedux(<App />);
    const inputEmail = screen.getByTestId('email-input');
    const inputSenha = screen.getByTestId('password-input');
    const btn = screen.getByRole('button', { name: 'Entrar' });

    await userEvent.type(inputEmail, 'teste@teste.com');
    await userEvent.type(inputSenha, '123456');
    await userEvent.click(btn);

    const inputDescription = screen.getByTestId('description-input');
    const inputValue = screen.getByTestId('value-input');
    const btnAdicionar = screen.getByRole('button', { name: 'Adicionar despesa' });

    await userEvent.type(inputDescription, 'teste');
    await userEvent.type(inputValue, '11');
    await userEvent.click(btnAdicionar);
    const totalField = screen.getByTestId('total-field');

    const tableDescription = screen.getByRole('cell', { name: 'teste' });
    const tableValue = screen.getByRole('cell', { name: '11.00' });
    const btnEdit = screen.getByTestId('edit-btn');

    const thList = screen.getAllByRole('columnheader');

    expect(totalField).toHaveTextContent('52.28');
    expect(tableDescription).toBeInTheDocument();
    expect(tableValue).toBeInTheDocument();
    expect(thList).toHaveLength(9);

    await userEvent.click(btnEdit);

    const btnEditarDespesa = screen.getByRole('button', { name: 'Editar despesa' });
    const inputDescriptionEdit = screen.getByRole('textbox', { name: /descrição da despesa/i });
    const inputValueEdit = screen.getByRole('textbox', { name: /valor/i });

    expect(inputDescriptionEdit).toHaveValue('teste');
    expect(inputValueEdit).toHaveValue('11');

    await userEvent.type(inputDescriptionEdit, '-2');
    await userEvent.type(inputValueEdit, '5');
    await userEvent.click(btnEditarDespesa);

    expect(tableDescription).toHaveTextContent('teste-2');
    expect(tableValue).toHaveTextContent('115');
    expect(totalField).toHaveTextContent('546.61');

    const btnDelete = screen.getByTestId('delete-btn');

    await userEvent.click(btnDelete);

    // const title = screen.getByRole('heading', { level: 2 });
    // expect(title).toBeInTheDocument();
  });
});
