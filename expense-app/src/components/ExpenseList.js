import { Alert } from "react-bootstrap";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  if (props.expenses.length > 0) {
    return (
      <div className="d-grid gap-3">
        {props.expenses.map((item) => (
          <ExpenseItem
            key={item.id}
            id={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
            onRemoveExpense={props.onRemoveExpense}
          />
        ))}
      </div>
    );
  }

  return (
    <Alert variant="primary" className="my-0">
      There is no expense for the selected year.
    </Alert>
  );
};

export default ExpenseList;
