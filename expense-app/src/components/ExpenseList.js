import { useState } from "react";
import { Container, Alert } from "react-bootstrap";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";

const INITIAL_SELECTED_YEAR = 2022;

const ExpenseList = (props) => {
  const [selectedYear, setSelectedYear] = useState(INITIAL_SELECTED_YEAR);

  const selectedYearChangedHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredExpenses = props.expenses.filter(
    (item) => item.date.getFullYear() === selectedYear
  );

  let expensesContent = (
    <Alert variant="primary" className="my-0">
      There is no expense for the selected year.
    </Alert>
  );

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((item) => (
      <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />
    ));
  }

  return (
    <Container className="d-grid gap-3 mt-4 p-3 bg-light border border-secondary border-1 rounded-3">
      <ExpenseFilter
        selectedYear={selectedYear}
        onSelectedYearChanged={selectedYearChangedHandler}
      />
      {expensesContent}
    </Container>
  );
};

export default ExpenseList;
