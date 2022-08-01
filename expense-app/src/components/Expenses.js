import { useState } from "react";
import { Container } from "react-bootstrap";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";
import ExpenseList from "./ExpenseList";

const INITIAL_SELECTED_YEAR = 2022;

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState(INITIAL_SELECTED_YEAR);

  const selectedYearChangedHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredExpenses = props.expenses
    .filter((item) => item.date.getFullYear() === selectedYear)
    .sort((item1, item2) => item2.date - item1.date);

  return (
    <Container className="d-grid gap-3 mt-4 p-3 bg-light border border-secondary border-1 rounded-3">
      <ExpenseFilter
        selectedYear={selectedYear}
        onSelectedYearChanged={selectedYearChangedHandler}
      />
      <ExpenseChart expenses={filteredExpenses} />
      <ExpenseList expenses={filteredExpenses} />
    </Container>
  );
};

export default Expenses;
