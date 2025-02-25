import { useState } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Option from "./components/Options/Options";

function App() {
  const [feedbacks, setFeedbacks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  console.log(feedbacks);
  console.log(feedbacks.good);
  console.log(feedbacks.neutral);
  console.log(feedbacks.bad);

  const handleGood = () => {
    setFeedbacks({ ...feedbacks, good: feedbacks.good + 1 });
  };
  const handleNeutral = () => {
    setFeedbacks({ ...feedbacks, neutral: feedbacks.neutral + 1 });
  };
  const handleBad = () => {
    setFeedbacks({ ...feedbacks, bad: feedbacks.bad + 1 });
  };

  // ==========================================================
  return (
    <>
      <Description />
      <Option
        value={feedbacks}
        onUpdate={{ handleGood, handleNeutral, handleBad }}
      />
      <Feedback feedbacks={feedbacks} />
    </>
  );
}

export default App;
