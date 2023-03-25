import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  // Shows loading progress of canvas
  const { progress } = useProgress();

  return (
    // Using Html from three.js since three.js does not allow divs
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className='canvas-loader'></span>
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;