import { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpenseContext } from "../store/expense-context";
function AllExpensesScreen() {
  const expenseCtx = useContext(ExpenseContext);
  return (
    <ExpensesOutput
      expenses={expenseCtx.expenses}
      expensesPeriod={"Total Expenses"}
      fallbackText={"No expenses registered so far"}
    />
  );
}
export default AllExpensesScreen;
