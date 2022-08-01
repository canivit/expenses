import { Container } from "react-bootstrap";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ExpenseChart = (props) => {
  const monthlyData = buildMonthlyData(props.expenses);

  return (
    <Container className="border border-1 rounded-3">
      <ResponsiveContainer width={"98%"} height={300}>
        <BarChart
          data={monthlyData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="amount"
            name="Total Monthly Expense"
            stackId="a"
            fill="#5B5EA6"
          />
        </BarChart>
      </ResponsiveContainer>
    </Container>
  );
};

const buildMonthlyData = (expenses) => {
  const monthlyData = [...Array(12).keys()].map((index) => {
    const date = new Date(0, index);
    const month = date.toLocaleString("en-US", { month: "long" });
    return {
      month,
      amount: 0,
    };
  });

  expenses.forEach((expense) => {
    const date = expense.date;
    const monthIndex = date.getMonth();
    const amount = expense.amount;
    monthlyData[monthIndex].amount += amount;
  });

  return monthlyData;
};

export default ExpenseChart;
