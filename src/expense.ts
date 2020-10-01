import { IExpense } from "./IExpense";

export class Expense {

    expenseValueSpan = document.querySelector("#expense-amount") as HTMLElement;
    expenseList = document.querySelector("#expense-list") as HTMLElement;

    expenseValue : number = 0;

    arrayExpense: IExpense[] = [];

    constructor(expense : IExpense) {
        if(localStorage.getItem('wallet')) {
            const wallet : any = localStorage.getItem('wallet')
            this.arrayExpense = JSON.parse(wallet)
        }
        this.expenseValue = expense.value;
        this.setNewExpense(this.expenseValue);
    }

    addExpense = (newExpense : IExpense) => {

        const newExpenseValue : number = this.expenseValue + newExpense.value;

        this.expenseValue = newExpenseValue;

        this.arrayExpense.push(newExpense)

        this.setNewExpense(newExpenseValue);

        const newExpenseHtml : HTMLElement = document.createElement('li')
        const newExpenseNameSpan : HTMLElement = document.createElement('span')
        const newExpenseAmountSpan : HTMLElement = document.createElement('span')
        newExpenseNameSpan.innerText = newExpense.title;
        newExpenseAmountSpan.innerText = `${newExpense.value}`;
        newExpenseHtml.appendChild(newExpenseNameSpan)
        newExpenseHtml.appendChild(newExpenseAmountSpan)
        this.expenseList.appendChild(newExpenseHtml)
        localStorage.setItem('wallet', JSON.stringify(this.arrayExpense))
    }

    setNewExpense = (expenseValue: number) => {

        this.expenseValue = expenseValue;
        localStorage.setItem('expense', `${expenseValue}`)
        this.expenseValueSpan.innerText = `${expenseValue}`;
    }
}