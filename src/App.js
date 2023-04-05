import React, { useState, useEffect } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense/NewExpense";
// import CategoryList from "./DUMMY_COMPONENTS/CategoryList";

const DUMMY_DATA = [
  {
    id: "e1",
    title: "Car insurance",
    amount: 299,
    date: new Date(2021, 2, 27),
  },
  { id: "e2", title: "snacks", amount: 40, date: new Date(2020, 3, 27) },
  { id: "e4", title: "pc", amount: 1, date: new Date(2023, 6, 27) },
  { id: "e3", title: "food", amount: 87, date: new Date(2019, 4, 27) },
  {
    id: "e4",
    title: "subscriptions",
    amount: 55,
    date: new Date(2019, 7, 27),
  },
];

function App() {
  //initialize
  const [expenses, setExpenses] = useState(DUMMY_DATA);

  //adding new expense from NewExpense to our DUMMY_DATA object
  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => {
      //adding the new expense before the existing data
      return [expense, ...prevState];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />

      {/* <CategoryList /> */}
    </div>
  );
}

export default App;
