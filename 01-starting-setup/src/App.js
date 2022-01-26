import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const App = () => {
  const DUMMY_EXPENSES = [
    {
      id: "ie1",
      title: "Car Insuranse",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "ie2",
      title: "Car Insuranse",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "ie3",
      title: "Car Insuranse",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "ie4",
      title: "Car Insuranse",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
  ];

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />;
    </div>
  );
};

export default App;
