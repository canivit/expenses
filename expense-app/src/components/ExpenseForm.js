import { useState } from "react";
import { Button, Col, Row, Form } from "react-bootstrap";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");

  const titleChangedHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const dateChangedHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const amountChangedHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const dateSections = enteredDate.split("-");
    const expenseData = {
      title: enteredTitle,
      date: new Date(dateSections[0], dateSections[1] - 1, dateSections[2]),
      amount: Number(enteredAmount),
    };

    props.onFormSubmit(expenseData);

    setEnteredTitle("");
    setEnteredDate("");
    setEnteredAmount("");
  };

  return (
    <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="expenseTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter expense title"
          onChange={titleChangedHandler}
          value={enteredTitle}
        />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="expenseDate">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter expense date"
            min="2021-01-01"
            max="2023-12-31"
            onChange={dateChangedHandler}
            value={enteredDate}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="expenseAmount">
          <Form.Label>Amount</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter expense amount"
            min="0.01"
            max="999999.99"
            step="0.01"
            onChange={amountChangedHandler}
            value={enteredAmount}
          />
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit">
        Add New Expense
      </Button>
    </Form>
  );
};

export default ExpenseForm;
