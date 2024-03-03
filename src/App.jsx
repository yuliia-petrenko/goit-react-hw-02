import { useEffect, useState } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

function App() {
  const [values, setValues] = useState(() => {
    const savedValues = window.localStorage.getItem("saved-values");
    if (savedValues !== null) {
      return JSON.parse(savedValues);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0
    };
  });

  const totalFeedback = values.good + values.neutral + values.bad;
  const positiveFeedback = Math.round(
    ((values.good + values.neutral) / totalFeedback) * 100
  );
  
  useEffect(() => {
    window.localStorage.setItem("saved-values", JSON.stringify(values));
  }, [values]);

  const updateFeedback = (feedbackType) => {
    if (feedbackType === "reset") {
      setValues({
        good: 0,
        neutral: 0,
        bad: 0
      });
    } else {
        setValues({ ...values, 
  [feedbackType]: values[feedbackType] + 1
});
    }
  };

  const feedbackValuesReset = () => {
    setValues({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };


  return (
    <>
      <Description />
      <Options
        onUpdate={updateFeedback}
        onReset={feedbackValuesReset}
        total={totalFeedback}
      />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          good={values.good}
          neutral={values.neutral}
          bad={values.bad}
          total={totalFeedback}
          positive={positiveFeedback}
        />
      )}
    </>
  );
}

export default App;
