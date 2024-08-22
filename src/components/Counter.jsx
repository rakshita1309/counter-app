import React from "react";
import ProgressBar from "./ProgressBar";

export default function Counter(props) {
  const { 
    count,
    handleDecrement,
    handleIncrement,
    handleRedo,
    handleUndo,
    handleReset,
    undo = [],
    redo = [],
     } = props;
  const maxCount = 150;
  const minCount = 0;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "16px",
          justifyContent: "center",
        }}
      >
        <button
          style={{
            fontSize: "14px",
            padding: "8px",
          }}
          onClick={handleIncrement}
          disabled={count >= maxCount}
        >
          Increment (+)
        </button>
        <button
          style={{
            fontSize: "14px",
            padding: "8px",
          }}
          onClick={handleDecrement}
          disabled={count <= minCount}
        >
          Decrement (-)
        </button>
      </div>
      <div
        style={{
          display: "flex",
          gap: "14px",
          justifyContent: "center",
        }}
      >
        <button
          style={{
            fontSize: "14px",
            padding: "8px",
          }}
          disabled={redo.length < 1}
          onClick={handleRedo}
        >
          Redo
        </button>
        <button
          style={{
            fontSize: "14px",
            padding: "8px",
          }}
          disabled={undo.length < 1}
          onClick={handleUndo}
        >
          Undo
        </button>
      </div>
      <div
        style={{
          display: "flex",
          gap: "14px",
          justifyContent: "center",
        }}
      >
        <button
          style={{
            fontSize: "14px",
            padding: "8px",
          }}
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
