import { Card, Alert, Row } from "react-bootstrap";

const ExpenseItem = (props) => {
  const date = props.date;
  const dateString = formatDateAsString(date);
  const title = props.title;
  const amount = props.amount;

  return (
    <Card>
      <Card.Header>{dateString}</Card.Header>
      <Card.Body className="py-2">
        <Row className="align-items-center">
          <span className="col-9">{title}</span>
          <Alert className="col-3 my-0 py-2 text-center">${amount}</Alert>
        </Row>
      </Card.Body>
    </Card>
  );
};

const formatDateAsString = (date) => {
  return date.toLocaleString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

export default ExpenseItem;
