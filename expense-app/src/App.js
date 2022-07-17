import { useState } from "react";
import { Container } from "react-bootstrap";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";
import initialExpenses from "./expenses";

const App = () => {
  const [expenses, setExpenses] = useState(initialExpenses);

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
