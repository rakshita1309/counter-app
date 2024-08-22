import React from "react";

export default function ProgressBar(props) {
  const { count } = props;
  const maxCount = 150;
  const getProgressPercentage = () => (count / maxCount) * 100;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "8px",
        fontSize: "20px",
      }}
    >
      <div>Progress bar</div>
      <div
        style={{
          width: "400px",
          backgroundColor: "#e0e0e0",
          overflow: "hidden",
          borderRadius: "15px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            height: "20px",
            width: `${getProgressPercentage()}%`,
            backgroundColor: "#76c7c0",
            border: "1px solid grey",
            borderRadius: "15px",
            transition: "width 0.3s ease-in-out",
          }}
        ></div>
      </div>

      <div>
        {count}/{maxCount}
      </div>
    </div>
  );
}
