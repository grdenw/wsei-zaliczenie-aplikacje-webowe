export class Balance {


    balanceValueSpan = document.querySelector("#balance-amount") as HTMLElement;


    refreshBalance = (budgetValue: number, expenseValue: number) => {

        const result = budgetValue - expenseValue

        this.balanceValueSpan.innerText = `${result}`;
    }
}