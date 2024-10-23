import { useContext } from "react";
import { ExpenseContext } from "../store/expense-context";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { getDateMinusDays } from "../util/date";
function RecentExpensesScreen() {
  const expensesCtx= useContext(ExpenseContext);
  const recentExpenses= expensesCtx.expenses.filter((expense)=>{
    const today= new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expense.date >= date7DaysAgo;
  })
  return <ExpensesOutput expenses={recentExpenses} expensesPeriod={"Last 7 Days"} />;
}
export default RecentExpensesScreen;
