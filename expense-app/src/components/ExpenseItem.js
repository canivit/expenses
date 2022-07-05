import "./ExpenseItem.css";
import { Card } from "react-bootstrap";
import { Alert } from "react-bootstrap";

function ExpenseItem(props) {
  const date = props.date;
  const dateString = formatDateAsString(date);
  const title = props.title;
  const amount = props.amount;

  return (
    <div className="p-2">
      <Card>
        <Card.Header>{dateString}</Card.Header>
        <Card.Body className="py-2">
          <Card.Text>
            <div className="row align-items-center">
              <div className="col-9">{title}</div>
              <Alert className="col-3 my-0 py-2 text-center">${amount}</Alert>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

function formatDateAsString(date) {
  return date.toLocaleString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default ExpenseItem;
