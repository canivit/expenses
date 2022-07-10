import { Container } from "react-bootstrap";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const formSubmitHandler = (submittedExpenseData) => {
    props.onAddExpense(submittedExpenseData);
  };

  return (
    <Container className="mt-4 p-3 bg-light border border-secondary border-1 rounded-3">
      <ExpenseForm onFormSubmit={formSubmitHandler} />
    </Container>
  );
};

export default NewExpense;
