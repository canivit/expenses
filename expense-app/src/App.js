import { useState } from "react";
import { Container } from "react-bootstrap";
import Expenses from "./components/Expenses";
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
    title: "Dell Precision 5560",
    amount: 2675,
    date: new Date(2021, 9, 16),
  },

  {
    id: 4,
    title: "Apartment Rent",
    amount: 2200,
    date: new Date(2021, 4, 9),
  },

  {
    id: 5,
    title: "AllSaints Leather Jacket",
    amount: 1368.72,
    date: new Date(2021, 2, 13),
  },

  {
    id: 6,
    title: "Verizon Pre Paid Plan Renewal",
    amount: 35,
    date: new Date(2020, 5, 19),
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
    <Container className="p-4">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </Container>
  );
};

export default App;
