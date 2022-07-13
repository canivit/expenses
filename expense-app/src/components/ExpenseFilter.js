import { FormSelect, Row, Col } from "react-bootstrap";

const ExpenseFilter = (props) => {
  const selectionChangedHandler = (event) => {
    props.onSelectedYearChanged(event.target.value);
  };

  return (
    <Row className="align-items-center my-2 mx-0 py-2 border border-1 rounded-3">
      <Col>Filter By Year</Col>
      <Col md={2}>
        <FormSelect
          value={props.selectedYear}
          onChange={selectionChangedHandler}
        >
          <option value={2021}>2021</option>
          <option value={2022}>2022</option>
          <option value={2023}>2023</option>
        </FormSelect>
      </Col>
    </Row>
  );
};

export default ExpenseFilter;
