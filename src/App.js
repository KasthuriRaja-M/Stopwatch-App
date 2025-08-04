import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime(prevTime => prevTime + 10);
      }, 10);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const startStopwatch = () => {
    setIsRunning(true);
  };

  const stopStopwatch = () => {
    setIsRunning(false);
  };

  const resetStopwatch = () => {
    setIsRunning(false);
    setTime(0);
    setLaps([]);
  };

  const addLap = () => {
    if (isRunning) {
      setLaps(prevLaps => [...prevLaps, time]);
    }
  };

  const formatTime = (timeInMs) => {
    const minutes = Math.floor(timeInMs / 60000);
    const seconds = Math.floor((timeInMs % 60000) / 1000);
    const milliseconds = Math.floor((timeInMs % 1000) / 10);
    
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="App">
      <div className="stopwatch-container">
        <h1 className="title">
          <span className="title-word title-word-1">TIME</span>
          <span className="title-word title-word-2">TRACKER</span>
          <span className="title-word title-word-3">PRO</span>
        </h1>
        
        <div className={`time-display ${isRunning ? 'running' : ''}`}>
          <span className="time">{formatTime(time)}</span>
        </div>
        
        <div className="controls">
          {!isRunning ? (
            <button className="btn btn-start" onClick={startStopwatch}>
              Start
            </button>
          ) : (
            <button className="btn btn-stop" onClick={stopStopwatch}>
              Stop
            </button>
          )}
          
          <button className="btn btn-reset" onClick={resetStopwatch}>
            Reset
          </button>
          
          <button className="btn btn-lap" onClick={addLap} disabled={!isRunning}>
            Lap
          </button>
        </div>
        
        {laps.length > 0 && (
          <div className="laps-container">
            <h3>Laps</h3>
            <div className="laps-list">
              {laps.map((lap, index) => (
                <div key={index} className="lap-item">
                  <span className="lap-number">#{index + 1}</span>
                  <span className="lap-time">{formatTime(lap)}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App; 