function Options({ value: { good, neutral, bad }, onUpdate, total }) {
  return (
    <div>
      <button onClick={() => onUpdate("good")}>Good: {good}</button>
      <button onClick={() => onUpdate("neutral")}>Neutral: {neutral}</button>
      <button onClick={() => onUpdate("bad")}>Bad: {bad}</button>
      {total > 0 && <button onClick={() => {}}>Reset</button>}
    </div>
  );
}

export default Options;
