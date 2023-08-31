export type ExpensesType = {
  id:number,
  value:string,
  currency:string,
  method:string,
  tag: string,
  description:string,
  exchangeRates:string
};

export type InitialStateWallet = {
  isFetching:boolean,
  currencies: string[],
  expenses: ExpensesType[],
  editor: boolean,
  idToEdit: number,
};
