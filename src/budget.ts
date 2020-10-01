export class Budget {

    budgetValueSpan = document.querySelector("#budget-amount") as HTMLElement;

    budgetValue : number = 0

    constructor(budgetValue: number) {

        this.budgetValue = budgetValue;

        this.setNewBudget(this.budgetValue);
    }

    addExpense = (value: number) => {
        const newBudgetValue : number = this.budgetValue - value;

        this.budgetValue = newBudgetValue;

        this.setNewBudget(newBudgetValue);
    }

    setNewBudget = (budgetValue: number) => {

        this.budgetValue = budgetValue;
        localStorage.setItem('budget', `${budgetValue}`)

        this.budgetValueSpan.innerText = `${budgetValue}`;
    }
}