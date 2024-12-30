'use client';

import useCanvasCursor from "./useCanvasCursor";

const CanvasCursor = () => {
  useCanvasCursor();
  return (
    <canvas
      id="canvas"
    />
  );
};

export default CanvasCursor;
