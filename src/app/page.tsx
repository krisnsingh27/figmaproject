'use client';
import { useState, useRef } from 'react';

export default function Countdown() {
  const [time, setTime] = useState(30); 
  const intervalRef = useRef(null);

  const start = () => {
    if (intervalRef.current) return; 

    intervalRef.current = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const stop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const reset = () => {
    stop();
    setTime(30);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>⏳ Countdown Timer</h1>

      <h2>{time} sec</h2>

      <button onClick={start}>Start</button>
      <button onClick={stop} style={{ margin: '10px' }}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}