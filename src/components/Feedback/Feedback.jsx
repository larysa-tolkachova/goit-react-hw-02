import css from "./Feedback.module.css";

function Feedback({ feedbacks, total, positiv }) {
  return (
    <div className={css.div}>
      <p className={css.rezult}>
        <b>Good</b>: {feedbacks.good}
      </p>
      <p className={css.rezult}>
        <b>Neutral</b>: {feedbacks.neutral}
      </p>
      <p className={css.rezult}>
        <b>Bad</b>: {feedbacks.bad}
      </p>
      <p className={css.rezult}>
        <b>Total</b>: {total}
      </p>
      <p className={css.rezult}>
        <b>Positiv</b>: {total ? positiv : 0} %
      </p>
    </div>
  );
}

export default Feedback;
