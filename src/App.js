import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import "./index.css";

function Box({ time, ...props }) {
  return (
    <mesh {...props}>
      <boxGeometry />
      <meshStandardMaterial roughness={0.75} />
    </mesh>
  );
}

function Content() {
  const ref = useRef();
  useFrame(() => (ref.current.rotation.x = ref.current.rotation.y += 0.015));
  return (
    <group ref={ref}>
      <Box position={[0, 0, 0]} />
    </group>
  );
}

function App() {
  return (
    <Canvas camera={{ position: [0, 10, 0] }}>
      <pointLight color="black" />
      <pointLight position={[10, 10, -10]} color="orange" />
      <pointLight position={[-10, -10, 10]} color="white" />
      <Content />
    </Canvas>
  );
}

export default App;
