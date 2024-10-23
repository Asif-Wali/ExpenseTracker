import { createContext, useReducer } from "react";
export const ExpenseContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  updateExpense: (id, { description, amount, date }) => {},
  deleteExpense: (id) => {},
});
const DummyExpenses = [
    {
      id: "e1",
      amount: 7,
      description: "Tikka Sandwich",
      date: new Date("2022-2-18"),
    },
    {
      id: "e2",
      amount: 9,
      description: "Shawarma",
      date: new Date("2022-2-18"),
    },
    {
      id: "e3",
      amount: 194,
      description: "Cosmetics",
      date: new Date("2022-2-18"),
    },
    {
      id: "e4",
      amount: 250,
      description: "Apparels",
      date: new Date("2022-2-18"),
    },
    {
      id: "e5",
      amount: 74,
      description: "Electronics",
      date: new Date("2022-2-18"),
    },
    {
      id: "e6",
      amount: 7,
      description: "Tikka Sandwich",
      date: new Date("2022-2-18"),
    },
    {
      id: "e7",
      amount: 9,
      description: "Shawarma",
      date: new Date("2022-2-18"),
    },
    {
      id: "e8",
      amount: 194,
      description: "Cosmetics",
      date: new Date("2022-2-18"),
    },
    {
      id: "e9",
      amount: 250,
      description: "Apparels",
      date: new Date("2022-2-18"),
    },
    {
      id: "e10",
      amount: 74,
      description: "Electronics",
      date: new Date("2022-2-18"),
    },
  ];
function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updateableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updateableExpense = state[updateableExpenseIndex];
      const updatedItem = { ...updateableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updateableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}
function ExpenseContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DummyExpenses);
  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }
  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }
  function deleteExpense(deleteId) {
    dispatch({ type: "DELETE", payload: deleteId });
  }
const values= {
    expenses: expensesState,
    addExpense,
    updateExpense,
    deleteExpense,
  };
  return <ExpenseContext.Provider value={values}>{children}</ExpenseContext.Provider>;
}

export default ExpenseContextProvider;
