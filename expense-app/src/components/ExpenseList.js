import { useState } from "react";
import { Container } from "react-bootstrap";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";

const ExpenseList = (props) => {
  const [selectedYear, setSelectedYear] = useState("2022");

  const selectedYearChangedHandler = (year) => {
    setSelectedYear(year);
  };

  return (
    <Container className="d-grid gap-3 mt-4 p-3 bg-light border border-secondary border-1 rounded-3">
      <ExpenseFilter
        selectedYear={selectedYear}
        onSelectedYearChanged={selectedYearChangedHandler}
      />
      {props.expenses.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </Container>
  );
};

export default ExpenseList;
