import React from "react";

function Canvas({ title }) {
  return (
    <div className="task">
      <h3>{title}</h3>
      <div className="dropzone"></div>
    </div>
  );
}

export default Canvas;
