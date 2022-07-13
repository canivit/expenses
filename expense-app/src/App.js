import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import NewExpense from "./components/NewExpense";

const INITIAL_EXPENSES = [
  {
    id: 1,
    title: "New Macbook Pro M1 Pro 16in Laptop",
    amount: 3015.43,
    date: new Date(2022, 7, 21),
  },

  {
    id: 2,
    title: "Eversource Electric Bill",
    amount: 42.97,
    date: new Date(2022, 6, 15),
  },

  {
    id: 3,
    title: "Apartment Rent",
    amount: 2200,
    date: new Date(2022, 2, 13),
  },

  {
    id: 4,
    title: "AllSaints Leather Jacket",
    amount: 1368.72,
    date: new Date(2022, 4, 9),
  },

  {
    id: 5,
    title: "Verizon Pre Paid Plan Renewal",
    amount: 35,
    date: new Date(2022, 5, 19),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (newExpenseData) => {
    setExpenses((prevExpenses) => [
      { ...newExpenseData, id: prevExpenses.length + 1 },
      ...prevExpenses,
    ]);
  };

  return (
    <div className="p-4">
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseList expenses={expenses} />
    </div>
  );
};

export default App;
