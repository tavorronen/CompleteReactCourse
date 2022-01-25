import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const App = () => {
  const expenses = [
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

  const addExpenseHandler = (expense) => {
    console.log("In App.JS");
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />;
    </div>
  );
};

export default App;
