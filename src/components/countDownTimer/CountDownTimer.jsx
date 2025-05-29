import { useState, useEffect } from "react";
import { styles } from "./style.js";

export default function CountdownTimer() {
  const [time, setTime] = useState(10);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    // neccesary conditional to avouid inifinite loop because isRunning and time variable is dependency of this Effect state
    if (!isRunning || time === 0) return;

    const timer = setInterval(() => setTime((prev) => prev - 1), 1000);

    return () => clearInterval(timer); // Clean up on unmount or change
  }, [isRunning, time]);

  const start = () => {
    if (time > 0) setIsRunning(true);
  };

  const reset = () => {
    setIsRunning(false);
    setTime(10);
  };

  return (
    <div style={styles.container}>
      <h2>Countdown Timer</h2>
      <div style={styles.time}>{time === 0 ? "Done!" : time}</div>
      <div style={styles.buttons}>
        <button
          onClick={start}
          style={styles.button}
          disabled={isRunning || time === 0}
        >
          Start
        </button>
        <button onClick={reset} style={styles.button}>
          Reset
        </button>
      </div>
    </div>
  );
}
