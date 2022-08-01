import { useState } from "react";
import { Button, Col, Row, Form } from "react-bootstrap";

const ExpenseForm = (props) => {
  let title = "";
  let date = "";
  let amount = "";
  if (props.expenseData != null) {
    title = props.expenseData.title;
    date = props.expenseData.date;
    amount = props.expenseData.amount;
  }

  const [enteredTitle, setEnteredTitle] = useState(title);
  const [enteredDate, setEnteredDate] = useState(date);
  const [enteredAmount, setEnteredAmount] = useState(amount);

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

  const cancelHandler = () => {
    props.onCancel();
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
            min="2020-01-01"
            max="2022-12-31"
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

      <Button variant="danger" className="mx-2" onClick={cancelHandler}>
        Cancel
      </Button>
    </Form>
  );
};

export default ExpenseForm;
