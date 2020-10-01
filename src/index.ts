import { Budget } from './budget';
import { Balance } from './balance';
import { Expense } from './expense';
import { IExpense } from './IExpense';

let budgetValueStorage : any;
let expenseValueStorage : any;
let budget : any;
let expense : any;
const expenseList = document.querySelector("#expense-list") as HTMLElement;



document.addEventListener('DOMContentLoaded', (event) => {
    let arrayExpense : any;

    if(localStorage.getItem('wallet')) {
        const wallet : any = localStorage.getItem('wallet')
        arrayExpense = JSON.parse(wallet)
        if(arrayExpense.length > 0) {


            arrayExpense.forEach((element: { title: string; value: number}) => {
                const newExpenseHtml : HTMLElement = document.createElement('li')
                const newExpenseNameSpan : HTMLElement = document.createElement('span')
                const newExpenseAmountSpan : HTMLElement = document.createElement('span')
                newExpenseNameSpan.innerText = element.title;
                newExpenseAmountSpan.innerText = `${element.value}`;
                newExpenseHtml.appendChild(newExpenseNameSpan)
                newExpenseHtml.appendChild(newExpenseAmountSpan)
                expenseList.appendChild(newExpenseHtml)
            });
        }
    }

    budgetValueStorage = localStorage.getItem('budget')
    expenseValueStorage = localStorage.getItem('expense')
    if(budgetValueStorage) {
        budget = new Budget((+budgetValueStorage))
    } else {
        budget = new Budget(0);
    }
    console.log(expenseValueStorage)
    if(expenseValueStorage) {
        expense = new Expense({title: "", value: (+expenseValueStorage)})
    } else {
        expense = new Expense({title: "", value: 0});
    }

    const budgetInputValue : string =  (document.getElementById("budget-amount") as HTMLInputElement).innerText;

    const amountInputValue : string =  (document.getElementById("expense-amount") as HTMLInputElement).innerText;
    balance.refreshBalance((+budgetInputValue), (+amountInputValue))
});





const balance = new Balance()

const budgetBtn = document.querySelector("#budget-submit") as HTMLElement;

const budgetInput =  (document.getElementById("budget-input") as HTMLInputElement);



budgetBtn.addEventListener('click', (e) => {
    e.preventDefault();

    

    budget.addExpense(-budgetInput.value);

    budgetInput.value = "";

    const budgetInputValue : string =  (document.getElementById("budget-amount") as HTMLInputElement).innerText;

    const amountInputValue : string =  (document.getElementById("expense-amount") as HTMLInputElement).innerText;

    balance.refreshBalance((+budgetInputValue), (+amountInputValue))
});

const expenseBtn = document.querySelector("#expense-submit") as HTMLElement;

const expenseInput =  (document.getElementById("expense-input") as HTMLInputElement);

const amountInput =  (document.getElementById("amount-input") as HTMLInputElement);



expenseBtn.addEventListener('click', (e) => {
    e.preventDefault();

    

    const newExpense : IExpense = {
        title: expenseInput.value,
        value: (+amountInput.value),
    };

    budget.addExpense(newExpense.value);

    expense.addExpense(newExpense);

    amountInput.value = "";
    
    expenseInput.value = "";

    const budgetInputValue : string =  (document.getElementById("budget-amount") as HTMLInputElement).innerText;

    const amountInputValue : string =  (document.getElementById("expense-amount") as HTMLInputElement).innerText;

    balance.refreshBalance((+budgetInputValue), (+amountInputValue))
});

const cleanBtn = document.querySelector("#clean-submit") as HTMLElement;

cleanBtn.addEventListener('click', (e) => {
    e.preventDefault();
    balance.refreshBalance((0), (0));
    localStorage.setItem('budget', '0')
    localStorage.setItem('expense', '0')
    localStorage.setItem('wallet', '')
    budget = new Budget(0)
    expense = new Expense({title: "", value: 0});
    expenseList.innerHTML = ""
})
