import { useState } from "react";
import { Container } from "react-bootstrap";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";
import initialExpenses from "./expenses";

const App = () => {
  const [expenses, setExpenses] = useState(initialExpenses);

  const addExpenseHandler = (newExpenseData) => {
    setExpenses((prevExpenses) => [...prevExpenses, newExpenseData]);
  };

  const removeExpenseHandler = (id) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id)
    );
  };

  return (
    <Container className="p-4">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} onRemoveExpense={removeExpenseHandler}/>
    </Container>
  );
};

export default App;
