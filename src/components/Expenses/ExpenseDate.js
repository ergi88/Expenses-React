import "./ExpenseDate.css";

function ExpenseDate(props) {
  //props to get data from ExpenseItem.js

  // get ExItDate as props from ExpenseItem and formats it
  const month = props.ExItDate.toLocaleString("en-US", { month: "long" });
  const year = props.ExItDate.getFullYear();
  const day = props.ExItDate.toLocaleString("en-US", { day: "2-digit" });

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
