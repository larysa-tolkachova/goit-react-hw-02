import css from "./Options.module.css";

function Options({ value: { good, neutral, bad }, onUpdate, total, onReset }) {
  return (
    <div className={css.btn}>
      <button onClick={() => onUpdate("good")}>Good: {good}</button>
      <button onClick={() => onUpdate("neutral")}>Neutral: {neutral}</button>
      <button onClick={() => onUpdate("bad")}>Bad: {bad}</button>
      {total > 0 && <button onClick={onReset}>Reset</button>}
    </div>
  );
}

export default Options;
