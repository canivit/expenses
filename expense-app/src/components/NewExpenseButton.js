import { Button } from "react-bootstrap";

const NewExpenseButton = (props) => {
  const onClickHandler = () => {
    props.onNewExpense();
  };

  return (
    <div className="text-center">
      <Button variant="primary" size="large" onClick={onClickHandler}>
        Add New Expense
      </Button>
    </div>
  );
};

export default NewExpenseButton;
