import { IExpense } from "./IExpense";

export interface IWallet {
    budget: number,
    expense: number,
    balance: number,
    expenseArray: IExpense[],
}
