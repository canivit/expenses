import { useState } from "react";
import { Container } from "react-bootstrap";
import ExpenseForm from "./ExpenseForm";
import NewExpenseButton from "./NewExpenseButton";
import { v4 as uuid } from "uuid";

const INITIAL_FORM_VISIBILITY = false;

const NewExpense = (props) => {
  const [formVisibility, setFormVisiblity] = useState(INITIAL_FORM_VISIBILITY);

  const formSubmitHandler = (submittedExpenseData) => {
    props.onAddExpense({ ...submittedExpenseData, id: uuid() });
    hideFormHandler();
  };

  const showFormHandler = () => {
    setFormVisiblity(true);
  };

  const hideFormHandler = () => {
    setFormVisiblity(false);
  };

  const content = formVisibility ? (
    <ExpenseForm onFormSubmit={formSubmitHandler} onCancel={hideFormHandler} />
  ) : (
    <NewExpenseButton onNewExpense={showFormHandler}></NewExpenseButton>
  );

  return (
    <Container className="p-3 bg-light border border-secondary border-1 rounded-3">
      {content}
    </Container>
  );
};

export default NewExpense;
