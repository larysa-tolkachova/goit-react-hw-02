function Feedback(feedbacks) {
  console.log(feedbacks);
  console.log(feedbacks.feedbacks.good);

  console.log(feedbacks.feedbacks.neutral);
  console.log(feedbacks.feedbacks.bad);

  return (
    <>
      <p>Good: {feedbacks.feedbacks.good}</p>
      <p>Neutral: {feedbacks.feedbacks.neutral}</p>
      <p>Bad: {feedbacks.feedbacks.bad}</p>
      <p>
        Total:
        {feedbacks.feedbacks.good +
          feedbacks.feedbacks.neutral +
          feedbacks.feedbacks.bad}
      </p>
      <p>Positiv:</p>
    </>
  );
}

export default Feedback;
