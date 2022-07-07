import { Container } from "react-bootstrap";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  const expenses = props.expenses;

  return (
    <Container className="mt-4 py-3 bg-secondary rounded-3">
      {expenses.map((item) => (
        <ExpenseItem title={item.title} amount={item.amount} date={item.date} />
      ))}
    </Container>
  );
};

export default ExpenseList;
