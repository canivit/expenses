import { Card, Badge, Row, Button, Container } from "react-bootstrap";

const ExpenseItem = (props) => {
  const id = props.id;
  const date = props.date;
  const dateString = formatDateAsString(date);
  const title = props.title;
  const amount = props.amount;

  const handleRemoveClick = () => {
    props.onRemoveExpense(id);
  };

  return (
    <Card>
      <Card.Header>{dateString}</Card.Header>
      <Card.Body>
        <Container className="p-0">
          <Row className="align-items-center justify-content-between">
            <div className="col-auto">
              <span>{title}</span>
              <h4>
                <Badge bg="success">${amount}</Badge>
              </h4>
            </div>
            <div className="col-auto">
              <Row className="justify-content-end">
                <div className="col-auto">
                  <Button variant="primary">
                    <i className="bi bi-pencil-fill"></i>
                  </Button>
                </div>
                <div className="col-auto">
                  <Button variant="danger" onClick={handleRemoveClick}>
                    <i className="bi bi-trash-fill"></i>
                  </Button>
                </div>
              </Row>
            </div>
          </Row>
        </Container>
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
