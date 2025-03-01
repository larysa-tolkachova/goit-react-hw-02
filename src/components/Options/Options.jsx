import css from "./Options.module.css";

function Options({ onUpdate, total, onReset }) {
  return (
    <div className={css.btn}>
      <button onClick={() => onUpdate("good")}>Good</button>
      <button onClick={() => onUpdate("neutral")}>Neutral</button>
      <button onClick={() => onUpdate("bad")}>Bad</button>
      {total > 0 && <button onClick={onReset}>Reset</button>}
    </div>
  );
}

export default Options;
