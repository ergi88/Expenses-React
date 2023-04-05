import "./Card.css";

function Card(props) {
  // use both classNames .. card and the className of the specific component
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
