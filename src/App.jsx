import { useState } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Option from "./components/Options/Options";
import Notification from "./components/Notification/Notification";

function App() {
  const [feedbacks, setFeedbacks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  let totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad; //good + neutral + bad;
  let positiveFeedback = Math.round((feedbacks.good / totalFeedback) * 100);

  const updateFeedback = (feedbackType) => {
    setFeedbacks({ ...feedbacks, [feedbackType]: feedbacks[feedbackType] + 1 });
  };

  // ==========================================================
  return (
    <>
      <Description />
      <Option
        value={feedbacks}
        onUpdate={updateFeedback}
        total={totalFeedback}
      />
      {totalFeedback && (
        <Feedback
          feedbacks={feedbacks}
          total={totalFeedback}
          positiv={positiveFeedback}
        />
      )}
      {!totalFeedback && <Notification />}
    </>
  );
}

export default App;
