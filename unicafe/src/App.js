import { useState } from "react";

const Feedback = () => {
  return (
    <div>
      <h1>give feedback</h1>
      <button>good</button>
      <button>neutral</button>
      <button>bad</button>
    </div>
  );
};

const Statistics = () => {
  return (
    <div>
      <h1>statistics</h1>
      <div>
        <p>good 6</p>
        <p>neutral 2</p>
        <p>bad 1</p>
        <p>all 9</p>
        <p>average {5 / 9}</p>
        <p>positive {(6 / 9) * 100} %</p>
      </div>
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Feedback />
      <Statistics />
    </div>
  );
};

export default App;
