import { ExpensesType } from '../types/types';

const expensesValidation = (expense:ExpensesType) => {
  const valuesExpense = Object.values(expense);
  return valuesExpense.every((e) => e !== '');
};

export default expensesValidation;
