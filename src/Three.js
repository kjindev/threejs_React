// cube
/*import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import "./index.css";

function Box({ time, ...props }) {
  return (
    <mesh {...props}>
      <boxGeometry args={[4, 5, 1]} />
      <meshStandardMaterial roughness={0.75} />
    </mesh>
  );
}

function Content() {
  const ref = useRef();
  useFrame(() => (ref.current.rotation.z += 0.015));
  // useFrame(() => (ref.current.rotation.x = 0.015));
  return (
    <group ref={ref}>
      <Box position={[0, 0, 0]} />
    </group>
  );
}

function App() {
  return (
    <Canvas camera={{ position: [10, 10, 10] }}>
      <pointLight color="black" />
      <pointLight position={[10, 10, -10]} color="orange" />
      <pointLight position={[-10, -10, 10]} color="white" />
      <Content />
    </Canvas>
  );
}

export default App;
*/
// cloud

import React, { Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Cloud, Sky } from "@react-three/drei";

function Moving() {
  const camera = useThree((state) => state.camera);
  return useFrame((state) => {
    camera.position.x = Math.sin(state.clock.elapsedTime) * 2;
  });
}

export default function App() {
  return (
    <Canvas camera={{ position: [0, 0, -2] }}>
      <ambientLight intensity={0.8} />
      <pointLight intensity={2} position={[0, 0, 1000]} />
      <Suspense fallback={null}>
        <Cloud position={[-4, -2, -25]} speed={0.2} opacity={1} />
        <Cloud position={[4, 2, -15]} speed={0.2} opacity={0.5} />
        <Cloud position={[-4, 2, -10]} speed={0.2} opacity={1} />
        <Cloud position={[4, -2, -5]} speed={0.2} opacity={0.5} />
        <Cloud position={[4, 2, 0]} speed={0.2} opacity={0.75} />
        <Cloud
          position={[0, 0, 0]}
          opacity={0.5}
          speed={0.3} // Rotation speed
          width={10} // Width of the full cloud
          depth={5} // Z-dir depth
          segments={15} // Number of particles
        />
        <Cloud
          position={[0, 0, 0]}
          opacity={0.5}
          speed={0.3} // Rotation speed
          width={10} // Width of the full cloud
          depth={7} // Z-dir depth
          segments={15} // Number of particles
        />
        {
          <Cloud
            position={[4, 2, 0]}
            opacity={0.5}
            speed={0.3} // Rotation speed
            width={10} // Width of the full cloud
            depth={10} // Z-dir depth
            segments={25} // Number of particles
          />
        }
      </Suspense>
      {
        <Sky
          distance={450000}
          sunPosition={[0, 1, 0]}
          inclination={0}
          azimuth={0}
        />
      }
      <Moving />
    </Canvas>
  );
}
