import { useEffect, useState } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Option from "./components/Options/Options";
import Notification from "./components/Notification/Notification";

function App() {
  const [feedbacks, setFeedbacks] = useState(() => {
    const feedbackLS = localStorage.getItem("key-feedback");

    if (feedbackLS !== null) {
      return JSON.parse(feedbackLS);
    }
    return { good: 0, neutral: 0, bad: 0 };
  });

  let totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;
  let positiveFeedback = Math.round((feedbacks.good / totalFeedback) * 100);

  const updateFeedback = (feedbackType) => {
    setFeedbacks({ ...feedbacks, [feedbackType]: feedbacks[feedbackType] + 1 });
  };

  useEffect(() => {
    localStorage.setItem("key-feedback", JSON.stringify(feedbacks));
  }, [feedbacks]);

  const resetFeedbacks = () => {
    setFeedbacks({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
  // ==========================================================
  return (
    <>
      <Description />
      <Option
        onUpdate={updateFeedback}
        total={totalFeedback}
        onReset={resetFeedbacks}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedbacks={feedbacks}
          total={totalFeedback}
          positiv={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
