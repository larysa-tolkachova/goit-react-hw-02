function Options({ value, onUpdate }) {
  return (
    <div>
      <button onClick={onUpdate.handleGood}>Good: {value.good}</button>
      <button onClick={onUpdate.handleNeutral}>Neutral {value.neutral}</button>
      <button onClick={onUpdate.handleBad}>Bad {value.bad}</button>
    </div>
  );
}

export default Options;
