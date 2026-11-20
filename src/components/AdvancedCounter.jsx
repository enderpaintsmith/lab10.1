import { useState, useEffect } from 'react';

function AdvancedCounter() {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([0]);
  const [step, setStep] = useState(1);
  const [saved, setSaved] = useState(true);

  // Add or subtract the step, and add the new count to history
const increment = () => {
  const newCount = count + step;
  setCount(newCount);
  setHistory((previousHistory) => [...previousHistory, newCount]);
};

const decrement = () => {
  const newCount = count - step;
  setCount(newCount);
  setHistory((previousHistory) => [...previousHistory, newCount]);
};

  // Set count back to 0 and clear history
  const reset = () => {
    setCount(0);
    setHistory([0]);
  };

  // Auto-save: save count to localStorage when it changes.
  // Cleanup cancels the save if count changes again first.
  useEffect(() => {
    setSaved(false);
    const timer = setTimeout(() => {
      localStorage.setItem('count', count);
      setSaved(true);
    }, 500);
    return () => clearTimeout(timer);
  }, [count]);

  // Arrow keys: ArrowUp adds, ArrowDown subtracts.
  // Cleanup removes the listener so they don't pile up.
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowUp') increment();
      if (e.key === 'ArrowDown') decrement();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [count, step]);

  return (
    <div>
      <h2>Counter</h2>
      <p>Current Count: {count}</p>

      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>

      <div>
        Step Value:{' '}
        <input
          type="number"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
      </div>

      <p>{saved ? 'Changes saved.' : 'Saving...'}</p>

      <h3>Count History:</h3>
      <p>{history.join(', ')}</p>

      <p>Use ArrowUp to increment and ArrowDown to decrement.</p>
    </div>
  );
}

export default AdvancedCounter;
