import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      title: "New Macbook Pro M1 Pro 16in Laptop",
      amount: 3015.43,
      date: new Date(2022, 7, 21),
    },

    {
      title: "Eversource Electric Bill",
      amount: 42.97,
      date: new Date(2022, 6, 15),
    },

    {
      title: "Apartment Rent",
      amount: 2200,
      date: new Date(2022, 2, 13),
    },

    {
      title: "AllSaints Leather Jacket",
      amount: 1368.72,
      date: new Date(2022, 4, 9),
    },

    {
      title: "Verizon Pre Paid Plan Renewal",
      amount: 35,
      date: new Date(2022, 5, 19),
    },
  ];

  return (
    <div>
      {expenses.map((item) => (
        <ExpenseItem
          title={item.title}
          amount={item.amount}
          date={item.date}
        ></ExpenseItem>
      ))}
    </div>
  );
}

export default App;
