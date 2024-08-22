import React, { useEffect, useState } from "react";

import ProgressBar from "./components/ProgressBar";
import Counter from "./components/Counter";

export default function CounterApp() {
  const [count, setCount] = useState(50);
  const [undo, setUndo] = useState([]);
  const [redo, setRedo] = useState([]);

  const handleReset = () => {
    setCount(50);
    setUndo([]);
    setRedo([]);
  };

  const handleIncrement = () => {
    setCount(count + 1);
    setUndo((prevState) => {
        return [...prevState, 'increment'];
    });
  };
  const handleDecrement = () => {
    setCount(count - 1);
    setUndo((prevState) => {
        return [...prevState, 'decrement'];
    });
  };
  const handleRedo = () => {
    let redoState = [...redo];

    let lastElement = redoState.pop();

    if (lastElement === 'increment') {
        setUndo((prevState) => {
            return [...prevState, 'increment'];
        })
        setCount(count + 1);
    }
    if(lastElement === 'decrement') {
        setUndo((prevState) => {
            return [...prevState, 'decrement'];
        })
        setCount(count  - 1);
    }

    setRedo(redoState);
  };
  const handleUndo = () => {
    let undoState = [...undo];

    let lastElement = undoState.pop();

    if (lastElement === 'increment') {
        setRedo((prevState) => {
            return [...prevState, 'increment'];
        })
        setCount(count-1);
    }
    if(lastElement === 'decrement') {
        setRedo((prevState) => {
            return [...prevState, 'decrement'];
        })
        setCount(count +1 );
    }

    setUndo(undoState);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "24px",
        height: "100vh",
      }}
    >
      <div
        style={{
          border: "1px solid #bdf0e0",
          width: "600px",
          height: "500px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "36px",
          borderRadius: "16px",
          padding: "48px",
          backgroundColor: "white",
        }}
      >
        <h1>COUNTER APP</h1>
        <ProgressBar count={count} />
        <Counter
          count={count}
          handleDecrement={handleDecrement}
          handleIncrement={handleIncrement}
          handleRedo={handleRedo}
          handleUndo={handleUndo}
          handleReset={handleReset}
          undo={undo}
          redo={redo}
        />
      </div>
    </div>
  );
}
